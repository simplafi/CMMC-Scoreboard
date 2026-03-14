import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScoreGauge } from "./ScoreGauge";
import { AssessmentPDFReport } from "./AssessmentPDFReport";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useAuth } from "@/hooks/use-auth";
import type { AssessmentResult } from "@shared/schema";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, AlertCircle, AlertTriangle, TrendingDown, Target, Shield, ShieldAlert, ShieldCheck, ShieldX, ArrowRight, Download } from "lucide-react";

interface ResultsSummaryProps {
  result: AssessmentResult;
}

type ScoreTier = {
  label: string;
  message: string;
  details: string;
  nextStep: string;
  ctaText: string;
  ctaLink: string;
  color: "green" | "yellow" | "orange" | "red";
  icon: typeof ShieldCheck;
};

export function ResultsSummary({ result }: ResultsSummaryProps) {
  const getScoreTier = (score: number): ScoreTier => {
    if (score >= 90) {
      return {
        label: "Strong Posture",
        message: "Your organization demonstrates excellent cybersecurity readiness.",
        details: "You're well-positioned for a CMMC Level 2 assessment. Focus now on maintaining your controls, documenting evidence, and preparing for assessor validation.",
        nextStep: "Ensure your System Security Plan (SSP) accurately reflects your implemented controls and gather evidence for each.",
        ctaText: "Learn About Assessment Preparation",
        ctaLink: "https://simplafi.io/contact",
        color: "green",
        icon: ShieldCheck
      };
    }
    if (score >= 60) {
      return {
        label: "Moderate Risk",
        message: "You've made good progress but have gaps to address.",
        details: "Your organization has implemented many controls but some gaps may impact your contract eligibility. Prioritize closing the high-impact (5-point) control gaps first.",
        nextStep: "Review your failed controls below and create a Plan of Action & Milestones (POA&M) for each gap.",
        ctaText: "Get Gap Remediation Help",
        ctaLink: "https://simplafi.io/contact",
        color: "yellow",
        icon: Shield
      };
    }
    if (score >= 0) {
      return {
        label: "High Risk",
        message: "Significant security gaps may impact your DoD contract eligibility.",
        details: "Multiple controls are not implemented, which could affect your ability to win or retain DoD contracts. Immediate action is recommended to address critical security gaps.",
        nextStep: "Focus on 5-point controls first. Consider engaging a CMMC practitioner to accelerate remediation.",
        ctaText: "Schedule a Readiness Review",
        ctaLink: "https://simplafi.io/contact",
        color: "orange",
        icon: ShieldAlert
      };
    }
    return {
      label: "Critical",
      message: "Your organization has critical security gaps requiring immediate attention.",
      details: "A negative CMMC Compliance Tracker score indicates major deficiencies across multiple security families. This significantly impacts DoD contract eligibility and increases risk of data breaches.",
      nextStep: "Immediate remediation is essential. Start with Access Control and System & Communications Protection families.",
      ctaText: "Get Immediate Assistance",
      ctaLink: "https://simplafi.io/contact",
      color: "red",
      icon: ShieldX
    };
  };

  const { user } = useAuth();
  const tier = getScoreTier(result.score);
  const TierIcon = tier.icon;
  
  const tierColors = {
    green: {
      bg: "bg-green-500/10 dark:bg-green-500/20",
      border: "border-green-500/30",
      text: "text-green-700 dark:text-green-400",
      badge: "bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30"
    },
    yellow: {
      bg: "bg-yellow-500/10 dark:bg-yellow-500/20",
      border: "border-yellow-500/30",
      text: "text-yellow-700 dark:text-yellow-400",
      badge: "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30"
    },
    orange: {
      bg: "bg-orange-500/10 dark:bg-orange-500/20",
      border: "border-orange-500/30",
      text: "text-orange-700 dark:text-orange-400",
      badge: "bg-orange-500/20 text-orange-700 dark:text-orange-300 border-orange-500/30"
    },
    red: {
      bg: "bg-red-500/10 dark:bg-red-500/20",
      border: "border-red-500/30",
      text: "text-red-700 dark:text-red-400",
      badge: "bg-red-500/20 text-red-700 dark:text-red-300 border-red-500/30"
    }
  };
  
  const colors = tierColors[tier.color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <Card data-testid="results-summary">
        <CardHeader className="text-center pb-0">
          <CardTitle className="text-2xl">Your CMMC Compliance Tracker Score</CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <ScoreGauge score={result.score} maxScore={result.maxScore} minScore={result.minScore} />
          
          <div className="mt-6 text-center">
            <Badge className={`${colors.badge} mb-3`} data-testid="tier-badge">
              <TierIcon className="w-3.5 h-3.5 mr-1" />
              {tier.label}
            </Badge>
            <h3 className="text-lg font-semibold">{tier.message}</h3>
            <p className="text-sm text-muted-foreground mt-1 max-w-md mx-auto">
              {tier.details}
            </p>
          </div>
        </CardContent>
      </Card>
      
      <Card className={`${colors.bg} ${colors.border} border`} data-testid="next-steps-card">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className={`p-2 rounded-lg ${colors.bg}`}>
              <TierIcon className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="flex-1">
              <h4 className={`font-semibold ${colors.text}`}>Recommended Next Step</h4>
              <p className="text-sm text-muted-foreground mt-1">{tier.nextStep}</p>
              <Button asChild className="mt-4" data-testid="tier-cta-button">
                <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
                  {tier.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <PDFDownloadLink
          document={
            <AssessmentPDFReport
              result={result}
              generatedAt={new Date()}
              userName={user ? `${user.firstName || ""} ${user.lastName || ""}`.trim() || user.email || undefined : undefined}
            />
          }
          fileName={`cmmc-assessment-${new Date().toISOString().slice(0, 10)}.pdf`}
        >
          {({ loading }) => (
            <Button variant="outline" size="sm" disabled={loading} className="gap-2">
              <Download className="w-4 h-4" />
              {loading ? "Generating PDF…" : "Download PDF Report"}
            </Button>
          )}
        </PDFDownloadLink>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4" data-testid="stat-passed">
          <div className="flex items-center gap-2 text-chart-1">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Passed</span>
          </div>
          <div className="text-2xl font-bold mt-2">{result.passedControls}</div>
          <div className="text-xs text-muted-foreground">controls</div>
        </Card>

        <Card className="p-4" data-testid="stat-failed">
          <div className="flex items-center gap-2 text-destructive">
            <XCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Failed</span>
          </div>
          <div className="text-2xl font-bold mt-2">{result.failedControls.length}</div>
          <div className="text-xs text-muted-foreground">controls</div>
        </Card>

        <Card className="p-4" data-testid="stat-partial">
          <div className="flex items-center gap-2 text-chart-2">
            <AlertCircle className="w-5 h-5" />
            <span className="text-sm font-medium">Partial</span>
          </div>
          <div className="text-2xl font-bold mt-2">{result.partialControls}</div>
          <div className="text-xs text-muted-foreground">controls</div>
        </Card>

        <Card className="p-4" data-testid="stat-deducted">
          <div className="flex items-center gap-2 text-chart-2">
            <TrendingDown className="w-5 h-5" />
            <span className="text-sm font-medium">Deducted</span>
          </div>
          <div className="text-2xl font-bold mt-2">{result.totalDeducted}</div>
          <div className="text-xs text-muted-foreground">points</div>
        </Card>
      </div>

      <Card data-testid="deduction-breakdown">
        <CardHeader className="flex flex-row items-center gap-2 pb-2">
          <Target className="w-5 h-5 text-primary" />
          <CardTitle className="text-lg">Deduction Breakdown</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 rounded-md bg-destructive/5">
              <div className="flex items-center gap-2">
                <Badge className="bg-destructive/10 text-destructive border-destructive/20 hover:bg-destructive/20">5 pts</Badge>
                <span className="text-sm">High-impact controls</span>
              </div>
              <span className="font-semibold text-destructive">-{result.scoreBreakdown.fivePointDeductions}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-md bg-chart-2/5">
              <div className="flex items-center gap-2">
                <Badge className="bg-chart-2/10 text-chart-2 border-chart-2/20 hover:bg-chart-2/20">3 pts</Badge>
                <span className="text-sm">Medium-impact controls</span>
              </div>
              <span className="font-semibold text-chart-2">-{result.scoreBreakdown.threePointDeductions}</span>
            </div>
            <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">1 pt</Badge>
                <span className="text-sm">Low-impact controls</span>
              </div>
              <span className="font-semibold">-{result.scoreBreakdown.onePointDeductions}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {result.failedControls.length > 0 && (
        <Card data-testid="failed-controls-list">
          <CardHeader className="flex flex-row items-center gap-2 pb-2">
            <AlertTriangle className="w-5 h-5 text-destructive" />
            <CardTitle className="text-lg">Controls Requiring Attention</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {result.failedControls
                .sort((a, b) => b.weight - a.weight)
                .map((control) => (
                  <div
                    key={control.id}
                    className="flex items-center gap-3 p-3 rounded-md bg-muted/30 hover-elevate"
                    data-testid={`failed-control-${control.id}`}
                  >
                    <Badge 
                      className={
                        control.weight === 5 
                          ? "bg-destructive/10 text-destructive border-destructive/20" 
                          : control.weight === 3 
                            ? "bg-chart-2/10 text-chart-2 border-chart-2/20" 
                            : ""
                      }
                      variant={control.weight === 1 ? "secondary" : "outline"}
                    >
                      -{control.weight}
                    </Badge>
                    <div className="flex-1 min-w-0">
                      <span className="font-mono text-sm font-semibold text-primary">{control.id}</span>
                      <span className="mx-2 text-muted-foreground">|</span>
                      <span className="text-sm">{control.title}</span>
                    </div>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {control.family}
                    </Badge>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      )}
    </motion.div>
  );
}
