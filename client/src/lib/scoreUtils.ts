export function getScoreColor(score: number) {
  if (score >= 90) return "text-chart-1";
  if (score >= 60) return "text-yellow-500";
  if (score >= 0) return "text-orange-500";
  return "text-destructive";
}

export function getScoreBg() {
  return "bg-[#e5e5e5] border-[#d5d5d5] dark:bg-[#2a2a2a] dark:border-[#3a3a3a]";
}
