/**
 * DoD Organization-Defined Parameters (ODPs) for NIST SP 800-171 Rev 3
 * Source: DoD ODP Memo, signed 2025-04-10 by David W. McKeown
 *
 * These are the DoD-mandated values for controls that contain
 * [Assignment: organization-defined ...] parameters.
 * Keyed by Rev 2 control ID (3.x.x) for compatibility with the app's control data.
 */

export interface OdpEntry {
  /** ODP identifier from the memo, e.g. "03.01.01.f.02" */
  odpId: string;
  /** The assignment placeholder text */
  assignmentText: string;
  /** The DoD-defined value */
  value: string;
}

export interface ControlOdp {
  /** Rev 3 control title from the ODP memo */
  rev3Title: string;
  /** Rev 3 control statement items (lettered sub-requirements) */
  statement: string[];
  /** Related 800-53 controls */
  relatedControls: string[];
  /** The ODP values for this control */
  odps: OdpEntry[];
}

/**
 * Map of Rev 2 control ID -> ODP data.
 * Only controls that have ODPs are included.
 */
export const odpData: Record<string, ControlOdp> = {
  // ── Access Control ──────────────────────────────────────────────

  "3.1.1": {
    rev3Title: "System Account Management",
    statement: [
      "a. Define the types of system accounts allowed and prohibited.",
      "b. Create, enable, modify, disable, and remove system accounts in accordance with policy, procedures, prerequisites, and criteria.",
      "c. Specify: (1) Authorized users of the system, (2) Group and role membership, and (3) Access authorizations (i.e., privileges) for each account.",
      "d. Authorize access to the system based on: (1) A valid access authorization and (2) Intended system usage.",
      "e. Monitor the use of system accounts.",
      "f. Disable system accounts when: (1) The accounts have expired, (2) The accounts have been inactive for [ODP: time period], (3) The accounts are no longer associated with a user or individual, (4) The accounts are in violation of organizational policy, or (5) Significant risks associated with individuals are discovered.",
      "g. Notify account managers and designated personnel or roles within [ODP: time periods] when accounts are no longer required, when users are terminated or transferred, and when system usage or need-to-know changes.",
      "h. Require that users log out of the system after: (1) [ODP: time period] of expected inactivity, or (2) When [ODP: circumstances].",
    ],
    relatedControls: ["AC-02", "AC-02(03)", "AC-02(05)", "AC-02(13)"],
    odps: [
      {
        odpId: "03.01.01.f.02",
        assignmentText: "organization-defined time period",
        value: "at most 90 days",
      },
      {
        odpId: "03.01.01.g.01",
        assignmentText: "organization-defined time period",
        value: "24 hours",
      },
      {
        odpId: "03.01.01.g.02",
        assignmentText: "organization-defined time period",
        value: "24 hours",
      },
      {
        odpId: "03.01.01.g.03",
        assignmentText: "organization-defined time period",
        value: "24 hours",
      },
      {
        odpId: "03.01.01.h.01",
        assignmentText: "organization-defined time period",
        value: "at most 24 hours",
      },
      {
        odpId: "03.01.01.h.02",
        assignmentText: "organization-defined circumstances",
        value: "the work period ends, for privileged users at a minimum",
      },
    ],
  },

  "3.1.5": {
    rev3Title: "System Access Authorization",
    statement: [
      "a. Allow only authorized system access for users (or processes acting on behalf of users) that is necessary to accomplish assigned organizational tasks.",
      "b. Authorize access to: (1) [ODP: security functions], and (2) [ODP: security-relevant information].",
      "c. Review the privileges assigned to roles or classes of users [ODP: frequency] to validate the need for such privileges.",
      "d. Reassign or remove privileges, as necessary.",
    ],
    relatedControls: ["AC-06", "AC-06(01)", "AC-06(07)", "AU-09(04)"],
    odps: [
      {
        odpId: "03.01.05.b.01",
        assignmentText: "organization-defined security functions",
        value:
          "at a minimum and if applicable: establishing system accounts and assigning privileges, configuring access authorizations, configuring settings for events to be audited, establishing vulnerability scanning parameters, establishing intrusion detection parameters, and managing audit information",
      },
      {
        odpId: "03.01.05.b.02",
        assignmentText: "organization-defined security-relevant information",
        value:
          "at a minimum and if applicable: threat and vulnerability information, filtering rules for routers or firewalls, configuration parameters for security services, cryptographic key management information, security architecture, access control lists, and audit information",
      },
      {
        odpId: "03.01.05.c",
        assignmentText: "organization-defined frequency",
        value: "at least every 12 months",
      },
    ],
  },

  "3.1.6": {
    rev3Title: "Privileged Account Management",
    statement: [
      "a. Restrict privileged accounts on the system to [ODP: personnel or roles].",
      "b. Require that users (or roles) with privileged accounts use non-privileged accounts when accessing non-security functions or non-security information.",
    ],
    relatedControls: ["AC-06(02)", "AC-06(05)"],
    odps: [
      {
        odpId: "03.01.06.a",
        assignmentText: "organization-defined personnel or roles",
        value: "only defined and authorized personnel or administrative roles",
      },
    ],
  },

  "3.1.8": {
    rev3Title: "Invalid Logon Attempts",
    statement: [
      "a. Enforce a limit of [ODP: number] consecutive invalid logon attempts by a user during a [ODP: time period].",
      "b. Automatically [ODP: action] when the maximum number of unsuccessful attempts is exceeded.",
    ],
    relatedControls: ["AC-07"],
    odps: [
      {
        odpId: "03.01.08.a.01",
        assignmentText: "organization-defined number",
        value: "at most five (5)",
      },
      {
        odpId: "03.01.08.a.02",
        assignmentText: "organization-defined time period",
        value: "period of five (5) minutes",
      },
      {
        odpId: "03.01.08.b",
        assignmentText: "organization-defined action",
        value:
          "lock the account or node for an at least 15-minute time period; lock the account or node until released by an administrator and notify a system administrator",
      },
    ],
  },

  "3.1.10": {
    rev3Title: "Device Lock",
    statement: [
      "a. Prevent access to the system by initiating a device lock after [ODP: time period] of inactivity; requiring the user to initiate a device lock before leaving the system unattended.",
      "b. Retain the device lock until the user reestablishes access using established identification and authentication procedures.",
      "c. Conceal, via the device lock, information previously visible on the display with a publicly viewable image.",
    ],
    relatedControls: ["AC-11", "AC-11(01)"],
    odps: [
      {
        odpId: "03.01.10.a",
        assignmentText: "organization-defined time period",
        value:
          'initiating a device lock after "at most 15 minutes" of inactivity and requiring the user to initiate a device lock before leaving the system unattended',
      },
    ],
  },

  "3.1.11": {
    rev3Title: "Session Termination",
    statement: [
      "Terminate a user session automatically after [ODP: conditions or trigger events requiring session disconnect].",
    ],
    relatedControls: ["AC-12"],
    odps: [
      {
        odpId: "03.01.11",
        assignmentText:
          "organization-defined conditions or trigger events requiring session disconnect",
        value:
          "a specified duration (maximum of 24 hours) of inactivity, misbehavior (end the session due to an attempted policy violation), and maintenance (terminate sessions to prevent issues with an upgrade or service outage)",
      },
    ],
  },

  "3.1.20": {
    rev3Title: "Use of External Systems",
    statement: [
      "a. Prohibit the use of external systems unless the systems are specifically authorized.",
      "b. Establish the following security requirements to be satisfied on external systems prior to allowing use of or access to those systems by authorized individuals: [ODP: security requirements].",
      "c. Permit authorized individuals to use external systems to access the organizational system or to process, store, or transmit CUI only after: (1) Verifying that the security requirements on the external systems as specified in the organization's system security plans have been satisfied, and (2) Retaining approved system connection or processing agreements with the organizational entities hosting the external systems.",
      "d. Restrict the use of organization-controlled portable storage devices by authorized individuals on external systems.",
    ],
    relatedControls: ["AC-20", "AC-20(01)", "AC-20(02)"],
    odps: [
      {
        odpId: "03.01.20.b",
        assignmentText: "organization-defined security requirements",
        value:
          "Guidance: Organizations establish specific terms and conditions for the use of external systems in accordance with organizational security policies and procedures. At a minimum, terms and conditions address the specific types of applications that can be accessed on organizational systems from external systems and the highest security category of information that can be processed, stored, or transmitted on external systems. If the terms and conditions with the owners of the external systems cannot be established, organizations may impose restrictions on organizational personnel using those external systems. If applicable, use NIST SP 800-47 as a guide for establishing information exchanges between organizations.",
      },
    ],
  },
};

/**
 * Check if a control has ODP data.
 */
export function hasOdp(controlId: string): boolean {
  return controlId in odpData;
}

/**
 * Get ODP data for a control, or null if none exists.
 */
export function getOdp(controlId: string): ControlOdp | null {
  return odpData[controlId] ?? null;
}
