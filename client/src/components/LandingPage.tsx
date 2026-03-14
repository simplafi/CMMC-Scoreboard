import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import {
  Shield,
  Target,
  FileText,
  FolderSearch,
  Clock,
  CheckCircle,
  BarChart3,
  Upload,
  FileCheck,
  BookOpen,
  Users,
  Building,
  Briefcase,
  Wrench,
  ArrowRight,
  Layers,
  ClipboardList,
  Lock,
  Server,
} from "lucide-react";
import simplifiLogo from "@assets/SImplafi_Logo_2025-white_1768695773677.png";

interface LandingPageProps {
  onStart: () => void;
  isAuthenticated: boolean;
}

const trustBullets = [
  { icon: Target, text: "Track all 110 requirements across 14 control families" },
  { icon: FileCheck, text: "Organize evidence mapped directly to assessment objectives" },
  { icon: Clock, text: "Reduce rework with structured POA&M tracking and 180-day timers" },
];

const pains = [
  {
    icon: FolderSearch,
    title: "Scoping Confusion",
    description:
      "Defining your assessment boundary, categorizing assets, and documenting what is in scope takes months of back-and-forth without the right framework.",
  },
  {
    icon: Upload,
    title: "Evidence Chaos",
    description:
      "Screenshots in shared drives, policies in email threads, and configurations nobody documented. When assessment day arrives, teams scramble to prove what they already built.",
  },
  {
    icon: Clock,
    title: "POA&M Time Pressure",
    description:
      "After a Conditional Level 2, you have 180 days to close out every Plan of Action and Milestones item. Miss the window and your conditional status expires.",
  },
];

const steps = [
  {
    number: "1",
    title: "Scope Your Environment",
    description:
      "Define your assessment boundary by identifying CUI assets, security protection assets, contractor risk managed assets, and specialized assets. Build your asset inventory and document your network diagram.",
  },
  {
    number: "2",
    title: "Assess Every Requirement",
    description:
      "Work through all 110 NIST SP 800-171 Rev 2 requirements. For each control, see what assessors look for, review implementation guidance, and mark objectives as complete.",
  },
  {
    number: "3",
    title: "Export Assessment-Ready Outputs",
    description:
      "Generate your SSP sections, evidence index, objective coverage reports, and POA&M documentation. Walk into your assessment with organized, defensible records.",
  },
];

const features = [
  {
    icon: Layers,
    title: "Scope Builder",
    description: "Align your asset inventory to CMMC asset categories and define your assessment boundary clearly.",
  },
  {
    icon: BarChart3,
    title: "110 Progress Tracker",
    description: "Monitor your readiness score across all 14 control families and 110 requirements in real time.",
  },
  {
    icon: Upload,
    title: "Evidence Vault",
    description: "Map evidence artifacts directly to assessment objectives so nothing is missing on assessment day.",
  },
  {
    icon: FileText,
    title: "SSP Helper",
    description: "Document your system boundary, components, and interconnections with guided templates for your System Security Plan.",
  },
  {
    icon: ClipboardList,
    title: "POA&M Management",
    description: "Track every Plan of Action and Milestones item with built-in 180-day closeout timers and checklists.",
  },
  {
    icon: Server,
    title: "ESP/CSP Support Prompts",
    description: "Capture what external service providers and cloud service providers handle, and document ownership clearly.",
  },
  {
    icon: BookOpen,
    title: "ODP Library",
    description: "Access Organization-Defined Parameters for Rev 3 readiness, aligned with the DoD ODP memo guidance.",
  },
  {
    icon: FileCheck,
    title: "Audit-Ready Exports",
    description: "Generate SSP sections, evidence indexes, and objective coverage reports formatted for assessor review.",
  },
  {
    icon: Shield,
    title: "Assessor Perspective Notes",
    description: "Understand what assessors actually look for when evaluating each requirement during a C3PAO assessment.",
  },
  {
    icon: Lock,
    title: "Implementation Guidance",
    description: "Get practical guidance your team can follow, distinguishing between policy documentation and technical configuration tasks.",
  },
];

const deliverables = [
  "Readiness score dashboard tracking all 110 requirements",
  "Objective-level assessment tracking across 14 control families",
  "Evidence mapping linked to each assessment objective",
  "SSP section templates with boundary and component documentation",
  "POA&M tracker with 180-day closeout timeline",
  "Exportable reports formatted for assessor review",
  "Implementation guidance for every control requirement",
  "Assessor perspective notes for real-world preparation",
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

const differentiators = [
  "Built specifically for NIST SP 800-171 Rev 2 and CMMC Level 2 requirements",
  "Tracks at the assessment objective level, not just the control level",
  "Provides real assessor perspective notes for each requirement",
  "Distinguishes between policy/procedure documentation and technical configuration tasks",
  "Structured for the 180-day POA&M closeout window with timeline tracking",
];

const faqItems = [
  {
    question: "Is this official DoD software?",
    answer:
      "No. Simplafi is an independent tool that helps organizations prepare for CMMC Level 2 assessments. It is not affiliated with, endorsed by, or connected to the Department of Defense, CMMC Accreditation Body, or any government agency.",
  },
  {
    question: "Does encryption alone make something out of scope?",
    answer:
      "Not necessarily. Encryption is one factor in scoping decisions, but it does not automatically place an asset out of scope. Scoping depends on whether the asset processes, stores, or transmits CUI, and how it interacts with other in-scope systems. Each situation requires careful analysis based on your specific environment and data flows.",
  },
  {
    question: "What is the difference between self-assessment and C3PAO assessment?",
    answer:
      "A self-assessment is conducted by your own organization and results in a score submitted to SPRS. A C3PAO (Certified Third-Party Assessment Organization) assessment is an independent evaluation required for CMMC Level 2 certification. The C3PAO assessment follows the same 110 requirements but is conducted by authorized external assessors.",
  },
  {
    question: "What happens if we miss the POA&M closeout window?",
    answer:
      "After receiving a Conditional Level 2 status, you have 180 days to close out all POA&M items. If any items remain open after 180 days, the conditional status terminates. You would need to undergo a new assessment to achieve certification.",
  },
  {
    question: "Can we implement Rev 3 now?",
    answer:
      "Organizations can begin implementing NIST SP 800-171 Rev 3 controls now. However, CMMC Level 2 assessments are currently conducted against Rev 2 requirements. When Rev 3 is formally adopted for assessments, the transition timeline will be defined. If you are working with Rev 3 ODPs, refer to the DoD ODP memo for current guidance.",
  },
  {
    question: "How does the scoring work?",
    answer:
      "The SPRS scoring methodology starts at 110 points. Each of the 110 requirements has a weighted value (1, 3, or 5 points). When a requirement is not met, its weight is subtracted from 110. Partially met requirements may receive partial credit depending on the specific control. A perfect score of 110 means all requirements are fully implemented.",
  },
  {
    question: "Do I need a System Security Plan before starting?",
    answer:
      "While you do not need a completed SSP to begin using this tool, a System Security Plan is a required deliverable for CMMC Level 2. This tool helps you build your SSP by documenting your system boundary, components, and how each requirement is implemented in your environment.",
  },
  {
    question: "How long does it take to prepare for a CMMC Level 2 assessment?",
    answer:
      "Preparation timelines vary based on your current security posture, the size of your environment, and available resources. Organizations with mature security programs may need 3 to 6 months. Those starting from scratch typically need 12 to 18 months or more. This tool helps you track progress and reduce rework throughout that timeline.",
  },
  {
    question: "Can multiple team members use the tool?",
    answer:
      "The tool supports individual user accounts with saved progress. Team collaboration features allow multiple stakeholders to contribute to the assessment process while maintaining a single source of truth for your organization's readiness status.",
  },
  {
    question: "What evidence formats are supported?",
    answer:
      "The evidence vault accepts references to screenshots, policy documents, configuration exports, audit logs, and any other artifacts your assessor may request. Evidence is mapped directly to assessment objectives so you can demonstrate coverage for each requirement.",
  },
];

export function LandingPage({ onStart, isAuthenticated }: LandingPageProps) {
  return (
    <div className="flex flex-col" data-testid="landing-page">
      <section className="relative bg-primary text-primary-foreground py-16 sm:py-24 px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img
              src={simplifiLogo}
              alt="Simplafi"
              className="h-8 sm:h-10 w-auto"
              data-testid="img-hero-logo"
            />
          </div>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-white"
            data-testid="text-hero-headline"
          >
            Turn CMMC Requirements Into a Clear Path to 110
          </h1>
          <p
            className="text-lg sm:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
            data-testid="text-hero-subheadline"
          >
            Track all 110 NIST SP 800-171 Rev 2 requirements, organize your
            evidence, and prepare for your Level 2 assessment with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Button
              size="lg"
              onClick={onStart}
              className="bg-[#be4c13] border-[#be4c13] text-white gap-2"
              data-testid="button-hero-start"
            >
              Start Your 110 Tracker
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="backdrop-blur-sm bg-white/10 border-white/30 text-white"
              data-testid="button-hero-walkthrough"
            >
              <a href="https://app.simplafi.us" target="_blank" rel="noopener noreferrer">
                Book a 15-min Walkthrough
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-6">
            {trustBullets.map((bullet, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-white/80"
                data-testid={`text-trust-bullet-${i}`}
              >
                <bullet.icon className="w-4 h-4 flex-shrink-0" />
                <span>{bullet.text}</span>
              </div>
            ))}
          </div>

          {!isAuthenticated && (
            <p className="text-sm text-white/70 pt-2">
              <a
                href="/auth"
                className="underline hover:text-white transition-colors"
                data-testid="link-hero-signin"
              >
                Sign in
              </a>{" "}
              to save your progress
            </p>
          )}
        </div>
      </section>

      <section className="py-8 sm:py-10 px-4 border-b" data-testid="section-social-proof">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-4">
            Trusted by DIB Teams Preparing for CMMC Level 2
          </p>
          <Card>
            <CardContent className="p-6">
              <p className="text-sm sm:text-base text-foreground italic leading-relaxed">
                "We spent months trying to figure out what assessors actually want to see. This tool
                broke it down requirement by requirement and showed us exactly what evidence to collect.
                We walked into our assessment organized and confident."
              </p>
              <p className="text-sm text-muted-foreground mt-3">
                Compliance Lead, Defense Manufacturing Contractor
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4" data-testid="section-problem">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-problem-heading">
              CMMC Preparation Is Harder Than It Should Be
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              DIB teams face the same challenges over and over. Scoping takes too long, evidence is
              scattered, and the clock starts ticking the moment you receive a conditional status.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pains.map((pain, i) => (
              <Card key={i} data-testid={`card-pain-${i}`}>
                <CardContent className="p-5 sm:p-6">
                  <pain.icon className="w-8 h-8 text-destructive mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{pain.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {pain.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-muted/50" data-testid="section-solution">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-solution-heading">
              How It Works
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Three steps from uncertainty to assessment-ready documentation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {steps.map((step, i) => (
              <Card key={i} data-testid={`card-step-${i}`}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex-shrink-0">
                      {step.number}
                    </div>
                    <h3 className="font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4" data-testid="section-features">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-features-heading">
              Built for Every Step of the CMMC Journey
            </h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Each feature is designed to help you prepare, organize, and prove your compliance posture.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature, i) => (
              <Card key={i} data-testid={`card-feature-${i}`}>
                <CardContent className="p-5">
                  <feature.icon className="w-6 h-6 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground text-sm mb-1.5">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-muted/50" data-testid="section-deliverables">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-deliverables-heading">
              What You Get
            </h2>
          </div>
          <Card>
            <CardContent className="p-5 sm:p-6">
              <ul className="space-y-3">
                {deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-deliverable-${i}`}>
                    <CheckCircle className="w-5 h-5 text-chart-1 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4" data-testid="section-personas">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-personas-heading">
              Who It's For
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {personas.map((persona, i) => (
              <Card key={i} data-testid={`card-persona-${i}`}>
                <CardContent className="p-5 sm:p-6">
                  <persona.icon className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground mb-2">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {persona.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 bg-muted/50" data-testid="section-differentiators">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-differentiators-heading">
              Why Simplafi
            </h2>
          </div>
          <Card>
            <CardContent className="p-5 sm:p-6">
              <ul className="space-y-3">
                {differentiators.map((item, i) => (
                  <li key={i} className="flex items-start gap-3" data-testid={`text-differentiator-${i}`}>
                    <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4" data-testid="section-faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-faq-heading">
              Frequently Asked Questions
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqItems.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} data-testid={`accordion-faq-${i}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-16 sm:py-20 px-4 bg-primary text-primary-foreground" data-testid="section-final-cta">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/30" />
          <div className="relative max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white" data-testid="text-final-cta-heading">
              Start Preparing for Your CMMC Level 2 Assessment
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto">
              Join DIB teams that use Simplafi to scope their environment, track all 110 requirements,
              and organize evidence before assessment day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <Button
                size="lg"
                onClick={onStart}
                className="bg-[#be4c13] border-[#be4c13] text-white gap-2"
                data-testid="button-final-start"
              >
                Start Your 110 Tracker
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                data-testid="button-final-walkthrough"
              >
                <a href="https://app.simplafi.us" target="_blank" rel="noopener noreferrer">
                  Book a 15-min Walkthrough
                </a>
              </Button>
            </div>
            <p className="text-sm text-white/60">
              No commitment required. See where your organization stands today.
            </p>
            {!isAuthenticated && (
              <p className="text-sm text-white/70">
                <a
                  href="/auth"
                  className="underline hover:text-white transition-colors"
                  data-testid="link-final-signin"
                >
                  Sign in
                </a>{" "}
                to save your progress
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
