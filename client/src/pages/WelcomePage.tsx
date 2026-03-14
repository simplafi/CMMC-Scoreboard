import { useLocation } from "wouter";
import { useAuth } from "@/hooks/use-auth";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import {
  Shield,
  Target,
  FileCheck,
  Clock,
  CheckCircle,
  BarChart3,
  Upload,
  FileText,
  ClipboardList,
  Briefcase,
  Wrench,
  Users,
  ArrowRight,
  Layers,
  ChevronDown,
} from "lucide-react";
import simplifiLogo from "@assets/SImplafi_Logo_2025-white_1768695773677.png";

const steps = [
  {
    number: "01",
    title: "Scope Your Environment",
    description:
      "Define your assessment boundary by identifying CUI assets, security protection assets, contractor risk managed assets, and specialized assets. Build your asset inventory and document your network diagram.",
    icon: Layers,
  },
  {
    number: "02",
    title: "Assess Every Requirement",
    description:
      "Work through all 110 NIST SP 800-171 Rev 2 requirements. For each control, see what assessors look for, review implementation guidance, and mark objectives as complete.",
    icon: Target,
  },
  {
    number: "03",
    title: "Export Assessment-Ready Outputs",
    description:
      "Generate your SSP sections, evidence index, objective coverage reports, and POA&M documentation. Walk into your assessment with organized, defensible records.",
    icon: FileCheck,
  },
];

const deliverables = [
  { icon: BarChart3, text: "Readiness score dashboard tracking all 110 requirements" },
  { icon: Target, text: "Objective-level assessment tracking across 14 control families" },
  { icon: Upload, text: "Evidence mapping linked to each assessment objective" },
  { icon: FileText, text: "SSP section templates with boundary and component documentation" },
  { icon: ClipboardList, text: "POA&M tracker with 180-day closeout timeline" },
  { icon: FileCheck, text: "Exportable reports formatted for assessor review" },
  { icon: Shield, text: "Implementation guidance for every control requirement" },
  { icon: CheckCircle, text: "Assessor perspective notes for real-world preparation" },
];

const personas = [
  {
    icon: Briefcase,
    title: "Contractor Executives",
    description:
      "You need to understand where your organization stands, what resources are required, and how to communicate readiness to primes and contracting officers.",
  },
  {
    icon: Wrench,
    title: "IT and Compliance Leads",
    description:
      "You are doing the technical work. You need clear guidance on what each requirement asks for, what evidence to collect, and how to document your implementation.",
  },
  {
    icon: Users,
    title: "MSPs and Consultants",
    description:
      "You support multiple DIB clients. You need a repeatable framework to scope environments, track progress, and deliver organized assessment packages.",
  },
];

function FloatingCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Link href="/assess">
        <Button
          size="lg"
          className="bg-[#be4c13] hover:bg-[#a5410f] text-white shadow-2xl shadow-black/25 gap-2 px-8 py-6 text-base rounded-full"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Button>
      </Link>
    </div>
  );
}

export default function WelcomePage() {
  const [, navigate] = useLocation();
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <FloatingCTA />

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <img
            src={simplifiLogo}
            alt="Simplafi"
            className="h-6 w-auto brightness-0 dark:brightness-100"
          />
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Button asChild variant="ghost" size="sm">
                <Link href="/assess">Go to Dashboard</Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/auth">Sign in</Link>
                </Button>
                <Button asChild size="sm" className="bg-[#be4c13] hover:bg-[#a5410f] text-white">
                  <Link href="/assess">Get Started</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-[#be4c13]/5" />
        <div className="relative max-w-4xl mx-auto px-4 py-24 sm:py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-muted/50 text-xs font-medium text-muted-foreground mb-6">
              <Shield className="w-3.5 h-3.5" />
              NIST SP 800-171 Rev 2 &middot; CMMC Level 2
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Turn CMMC Requirements Into a{" "}
              <span className="text-[#be4c13]">Clear Path to 110</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
              Track all 110 requirements, organize your evidence, and prepare for your
              Level 2 assessment with confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-[#be4c13] hover:bg-[#a5410f] text-white gap-2 px-8 h-12 text-base"
              >
                <Link href="/assess">
                  Start Your Assessment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              {!isAuthenticated && (
                <Button asChild variant="outline" size="lg" className="h-12 text-base">
                  <Link href="/auth">Sign in to resume</Link>
                </Button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <ChevronDown className="w-5 h-5 text-muted-foreground animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          {[
            { icon: Target, text: "110 requirements across 14 families" },
            { icon: FileCheck, text: "Evidence mapped to objectives" },
            { icon: Clock, text: "180-day POA&M tracking" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
              <item.icon className="w-4 h-4 text-primary" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              How It Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Three steps from uncertainty to assessment-ready documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl font-bold text-[#be4c13]/20">{step.number}</span>
                  <step.icon className="w-6 h-6 text-[#be4c13]" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 sm:py-28 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              What You Get
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex items-start gap-3 p-4 rounded-lg border bg-background"
              >
                <div className="p-2 rounded-md bg-primary/10 flex-shrink-0">
                  <item.icon className="w-4 h-4 text-primary" />
                </div>
                <span className="text-sm leading-relaxed">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 sm:py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Who It's For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {personas.map((persona, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="p-6 rounded-xl border bg-background"
              >
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <persona.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{persona.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {persona.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 sm:py-28 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Start Preparing for Your Assessment
          </h2>
          <p className="text-white/80 text-lg max-w-xl mx-auto">
            No commitment required. See where your organization stands today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button
              asChild
              size="lg"
              className="bg-[#be4c13] hover:bg-[#a5410f] border-0 text-white gap-2 px-8 h-12 text-base"
            >
              <Link href="/assess">
                Start Your 110 Tracker
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
          {!isAuthenticated && (
            <p className="text-sm text-white/60">
              <Link href="/auth" className="underline hover:text-white transition-colors">
                Sign in
              </Link>{" "}
              to save your progress
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-xs text-muted-foreground space-y-2">
          <p>
            This tool provides an estimate based on NIST SP 800-171 DoD Assessment
            Methodology v1.2.1.
          </p>
          <p>
            Provided by <span className="font-medium text-foreground">Simplafi</span>
            <span className="mx-1.5">|</span>MSP Super Easy LLC
          </p>
        </div>
      </footer>

      {/* Spacer for floating CTA */}
      <div className="h-20" />
    </div>
  );
}
