import {
  Lock, GraduationCap, FileSearch, Settings, UserCheck, AlertTriangle,
  Wrench, HardDrive, Users, Building, BarChart3, ClipboardCheck, Shield, ShieldCheck,
} from "lucide-react";
import type { ControlFamily } from "@shared/schema";
import { familyMetadata } from "@shared/schema";

export const familyIcons: Record<ControlFamily, React.ComponentType<{ className?: string }>> = {
  ACCESS_CONTROL: Lock,
  AWARENESS_TRAINING: GraduationCap,
  AUDIT_ACCOUNTABILITY: FileSearch,
  CONFIGURATION_MANAGEMENT: Settings,
  IDENTIFICATION_AUTHENTICATION: UserCheck,
  INCIDENT_RESPONSE: AlertTriangle,
  MAINTENANCE: Wrench,
  MEDIA_PROTECTION: HardDrive,
  PERSONNEL_SECURITY: Users,
  PHYSICAL_PROTECTION: Building,
  RISK_ASSESSMENT: BarChart3,
  SECURITY_ASSESSMENT: ClipboardCheck,
  SYSTEM_COMMUNICATIONS: Shield,
  SYSTEM_INTEGRITY: ShieldCheck,
};

export const familyOrder: ControlFamily[] = [
  "ACCESS_CONTROL",
  "AWARENESS_TRAINING",
  "AUDIT_ACCOUNTABILITY",
  "CONFIGURATION_MANAGEMENT",
  "IDENTIFICATION_AUTHENTICATION",
  "INCIDENT_RESPONSE",
  "MAINTENANCE",
  "MEDIA_PROTECTION",
  "PERSONNEL_SECURITY",
  "PHYSICAL_PROTECTION",
  "RISK_ASSESSMENT",
  "SECURITY_ASSESSMENT",
  "SYSTEM_COMMUNICATIONS",
  "SYSTEM_INTEGRITY",
];

export { familyMetadata };
