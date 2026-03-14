import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, RotateCcw, Calculator } from "lucide-react";

interface QuickActionsProps {
  onMarkAllMet: () => void;
  onMarkAllNotMet: () => void;
  onReset: () => void;
  onCalculate: () => void;
  isCalculating: boolean;
  hasAssessments: boolean;
}

export function QuickActions({ 
  onMarkAllMet, 
  onMarkAllNotMet, 
  onReset, 
  onCalculate,
  isCalculating,
  hasAssessments
}: QuickActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onMarkAllMet}
        className="gap-1.5 text-xs sm:text-sm"
        data-testid="button-mark-all-met"
      >
        <CheckCircle2 className="w-4 h-4 text-chart-1" />
        <span className="hidden sm:inline">Mark All</span> Implemented
      </Button>
      <Button 
        variant="outline" 
        size="sm" 
        onClick={onMarkAllNotMet}
        className="gap-1.5 text-xs sm:text-sm"
        data-testid="button-mark-all-not-met"
      >
        <XCircle className="w-4 h-4 text-destructive" />
        <span className="hidden sm:inline">Mark All Not</span><span className="sm:hidden">Not</span> Implemented
      </Button>
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onReset}
        className="gap-1.5 text-xs sm:text-sm"
        disabled={!hasAssessments}
        data-testid="button-reset"
      >
        <RotateCcw className="w-4 h-4" />
        Reset
      </Button>
      <div className="flex-1" />
      <Button 
        onClick={onCalculate}
        disabled={isCalculating}
        className="gap-2 text-xs sm:text-sm"
        data-testid="button-calculate"
      >
        <Calculator className="w-4 h-4" />
        <span className="hidden sm:inline">Calculate Score</span>
        <span className="sm:hidden">Calculate</span>
      </Button>
    </div>
  );
}
