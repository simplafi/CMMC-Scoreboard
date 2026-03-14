import { useEffect } from "react";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { useAssessment } from "@/context/AssessmentContext";
import { Header } from "@/components/Header";
import { ResultsSummary } from "@/components/ResultsSummary";
import { Button } from "@/components/ui/button";

export default function ResultsPage() {
  const [, navigate] = useLocation();
  const { result, setResult, isSaving, lastSaved } = useAssessment();

  useEffect(() => {
    if (!result) navigate("/assess");
  }, [result]);

  if (!result) return null;

  const handleBack = () => {
    setResult(null);
    navigate("/assess");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header
        isSaving={isSaving}
        lastSaved={lastSaved}
        domainName="Assessment Results"
        onBack={handleBack}
      />
      <main className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="mb-6 flex items-center justify-between flex-wrap gap-3">
              <h2 className="text-xl sm:text-2xl font-bold">Assessment Results</h2>
              <Button variant="outline" size="sm" onClick={handleBack}>
                Back to Assessment
              </Button>
            </div>
            <ResultsSummary result={result} />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
