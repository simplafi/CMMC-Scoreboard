import type { Control, ControlFamily, Objective } from "./schema";
import { objectives } from "./objectives";

// All 110 NIST SP 800-171 Rev 2 controls with their weights
// 5-point controls: 42 total (23 basic + 19 high-impact derived)
// 3-point controls: 14 total (includes 3.5.3 and 3.13.11 which can be 5 if completely non-implemented)
// 1-point controls: 54 total (all remaining)

const fivePointControlIds = new Set([
  // Basic Security Requirements (23 controls)
  "3.1.1", "3.1.2", "3.2.1", "3.2.2", "3.3.1", "3.4.1", "3.4.2", "3.5.1", "3.5.2",
  "3.6.1", "3.6.2", "3.7.2", "3.8.3", "3.9.2", "3.10.1", "3.10.2", "3.12.1",
  "3.12.3", "3.13.1", "3.13.2", "3.14.1", "3.14.2", "3.14.3",
  // High-Impact Derived Requirements (19 controls)
  "3.1.12", "3.1.13", "3.1.16", "3.1.17", "3.1.18", "3.3.5", "3.4.5", "3.4.6",
  "3.4.7", "3.4.8", "3.5.10", "3.7.5", "3.8.7", "3.11.2", "3.13.5", "3.13.6",
  "3.13.15", "3.14.4", "3.14.6"
]);

const threePointControlIds = new Set([
  "3.1.5", "3.1.6", "3.1.7", "3.1.8", "3.1.14", "3.1.15", "3.1.19",
  "3.3.8", "3.3.9", "3.5.3", "3.5.7", "3.13.8", "3.13.11", "3.13.16"
]);

const basicControlIds = new Set([
  "3.1.1", "3.1.2", "3.2.1", "3.2.2", "3.3.1", "3.3.2", "3.4.1", "3.4.2",
  "3.5.1", "3.5.2", "3.6.1", "3.6.2", "3.7.1", "3.7.2", "3.8.1", "3.8.2", "3.8.3",
  "3.9.1", "3.9.2", "3.10.1", "3.10.2", "3.11.1", "3.12.1", "3.12.3",
  "3.13.1", "3.13.2", "3.14.1", "3.14.2", "3.14.3"
]);

function getWeight(id: string): number {
  if (fivePointControlIds.has(id)) return 5;
  if (threePointControlIds.has(id)) return 3;
  return 1;
}

function getFamily(id: string): ControlFamily {
  const prefix = id.split(".").slice(0, 2).join(".");
  const familyMap: Record<string, ControlFamily> = {
    "3.1": "ACCESS_CONTROL",
    "3.2": "AWARENESS_TRAINING",
    "3.3": "AUDIT_ACCOUNTABILITY",
    "3.4": "CONFIGURATION_MANAGEMENT",
    "3.5": "IDENTIFICATION_AUTHENTICATION",
    "3.6": "INCIDENT_RESPONSE",
    "3.7": "MAINTENANCE",
    "3.8": "MEDIA_PROTECTION",
    "3.9": "PERSONNEL_SECURITY",
    "3.10": "PHYSICAL_PROTECTION",
    "3.11": "RISK_ASSESSMENT",
    "3.12": "SECURITY_ASSESSMENT",
    "3.13": "SYSTEM_COMMUNICATIONS",
    "3.14": "SYSTEM_INTEGRITY"
  };
  return familyMap[prefix];
}

function getFamilyName(family: ControlFamily): string {
  const names: Record<ControlFamily, string> = {
    ACCESS_CONTROL: "Access Control",
    AWARENESS_TRAINING: "Awareness and Training",
    AUDIT_ACCOUNTABILITY: "Audit and Accountability",
    CONFIGURATION_MANAGEMENT: "Configuration Management",
    IDENTIFICATION_AUTHENTICATION: "Identification and Authentication",
    INCIDENT_RESPONSE: "Incident Response",
    MAINTENANCE: "Maintenance",
    MEDIA_PROTECTION: "Media Protection",
    PERSONNEL_SECURITY: "Personnel Security",
    PHYSICAL_PROTECTION: "Physical Protection",
    RISK_ASSESSMENT: "Risk Assessment",
    SECURITY_ASSESSMENT: "Security Assessment",
    SYSTEM_COMMUNICATIONS: "System and Communications Protection",
    SYSTEM_INTEGRITY: "System and Information Integrity"
  };
  return names[family];
}

// Build a map of controlId -> objectives for efficient lookup
const objectivesByControlId = new Map<string, Objective[]>();
for (const obj of objectives) {
  const existing = objectivesByControlId.get(obj.controlId) || [];
  existing.push(obj);
  objectivesByControlId.set(obj.controlId, existing);
}

function getObjectives(controlId: string): Objective[] {
  return objectivesByControlId.get(controlId) || [];
}

interface ControlData {
  id: string;
  title: string;
  description: string;
  hasPartialCredit?: boolean;
}

const controlsData: ControlData[] = [
  // 3.1 Access Control (22 controls)
  { id: "3.1.1", title: "Limit system access to authorized users", description: "Limit system access to authorized users, processes acting on behalf of authorized users, and devices (including other systems)." },
  { id: "3.1.2", title: "Limit system access to authorized transactions", description: "Limit system access to the types of transactions and functions that authorized users are permitted to execute." },
  { id: "3.1.3", title: "Control CUI flow", description: "Control the flow of CUI in accordance with approved authorizations." },
  { id: "3.1.4", title: "Separate duties of individuals", description: "Separate the duties of individuals to reduce the risk of malevolent activity without collusion." },
  { id: "3.1.5", title: "Employ principle of least privilege", description: "Employ the principle of least privilege, including for specific security functions and privileged accounts." },
  { id: "3.1.6", title: "Use non-privileged accounts", description: "Use non-privileged accounts or roles when accessing nonsecurity functions." },
  { id: "3.1.7", title: "Prevent non-privileged users from executing privileged functions", description: "Prevent non-privileged users from executing privileged functions and capture the execution of such functions in audit logs." },
  { id: "3.1.8", title: "Limit unsuccessful logon attempts", description: "Limit unsuccessful logon attempts." },
  { id: "3.1.9", title: "Provide privacy and security notices", description: "Provide privacy and security notices consistent with applicable CUI rules." },
  { id: "3.1.10", title: "Use session lock", description: "Use session lock with pattern-hiding displays to prevent access and viewing of data after a period of inactivity." },
  { id: "3.1.11", title: "Terminate sessions automatically", description: "Terminate (automatically) a user session after a defined condition." },
  { id: "3.1.12", title: "Control remote access sessions", description: "Monitor and control remote access sessions." },
  { id: "3.1.13", title: "Employ cryptographic mechanisms for remote access", description: "Employ cryptographic mechanisms to protect the confidentiality of remote access sessions." },
  { id: "3.1.14", title: "Route remote access via managed access control points", description: "Route remote access via managed access control points." },
  { id: "3.1.15", title: "Authorize remote execution and access", description: "Authorize remote execution of privileged commands and remote access to security-relevant information." },
  { id: "3.1.16", title: "Authorize wireless access", description: "Authorize wireless access prior to allowing such connections." },
  { id: "3.1.17", title: "Protect wireless access using authentication and encryption", description: "Protect wireless access using authentication and encryption." },
  { id: "3.1.18", title: "Control connection of mobile devices", description: "Control connection of mobile devices." },
  { id: "3.1.19", title: "Encrypt CUI on mobile devices", description: "Encrypt CUI on mobile devices and mobile computing platforms." },
  { id: "3.1.20", title: "Verify and control connections to external systems", description: "Verify and control/limit connections to and use of external systems." },
  { id: "3.1.21", title: "Limit use of portable storage devices", description: "Limit use of portable storage devices on external systems." },
  { id: "3.1.22", title: "Control CUI posted on public systems", description: "Control CUI posted or processed on publicly accessible systems." },
  // 3.2 Awareness and Training (3 controls)
  { id: "3.2.1", title: "Provide security awareness training", description: "Ensure that managers, systems administrators, and users of organizational systems are made aware of the security risks associated with their activities and of the applicable policies, standards, and procedures related to the security of those systems." },
  { id: "3.2.2", title: "Train personnel on CUI policies", description: "Ensure that personnel are trained to carry out their assigned information security-related duties and responsibilities." },
  { id: "3.2.3", title: "Provide insider threat awareness training", description: "Provide security awareness training on recognizing and reporting potential indicators of insider threat." },
  // 3.3 Audit and Accountability (9 controls)
  { id: "3.3.1", title: "Create and retain system audit logs", description: "Create and retain system audit logs and records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful or unauthorized system activity." },
  { id: "3.3.2", title: "Ensure individual user accountability", description: "Ensure that the actions of individual system users can be uniquely traced to those users so they can be held accountable for their actions." },
  { id: "3.3.3", title: "Review and update logged events", description: "Review and update logged events." },
  { id: "3.3.4", title: "Alert on audit logging process failure", description: "Alert in the event of an audit logging process failure." },
  { id: "3.3.5", title: "Correlate audit record review and analysis", description: "Correlate audit record review, analysis, and reporting processes for investigation and response to indications of unlawful, unauthorized, suspicious, or unusual activity." },
  { id: "3.3.6", title: "Provide audit record reduction and report generation", description: "Provide audit record reduction and report generation to support on-demand analysis and reporting." },
  { id: "3.3.7", title: "Provide synchronized time stamps", description: "Provide a system capability that compares and synchronizes internal system clocks with an authoritative source to generate time stamps for audit records." },
  { id: "3.3.8", title: "Protect audit information", description: "Protect audit information and audit logging tools from unauthorized access, modification, and deletion." },
  { id: "3.3.9", title: "Limit management of audit logging functionality", description: "Limit management of audit logging functionality to a subset of privileged users." },
  // 3.4 Configuration Management (9 controls)
  { id: "3.4.1", title: "Establish and maintain baseline configurations", description: "Establish and maintain baseline configurations and inventories of organizational systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles." },
  { id: "3.4.2", title: "Establish security configuration settings", description: "Establish and enforce security configuration settings for information technology products employed in organizational systems." },
  { id: "3.4.3", title: "Track, review, and approve changes", description: "Track, review, approve or disapprove, and log changes to organizational systems." },
  { id: "3.4.4", title: "Analyze security impact of changes", description: "Analyze the security impact of changes prior to implementation." },
  { id: "3.4.5", title: "Define and document physical and logical access restrictions", description: "Define, document, approve, and enforce physical and logical access restrictions associated with changes to organizational systems." },
  { id: "3.4.6", title: "Employ principle of least functionality", description: "Employ the principle of least functionality by configuring organizational systems to provide only essential capabilities." },
  { id: "3.4.7", title: "Restrict, disable, or prevent nonessential functions", description: "Restrict, disable, or prevent the use of nonessential programs, functions, ports, protocols, and services." },
  { id: "3.4.8", title: "Apply deny-by-exception policy", description: "Apply deny-by-exception (blacklisting) policy to prevent the use of unauthorized software or deny-all, permit-by-exception (whitelisting) policy to allow the execution of authorized software." },
  { id: "3.4.9", title: "Control and monitor user-installed software", description: "Control and monitor user-installed software." },
  // 3.5 Identification and Authentication (11 controls)
  { id: "3.5.1", title: "Identify system users and processes", description: "Identify system users, processes acting on behalf of users, and devices." },
  { id: "3.5.2", title: "Authenticate identities", description: "Authenticate (or verify) the identities of users, processes, or devices, as a prerequisite to allowing access to organizational systems." },
  { id: "3.5.3", title: "Use multifactor authentication", description: "Use multifactor authentication for local and network access to privileged accounts and for network access to non-privileged accounts.", hasPartialCredit: true },
  { id: "3.5.4", title: "Employ replay-resistant authentication", description: "Employ replay-resistant authentication mechanisms for network access to privileged and non-privileged accounts." },
  { id: "3.5.5", title: "Prevent identifier reuse", description: "Prevent reuse of identifiers for a defined period." },
  { id: "3.5.6", title: "Disable identifiers after inactivity", description: "Disable identifiers after a defined period of inactivity." },
  { id: "3.5.7", title: "Enforce minimum password complexity", description: "Enforce a minimum password complexity and change of characters when new passwords are created." },
  { id: "3.5.8", title: "Prohibit password reuse", description: "Prohibit password reuse for a specified number of generations." },
  { id: "3.5.9", title: "Allow temporary password use", description: "Allow temporary password use for system logons with an immediate change to a permanent password." },
  { id: "3.5.10", title: "Store and transmit cryptographically-protected passwords", description: "Store and transmit only cryptographically-protected passwords." },
  { id: "3.5.11", title: "Obscure feedback of authentication information", description: "Obscure feedback of authentication information." },
  // 3.6 Incident Response (3 controls)
  { id: "3.6.1", title: "Establish incident handling capability", description: "Establish an operational incident-handling capability for organizational systems that includes preparation, detection, analysis, containment, recovery, and user response activities." },
  { id: "3.6.2", title: "Track, document, and report incidents", description: "Track, document, and report incidents to designated officials and/or authorities both internal and external to the organization." },
  { id: "3.6.3", title: "Test incident response capability", description: "Test the organizational incident response capability." },
  // 3.7 Maintenance (6 controls)
  { id: "3.7.1", title: "Perform system maintenance", description: "Perform maintenance on organizational systems." },
  { id: "3.7.2", title: "Provide maintenance controls", description: "Provide controls on the tools, techniques, mechanisms, and personnel used to conduct system maintenance." },
  { id: "3.7.3", title: "Sanitize equipment for off-site maintenance", description: "Ensure equipment removed for off-site maintenance is sanitized of any CUI." },
  { id: "3.7.4", title: "Check media for malicious code", description: "Check media containing diagnostic and test programs for malicious code before the media are used in organizational systems." },
  { id: "3.7.5", title: "Require multifactor authentication for nonlocal maintenance", description: "Require multifactor authentication to establish nonlocal maintenance sessions via external network connections and terminate such connections when nonlocal maintenance is complete." },
  { id: "3.7.6", title: "Supervise nonlocal maintenance activities", description: "Supervise the maintenance activities of maintenance personnel without required access authorization." },
  // 3.8 Media Protection (9 controls)
  { id: "3.8.1", title: "Protect CUI media", description: "Protect (i.e., physically control and securely store) system media containing CUI, both paper and digital." },
  { id: "3.8.2", title: "Limit access to CUI on media", description: "Limit access to CUI on system media to authorized users." },
  { id: "3.8.3", title: "Sanitize media before disposal", description: "Sanitize or destroy system media containing CUI before disposal or release for reuse." },
  { id: "3.8.4", title: "Mark media with CUI markings", description: "Mark media with necessary CUI markings and distribution limitations." },
  { id: "3.8.5", title: "Control access to media", description: "Control access to media containing CUI and maintain accountability for media during transport outside of controlled areas." },
  { id: "3.8.6", title: "Implement cryptographic protection for CUI on digital media", description: "Implement cryptographic mechanisms to protect the confidentiality of CUI stored on digital media during transport unless otherwise protected by alternative physical safeguards." },
  { id: "3.8.7", title: "Control use of removable media", description: "Control the use of removable media on system components." },
  { id: "3.8.8", title: "Prohibit use of portable storage without owner", description: "Prohibit the use of portable storage devices when such devices have no identifiable owner." },
  { id: "3.8.9", title: "Protect confidentiality of backup CUI", description: "Protect the confidentiality of backup CUI at storage locations." },
  // 3.9 Personnel Security (2 controls)
  { id: "3.9.1", title: "Screen individuals before access", description: "Screen individuals prior to authorizing access to organizational systems containing CUI." },
  { id: "3.9.2", title: "Protect CUI during personnel actions", description: "Ensure that organizational systems containing CUI are protected during and after personnel actions such as terminations and transfers." },
  // 3.10 Physical Protection (6 controls)
  { id: "3.10.1", title: "Limit physical access", description: "Limit physical access to organizational systems, equipment, and the respective operating environments to authorized individuals." },
  { id: "3.10.2", title: "Protect and monitor physical facility", description: "Protect and monitor the physical facility and support infrastructure for organizational systems." },
  { id: "3.10.3", title: "Escort visitors", description: "Escort visitors and monitor visitor activity." },
  { id: "3.10.4", title: "Maintain audit logs of physical access", description: "Maintain audit logs of physical access." },
  { id: "3.10.5", title: "Control and manage physical access devices", description: "Control and manage physical access devices." },
  { id: "3.10.6", title: "Enforce safeguarding measures at alternate work sites", description: "Enforce safeguarding measures for CUI at alternate work sites." },
  // 3.11 Risk Assessment (3 controls)
  { id: "3.11.1", title: "Periodically assess risk", description: "Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational systems and the associated processing, storage, or transmission of CUI." },
  { id: "3.11.2", title: "Scan for vulnerabilities", description: "Scan for vulnerabilities in organizational systems and applications periodically and when new vulnerabilities affecting those systems and applications are identified." },
  { id: "3.11.3", title: "Remediate vulnerabilities", description: "Remediate vulnerabilities in accordance with risk assessments." },
  // 3.12 Security Assessment (4 controls)
  { id: "3.12.1", title: "Periodically assess security controls", description: "Periodically assess the security controls in organizational systems to determine if the controls are effective in their application." },
  { id: "3.12.2", title: "Develop and implement action plans", description: "Develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational systems." },
  { id: "3.12.3", title: "Monitor security controls", description: "Monitor security controls on an ongoing basis to ensure the continued effectiveness of the controls." },
  { id: "3.12.4", title: "Develop and update system security plans", description: "Develop, document, and periodically update system security plans that describe system boundaries, system environments of operation, how security requirements are implemented, and the relationships with or connections to other systems." },
  // 3.13 System and Communications Protection (16 controls)
  { id: "3.13.1", title: "Monitor communications at boundaries", description: "Monitor, control, and protect communications (i.e., information transmitted or received by organizational systems) at the external boundaries and key internal boundaries of organizational systems." },
  { id: "3.13.2", title: "Employ architectural designs for security", description: "Employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational systems." },
  { id: "3.13.3", title: "Separate user and management functionality", description: "Separate user functionality from system management functionality." },
  { id: "3.13.4", title: "Prevent unauthorized information transfer", description: "Prevent unauthorized and unintended information transfer via shared system resources." },
  { id: "3.13.5", title: "Implement subnetworks for public components", description: "Implement subnetworks for publicly accessible system components that are physically or logically separated from internal networks." },
  { id: "3.13.6", title: "Deny network traffic by default", description: "Deny network communications traffic by default and allow network communications traffic by exception (i.e., deny all, permit by exception)." },
  { id: "3.13.7", title: "Prevent split tunneling", description: "Prevent remote devices from simultaneously establishing non-remote connections with organizational systems and communicating via some other connection to resources in external networks (i.e., split tunneling)." },
  { id: "3.13.8", title: "Implement cryptographic mechanisms for CUI transmission", description: "Implement cryptographic mechanisms to prevent unauthorized disclosure of CUI during transmission unless otherwise protected by alternative physical safeguards." },
  { id: "3.13.9", title: "Terminate network connections", description: "Terminate network connections associated with communications sessions at the end of the sessions or after a defined period of inactivity." },
  { id: "3.13.10", title: "Establish and manage cryptographic keys", description: "Establish and manage cryptographic keys for cryptography employed in organizational systems." },
  { id: "3.13.11", title: "Employ FIPS-validated cryptography", description: "Employ FIPS-validated cryptography when used to protect the confidentiality of CUI.", hasPartialCredit: true },
  { id: "3.13.12", title: "Prohibit remote activation of collaborative computing devices", description: "Prohibit remote activation of collaborative computing devices and provide indication of devices in use to users present at the device." },
  { id: "3.13.13", title: "Control and monitor mobile code", description: "Control and monitor the use of mobile code." },
  { id: "3.13.14", title: "Control and monitor VoIP", description: "Control and monitor the use of Voice over Internet Protocol (VoIP) technologies." },
  { id: "3.13.15", title: "Protect authenticity of communications sessions", description: "Protect the authenticity of communications sessions." },
  { id: "3.13.16", title: "Protect CUI at rest", description: "Protect the confidentiality of CUI at rest." },
  // 3.14 System and Information Integrity (7 controls)
  { id: "3.14.1", title: "Identify and correct system flaws", description: "Identify, report, and correct system flaws in a timely manner." },
  { id: "3.14.2", title: "Provide malicious code protection", description: "Provide protection from malicious code at appropriate locations within organizational systems." },
  { id: "3.14.3", title: "Monitor security alerts", description: "Monitor system security alerts and advisories and take action in response." },
  { id: "3.14.4", title: "Update malicious code protection", description: "Update malicious code protection mechanisms when new releases are available." },
  { id: "3.14.5", title: "Perform periodic scans", description: "Perform periodic scans of organizational systems and real-time scans of files from external sources as files are downloaded, opened, or executed." },
  { id: "3.14.6", title: "Monitor systems to detect attacks", description: "Monitor organizational systems, including inbound and outbound communications traffic, to detect attacks and indicators of potential attacks." },
  { id: "3.14.7", title: "Identify unauthorized use", description: "Identify unauthorized use of organizational systems." }
];

// Build the full controls array with all derived fields
export const controls: Control[] = controlsData.map(data => ({
  id: data.id,
  title: data.title,
  description: data.description,
  weight: getWeight(data.id),
  family: getFamily(data.id),
  familyName: getFamilyName(getFamily(data.id)),
  isBasic: basicControlIds.has(data.id),
  hasPartialCredit: data.hasPartialCredit || false,
  objectives: getObjectives(data.id)
}));

export function getControlsByFamily(): Map<ControlFamily, Control[]> {
  const map = new Map<ControlFamily, Control[]>();
  for (const control of controls) {
    const existing = map.get(control.family) || [];
    existing.push(control);
    map.set(control.family, existing);
  }
  return map;
}
