import { useParams, useLocation } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { useAssessment, computeStatusFromObjectives } from "@/context/AssessmentContext";
import { useAuth } from "@/hooks/use-auth";
import { controls } from "@shared/controls";
import { getDomainCrmCounts } from "@shared/crm";
import { familyIcons, familyMetadata } from "@/lib/familyUtils";
import { getScoreColor } from "@/lib/scoreUtils";
import { controlFamilySchema, type ControlFamily } from "@shared/schema";
import { Header } from "@/components/Header";
import { ControlCard } from "@/components/ControlCard";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function DomainView() {
  const params = useParams<{ familyId: string }>();
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();
  const [showScrollTop, setShowScrollTop] = useState(false);

  const {
    assessmentMap, controlNotes, completedObjectives,
    liveScore, isSaving, lastSaved,
    handleObjectiveToggle, handlePartialLevelChange, handleNotesChange,
  } = useAssessment();

  // Validate family ID
  const familyParse = controlFamilySchema.safeParse(params.familyId);
  useEffect(() => {
    if (!familyParse.success) navigate("/assess");
  }, [familyParse.success]);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Delay to allow DOM to render, then scroll to the anchor
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-2", "ring-primary", "ring-offset-2");
          setTimeout(() => el.classList.remove("ring-2", "ring-primary", "ring-offset-2"), 2000);
        }
      }, 300);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0 });
    }
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [params.familyId]);

  if (!familyParse.success) return null;
  const familyId = familyParse.data as ControlFamily;

  const meta = familyMetadata[familyId];
  const Icon = familyIcons[familyId];
  const familyControls = controls.filter((c) => c.family === familyId);

  const met = familyControls.filter(
    (c) => computeStatusFromObjectives(c, completedObjectives) === "MET"
  ).length;
  const total = familyControls.length;
  const progress = total > 0 ? (met / total) * 100 : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        isSaving={isSaving}
        lastSaved={lastSaved}
        domainName={meta.name}
        onBack={() => navigate("/assess")}
      />

      <main className="flex-1 px-3 sm:px-6 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Domain header card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border rounded-xl p-5"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs text-muted-foreground">{meta.prefix}</span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold">{meta.name}</h1>
                <div className="flex items-center gap-4 mt-3 flex-wrap">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground min-w-[160px]">
                    <Progress value={progress} className="h-2 w-24" />
                    <span className="tabular-nums">{met}/{total} met</span>
                  </div>
                  <div className={cn("text-sm font-semibold tabular-nums", getScoreColor(liveScore))}>
                    Score: {liveScore}
                  </div>
                  <CrmRollup controls={familyControls} />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Controls list */}
          <div className="space-y-3">
            {familyControls.map((control, i) => {
              const assessment = assessmentMap.get(control.id);
              const notes = controlNotes.get(control.id);
              return (
                <motion.div
                  key={control.id}
                  id={`control-${control.id}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.02 }}
                >
                  <ControlCard
                    control={control}
                    status={assessment?.status || "NOT_MET"}
                    partialLevel={assessment?.partialLevel}
                    notes={notes}
                    completedObjectives={completedObjectives}
                    isAuthenticated={isAuthenticated}
                    onStatusChange={(status, partialLevel) =>
                      handlePartialLevelChange(control.id, status, partialLevel)
                    }
                    onObjectiveToggle={handleObjectiveToggle}
                    onNotesChange={(n) => handleNotesChange(control.id, n)}
                  />
                </motion.div>
              );
            })}
          </div>

          <div className="flex justify-start pt-2">
            <Button variant="outline" onClick={() => navigate("/assess")} className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Domains
            </Button>
          </div>
        </div>
      </main>

      {showScrollTop && (
        <div className="fixed bottom-6 right-4 z-50">
          <Button size="icon" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <ArrowUp className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}

function CrmRollup({ controls }: { controls: { id: string }[] }) {
  const counts = getDomainCrmCounts(controls);
  if (counts.inherited + counts.shared + counts.company === 0) return null;

  return (
    <div className="flex items-center gap-2 text-xs text-muted-foreground">
      {counts.shared > 0 && <span>{counts.shared} Shared</span>}
      {counts.company > 0 && <span>{counts.company > 0 && counts.shared > 0 ? "· " : ""}{counts.company} Company</span>}
      {counts.inherited > 0 && <span>{(counts.shared > 0 || counts.company > 0) ? "· " : ""}{counts.inherited} Inherited</span>}
    </div>
  );
}
