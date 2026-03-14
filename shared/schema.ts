import { z } from "zod";

// Re-export auth models (required for database migrations)
export * from "./models/auth";

// Control status options
export const controlStatusSchema = z.enum(["MET", "NOT_MET", "PARTIAL"]);
export type ControlStatus = z.infer<typeof controlStatusSchema>;

// Control family identifiers
export const controlFamilySchema = z.enum([
  "ACCESS_CONTROL",
  "AWARENESS_TRAINING",
  "AUDIT_ACCOUNTABILITY",
  "CONFIGURATION_MANAGEMENT",
  "IDENTIFICATION_AUTHENTICATION",
  "INCIDENT_RESPONSE",
  "MAINTENANCE",
  "MEDIA_PROTECTION",
  "PERSONNEL_SECURITY",
  "PHYSICAL_PROTECTION",
  "RISK_ASSESSMENT",
  "SECURITY_ASSESSMENT",
  "SYSTEM_COMMUNICATIONS",
  "SYSTEM_INTEGRITY"
]);
export type ControlFamily = z.infer<typeof controlFamilySchema>;

// Objective definition
export interface Objective {
  id: string;
  objective: string;
  controlId: string;
}

// Control definition (static data)
export interface Control {
  id: string;
  family: ControlFamily;
  familyName: string;
  title: string;
  description: string;
  weight: number;
  isBasic: boolean;
  hasPartialCredit: boolean;
  objectives: Objective[];
}

// User assessment of a control
export interface ControlAssessment {
  controlId: string;
  status: ControlStatus;
  partialLevel?: "none" | "partial" | "full"; // For 3.5.3 and 3.13.11
  notes?: string;
}

// Assessment request/response
export const assessmentRequestSchema = z.object({
  hasSSP: z.boolean(),
  controls: z.array(z.object({
    controlId: z.string(),
    status: controlStatusSchema,
    partialLevel: z.enum(["none", "partial", "full"]).optional()
  }))
});

export type AssessmentRequest = z.infer<typeof assessmentRequestSchema>;

export interface FailedControl {
  id: string;
  title: string;
  weight: number;
  family: string;
}

export interface AssessmentResult {
  score: number;
  maxScore: number;
  minScore: number;
  totalDeducted: number;
  passedControls: number;
  failedControls: FailedControl[];
  partialControls: number;
  scoreBreakdown: {
    fivePointDeductions: number;
    threePointDeductions: number;
    onePointDeductions: number;
  };
}

// Family metadata for UI
export const familyMetadata: Record<ControlFamily, { name: string; prefix: string; icon: string }> = {
  ACCESS_CONTROL: { name: "Access Control", prefix: "3.1", icon: "Lock" },
  AWARENESS_TRAINING: { name: "Awareness and Training", prefix: "3.2", icon: "GraduationCap" },
  AUDIT_ACCOUNTABILITY: { name: "Audit and Accountability", prefix: "3.3", icon: "FileSearch" },
  CONFIGURATION_MANAGEMENT: { name: "Configuration Management", prefix: "3.4", icon: "Settings" },
  IDENTIFICATION_AUTHENTICATION: { name: "Identification and Authentication", prefix: "3.5", icon: "UserCheck" },
  INCIDENT_RESPONSE: { name: "Incident Response", prefix: "3.6", icon: "AlertTriangle" },
  MAINTENANCE: { name: "Maintenance", prefix: "3.7", icon: "Wrench" },
  MEDIA_PROTECTION: { name: "Media Protection", prefix: "3.8", icon: "HardDrive" },
  PERSONNEL_SECURITY: { name: "Personnel Security", prefix: "3.9", icon: "Users" },
  PHYSICAL_PROTECTION: { name: "Physical Protection", prefix: "3.10", icon: "Building" },
  RISK_ASSESSMENT: { name: "Risk Assessment", prefix: "3.11", icon: "BarChart" },
  SECURITY_ASSESSMENT: { name: "Security Assessment", prefix: "3.12", icon: "ClipboardCheck" },
  SYSTEM_COMMUNICATIONS: { name: "System and Communications Protection", prefix: "3.13", icon: "Shield" },
  SYSTEM_INTEGRITY: { name: "System and Information Integrity", prefix: "3.14", icon: "ShieldCheck" }
};
