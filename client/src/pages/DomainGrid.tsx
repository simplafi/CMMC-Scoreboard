import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAssessment } from "@/context/AssessmentContext";
import { useAuth } from "@/hooks/use-auth";
import { controls } from "@shared/controls";
import { familyIcons, familyOrder, familyMetadata } from "@/lib/familyUtils";
import { getScoreColor } from "@/lib/scoreUtils";
import { Header } from "@/components/Header";
import { ProgressBar } from "@/components/ProgressBar";
import { QuickActions } from "@/components/QuickActions";
import { LandingPage } from "@/components/LandingPage";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { computeStatusFromObjectives } from "@/context/AssessmentContext";
import type { ControlFamily } from "@shared/schema";

function getFamilyStats(familyId: ControlFamily, completedObjectives: Set<string>) {
  const familyControls = controls.filter((c) => c.family === familyId);
  const met = familyControls.filter(
    (c) => computeStatusFromObjectives(c, completedObjectives) === "MET"
  ).length;
  const assessed = familyControls.filter((c) =>
    c.objectives.some((obj) => completedObjectives.has(obj.id))
  ).length;
  const totalPoints = familyControls.reduce((sum, c) => sum + c.weight, 0);
  const lostPoints = familyControls.reduce((sum, c) => {
    const status = computeStatusFromObjectives(c, completedObjectives);
    return status === "MET" ? sum : sum + c.weight;
  }, 0);
  return { met, assessed, total: familyControls.length, totalPoints, lostPoints };
}

function getDomainStatusChip(met: number, total: number, assessed: number) {
  if (met === total && total > 0)
    return { label: "Complete", className: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/30" };
  if (assessed > 0)
    return { label: "In Progress", className: "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/30" };
  return { label: "Not Started", className: "bg-muted text-muted-foreground border-border" };
}

export default function DomainGrid() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();
  const {
    hasStarted, setHasStarted,
    completedObjectives, liveScore, stats, totalObjectivesCount,
    isSaving, lastSaved,
    handleMarkAllMet, handleMarkAllNotMet, handleReset,
    calculate, isCalculating, result,
  } = useAssessment();

  if (result) {
    navigate("/results");
    return null;
  }

  if (!hasStarted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <Header isSaving={isSaving} lastSaved={lastSaved} />
        <main className="flex-1">
          <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8">
            <LandingPage onStart={() => setHasStarted(true)} isAuthenticated={isAuthenticated} />
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header isSaving={isSaving} lastSaved={lastSaved} />

      <ProgressBar
        assessed={stats.assessed}
        total={controls.length}
        met={stats.met}
        notMet={stats.notMet}
        partial={stats.partial}
      />

      <main className="flex-1 px-3 sm:px-6 py-6">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Score banner */}
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">Security Domains</h1>
              <p className="text-sm text-muted-foreground mt-0.5">
                Select a domain to assess its controls
              </p>
            </div>
            <div className="text-right">
              <div className={cn("text-3xl font-bold tabular-nums", getScoreColor(liveScore))}>
                {liveScore}
              </div>
              <div className="text-xs text-muted-foreground">
                {completedObjectives.size} / {totalObjectivesCount} objectives
              </div>
            </div>
          </div>

          <QuickActions
            onMarkAllMet={handleMarkAllMet}
            onMarkAllNotMet={handleMarkAllNotMet}
            onReset={handleReset}
            onCalculate={() => { calculate(); navigate("/results"); }}
            isCalculating={isCalculating}
            hasAssessments={completedObjectives.size > 0}
          />

          {/* Domain cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {familyOrder.map((familyId, i) => {
              const meta = familyMetadata[familyId];
              const Icon = familyIcons[familyId];
              const fStats = getFamilyStats(familyId, completedObjectives);
              const chip = getDomainStatusChip(fStats.met, fStats.total, fStats.assessed);
              const progress = fStats.total > 0 ? (fStats.met / fStats.total) * 100 : 0;

              return (
                <motion.button
                  key={familyId}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  onClick={() => navigate(`/domain/${familyId}`)}
                  className="group text-left bg-card border rounded-xl p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <Badge variant="outline" className={cn("text-[10px] border", chip.className)}>
                      {chip.label}
                    </Badge>
                  </div>

                  <div className="mb-2">
                    <p className="text-[10px] text-muted-foreground font-mono mb-0.5">{meta.prefix}</p>
                    <h3 className="text-sm font-semibold leading-snug">{meta.name}</h3>
                  </div>

                  <div className="mt-3 space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] text-muted-foreground">
                      <span>{fStats.met}/{fStats.total} controls met</span>
                      {fStats.lostPoints > 0 && (
                        <span className="text-destructive font-medium">-{fStats.lostPoints} pts</span>
                      )}
                    </div>
                    <Progress value={progress} className="h-1.5" />
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </main>

      <footer className="border-t mt-auto py-4">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-muted-foreground">
          <p>This tool provides an estimate based on NIST SP 800-171 DoD Assessment Methodology v1.2.1.</p>
          <p className="mt-3 pt-3 border-t border-border/50">
            Provided by <span className="font-medium text-foreground">Simplafi</span>
            <span className="mx-1.5">|</span>MSP Super Easy LLC
          </p>
        </div>
      </footer>
    </div>
  );
}
