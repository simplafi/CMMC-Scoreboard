import type { Express } from "express";
import { createServer, type Server } from "http";
import { assessmentRequestSchema, type AssessmentResult, type FailedControl, assessments } from "@shared/schema";
import { controls } from "@shared/controls";
import { setupAuth, registerAuthRoutes, isAuthenticated } from "./auth";
import type { User } from "@shared/models/auth";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";
import { z } from "zod";

const saveAssessmentSchema = z.object({
  name: z.string().optional(),
  hasSSP: z.boolean(),
  controlStatuses: z.record(z.string(), z.object({
    status: z.string(),
    partialLevel: z.string().optional()
  })),
  objectiveStatuses: z.record(z.string(), z.boolean()),
  lastCalculatedScore: z.number().optional()
});

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Setup auth before other routes
  setupAuth(app);
  registerAuthRoutes(app);
  
  // Get user's assessments
  app.get("/api/assessments", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as User).id;
      const userAssessments = await db
        .select()
        .from(assessments)
        .where(eq(assessments.userId, userId))
        .orderBy(desc(assessments.updatedAt));
      
      res.json(userAssessments);
    } catch (error) {
      console.error("Error fetching assessments:", error);
      res.status(500).json({ error: "Failed to fetch assessments" });
    }
  });
  
  // Get specific assessment
  app.get("/api/assessments/:id", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as User).id;
      const assessmentId = parseInt(req.params.id);
      
      const [assessment] = await db
        .select()
        .from(assessments)
        .where(and(eq(assessments.id, assessmentId), eq(assessments.userId, userId)));
      
      if (!assessment) {
        return res.status(404).json({ error: "Assessment not found" });
      }
      
      res.json(assessment);
    } catch (error) {
      console.error("Error fetching assessment:", error);
      res.status(500).json({ error: "Failed to fetch assessment" });
    }
  });
  
  // Create new assessment
  app.post("/api/assessments", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as User).id;
      const parseResult = saveAssessmentSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid data", details: parseResult.error.errors });
      }
      
      const { name, hasSSP, controlStatuses, objectiveStatuses, lastCalculatedScore } = parseResult.data;
      
      const [newAssessment] = await db
        .insert(assessments)
        .values({
          userId,
          name: name || "My Assessment",
          hasSSP,
          controlStatuses,
          objectiveStatuses,
          lastCalculatedScore
        })
        .returning();
      
      res.json(newAssessment);
    } catch (error) {
      console.error("Error creating assessment:", error);
      res.status(500).json({ error: "Failed to create assessment" });
    }
  });
  
  // Update existing assessment
  app.put("/api/assessments/:id", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as User).id;
      const assessmentId = parseInt(req.params.id);
      const parseResult = saveAssessmentSchema.safeParse(req.body);
      
      if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid data", details: parseResult.error.errors });
      }
      
      const { name, hasSSP, controlStatuses, objectiveStatuses, lastCalculatedScore } = parseResult.data;
      
      const [updated] = await db
        .update(assessments)
        .set({
          name: name || "My Assessment",
          hasSSP,
          controlStatuses,
          objectiveStatuses,
          lastCalculatedScore,
          updatedAt: new Date()
        })
        .where(and(eq(assessments.id, assessmentId), eq(assessments.userId, userId)))
        .returning();
      
      if (!updated) {
        return res.status(404).json({ error: "Assessment not found" });
      }
      
      res.json(updated);
    } catch (error) {
      console.error("Error updating assessment:", error);
      res.status(500).json({ error: "Failed to update assessment" });
    }
  });
  
  // Delete assessment
  app.delete("/api/assessments/:id", isAuthenticated, async (req: any, res) => {
    try {
      const userId = (req.user as User).id;
      const assessmentId = parseInt(req.params.id);
      
      const [deleted] = await db
        .delete(assessments)
        .where(and(eq(assessments.id, assessmentId), eq(assessments.userId, userId)))
        .returning();
      
      if (!deleted) {
        return res.status(404).json({ error: "Assessment not found" });
      }
      
      res.json({ success: true });
    } catch (error) {
      console.error("Error deleting assessment:", error);
      res.status(500).json({ error: "Failed to delete assessment" });
    }
  });

  app.post("/api/calculate", (req, res) => {
    const parseResult = assessmentRequestSchema.safeParse(req.body);
    
    if (!parseResult.success) {
      return res.status(400).json({ 
        error: "Invalid request", 
        details: parseResult.error.errors 
      });
    }

    const { hasSSP, controls: controlAssessments } = parseResult.data;

    if (!hasSSP) {
      return res.status(400).json({ 
        error: "Assessment cannot be completed without a System Security Plan (SSP)" 
      });
    }

    const assessmentMap = new Map(
      controlAssessments.map(c => [c.controlId, { status: c.status, partialLevel: c.partialLevel }])
    );

    let score = 110;
    const failedControls: FailedControl[] = [];
    let passedCount = 0;
    let partialCount = 0;
    let fivePointDeductions = 0;
    let threePointDeductions = 0;
    let onePointDeductions = 0;

    for (const control of controls) {
      const assessment = assessmentMap.get(control.id);
      
      if (!assessment) {
        const deduction = control.weight;
        score -= deduction;
        failedControls.push({
          id: control.id,
          title: control.title,
          weight: deduction,
          family: control.familyName
        });
        if (deduction === 5) fivePointDeductions += 5;
        else if (deduction === 3) threePointDeductions += 3;
        else onePointDeductions += 1;
        continue;
      }

      if (assessment.status === "MET") {
        passedCount++;
        continue;
      }

      if (assessment.status === "PARTIAL") {
        partialCount++;
        // Special handling for controls with partial credit options (3.5.3 and 3.13.11)
        if (control.hasPartialCredit) {
          if (assessment.partialLevel === "full") {
            passedCount++;
            continue;
          }
          
          let deduction: number;
          if (assessment.partialLevel === "partial") {
            deduction = 3;
            threePointDeductions += 3;
          } else {
            deduction = 5;
            fivePointDeductions += 5;
          }
          
          score -= deduction;
          failedControls.push({
            id: control.id,
            title: control.title,
            weight: deduction,
            family: control.familyName
          });
          continue;
        }
        // For regular controls marked as partial, treat as failed with full deduction
        const deduction = control.weight;
        score -= deduction;
        failedControls.push({
          id: control.id,
          title: control.title,
          weight: deduction,
          family: control.familyName
        });
        if (deduction === 5) fivePointDeductions += 5;
        else if (deduction === 3) threePointDeductions += 3;
        else onePointDeductions += 1;
        continue;
      }

      const deduction = control.weight;
      score -= deduction;
      failedControls.push({
        id: control.id,
        title: control.title,
        weight: deduction,
        family: control.familyName
      });
      
      if (deduction === 5) fivePointDeductions += 5;
      else if (deduction === 3) threePointDeductions += 3;
      else onePointDeductions += 1;
    }

    const result: AssessmentResult = {
      score,
      maxScore: 110,
      minScore: -203,
      totalDeducted: 110 - score,
      passedControls: passedCount,
      failedControls,
      partialControls: partialCount,
      scoreBreakdown: {
        fivePointDeductions,
        threePointDeductions,
        onePointDeductions
      }
    };

    return res.json(result);
  });

  return httpServer;
}
