import { useState } from "react";
import { useLocation } from "wouter";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { BarChart3 } from "lucide-react";
import { controls } from "@shared/controls";
import { useAssessment, computeStatusFromObjectives } from "@/context/AssessmentContext";
import { familyOrder, familyMetadata, familyIcons } from "@/lib/familyUtils";
import { getScoreColor } from "@/lib/scoreUtils";
import type { ControlFamily } from "@shared/schema";

function getControlNumber(controlId: string): string {
  // "3.1.1" -> "1", "3.1.22" -> "22"
  const parts = controlId.split(".");
  return parts[parts.length - 1];
}

function ControlChip({
  controlId,
  status,
  onClick,
}: {
  controlId: string;
  status: "MET" | "NOT_MET" | "PARTIAL" | "NOT_ASSESSED";
  onClick: () => void;
}) {
  const num = getControlNumber(controlId);
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-8 h-8 rounded text-xs font-bold flex items-center justify-center transition-colors",
        status === "MET" && "bg-green-700 text-white",
        status === "PARTIAL" && "bg-yellow-500 text-white",
        status === "NOT_MET" && "bg-red-700 text-white",
        status === "NOT_ASSESSED" && "bg-muted text-muted-foreground border"
      )}
      title={`${controlId} — ${status.replace("_", " ").toLowerCase()}`}
    >
      {num}
    </button>
  );
}

function FamilyRow({
  familyId,
  completedObjectives,
  onNavigate,
}: {
  familyId: ControlFamily;
  completedObjectives: Set<string>;
  onNavigate: (path: string) => void;
}) {
  const meta = familyMetadata[familyId];
  const Icon = familyIcons[familyId];
  const familyControls = controls.filter((c) => c.family === familyId);

  const met = familyControls.filter(
    (c) => computeStatusFromObjectives(c, completedObjectives) === "MET"
  ).length;
  const total = familyControls.length;
  const progress = total > 0 ? (met / total) * 100 : 0;

  return (
    <div className="space-y-2">
      <button
        onClick={() => onNavigate(`/domain/${familyId}`)}
        className="flex items-center gap-2 w-full text-left group"
      >
        <div className="p-1.5 rounded bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-3.5 h-3.5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-semibold truncate group-hover:text-primary transition-colors">
              {meta.prefix} {meta.name}
            </span>
            <span className="text-[10px] text-muted-foreground whitespace-nowrap">
              {met}/{total}
            </span>
          </div>
          <Progress value={progress} className="h-1 mt-1" />
        </div>
      </button>

      <div className="flex flex-wrap gap-1 pl-8">
        {familyControls.map((control) => {
          const status = computeStatusFromObjectives(control, completedObjectives);
          const hasAny = control.objectives.some((obj) =>
            completedObjectives.has(obj.id)
          );
          const chipStatus = hasAny ? status : "NOT_ASSESSED";

          return (
            <ControlChip
              key={control.id}
              controlId={control.id}
              status={chipStatus as "MET" | "NOT_MET" | "PARTIAL" | "NOT_ASSESSED"}
              onClick={() => onNavigate(`/domain/${familyId}`)}
            />
          );
        })}
      </div>
    </div>
  );
}

export function ProgressTracker() {
  const [open, setOpen] = useState(false);
  const [, navigate] = useLocation();
  const { completedObjectives, liveScore, stats } = useAssessment();

  const overallProgress =
    controls.length > 0 ? (stats.met / controls.length) * 100 : 0;

  const handleNavigate = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="fixed bottom-6 right-6 z-50 gap-2 shadow-lg rounded-full px-4 h-10 bg-background/95 backdrop-blur-sm border-primary/30"
        >
          <BarChart3 className="w-4 h-4 text-primary" />
          <span className={cn("font-bold tabular-nums", getScoreColor(liveScore))}>
            {liveScore}
          </span>
          <span className="text-xs text-muted-foreground">/ 110</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[380px] sm:w-[420px] overflow-y-auto">
        <SheetHeader className="pb-4">
          <SheetTitle>Assessment Progress</SheetTitle>
        </SheetHeader>

        {/* Overall summary */}
        <div className="space-y-4 pb-6 border-b">
          <div className="flex items-center justify-between">
            <div>
              <div className={cn("text-4xl font-bold tabular-nums", getScoreColor(liveScore))}>
                {liveScore}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">SPRS Score</div>
            </div>
            <div className="text-right space-y-1">
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm bg-green-700" />
                <span>{stats.met} Met</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm bg-yellow-500" />
                <span>{stats.partial} Partial</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm bg-red-700" />
                <span>{stats.notMet} Not Met</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="w-2.5 h-2.5 rounded-sm bg-muted border" />
                <span>{controls.length - stats.assessed} Not Assessed</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
              <span>Controls Met</span>
              <span>{stats.met} of {controls.length}</span>
            </div>
            <Progress value={overallProgress} className="h-2" />
          </div>
        </div>

        {/* Per-family breakdown */}
        <div className="space-y-5 pt-5 pb-20">
          {familyOrder.map((familyId) => (
            <FamilyRow
              key={familyId}
              familyId={familyId}
              completedObjectives={completedObjectives}
              onNavigate={handleNavigate}
            />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
