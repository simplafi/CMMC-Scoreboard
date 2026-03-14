import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface SSPCheckProps {
  hasSSP: boolean | null;
  onSSPChange: (hasSSP: boolean) => void;
}

export function SSPCheck({ hasSSP, onSSPChange }: SSPCheckProps) {
  return (
    <Card className="overflow-hidden" data-testid="ssp-check-card">
      <CardHeader className="bg-primary/5 border-b">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
            <FileText className="w-6 h-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-xl">System Security Plan (SSP)</CardTitle>
            <CardDescription className="mt-1">
              An SSP is required before any CMMC Compliance Tracker assessment can be completed
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6">
        {hasSSP === null ? (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              The System Security Plan documents how your organization implements the NIST 800-171 security requirements. 
              Without an SSP, the DoD cannot assign a CMMC Compliance Tracker score to your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => onSSPChange(true)}
                className="flex-1 gap-2"
                data-testid="button-ssp-yes"
              >
                <CheckCircle2 className="w-4 h-4" />
                Yes, I have an SSP
              </Button>
              <Button
                variant="outline"
                onClick={() => onSSPChange(false)}
                className="flex-1 gap-2"
                data-testid="button-ssp-no"
              >
                <AlertTriangle className="w-4 h-4" />
                No, I don't have an SSP
              </Button>
            </div>
          </div>
        ) : hasSSP ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 p-4 rounded-lg bg-chart-1/10 border border-chart-1/20"
          >
            <CheckCircle2 className="w-6 h-6 text-chart-1 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-medium text-chart-1">SSP Confirmed</p>
              <p className="text-sm text-muted-foreground">You can proceed with the CMMC Compliance Tracker assessment</p>
            </div>
            <ArrowRight className="w-5 h-5 text-chart-1" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/20">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-destructive">Assessment Cannot Proceed</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    You must develop a System Security Plan before you can receive a CMMC Compliance Tracker score. 
                    The SSP should document your system boundaries, how security requirements are implemented, 
                    and connections to other systems.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-3"
                    onClick={() => onSSPChange(true)}
                    data-testid="button-ssp-change"
                  >
                    I now have an SSP
                  </Button>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/50 border border-border">
              <p className="text-xs text-muted-foreground italic">
                <span className="font-medium text-foreground">Why this matters:</span> Organizations without an SSP cannot receive a CMMC Compliance Tracker score. This is the most common readiness blocker we see when working with DoD contractors.
              </p>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
