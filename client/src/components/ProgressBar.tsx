import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface ProgressBarProps {
  assessed: number;
  total: number;
  met: number;
  notMet: number;
  partial: number;
}

export function ProgressBar({ assessed, total, met, notMet, partial }: ProgressBarProps) {
  const progress = total > 0 ? (assessed / total) * 100 : 0;

  return (
    <div className="sticky top-12 sm:top-14 z-40 bg-background/95 backdrop-blur-sm border-b py-2 sm:py-3">
      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
          <div className="flex-1 min-w-[140px] sm:min-w-[200px]">
            <div className="flex items-center justify-between text-xs sm:text-sm mb-1">
              <span className="text-muted-foreground">Progress</span>
              <span className="font-medium">{assessed}/{total}</span>
            </div>
            <Progress value={progress} className="h-1.5 sm:h-2" />
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <Badge variant="secondary" className="bg-chart-1/10 text-chart-1 gap-1 sm:gap-1.5 text-[10px] sm:text-xs px-1.5 sm:px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-1" />
              {met}
              <span className="hidden sm:inline">Met</span>
            </Badge>
            <Badge variant="secondary" className="bg-destructive/10 text-destructive gap-1 sm:gap-1.5 text-[10px] sm:text-xs px-1.5 sm:px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-destructive" />
              {notMet}
              <span className="hidden sm:inline">Not Met</span>
            </Badge>
            <Badge variant="secondary" className="bg-chart-2/10 text-chart-2 gap-1 sm:gap-1.5 text-[10px] sm:text-xs px-1.5 sm:px-2.5 py-0.5">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-chart-2" />
              {partial}
              <span className="hidden sm:inline">Partial</span>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
}
