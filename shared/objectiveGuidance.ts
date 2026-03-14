export type ObjectiveType = "POLICY" | "CONFIG";

export interface ObjectiveGuidance {
  type: ObjectiveType;
  notes: string;
}

export const objectiveGuidance: Record<string, ObjectiveGuidance> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 3.1 - ACCESS CONTROL (22 controls) - POPULATED WITH REAL DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.1.1 - Limit system access to authorized users/processes/devices
  "3.1.1.a": {
    type: "POLICY",
    notes:
      "Identify and document authorized users who are permitted to access the system (e.g., user roster, role-to-user mapping).",
  },
  "3.1.1.b": {
    type: "POLICY",
    notes:
      "Identify and document processes acting on behalf of authorized users (e.g., service accounts, service principals, scheduled tasks) that are permitted to access the system.",
  },
  "3.1.1.c": {
    type: "POLICY",
    notes:
      "Identify and document authorized devices and/or systems that are permitted to connect to or access the system (e.g., managed endpoints, approved VDI clients, trusted hosts).",
  },
  "3.1.1.d": {
    type: "CONFIG",
    notes:
      "Enforce access for interactive users using authentication and authorization controls (e.g., RBAC/group-based assignments) so only identified authorized users can access the system.",
  },
  "3.1.1.e": {
    type: "CONFIG",
    notes:
      "Enforce non-interactive access using dedicated identities with explicitly scoped permissions (e.g., service accounts/service principals/managed identities) and prevent interactive logon where not required.",
  },
  "3.1.1.f": {
    type: "CONFIG",
    notes:
      "Enforce device/system-based access restrictions (e.g., allow only managed/compliant/approved devices or system-to-system trust paths to access the system).",
  },

  // Control 3.1.2 - Limit system access to transaction types and functions
  "3.1.2.a": {
    type: "POLICY",
    notes:
      "Define and document the types of transactions and functions users are permitted to execute (e.g., role-to-function matrix, application permission model).",
  },
  "3.1.2.b": {
    type: "CONFIG",
    notes:
      "Enforce access limitations to authorized transactions and functions using technical controls (e.g., RBAC, application permissions, least-privilege roles) so unauthorized actions are prevented.",
  },

  // Control 3.1.3 - Control CUI flow
  "3.1.3.a": {
    type: "POLICY",
    notes:
      "Identify and document approved internal and external system endpoints and destinations for CUI flow (e.g., approved repositories, approved partner connections).",
  },
  "3.1.3.b": {
    type: "POLICY",
    notes:
      "Define and document connection specifications for CUI flow paths (e.g., approved protocols, ports, trusted networks, approved services).",
  },
  "3.1.3.c": {
    type: "POLICY",
    notes:
      "Define and document required security requirements for CUI flow controls (e.g., encryption requirements, boundary protections, inspection/logging requirements).",
  },
  "3.1.3.d": {
    type: "CONFIG",
    notes:
      "Enforce CUI flow restrictions using technical controls (e.g., network segmentation, firewall rules, egress controls, allow-lists) so CUI only traverses approved paths.",
  },
  "3.1.3.e": {
    type: "CONFIG",
    notes:
      "Enforce controlled connections for CUI flows (e.g., identity/device-aware access, approved application paths, and network rules) to prevent unauthorized transfer routes.",
  },

  // Control 3.1.4 - Separation of duties
  "3.1.4.a": {
    type: "POLICY",
    notes:
      "Define and document separation of duties (SoD) responsibilities (e.g., administrative functions split across roles, dual-control where required).",
  },
  "3.1.4.b": {
    type: "POLICY",
    notes:
      "Define and document which roles/functions must be separated (e.g., role descriptions, SoD matrix, prohibited combinations of duties).",
  },
  "3.1.4.c": {
    type: "CONFIG",
    notes:
      "Enforce separation of duties using role-based access controls and administrative role separation (e.g., separate admin roles/accounts, scoped admin permissions, JIT elevation where used).",
  },

  // Control 3.1.5 - Least privilege
  "3.1.5.a": {
    type: "POLICY",
    notes:
      "Define and document least privilege rules for users (including roles permitted for specific functions and privileged activities).",
  },
  "3.1.5.b": {
    type: "POLICY",
    notes:
      "Identify and document security functions and privileged roles/accounts requiring least-privilege assignment and additional constraints (e.g., admin roles, elevated application permissions).",
  },
  "3.1.5.c": {
    type: "CONFIG",
    notes:
      "Enforce least privilege through role-based access controls and scoped permissions (e.g., least-privilege role design, group-based assignments, removal of unnecessary rights).",
  },
  "3.1.5.d": {
    type: "CONFIG",
    notes:
      "Restrict and tightly control privileged access (e.g., privileged role assignment controls, just-in-time elevation, approval where required, and periodic access reviews).",
  },

  // Control 3.1.6 - Non-privileged accounts for nonsecurity functions
  "3.1.6.a": {
    type: "POLICY",
    notes:
      "Define and document which functions are considered nonsecurity functions and require use of non-privileged accounts.",
  },
  "3.1.6.b": {
    type: "CONFIG",
    notes:
      "Enforce use of non-privileged accounts for routine work by separating admin and standard accounts and limiting privileged role assignment to only those who require it.",
  },

  // Control 3.1.7 - Prevent non-privileged users from executing privileged functions
  "3.1.7.a": {
    type: "POLICY",
    notes:
      "Define and document which privileged functions require privileged roles and which roles are authorized to perform them.",
  },
  "3.1.7.b": {
    type: "POLICY",
    notes:
      "Identify and document service/process identities that require privileged functions and the minimum required permissions.",
  },
  "3.1.7.c": {
    type: "CONFIG",
    notes:
      "Enforce privileged function restrictions so non-privileged users cannot execute privileged actions (e.g., privileged roles required, elevated actions blocked otherwise).",
  },
  "3.1.7.d": {
    type: "CONFIG",
    notes:
      "Enforce privileged function restrictions for processes and services (e.g., scoped service principals/managed identities, least-privileged permissions, no interactive logon).",
  },

  // Control 3.1.8 - Limit unsuccessful logon attempts
  "3.1.8.a": {
    type: "POLICY",
    notes:
      "Define the maximum number of consecutive invalid logon attempts allowed.",
  },
  "3.1.8.b": {
    type: "POLICY",
    notes:
      "Define the time window over which unsuccessful logon attempts are counted (e.g., 15 minutes).",
  },
  "3.1.8.c": {
    type: "CONFIG",
    notes:
      "Enforce lockout/throttling based on the defined threshold and window so additional logon attempts are blocked or delayed after the limit is reached.",
  },

  // Control 3.1.9 - Privacy and security notices
  "3.1.9.a": {
    type: "POLICY",
    notes:
      "Define and document required privacy and security notice content (e.g., authorized use only, monitoring notice) to be presented prior to system access.",
  },
  "3.1.9.b": {
    type: "CONFIG",
    notes:
      "Display the privacy and security notice prior to granting system access (e.g., interactive logon banner / access warning prior to authentication completion).",
  },

  // Control 3.1.10 - Session lock
  "3.1.10.a": {
    type: "CONFIG",
    notes:
      "Enable session lock capability for user sessions to prevent access and viewing of information when a session becomes unattended.",
  },
  "3.1.10.b": {
    type: "CONFIG",
    notes:
      "Automatically lock sessions after a defined period of inactivity using endpoint/VDI/workspace session policies.",
  },
  "3.1.10.c": {
    type: "CONFIG",
    notes:
      "Use pattern-hiding displays (e.g., lock screen) to conceal information when the session is locked.",
  },

  // Control 3.1.11 - Session termination
  "3.1.11.a": {
    type: "POLICY",
    notes:
      "Define and document the condition(s) that trigger automatic session termination (e.g., idle timeout, session lifetime, risk condition).",
  },
  "3.1.11.b": {
    type: "CONFIG",
    notes:
      "Automatically terminate user sessions after the defined condition occurs (e.g., idle timeout enforcement, session lifetime limits).",
  },

  // Control 3.1.12 - Monitor and control remote access
  "3.1.12.a": {
    type: "POLICY",
    notes:
      "Identify and document approved remote access methods (e.g., VPN, VDI, approved remote admin tools) and any required constraints.",
  },
  "3.1.12.b": {
    type: "CONFIG",
    notes:
      "Restrict remote access to approved methods and paths (e.g., block unapproved protocols/tools; allow only approved remote access services).",
  },
  "3.1.12.c": {
    type: "CONFIG",
    notes:
      "Log and monitor remote access sessions (e.g., sign-in logs, remote session logs, SIEM correlation/alerting) to detect unauthorized or anomalous activity.",
  },
  "3.1.12.d": {
    type: "CONFIG",
    notes:
      "Enforce remote access controls (e.g., MFA, device state, network/location constraints) so remote access is controlled and policy-compliant.",
  },

  // Control 3.1.13 - Cryptographic mechanisms for remote access
  "3.1.13.a": {
    type: "POLICY",
    notes:
      "Identify and document cryptographic mechanisms required to protect the confidentiality of remote access sessions (e.g., TLS/IPsec using FIPS-validated modules where applicable).",
  },
  "3.1.13.b": {
    type: "CONFIG",
    notes:
      "Implement cryptographic mechanisms to protect the confidentiality of remote access sessions (e.g., enforce TLS/IPsec with approved configurations; disable weak/deprecated protocols).",
  },

  // Control 3.1.14 - Route remote access via managed access control points
  "3.1.14.a": {
    type: "POLICY",
    notes:
      "Identify and document managed access control points for remote access (e.g., VPN gateways, VDI brokers, bastion hosts) through which remote access must be routed.",
  },
  "3.1.14.b": {
    type: "CONFIG",
    notes:
      "Route remote access through the identified managed access control points and block direct/unmanaged remote access paths.",
  },

  // Control 3.1.15 - Authorize remote execution of privileged commands
  "3.1.15.a": {
    type: "POLICY",
    notes:
      "Define and document authorization requirements for remote execution of privileged commands and remote access to security-relevant information (e.g., who can do it, when, and under what conditions).",
  },
  "3.1.15.b": {
    type: "CONFIG",
    notes:
      "Enforce authorization for privileged remote actions (e.g., privileged role controls/JIT elevation, approved remote admin paths only, conditional access constraints).",
  },
  "3.1.15.c": {
    type: "POLICY",
    notes:
      "Identify and document what constitutes security-relevant information for remote access control purposes (e.g., audit logs, security configuration consoles, admin portals).",
  },
  "3.1.15.d": {
    type: "CONFIG",
    notes:
      "Restrict and log remote access to security-relevant information so only authorized roles and approved sessions can access it (e.g., RBAC + logging/alerting).",
  },

  // Control 3.1.16 - Authorize wireless access
  "3.1.16.a": {
    type: "POLICY",
    notes:
      "Define and document requirements for authorizing wireless access prior to allowing wireless connections (e.g., approved SSIDs, authorized users/devices, onboarding requirements).",
  },
  "3.1.16.b": {
    type: "CONFIG",
    notes:
      "Enforce wireless access authorization prior to allowing connections (e.g., 802.1X/RADIUS, device certificates, approved device onboarding, deny unknown devices).",
  },

  // Control 3.1.17 - Protect wireless access
  "3.1.17.a": {
    type: "CONFIG",
    notes:
      "Wireless access requires authentication prior to network access (e.g., enterprise authentication such as 802.1X / certificate-based authentication).",
  },
  "3.1.17.b": {
    type: "CONFIG",
    notes:
      "Wireless traffic is encrypted using approved protections (e.g., WPA2-Enterprise/WPA3 with strong encryption), consistent with organizational requirements.",
  },

  // Control 3.1.18 - Control mobile device connections
  "3.1.18.a": {
    type: "POLICY",
    notes:
      "Identify and document permitted mobile device types and connection conditions (e.g., corporate-managed devices only, enrollment requirements, acceptable use constraints).",
  },
  "3.1.18.b": {
    type: "CONFIG",
    notes:
      "Control mobile device connections using technical enforcement (e.g., MDM enrollment/compliance enforcement, access restrictions for non-compliant or unknown devices).",
  },
  "3.1.18.c": {
    type: "POLICY",
    notes:
      "Define and document the security requirements mobile devices must meet prior to connection (e.g., encryption, screen lock, OS version, endpoint protection, no jailbroken/rooted devices).",
  },

  // Control 3.1.19 - Encrypt CUI on mobile devices
  "3.1.19.a": {
    type: "POLICY",
    notes:
      "Identify and document mobile devices and mobile computing platforms that process, store, or transmit CUI.",
  },
  "3.1.19.b": {
    type: "CONFIG",
    notes:
      "Employ encryption to protect CUI on the identified mobile devices and mobile computing platforms (e.g., full-device or container-based encryption using approved configurations).",
  },

  // Control 3.1.20 - Verify and control connections to external systems
  "3.1.20.a": {
    type: "POLICY",
    notes:
      "Identify and document connections to external systems (outside the assessment scope) that connect to organizational systems.",
  },
  "3.1.20.b": {
    type: "POLICY",
    notes:
      "Identify and document the use of external systems (e.g., personal devices, partner/vendor systems) that are permitted to connect to or access organizational systems.",
  },
  "3.1.20.c": {
    type: "CONFIG",
    notes:
      "Verify connections to external systems using technical or procedural controls (e.g., authenticated tunnels, certificates, VPN requirements, trusted IP/device constraints).",
  },
  "3.1.20.d": {
    type: "CONFIG",
    notes:
      "Verify the use of external systems to ensure only authorized external systems are connecting/being used (e.g., device registration/allow-lists, compliance checks).",
  },
  "3.1.20.e": {
    type: "CONFIG",
    notes:
      "Control/limit connections to external systems based on defined conditions (e.g., firewall/egress rules, identity-based access, network segmentation, approved gateways).",
  },
  "3.1.20.f": {
    type: "CONFIG",
    notes:
      "Control/limit the use of external systems (e.g., prohibit unmanaged devices, restrict app access from external systems, enforce policy constraints).",
  },

  // Control 3.1.21 - Limit portable storage on external systems
  "3.1.21.a": {
    type: "POLICY",
    notes:
      "Identify and document use of portable storage devices containing CUI on external systems (including where and under what conditions they are used).",
  },
  "3.1.21.b": {
    type: "POLICY",
    notes:
      "Define limits on the use of portable storage devices containing CUI on external systems (e.g., prohibited vs allowed scenarios, approved devices only, read-only rules).",
  },
  "3.1.21.c": {
    type: "CONFIG",
    notes:
      "Enforce the defined limits on the use of portable storage devices containing CUI on external systems using technical and/or procedural controls.",
  },

  // Control 3.1.22 - Control CUI on publicly accessible systems
  "3.1.22.a": {
    type: "POLICY",
    notes:
      "Identify publicly accessible systems under organizational control and define rules for controlling CUI from being posted or processed on those systems.",
  },
  "3.1.22.b": {
    type: "POLICY",
    notes:
      "Designate and document individuals (or roles) authorized to post information to publicly accessible systems and define review requirements prior to posting.",
  },
  "3.1.22.c": {
    type: "CONFIG",
    notes:
      "Implement controls to prevent or restrict posting/processing of CUI on publicly accessible systems (e.g., publishing workflows, access restrictions, DLP where used).",
  },
  "3.1.22.d": {
    type: "POLICY",
    notes:
      "Define and document content review steps to ensure nonpublic information (including CUI) is not included prior to posting to publicly accessible systems.",
  },
  "3.1.22.e": {
    type: "CONFIG",
    notes:
      "Monitor and take action to remove or remediate CUI exposure on publicly accessible systems when detected (e.g., alerts, takedown workflow, incident handling).",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.2 - AWARENESS AND TRAINING (3 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.2.1 - Security awareness
  "3.2.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.2.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.2.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.2.1.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.2.2 - Role-based training
  "3.2.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.2.2.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.2.2.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.2.3 - Insider threat awareness
  "3.2.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.2.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.3 - AUDIT AND ACCOUNTABILITY (9 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.3.1 - Create and retain audit logs
  "3.3.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.1.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.1.e": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.1.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.2 - Trace actions to users
  "3.3.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.3 - Review and update logged events
  "3.3.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.3.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.4 - Alert on audit logging failures
  "3.3.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.4.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.4.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.5 - Correlate audit review and reporting
  "3.3.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.6 - Audit reduction and report generation
  "3.3.6.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.7 - Authoritative time source
  "3.3.7.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.7.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.7.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.8 - Protect audit information
  "3.3.8.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.8.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.8.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.8.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.8.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.3.8.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.3.9 - Limit audit management
  "3.3.9.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.3.9.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.4 - CONFIGURATION MANAGEMENT (9 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.4.1 - Baseline configurations and inventories
  "3.4.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.1.d": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.1.e": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.1.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.2 - Security configuration settings
  "3.4.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.3 - Track, review, approve changes
  "3.4.3.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.3.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.3.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.4 - Analyze security impact of changes
  "3.4.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.4.5 - Access restrictions for change
  "3.4.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.5.e": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.f": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.g": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.5.h": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.6 - Least functionality
  "3.4.6.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.7 - Restrict nonessential programs, functions, ports, protocols, services
  "3.4.7.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.7.d": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.e": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.7.g": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.h": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.i": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.7.j": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.k": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.l": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.7.m": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.n": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.7.o": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.8 - Blacklisting/whitelisting
  "3.4.8.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.8.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.8.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.4.9 - Control user-installed software
  "3.4.9.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.4.9.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.4.9.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.5 - IDENTIFICATION AND AUTHENTICATION (11 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.5.1 - Identify and authenticate users, processes, devices
  "3.5.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.1.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.1.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.1.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.1.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.2 - Authenticate users as prerequisite to access
  "3.5.2.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.3 - Multifactor authentication (SPECIAL: has partial credit)
  "3.5.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.3.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.3.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.4 - Replay-resistant authentication
  "3.5.4.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.4.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.5 - Identifier management
  "3.5.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.5.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.5.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.5.6 - Disable identifiers after inactivity
  "3.5.6.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.7 - Minimum password complexity
  "3.5.7.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.7.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.8 - Prohibit password reuse
  "3.5.8.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.5.8.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.9 - Allow temporary passwords
  "3.5.9.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.9.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.10 - Cryptographically protect passwords
  "3.5.10.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.5.10.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.5.11 - Obscure authenticator feedback
  "3.5.11.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.6 - INCIDENT RESPONSE (3 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.6.1 - Establish incident handling capability
  "3.6.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.6.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.6.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.6.1.d": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.6.1.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.6.1.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.6.1.g": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.6.2 - Track, document, report incidents
  "3.6.2.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.6.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.6.2.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.6.3 - Test incident response capability
  "3.6.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.7 - MAINTENANCE (6 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.7.1 - Perform maintenance
  "3.7.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.7.2 - Control maintenance personnel
  "3.7.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.7.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.7.3 - Sanitize equipment for off-site maintenance
  "3.7.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // Control 3.7.4 - Check media for malicious code
  "3.7.4.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.7.5 - Multifactor auth for nonlocal maintenance
  "3.7.5.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.7.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.7.6 - Supervise maintenance personnel
  "3.7.6.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.8 - MEDIA PROTECTION (9 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.8.1 - Protect and control media
  "3.8.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.1.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.8.1.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.2 - Limit access to CUI on media
  "3.8.2.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.3 - Sanitize or destroy media
  "3.8.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.4 - Mark media with CUI markings
  "3.8.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.4.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.5 - Control access to media
  "3.8.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.8.5.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.6 - Cryptographic mechanisms for portable storage
  "3.8.6.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.7 - Control removable media
  "3.8.7.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.7.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.8 - Prohibit portable storage without owner
  "3.8.8.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.8.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.8.9 - Protect backup CUI
  "3.8.9.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.8.9.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.9 - PERSONNEL SECURITY (2 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.9.1 - Screen individuals
  "3.9.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.9.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.9.2 - Protect CUI during personnel actions
  "3.9.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.9.2.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.9.2.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.9.2.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.10 - PHYSICAL PROTECTION (6 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.10.1 - Limit physical access
  "3.10.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.10.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.10.2 - Protect and monitor physical facility
  "3.10.2.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.10.3 - Escort visitors
  "3.10.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.10.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.10.4 - Maintain audit logs of physical access
  "3.10.4.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.10.4.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.10.5 - Control and manage physical access devices
  "3.10.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.10.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.10.6 - Enforce safeguarding at alternate work sites
  "3.10.6.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.10.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.11 - RISK ASSESSMENT (3 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.11.1 - Periodically assess risk
  "3.11.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.11.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.11.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.11.2 - Scan for vulnerabilities
  "3.11.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.11.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.11.3 - Remediate vulnerabilities
  "3.11.3.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.12 - SECURITY ASSESSMENT (4 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.12.1 - Periodically assess security controls
  "3.12.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.12.2 - Develop and implement action plans
  "3.12.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.2.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.2.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.12.2.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.12.3 - Monitor security controls
  "3.12.3.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.12.4 - System security plans
  "3.12.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.4.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.4.c": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.4.d": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.12.4.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.12.4.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.13 - SYSTEM AND COMMUNICATIONS PROTECTION (16 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.13.1 - Monitor communications at external boundaries
  "3.13.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.1.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.1.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.2 - Employ architectural designs
  "3.13.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.2.b": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.2.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.2.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.2.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.2.f": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.3 - Separate user and system management functionality
  "3.13.3.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.4 - Prevent unauthorized transfer
  "3.13.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.4.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.5 - Implement subnetworks
  "3.13.5.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.6 - Deny by default
  "3.13.6.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.13.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.7 - Prevent remote devices from split tunneling
  "3.13.7.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.8 - Cryptographic mechanisms for transmission
  "3.13.8.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.8.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.9 - Terminate network connections
  "3.13.9.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.9.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.10 - Establish and manage cryptographic keys
  "3.13.10.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.10.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.11 - FIPS-validated cryptography (SPECIAL: has partial credit)
  "3.13.11.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.12 - Prohibit remote activation of collaborative devices
  "3.13.12.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.12.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.13 - Control mobile code
  "3.13.13.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.13.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.14 - Control VoIP
  "3.13.14.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.13.14.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.15 - Protect communications sessions
  "3.13.15.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.13.16 - Protect CUI at rest
  "3.13.16.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.14 - SYSTEM AND INFORMATION INTEGRITY (7 controls) - PLACEHOLDER DATA
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.14.1 - Identify and correct flaws
  "3.14.1.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.14.1.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.2 - Provide malicious code protection
  "3.14.2.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.14.2.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.2.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.2.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.2.e": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.3 - Monitor security alerts
  "3.14.3.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.14.3.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.3.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.4 - Update malicious code protection
  "3.14.4.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.14.4.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.5 - Perform periodic and real-time scans
  "3.14.5.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.5.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.6 - Monitor organizational systems
  "3.14.6.a": { type: "POLICY", notes: "[GUIDANCE NEEDED]" },
  "3.14.6.b": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.6.c": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
  "3.14.6.d": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },

  // Control 3.14.7 - Identify unauthorized use
  "3.14.7.a": {
    type: "CONFIG",
    notes: "[GUIDANCE NEEDED]",
  },
};
