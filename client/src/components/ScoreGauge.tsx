import { motion } from "framer-motion";

interface ScoreGaugeProps {
  score: number;
  maxScore?: number;
  minScore?: number;
}

export function ScoreGauge({ score, maxScore = 110, minScore = -203 }: ScoreGaugeProps) {
  const range = maxScore - minScore;
  const normalizedScore = ((score - minScore) / range) * 100;
  
  const getScoreColor = (score: number): string => {
    if (score >= 100) return "hsl(142, 71%, 45%)";
    if (score >= 70) return "hsl(47, 95%, 53%)";
    if (score >= 0) return "hsl(25, 95%, 53%)";
    return "hsl(0, 72%, 51%)";
  };

  const getScoreLabel = (score: number): string => {
    if (score >= 100) return "Excellent";
    if (score >= 70) return "Good";
    if (score >= 0) return "Needs Work";
    return "Critical";
  };

  const circumference = 2 * Math.PI * 120;
  const dashOffset = circumference * (1 - normalizedScore / 100);

  return (
    <div className="relative w-72 h-72 mx-auto">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 280 280">
        <circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          stroke="currentColor"
          strokeWidth="16"
          className="text-muted/30"
        />
        <motion.circle
          cx="140"
          cy="140"
          r="120"
          fill="none"
          stroke={getScoreColor(score)}
          strokeWidth="16"
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: dashOffset }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <motion.div
          className="text-6xl font-bold tabular-nums"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          style={{ color: getScoreColor(score) }}
        >
          {score}
        </motion.div>
        <div className="text-sm text-muted-foreground mt-1">out of {maxScore}</div>
        <motion.div
          className="mt-3 px-4 py-1.5 rounded-md text-sm font-medium"
          style={{ 
            backgroundColor: `${getScoreColor(score)}20`,
            color: getScoreColor(score)
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.3 }}
        >
          {getScoreLabel(score)}
        </motion.div>
      </div>
    </div>
  );
}
