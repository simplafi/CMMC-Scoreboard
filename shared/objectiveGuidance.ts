export type ObjectiveType = "POLICY" | "CONFIG";
export type ConfidenceLevel = "HIGH" | "MEDIUM" | "LOW";

export interface ObjectiveGuidance {
  type: ObjectiveType;
  notes: string;
  /** Plain-English tooltip for non-technical users (60-90 words) */
  simplafi?: string;
  /** Assessment Guide discussion text */
  discussion?: string;
  /** Further discussion with practical examples */
  furtherDiscussion?: string;
  /** Assessment considerations / interview questions */
  assessmentConsiderations?: string[];
  /** Confidence level of POLICY/CONFIG classification */
  confidence?: ConfidenceLevel;
  /** Primary verb driving the classification */
  verb?: string;
}

export const objectiveGuidance: Record<string, ObjectiveGuidance> = {
  // ═══════════════════════════════════════════════════════════════════════════
  // 3.1 - ACCESS CONTROL (22 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.1.1
  "3.1.1.a": {
    type: "POLICY",
    notes:
      "Identify and document authorized users including their roles and authorization basis.",
    simplafi:
      "It is important to have a process by which users gain access to your system. Simply saying that information is in Entra, or some other identity provider, is insufficient because there is no check and balance. Documenting this information some place outside of Entra is the only way a company can audit their active users list. This could be maintained in an Excel sheet, table within your HRMS, or even a secure notebook.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.1.b": {
    type: "POLICY",
    notes:
      "Identify and document processes that act on behalf of authorized users.",
    simplafi:
      "Think of this as service accounts, scheduled tasks, and automations that do work on behalf of a person. If you have a backup job that runs every night, someone authorized that process. You need a list that ties each automated process back to the person responsible for it — who owns it, what it does, and why it needs access. A simple register or table works fine.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.1.c": {
    type: "POLICY",
    notes:
      "Identify and document devices and other systems authorized to connect to the system.",
    simplafi:
      "Every laptop, phone, printer, or server that touches your network should be on a list somewhere. This isn't about blocking them yet — that's a different objective. This is about knowing what's supposed to be there. A device inventory — whether it's a spreadsheet, Intune's device list export, or a CMDB — gives you a baseline to compare against when something unfamiliar shows up.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.1.d": {
    type: "CONFIG",
    notes:
      "Enforce system access controls so that only authorized users can access the system using authentication mechanisms.",
    simplafi:
      "This is the enforcement side of (a). You've identified who should have access — now prove the system actually stops everyone else. In Entra, this means accounts require authentication, disabled accounts can't log in, and there's no backdoor. An assessor wants to see the login screen and Entra's access policies, not just a policy document.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },
  "3.1.1.e": {
    type: "CONFIG",
    notes:
      "Enforce process-level access controls so that only processes acting on behalf of authorized users can access the system.",
    simplafi:
      "This is the enforcement side of (b). If a service account or automated process can access your system, Entra needs to verify it's legitimate — just like a human. Service accounts should have their own credentials, run under least-privilege, and can't be used interactively. If you disabled the account in Entra, the process should stop working. That's the test.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },
  "3.1.1.f": {
    type: "CONFIG",
    notes:
      "Enforce device-level access controls so that only authorized devices and systems can connect.",
    simplafi:
      "This is the enforcement side of (c). It's not enough to have a device list — you need something that prevents unknown devices from connecting. In the Microsoft ecosystem, this is Intune compliance policies paired with Entra conditional access. A random laptop plugged into your network or trying to sign in shouldn't just work — it should be blocked until it's enrolled and compliant.",
    discussion:
      "Access control policies (e.g., identity- or role-based policies, control matrices, and  cryptography) control access between active entities or subjects (i.e., users or processes  acting on behalf of users) and passive entities or objects (e.g., devices, files, records, and  domains) in systems. Access enforcement mechanisms can be employed at the application  and service level to provide increased information security. Other systems include systems  internal and external to the organization. Th...",
    furtherDiscussion:
      "Identify users, processes, and devices that are allowed to use company computers and can  log on to the company network. Automated updates and other automatic processes should  be associated with the user who initiated (authorized) the process. Limit the devices (e.g.,  printers) that can be accessed by company computers. Set up your system so that only  authorized users, processes, and devices can access the company network.  This requirement, AC.L2-3.1.1, controls system access based on user, ...",
    assessmentConsiderations: [
      "Is a list of authorized users maintained that defines their identities and roles [a]?",
      "Are account requests authorized before system access is granted [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // Control 3.1.2
  "3.1.2.a": {
    type: "POLICY",
    notes:
      "Define and document the types of transactions and functions that each authorized user role is permitted to execute.",
    simplafi:
      "Before you can restrict what people do in your systems, you need to define what each role is allowed to do. This is your role-based access matrix — a document that maps job titles or roles to the specific transactions and functions they need. For example, an HR manager can access personnel records but not financial systems. This doesn't live in Entra; it lives in a policy or spreadsheet that Entra's configuration is built from.",
    discussion:
      "Organizations may choose to define access privileges or other attributes by account, by type  of account, or a combination of both. System account types include individual, shared, group,  system, anonymous, guest, emergency, developer, manufacturer, vendor, and temporary.  Other attributes required for authorizing access include restrictions on time-of-day, day-of- week, and point-of-origin. In defining other account attributes, organizations consider  system-related requirements (e.g., system ...",
    furtherDiscussion:
      "Limit users to only the information systems, roles, or applications they are permitted to use  and are needed for their roles and responsibilities. Limit access to applications and data  based on the authorized users’ roles and responsibilities. Common types of functions a user  can be assigned are create, read, update, and delete.  Example  Your team manages DoD contracts for your company. Members of your team need to access  the contract information to perform their work properly. Because some...",
    assessmentConsiderations: [
      "Are access control lists used to limit access to applications and data based on role and/or \nidentity [a]?",
      "Is access for authorized users restricted to those parts of the system they are explicitly \npermitted to use (e.g., a person who only performs word-processing cannot access \ndeveloper tools) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.2.b": {
    type: "CONFIG",
    notes:
      "Enforce role-based access controls so that users can only execute the defined transactions and functions assigned to their roles.",
    simplafi:
      "This is the enforcement side of (a). Once you've defined what each role can do, Entra and your applications need to actually enforce it. This means role-based access control is configured in Entra, app roles are assigned properly, and someone in marketing can't stumble into admin settings. An assessor will want to see your Entra role assignments and compare them against your access matrix.",
    discussion:
      "Organizations may choose to define access privileges or other attributes by account, by type  of account, or a combination of both. System account types include individual, shared, group,  system, anonymous, guest, emergency, developer, manufacturer, vendor, and temporary.  Other attributes required for authorizing access include restrictions on time-of-day, day-of- week, and point-of-origin. In defining other account attributes, organizations consider  system-related requirements (e.g., system ...",
    furtherDiscussion:
      "Limit users to only the information systems, roles, or applications they are permitted to use  and are needed for their roles and responsibilities. Limit access to applications and data  based on the authorized users’ roles and responsibilities. Common types of functions a user  can be assigned are create, read, update, and delete.  Example  Your team manages DoD contracts for your company. Members of your team need to access  the contract information to perform their work properly. Because some...",
    assessmentConsiderations: [
      "Are access control lists used to limit access to applications and data based on role and/or \nidentity [a]?",
      "Is access for authorized users restricted to those parts of the system they are explicitly \npermitted to use (e.g., a person who only performs word-processing cannot access \ndeveloper tools) [b]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // Control 3.1.3
  "3.1.3.a": {
    type: "POLICY",
    notes:
      "Define and document information flow control policies governing CUI movement within and between systems.",
    simplafi:
      "You need a written policy that describes how CUI is allowed to move through your environment — between networks, devices, users, and external parties. This isn't a technical configuration yet. It's the rulebook that says things like 'CUI can only be shared with subcontractors through encrypted email' or 'CUI never leaves the GCC High tenant.' Without this, your technical controls have no foundation.",
    discussion:
      "Information flow control regulates where information can travel within a system and between systems (versus who can access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include the following: keeping export-controlled information from being transmitted in the clear to the internet; blocking outside traffic that claims to be from within the organization; restricting requests to the internet that are not from the internal web pro...",
    furtherDiscussion:
      "Typically, companies will have a firewall between the internal network and the internet.  Often multiple firewalls or routing switches are used inside a network to create zones to  separate sensitive data, business units, or user groups. Proxy servers can be used to break  the connection between multiple networks. All traffic entering or leaving a network is  intercepted by the proxy, preventing direct access between networks. Companies should  also ensure by policy and enforcement mechanisms th...",
    assessmentConsiderations: [
      "Are designated sources of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (e.g., external networks, \nIP addresses, ports, and protocols) [c]?",
      "Are designated destinations of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (external networks and \nIP addresses) [c]?",
      "Are authorizations defined for each source and destination within the system and \nbetween interconnected systems (e.g., allow or deny rules for each combination of source \nand destination) [d]?",
      "Are approved authorizations for controlling the flow of regulated data enforced within \nthe system and between interconnected systems (e.g., traffic between authorized sources \nand destinations is allowed and traffic between unauthorized sources and destinations \nis denied) [e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.3.b": {
    type: "POLICY",
    notes:
      "Define and document the methods and enforcement mechanisms selected for controlling CUI flow.",
    simplafi:
      "Alongside your flow policy, you need to define how you'll actually enforce it. Are you using Purview sensitivity labels? DLP rules? Conditional access blocking downloads to unmanaged devices? This objective asks you to document the methods — the specific tools and mechanisms — before you configure them. Think of it as your implementation blueprint.",
    discussion:
      "Information flow control regulates where information can travel within a system and between systems (versus who can access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include the following: keeping export-controlled information from being transmitted in the clear to the internet; blocking outside traffic that claims to be from within the organization; restricting requests to the internet that are not from the internal web pro...",
    furtherDiscussion:
      "Typically, companies will have a firewall between the internal network and the internet.  Often multiple firewalls or routing switches are used inside a network to create zones to  separate sensitive data, business units, or user groups. Proxy servers can be used to break  the connection between multiple networks. All traffic entering or leaving a network is  intercepted by the proxy, preventing direct access between networks. Companies should  also ensure by policy and enforcement mechanisms th...",
    assessmentConsiderations: [
      "Are designated sources of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (e.g., external networks, \nIP addresses, ports, and protocols) [c]?",
      "Are designated destinations of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (external networks and \nIP addresses) [c]?",
      "Are authorizations defined for each source and destination within the system and \nbetween interconnected systems (e.g., allow or deny rules for each combination of source \nand destination) [d]?",
      "Are approved authorizations for controlling the flow of regulated data enforced within \nthe system and between interconnected systems (e.g., traffic between authorized sources \nand destinations is allowed and traffic between unauthorized sources and destinations \nis denied) [e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.3.c": {
    type: "POLICY",
    notes:
      "Identify and document designated sources and destinations for CUI within the system and between interconnected systems.",
    simplafi:
      "This is about mapping where CUI is allowed to go. You need to identify the specific networks, people, devices, and external systems that are approved sources and destinations for CUI. Think of it as a data flow diagram — CUI originates in these systems, gets processed here, and can be shared with these partners. Without this map, you can't build meaningful DLP rules in Purview.",
    discussion:
      "Information flow control regulates where information can travel within a system and between systems (versus who can access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include the following: keeping export-controlled information from being transmitted in the clear to the internet; blocking outside traffic that claims to be from within the organization; restricting requests to the internet that are not from the internal web pro...",
    furtherDiscussion:
      "Typically, companies will have a firewall between the internal network and the internet.  Often multiple firewalls or routing switches are used inside a network to create zones to  separate sensitive data, business units, or user groups. Proxy servers can be used to break  the connection between multiple networks. All traffic entering or leaving a network is  intercepted by the proxy, preventing direct access between networks. Companies should  also ensure by policy and enforcement mechanisms th...",
    assessmentConsiderations: [
      "Are designated sources of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (e.g., external networks, \nIP addresses, ports, and protocols) [c]?",
      "Are designated destinations of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (external networks and \nIP addresses) [c]?",
      "Are authorizations defined for each source and destination within the system and \nbetween interconnected systems (e.g., allow or deny rules for each combination of source \nand destination) [d]?",
      "Are approved authorizations for controlling the flow of regulated data enforced within \nthe system and between interconnected systems (e.g., traffic between authorized sources \nand destinations is allowed and traffic between unauthorized sources and destinations \nis denied) [e]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.3.d": {
    type: "POLICY",
    notes:
      "Define and document authorizations for controlling the flow of CUI.",
    simplafi:
      "This goes one level deeper than your flow policy. You need to define who has the authority to approve CUI movement and under what conditions. Can a project manager approve sharing CUI with a subcontractor, or does that require a security officer? These authorization rules feed directly into how you configure your Purview DLP policies and sensitivity label scoping.",
    discussion:
      "Information flow control regulates where information can travel within a system and between systems (versus who can access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include the following: keeping export-controlled information from being transmitted in the clear to the internet; blocking outside traffic that claims to be from within the organization; restricting requests to the internet that are not from the internal web pro...",
    furtherDiscussion:
      "Typically, companies will have a firewall between the internal network and the internet.  Often multiple firewalls or routing switches are used inside a network to create zones to  separate sensitive data, business units, or user groups. Proxy servers can be used to break  the connection between multiple networks. All traffic entering or leaving a network is  intercepted by the proxy, preventing direct access between networks. Companies should  also ensure by policy and enforcement mechanisms th...",
    assessmentConsiderations: [
      "Are designated sources of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (e.g., external networks, \nIP addresses, ports, and protocols) [c]?",
      "Are designated destinations of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (external networks and \nIP addresses) [c]?",
      "Are authorizations defined for each source and destination within the system and \nbetween interconnected systems (e.g., allow or deny rules for each combination of source \nand destination) [d]?",
      "Are approved authorizations for controlling the flow of regulated data enforced within \nthe system and between interconnected systems (e.g., traffic between authorized sources \nand destinations is allowed and traffic between unauthorized sources and destinations \nis denied) [e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.3.e": {
    type: "CONFIG",
    notes:
      "Enforce approved CUI flow control authorizations using technical mechanisms such as firewalls, DLP, and access control lists.",
    simplafi:
      "This is the enforcement side of (a) through (d). All those flow policies, methods, source-destination maps, and authorization rules you documented? Now they need to be enforced technically. In the Microsoft ecosystem, this means Purview DLP policies are active, sensitivity labels are applied, and conditional access rules prevent unauthorized data movement. An assessor wants to see the DLP policy matches your written rules.",
    discussion:
      "Information flow control regulates where information can travel within a system and between systems (versus who can access the information) and without explicit regard to subsequent accesses to that information. Flow control restrictions include the following: keeping export-controlled information from being transmitted in the clear to the internet; blocking outside traffic that claims to be from within the organization; restricting requests to the internet that are not from the internal web pro...",
    furtherDiscussion:
      "Typically, companies will have a firewall between the internal network and the internet.  Often multiple firewalls or routing switches are used inside a network to create zones to  separate sensitive data, business units, or user groups. Proxy servers can be used to break  the connection between multiple networks. All traffic entering or leaving a network is  intercepted by the proxy, preventing direct access between networks. Companies should  also ensure by policy and enforcement mechanisms th...",
    assessmentConsiderations: [
      "Are designated sources of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (e.g., external networks, \nIP addresses, ports, and protocols) [c]?",
      "Are designated destinations of regulated data identified within the system (e.g., internal \nnetwork and IP address) and between interconnected systems (external networks and \nIP addresses) [c]?",
      "Are authorizations defined for each source and destination within the system and \nbetween interconnected systems (e.g., allow or deny rules for each combination of source \nand destination) [d]?",
      "Are approved authorizations for controlling the flow of regulated data enforced within \nthe system and between interconnected systems (e.g., traffic between authorized sources \nand destinations is allowed and traffic between unauthorized sources and destinations \nis denied) [e]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },

  // Control 3.1.4
  "3.1.4.a": {
    type: "POLICY",
    notes:
      "Define and document the duties of individuals requiring separation of duties.",
    simplafi:
      "Separation of duties means no single person should control an entire critical process. Before configuring anything, you need to identify which duties in your organization create a conflict of interest when combined. For example, the person who approves new user accounts shouldn't also be the one who creates them. Document these duty pairs — this becomes the foundation for how you assign roles.",
    discussion:
      "Separation of duties addresses the potential for abuse of authorized privileges and helps to  reduce the risk of malevolent activity without collusion. Separation of duties includes  dividing mission functions and system support functions among different individuals or  roles; conducting system support functions with different individuals (e.g., configuration  management, quality assurance and testing, system management, programming, and  network security); and ensuring that security personnel a...",
    furtherDiscussion:
      "No one person should be in charge of an entire critical task from beginning to end.  Documenting and dividing elements of important duties and tasks between employees  reduces intentional or unintentional execution of malicious activities.  Example 1  You are responsible for the management of several key systems within your organization  including some that process CUI. You assign the task of reviewing the system logs to two  different people. This way, no one person is solely responsible for th...",
    assessmentConsiderations: [
      "Does system documentation identify the system functions or processes that require \nseparation of duties (e.g., function combinations that represent a conflict of interest or \nan over-allocation of security privilege for one individual) [a]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.4.b": {
    type: "POLICY",
    notes:
      "Establish and document role assignments ensuring that duties requiring separation are assigned to separate individuals.",
    simplafi:
      "Once you've identified which duties need separation, assign them to different people. This is an organizational decision, not a technical one. Your org chart and role assignments should show that the person who approves access requests is different from the person who provisions them. Document these assignments so an assessor can verify the separation exists on paper before checking the system.",
    discussion:
      "Separation of duties addresses the potential for abuse of authorized privileges and helps to  reduce the risk of malevolent activity without collusion. Separation of duties includes  dividing mission functions and system support functions among different individuals or  roles; conducting system support functions with different individuals (e.g., configuration  management, quality assurance and testing, system management, programming, and  network security); and ensuring that security personnel a...",
    furtherDiscussion:
      "No one person should be in charge of an entire critical task from beginning to end.  Documenting and dividing elements of important duties and tasks between employees  reduces intentional or unintentional execution of malicious activities.  Example 1  You are responsible for the management of several key systems within your organization  including some that process CUI. You assign the task of reviewing the system logs to two  different people. This way, no one person is solely responsible for th...",
    assessmentConsiderations: [
      "Does system documentation identify the system functions or processes that require \nseparation of duties (e.g., function combinations that represent a conflict of interest or \nan over-allocation of security privilege for one individual) [a]?",
    ],
    confidence: "HIGH",
    verb: "assigned",
  },
  "3.1.4.c": {
    type: "CONFIG",
    notes:
      "Enforce privilege separation through access controls so that no single individual holds conflicting access privileges.",
    simplafi:
      "This is the enforcement side of (a) and (b). The roles you defined need to be reflected in your system's access controls. In Entra, this means the admin who can create accounts doesn't have approval rights, and vice versa. Privileged Identity Management (PIM) in Entra can help enforce this by requiring separate role activations for conflicting duties.",
    discussion:
      "Separation of duties addresses the potential for abuse of authorized privileges and helps to  reduce the risk of malevolent activity without collusion. Separation of duties includes  dividing mission functions and system support functions among different individuals or  roles; conducting system support functions with different individuals (e.g., configuration  management, quality assurance and testing, system management, programming, and  network security); and ensuring that security personnel a...",
    furtherDiscussion:
      "No one person should be in charge of an entire critical task from beginning to end.  Documenting and dividing elements of important duties and tasks between employees  reduces intentional or unintentional execution of malicious activities.  Example 1  You are responsible for the management of several key systems within your organization  including some that process CUI. You assign the task of reviewing the system logs to two  different people. This way, no one person is solely responsible for th...",
    assessmentConsiderations: [
      "Does system documentation identify the system functions or processes that require \nseparation of duties (e.g., function combinations that represent a conflict of interest or \nan over-allocation of security privilege for one individual) [a]?",
    ],
    confidence: "HIGH",
    verb: "granted",
  },

  // Control 3.1.5
  "3.1.5.a": {
    type: "POLICY",
    notes:
      "Identify and document all privileged accounts within the system.",
    simplafi:
      "You need a list of every privileged account in your environment — Global Admins, Exchange Admins, Security Admins, service accounts with elevated rights. This isn't just Entra; include privileged accounts in every system that handles CUI. A simple inventory that names the account, who owns it, and what level of privilege it has. This list is what you'll audit against quarterly.",
    discussion:
      "Organizations employ the principle of least privilege for specific duties and authorized  accesses for users and processes. The principle of least privilege is applied with the goal of  authorized privileges no higher than necessary to accomplish required organizational  missions or business functions. Organizations consider the creation of additional processes,  roles, and system accounts as necessary, to achieve least privilege. Organizations also apply  least privilege to the development, imp...",
    furtherDiscussion:
      "The principle of least privilege applies to all users and processes on all systems, but it is  critical to systems containing or accessing CUI. Least privilege:  • restricts user access to only the machines and information needed to fulfill job  responsibilities; and  • limits what system configuration settings users can change, only allowing individuals  with a business need to change them.  Example  You create accounts for an organization that processes CUI. By default, everyone is assigned  a...",
    assessmentConsiderations: [
      "Are privileged accounts documented and is when they may be used defined [a]?",
      "Are users assigned privileged accounts to perform their job functions only when it is \nnecessary [b]?",
      "Are necessary security functions identified (e.g., access control configuration, system \nconfiguration settings, or privileged account lists) that must be managed through the use \nof privileged accounts [c]?",
      "Is access to privileged functions and security information restricted to authorized \nemployees [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.5.b": {
    type: "CONFIG",
    notes:
      "Enforce least-privilege access controls on privileged accounts so that only authorized personnel have access with minimum necessary permissions.",
    simplafi:
      "This is the enforcement side of (a). Every privileged account on your list needs to be justified and limited to only what's necessary. In Entra, use Privileged Identity Management (PIM) so admins don't have standing privileges — they activate roles only when needed, with time limits and approval workflows. An assessor will check whether your Global Admin count matches your documented justifications.",
    discussion:
      "Organizations employ the principle of least privilege for specific duties and authorized  accesses for users and processes. The principle of least privilege is applied with the goal of  authorized privileges no higher than necessary to accomplish required organizational  missions or business functions. Organizations consider the creation of additional processes,  roles, and system accounts as necessary, to achieve least privilege. Organizations also apply  least privilege to the development, imp...",
    furtherDiscussion:
      "The principle of least privilege applies to all users and processes on all systems, but it is  critical to systems containing or accessing CUI. Least privilege:  • restricts user access to only the machines and information needed to fulfill job  responsibilities; and  • limits what system configuration settings users can change, only allowing individuals  with a business need to change them.  Example  You create accounts for an organization that processes CUI. By default, everyone is assigned  a...",
    assessmentConsiderations: [
      "Are privileged accounts documented and is when they may be used defined [a]?",
      "Are users assigned privileged accounts to perform their job functions only when it is \nnecessary [b]?",
      "Are necessary security functions identified (e.g., access control configuration, system \nconfiguration settings, or privileged account lists) that must be managed through the use \nof privileged accounts [c]?",
      "Is access to privileged functions and security information restricted to authorized \nemployees [d]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },
  "3.1.5.c": {
    type: "POLICY",
    notes:
      "Identify and document security functions within the system.",
    simplafi:
      "Beyond just privileged accounts, identify the specific security functions in your environment — managing firewalls, configuring DLP policies, modifying audit logs, managing encryption keys. These are the actions that, if misused, could compromise your entire security posture. Document them so you know exactly which functions need the tightest access controls.",
    discussion:
      "Organizations employ the principle of least privilege for specific duties and authorized  accesses for users and processes. The principle of least privilege is applied with the goal of  authorized privileges no higher than necessary to accomplish required organizational  missions or business functions. Organizations consider the creation of additional processes,  roles, and system accounts as necessary, to achieve least privilege. Organizations also apply  least privilege to the development, imp...",
    furtherDiscussion:
      "The principle of least privilege applies to all users and processes on all systems, but it is  critical to systems containing or accessing CUI. Least privilege:  • restricts user access to only the machines and information needed to fulfill job  responsibilities; and  • limits what system configuration settings users can change, only allowing individuals  with a business need to change them.  Example  You create accounts for an organization that processes CUI. By default, everyone is assigned  a...",
    assessmentConsiderations: [
      "Are privileged accounts documented and is when they may be used defined [a]?",
      "Are users assigned privileged accounts to perform their job functions only when it is \nnecessary [b]?",
      "Are necessary security functions identified (e.g., access control configuration, system \nconfiguration settings, or privileged account lists) that must be managed through the use \nof privileged accounts [c]?",
      "Is access to privileged functions and security information restricted to authorized \nemployees [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.5.d": {
    type: "CONFIG",
    notes:
      "Enforce least-privilege access controls on security functions so that only authorized personnel can access them.",
    simplafi:
      "This is the enforcement side of (c). Access to security functions should follow least privilege — only the people who need to manage firewalls, DLP, or audit logs should be able to. In Entra, this means Security Administrator and Compliance Administrator roles are assigned sparingly through PIM, not handed out permanently. An assessor will look at who can actually change your security settings.",
    discussion:
      "Organizations employ the principle of least privilege for specific duties and authorized  accesses for users and processes. The principle of least privilege is applied with the goal of  authorized privileges no higher than necessary to accomplish required organizational  missions or business functions. Organizations consider the creation of additional processes,  roles, and system accounts as necessary, to achieve least privilege. Organizations also apply  least privilege to the development, imp...",
    furtherDiscussion:
      "The principle of least privilege applies to all users and processes on all systems, but it is  critical to systems containing or accessing CUI. Least privilege:  • restricts user access to only the machines and information needed to fulfill job  responsibilities; and  • limits what system configuration settings users can change, only allowing individuals  with a business need to change them.  Example  You create accounts for an organization that processes CUI. By default, everyone is assigned  a...",
    assessmentConsiderations: [
      "Are privileged accounts documented and is when they may be used defined [a]?",
      "Are users assigned privileged accounts to perform their job functions only when it is \nnecessary [b]?",
      "Are necessary security functions identified (e.g., access control configuration, system \nconfiguration settings, or privileged account lists) that must be managed through the use \nof privileged accounts [c]?",
      "Is access to privileged functions and security information restricted to authorized \nemployees [d]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },

  // Control 3.1.6
  "3.1.6.a": {
    type: "POLICY",
    notes:
      "Identify and document nonsecurity functions within the system.",
    simplafi:
      "Identify the day-to-day functions in your environment that don't require elevated privileges — reading email, editing documents, browsing SharePoint. This seems obvious, but the point is to draw a clear line between what's a normal business function and what's a security or admin function. This distinction drives the requirement that admins use separate standard accounts for their regular work.",
    discussion:
      "This requirement limits exposure when operating from within privileged accounts or roles.  The inclusion of roles addresses situations where organizations implement access control  policies such as role-based access control and where a change of role provides the same  degree of assurance in the change of access authorizations for the user and all processes  acting on behalf of the user as would be provided by a change between a privileged and non- privileged account.  FURTHER DISCUSSION",
    furtherDiscussion:
      "A user with a privileged account can perform more tasks and access more information than  a person with a non-privileged account. Tasks (including unauthorized tasks orchestrated  by attackers) performed when using the privileged account can have a greater impact on the  21 NIST SP 800-171A, p. 11.  22 NIST SP 800-171 Rev. 2, p. 12.  system. System administrators and users with privileged accounts must be trained not to use  their privileged accounts for everyday tasks, such as browsing the inte...",
    assessmentConsiderations: [
      "Are nonsecurity functions and non-privileged roles defined [a,b]?",
      "Is it required that nonsecurity functions only be accessed with the use of non-privileged \naccounts? How is this verified [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.6.b": {
    type: "CONFIG",
    notes:
      "Enforce account separation so that users must use non-privileged accounts or roles when accessing nonsecurity functions.",
    simplafi:
      "This is the enforcement side of (a). Your administrators should have two accounts — a privileged one for admin work and a standard one for checking email and editing documents. In Entra, this means your IT team logs into their everyday apps with a non-privileged account and only activates their admin role through PIM when needed. An assessor will check whether admins are browsing the web with Global Admin rights.",
    discussion:
      "This requirement limits exposure when operating from within privileged accounts or roles.  The inclusion of roles addresses situations where organizations implement access control  policies such as role-based access control and where a change of role provides the same  degree of assurance in the change of access authorizations for the user and all processes  acting on behalf of the user as would be provided by a change between a privileged and non- privileged account.  FURTHER DISCUSSION",
    furtherDiscussion:
      "A user with a privileged account can perform more tasks and access more information than  a person with a non-privileged account. Tasks (including unauthorized tasks orchestrated  by attackers) performed when using the privileged account can have a greater impact on the  21 NIST SP 800-171A, p. 11.  22 NIST SP 800-171 Rev. 2, p. 12.  system. System administrators and users with privileged accounts must be trained not to use  their privileged accounts for everyday tasks, such as browsing the inte...",
    assessmentConsiderations: [
      "Are nonsecurity functions and non-privileged roles defined [a,b]?",
      "Is it required that nonsecurity functions only be accessed with the use of non-privileged \naccounts? How is this verified [b]?",
    ],
    confidence: "HIGH",
    verb: "required",
  },

  // Control 3.1.7
  "3.1.7.a": {
    type: "POLICY",
    notes:
      "Define and document privileged functions within the system.",
    simplafi:
      "Define exactly which functions in your environment are considered privileged — creating user accounts, modifying security policies, accessing audit logs, changing firewall rules. This is your privilege boundary. If it's not on this list, it's not a privileged function. This definition feeds directly into how you configure admin roles and what gets captured in your audit logs.",
    discussion:
      "Privileged functions include establishing system accounts, performing system integrity  checks, conducting patching operations, or administering cryptographic key management  activities. Non-privileged users are individuals that do not possess appropriate  authorizations. Circumventing intrusion detection and prevention mechanisms or malicious  code protection mechanisms are examples of privileged functions that require protection  23 NIST SP 800-171A, p. 12.  24 NIST SP 800-171 Rev. 2, p. 12.  ...",
    furtherDiscussion:
      "Non-privileged users should receive only those permissions required to perform their basic  job functions. Privileged users are granted additional permissions because their jobs require  them. Privileged functions typically involve the control, monitoring, or administration of the  system and its security measures. When these special privileged functions are performed,  the activity must be captured in an audit log, which can be used to identify abuse. Non- privileged employees must not be grant...",
    assessmentConsiderations: [
      "Is it possible to identify who enabled privileges at any particular time [d]?",
      "Are the privileged system functions documented (e.g., functions that involve the control, \nmonitoring or administration of the system, including security functions and log \nmanagement) [a]?",
      "Do documented procedures describe the configuration of the system to ensure system \nroles do not grant non-privileged users the ability to execute privileged functions [c]?",
      "Do procedures describe the configuration of system settings to capture the execution of \nall privileged functions in audit logs [d]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.7.b": {
    type: "POLICY",
    notes:
      "Define and document which users are classified as non-privileged users.",
    simplafi:
      "Define who in your organization is a non-privileged user — essentially, everyone who shouldn't be performing the privileged functions you just identified. This might seem redundant, but it creates a clear boundary: if your name isn't on the privileged users list, you're non-privileged, and the system should prevent you from doing anything on the privileged functions list.",
    discussion:
      "Privileged functions include establishing system accounts, performing system integrity  checks, conducting patching operations, or administering cryptographic key management  activities. Non-privileged users are individuals that do not possess appropriate  authorizations. Circumventing intrusion detection and prevention mechanisms or malicious  code protection mechanisms are examples of privileged functions that require protection  23 NIST SP 800-171A, p. 12.  24 NIST SP 800-171 Rev. 2, p. 12.  ...",
    furtherDiscussion:
      "Non-privileged users should receive only those permissions required to perform their basic  job functions. Privileged users are granted additional permissions because their jobs require  them. Privileged functions typically involve the control, monitoring, or administration of the  system and its security measures. When these special privileged functions are performed,  the activity must be captured in an audit log, which can be used to identify abuse. Non- privileged employees must not be grant...",
    assessmentConsiderations: [
      "Is it possible to identify who enabled privileges at any particular time [d]?",
      "Are the privileged system functions documented (e.g., functions that involve the control, \nmonitoring or administration of the system, including security functions and log \nmanagement) [a]?",
      "Do documented procedures describe the configuration of the system to ensure system \nroles do not grant non-privileged users the ability to execute privileged functions [c]?",
      "Do procedures describe the configuration of system settings to capture the execution of \nall privileged functions in audit logs [d]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.7.c": {
    type: "CONFIG",
    notes:
      "Enforce access controls to prevent non-privileged users from executing privileged functions.",
    simplafi:
      "This is the enforcement side of (a) and (b). Non-privileged users must be technically prevented from executing privileged functions. In Entra, this means role-based access control is properly configured — a standard user can't access the Entra admin center, Security admin center, or Purview compliance portal. Conditional access policies and role assignments should make this impossible, not just unlikely.",
    discussion:
      "Privileged functions include establishing system accounts, performing system integrity  checks, conducting patching operations, or administering cryptographic key management  activities. Non-privileged users are individuals that do not possess appropriate  authorizations. Circumventing intrusion detection and prevention mechanisms or malicious  code protection mechanisms are examples of privileged functions that require protection  23 NIST SP 800-171A, p. 12.  24 NIST SP 800-171 Rev. 2, p. 12.  ...",
    furtherDiscussion:
      "Non-privileged users should receive only those permissions required to perform their basic  job functions. Privileged users are granted additional permissions because their jobs require  them. Privileged functions typically involve the control, monitoring, or administration of the  system and its security measures. When these special privileged functions are performed,  the activity must be captured in an audit log, which can be used to identify abuse. Non- privileged employees must not be grant...",
    assessmentConsiderations: [
      "Is it possible to identify who enabled privileges at any particular time [d]?",
      "Are the privileged system functions documented (e.g., functions that involve the control, \nmonitoring or administration of the system, including security functions and log \nmanagement) [a]?",
      "Do documented procedures describe the configuration of the system to ensure system \nroles do not grant non-privileged users the ability to execute privileged functions [c]?",
      "Do procedures describe the configuration of system settings to capture the execution of \nall privileged functions in audit logs [d]?",
    ],
    confidence: "HIGH",
    verb: "prevented",
  },
  "3.1.7.d": {
    type: "CONFIG",
    notes:
      "Implement audit logging so that all execution of privileged functions is captured in audit logs.",
    simplafi:
      "Every time a privileged function is executed, it needs to show up in your audit logs. In the Microsoft ecosystem, this means Entra sign-in logs capture admin role activations, the unified audit log in Purview tracks administrative actions, and PIM logs every role activation with who, what, and when. An assessor will ask you to pull a report showing privileged activity over the last 90 days.",
    discussion:
      "Privileged functions include establishing system accounts, performing system integrity  checks, conducting patching operations, or administering cryptographic key management  activities. Non-privileged users are individuals that do not possess appropriate  authorizations. Circumventing intrusion detection and prevention mechanisms or malicious  code protection mechanisms are examples of privileged functions that require protection  23 NIST SP 800-171A, p. 12.  24 NIST SP 800-171 Rev. 2, p. 12.  ...",
    furtherDiscussion:
      "Non-privileged users should receive only those permissions required to perform their basic  job functions. Privileged users are granted additional permissions because their jobs require  them. Privileged functions typically involve the control, monitoring, or administration of the  system and its security measures. When these special privileged functions are performed,  the activity must be captured in an audit log, which can be used to identify abuse. Non- privileged employees must not be grant...",
    assessmentConsiderations: [
      "Is it possible to identify who enabled privileges at any particular time [d]?",
      "Are the privileged system functions documented (e.g., functions that involve the control, \nmonitoring or administration of the system, including security functions and log \nmanagement) [a]?",
      "Do documented procedures describe the configuration of the system to ensure system \nroles do not grant non-privileged users the ability to execute privileged functions [c]?",
      "Do procedures describe the configuration of system settings to capture the execution of \nall privileged functions in audit logs [d]?",
    ],
    confidence: "HIGH",
    verb: "captured",
  },

  // Control 3.1.8
  "3.1.8.a": {
    type: "POLICY",
    notes:
      "Define and document the means of limiting unsuccessful logon attempts including lockout thresholds and duration.",
    simplafi:
      "Before configuring anything, decide on your lockout policy — how many failed attempts before lockout, how long the lockout lasts, and whether it resets automatically. Common practice is 3–5 attempts with a 15–30 minute lockout. Document this in your access control policy so your Entra configuration has a clear basis. The policy should also address how locked accounts get unlocked.",
    discussion:
      "This requirement applies regardless of whether the logon occurs via a local or network  connection. Due to the potential for denial of service, automatic lockouts initiated by systems  are, in most cases, temporary and automatically release after a predetermined period  established by the organization (i.e., a delay algorithm). If a delay algorithm is selected,  organizations may employ different algorithms for different system components based on  the capabilities of the respective components. ...",
    furtherDiscussion:
      "Consecutive unsuccessful logon attempts may indicate malicious activity. OSAs can mitigate  these attacks by limiting the number of unsuccessful logon attempts, typically by locking the  account. A defined number of consecutive unsuccessful logon attempts is a common  25 NIST SP 800-171A, p. 12.  26 NIST SP 800-171 Rev. 2, pp. 12-13.  configuration setting. OSAs are expected to set this number at a level that fits their risk  profile with the knowledge that fewer unsuccessful attempts provide hi...",
    assessmentConsiderations: [
      "Is there a defined threshold for the number of unsuccessful logon attempts for which the \nsystem takes action to prevent additional attempts [a]?",
      "Is a mechanism for limiting the number of unsuccessful logon attempts implemented and \ndoes it use the defined threshold [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.8.b": {
    type: "CONFIG",
    notes:
      "Implement account lockout mechanisms so that unsuccessful logon attempts are limited according to the defined policy.",
    simplafi:
      "This is the enforcement side of (a). Your documented lockout policy needs to be configured in Entra. Under Authentication Methods or through Entra's Smart Lockout settings, set the threshold and duration to match your policy. An assessor will compare your written policy to the actual Entra configuration — they should match exactly.",
    discussion:
      "This requirement applies regardless of whether the logon occurs via a local or network  connection. Due to the potential for denial of service, automatic lockouts initiated by systems  are, in most cases, temporary and automatically release after a predetermined period  established by the organization (i.e., a delay algorithm). If a delay algorithm is selected,  organizations may employ different algorithms for different system components based on  the capabilities of the respective components. ...",
    furtherDiscussion:
      "Consecutive unsuccessful logon attempts may indicate malicious activity. OSAs can mitigate  these attacks by limiting the number of unsuccessful logon attempts, typically by locking the  account. A defined number of consecutive unsuccessful logon attempts is a common  25 NIST SP 800-171A, p. 12.  26 NIST SP 800-171 Rev. 2, pp. 12-13.  configuration setting. OSAs are expected to set this number at a level that fits their risk  profile with the knowledge that fewer unsuccessful attempts provide hi...",
    assessmentConsiderations: [
      "Is there a defined threshold for the number of unsuccessful logon attempts for which the \nsystem takes action to prevent additional attempts [a]?",
      "Is a mechanism for limiting the number of unsuccessful logon attempts implemented and \ndoes it use the defined threshold [b]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.1.9
  "3.1.9.a": {
    type: "POLICY",
    notes:
      "Identify and document privacy and security notices required by CUI-specified rules, ensuring consistency and association with specific CUI categories.",
    simplafi:
      "If you handle CUI, certain categories require specific privacy and security notices — banners that appear when users log in or access systems containing CUI. Identify which CUI categories you handle, what notices are required for each, and ensure they're consistent across all systems. This is a documentation exercise first — know what notices you need before you configure them.",
    discussion:
      "System use notifications can be implemented using messages or warning banners displayed  before individuals log in to organizational systems. System use notifications are used only  for access via logon interfaces with human users and are not required when such human  interfaces do not exist. Based on a risk assessment, organizations consider whether a  secondary system use notification is needed to access applications or other system resources  after the initial network logon. Where necessary, ...",
    furtherDiscussion:
      "Every system containing or providing access to CUI has legal requirements concerning user  privacy and security notices. One method of addressing this requirement is the use of a  system-use notification banner that displays the legal requirements of using the system.  Users may be required to click to agree to the displayed requirements of using the system  each time they log on to the machine. This agreement can be used in the civil and/or criminal  prosecution of an attacker that violates the...",
    assessmentConsiderations: [
      "Are objectives identified for privacy and security notices, and does the implementation \nsatisfy the required objectives [a,b]? Discrepancies may indicate a deficient process \nand/or an incomplete objective for the overall requirement.",
      "Are there any special requirements associated with the specific CUI category [a]?",
      "Are appropriate notices displayed in areas where paper-based CUI is stored and \nprocessed [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.9.b": {
    type: "CONFIG",
    notes:
      "Display privacy and security notices prior to granting system access using login banners or notification mechanisms.",
    simplafi:
      "This is the enforcement side of (a). The notices you identified need to actually appear on screen. In Entra, configure a Terms of Use that users must accept at login. For SharePoint sites with CUI, add a banner or landing page. The key is that no one accesses CUI without first seeing the appropriate notice — an assessor will try to log in and check.",
    discussion:
      "System use notifications can be implemented using messages or warning banners displayed  before individuals log in to organizational systems. System use notifications are used only  for access via logon interfaces with human users and are not required when such human  interfaces do not exist. Based on a risk assessment, organizations consider whether a  secondary system use notification is needed to access applications or other system resources  after the initial network logon. Where necessary, ...",
    furtherDiscussion:
      "Every system containing or providing access to CUI has legal requirements concerning user  privacy and security notices. One method of addressing this requirement is the use of a  system-use notification banner that displays the legal requirements of using the system.  Users may be required to click to agree to the displayed requirements of using the system  each time they log on to the machine. This agreement can be used in the civil and/or criminal  prosecution of an attacker that violates the...",
    assessmentConsiderations: [
      "Are objectives identified for privacy and security notices, and does the implementation \nsatisfy the required objectives [a,b]? Discrepancies may indicate a deficient process \nand/or an incomplete objective for the overall requirement.",
      "Are there any special requirements associated with the specific CUI category [a]?",
      "Are appropriate notices displayed in areas where paper-based CUI is stored and \nprocessed [b]?",
    ],
    confidence: "HIGH",
    verb: "displayed",
  },

  // Control 3.1.10
  "3.1.10.a": {
    type: "POLICY",
    notes:
      "Define and document the period of inactivity after which a session lock is initiated.",
    simplafi:
      "Decide how long a user's session can sit idle before the screen locks — 15 minutes is the most common choice for CUI environments. Document this timeout value in your access control policy. This is just the decision and documentation — the actual enforcement is a separate objective. Make sure the value is practical for your workforce while still protecting CUI from walk-by exposure.",
    discussion:
      "Session locks are temporary actions taken when users stop work and move away from the  immediate vicinity of the system but do not want to log out because of the temporary nature  of their absences. Session locks are implemented where session activities can be determined,  typically at the operating system level (but can also be at the application level). Session locks  are not an acceptable substitute for logging out of the system, for example, if organizations  require users to log out at the ...",
    furtherDiscussion:
      "Session locks can be initiated by the user or, more fundamentally, enabled automatically  when the system has been idle for a period of time, for example, five minutes. Session locks  are a quick way to prevent unauthorized use of the systems without having a user log off.  Minimum configuration requirements are left up to the organization to define.  A locked session shows pattern-hiding information on the screen to mask the data on the  display.  Example  You manage systems for an organization...",
    assessmentConsiderations: [
      "Does the session lock hide previously visible information (e.g., replacing what was visible \nwith a lock screen or screensaver that does not include sensitive information) [c]?",
      "If session locks are not managed centrally, how are all computer users made aware of the \nrequirements and how to configure them [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.10.b": {
    type: "CONFIG",
    notes:
      "Automatically lock sessions after the defined period of inactivity so that access to the system and viewing of data is prevented.",
    simplafi:
      "This is the enforcement side of (a). Your documented inactivity timeout needs to be enforced on every device that accesses CUI. In Intune, push a device configuration profile that locks the screen after your defined period. For Windows devices, this is the screen lock timeout policy. An assessor will sit at a workstation, wait the defined period, and verify the screen locks automatically.",
    discussion:
      "Session locks are temporary actions taken when users stop work and move away from the  immediate vicinity of the system but do not want to log out because of the temporary nature  of their absences. Session locks are implemented where session activities can be determined,  typically at the operating system level (but can also be at the application level). Session locks  are not an acceptable substitute for logging out of the system, for example, if organizations  require users to log out at the ...",
    furtherDiscussion:
      "Session locks can be initiated by the user or, more fundamentally, enabled automatically  when the system has been idle for a period of time, for example, five minutes. Session locks  are a quick way to prevent unauthorized use of the systems without having a user log off.  Minimum configuration requirements are left up to the organization to define.  A locked session shows pattern-hiding information on the screen to mask the data on the  display.  Example  You manage systems for an organization...",
    assessmentConsiderations: [
      "Does the session lock hide previously visible information (e.g., replacing what was visible \nwith a lock screen or screensaver that does not include sensitive information) [c]?",
      "If session locks are not managed centrally, how are all computer users made aware of the \nrequirements and how to configure them [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "prevented",
  },
  "3.1.10.c": {
    type: "CONFIG",
    notes:
      "Implement pattern-hiding display so that previously visible information is concealed when the session lock activates.",
    simplafi:
      "When the screen locks, whatever was on display needs to be hidden — not just dimmed. A screensaver or lock screen should replace the visible content so someone walking by can't read CUI off an unattended monitor. In Intune, configure the lock screen to display a generic image or company logo, not a preview of the user's last active window.",
    discussion:
      "Session locks are temporary actions taken when users stop work and move away from the  immediate vicinity of the system but do not want to log out because of the temporary nature  of their absences. Session locks are implemented where session activities can be determined,  typically at the operating system level (but can also be at the application level). Session locks  are not an acceptable substitute for logging out of the system, for example, if organizations  require users to log out at the ...",
    furtherDiscussion:
      "Session locks can be initiated by the user or, more fundamentally, enabled automatically  when the system has been idle for a period of time, for example, five minutes. Session locks  are a quick way to prevent unauthorized use of the systems without having a user log off.  Minimum configuration requirements are left up to the organization to define.  A locked session shows pattern-hiding information on the screen to mask the data on the  display.  Example  You manage systems for an organization...",
    assessmentConsiderations: [
      "Does the session lock hide previously visible information (e.g., replacing what was visible \nwith a lock screen or screensaver that does not include sensitive information) [c]?",
      "If session locks are not managed centrally, how are all computer users made aware of the \nrequirements and how to configure them [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "concealed",
  },

  // Control 3.1.11
  "3.1.11.a": {
    type: "POLICY",
    notes:
      "Define and document the conditions that require automatic termination of user sessions.",
    simplafi:
      "Define the conditions under which a user's session should be automatically terminated — not just locked, but fully ended. Examples include exceeding a maximum session duration, connecting from a non-compliant device, or a risk event detected by Entra Identity Protection. Document these conditions so your technical team knows what to configure.",
    discussion:
      "This requirement addresses the termination of user-initiated logical sessions in contrast to  the termination of network connections that are associated with communications sessions  (i.e., disconnecting from the network). A logical session (for local, network, and remote  access) is initiated whenever a user (or process acting on behalf of a user) accesses an  organizational system. Such user sessions can be terminated (and thus terminate user  access) without terminating network sessions. Sess...",
    furtherDiscussion:
      "Configure the system to terminate user sessions based on the organization’s policy. Session  termination policies can be simple or sophisticated. Examples are inactivity (end the session  after a specified duration (e.g., one hour33) of inactivity), day/time (all sessions are  terminated at the end of the established workday), misbehavior (end the session due to an  attempted policy violation), and maintenance (terminate sessions to prevent issues with an  upgrade or service outage). If there is...",
    assessmentConsiderations: [
      "Are the conditions in which a user session must be terminated described (e.g., after a \nperiod of inactivity or after a defined time limit) [a]?",
      "Are procedures documented that describe how to configure the system to enable \nautomatic termination of user sessions after any of the defined conditions occur [b]?",
      "Are user sessions terminated based on organization-defined conditions [a,b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.11.b": {
    type: "CONFIG",
    notes:
      "Automatically terminate user sessions when any of the defined conditions occur.",
    simplafi:
      "This is the enforcement side of (a). Your defined termination conditions need to be enforced automatically. In Entra, configure conditional access policies with session controls — token lifetime policies, sign-in frequency requirements, and risk-based session termination through Identity Protection. An assessor will ask how long a token lasts and whether a compromised session gets killed automatically.",
    discussion:
      "This requirement addresses the termination of user-initiated logical sessions in contrast to  the termination of network connections that are associated with communications sessions  (i.e., disconnecting from the network). A logical session (for local, network, and remote  access) is initiated whenever a user (or process acting on behalf of a user) accesses an  organizational system. Such user sessions can be terminated (and thus terminate user  access) without terminating network sessions. Sess...",
    furtherDiscussion:
      "Configure the system to terminate user sessions based on the organization’s policy. Session  termination policies can be simple or sophisticated. Examples are inactivity (end the session  after a specified duration (e.g., one hour33) of inactivity), day/time (all sessions are  terminated at the end of the established workday), misbehavior (end the session due to an  attempted policy violation), and maintenance (terminate sessions to prevent issues with an  upgrade or service outage). If there is...",
    assessmentConsiderations: [
      "Are the conditions in which a user session must be terminated described (e.g., after a \nperiod of inactivity or after a defined time limit) [a]?",
      "Are procedures documented that describe how to configure the system to enable \nautomatic termination of user sessions after any of the defined conditions occur [b]?",
      "Are user sessions terminated based on organization-defined conditions [a,b]?",
    ],
    confidence: "HIGH",
    verb: "terminated",
  },

  // Control 3.1.12
  "3.1.12.a": {
    type: "POLICY",
    notes:
      "Establish and document the organizational decision to permit remote access sessions.",
    simplafi:
      "Before configuring remote access controls, document that remote access is permitted in your environment and under what general circumstances. Many organizations simply state 'remote access is authorized for employees accessing CUI systems from approved devices.' This is a policy statement — it establishes that you've made a deliberate decision to allow remote work rather than just letting it happen.",
    discussion:
      "Remote access is access to organizational systems by users (or processes acting on behalf of  users) communicating through external networks (e.g., the internet). Remote access  methods include dial-up, broadband, and wireless. Organizations often employ encrypted  virtual private networks (VPNs) to enhance confidentiality over remote connections. The use  of encrypted VPNs does not make the access non-remote; however, the use of VPNs, when  adequately provisioned with appropriate control (e.g.,...",
    furtherDiscussion:
      "Remote access connections pass through untrusted networks and therefore require proper security controls such as encryption to ensure data confidentiality. Initialization of all remote sessions should ensure that only authorized users and devices are connecting. After the remote session is established, the connection is monitored to track who is accessing the network remotely and what files are being accessed during the session. Remote access sessions can encompass more than just remote connecti...",
    assessmentConsiderations: [
      "Do policies identify when remote access is permitted and what methods must be used \n[a,b]?",
      "Are systems configured to permit only approved remote access sessions (e.g., disallow \nremote access sessions by default) [c]?",
      "Are automated or manual mechanisms employed for monitoring remote connections? If \nthe monitoring is manual, does it occur at a frequency commensurate with the level of \nrisk [d]?",
    ],
    confidence: "HIGH",
    verb: "permitted",
  },
  "3.1.12.b": {
    type: "POLICY",
    notes:
      "Identify and document the types of remote access that are permitted.",
    simplafi:
      "Identify the specific types of remote access your organization allows — VPN, browser-based access through Entra application proxy, Remote Desktop, virtual desktop infrastructure. List each method and where it's appropriate. This inventory becomes the basis for your conditional access policies. If a method isn't on this list, it shouldn't be technically possible.",
    discussion:
      "Remote access is access to organizational systems by users (or processes acting on behalf of  users) communicating through external networks (e.g., the internet). Remote access  methods include dial-up, broadband, and wireless. Organizations often employ encrypted  virtual private networks (VPNs) to enhance confidentiality over remote connections. The use  of encrypted VPNs does not make the access non-remote; however, the use of VPNs, when  adequately provisioned with appropriate control (e.g.,...",
    furtherDiscussion:
      "Remote access connections pass through untrusted networks and therefore require proper security controls such as encryption to ensure data confidentiality. Initialization of all remote sessions should ensure that only authorized users and devices are connecting. After the remote session is established, the connection is monitored to track who is accessing the network remotely and what files are being accessed during the session. Remote access sessions can encompass more than just remote connecti...",
    assessmentConsiderations: [
      "Do policies identify when remote access is permitted and what methods must be used \n[a,b]?",
      "Are systems configured to permit only approved remote access sessions (e.g., disallow \nremote access sessions by default) [c]?",
      "Are automated or manual mechanisms employed for monitoring remote connections? If \nthe monitoring is manual, does it occur at a frequency commensurate with the level of \nrisk [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.12.c": {
    type: "CONFIG",
    notes:
      "Enforce controls on remote access sessions using VPN, remote access gateways, and session management mechanisms.",
    simplafi:
      "This is the enforcement side of (a) and (b). Every remote session must be controlled through conditional access policies in Entra. This means requiring compliant devices, MFA, and approved client apps. Remote access from personal devices or non-compliant machines should be blocked or restricted. An assessor will try to connect remotely and verify the controls are active.",
    discussion:
      "Remote access is access to organizational systems by users (or processes acting on behalf of  users) communicating through external networks (e.g., the internet). Remote access  methods include dial-up, broadband, and wireless. Organizations often employ encrypted  virtual private networks (VPNs) to enhance confidentiality over remote connections. The use  of encrypted VPNs does not make the access non-remote; however, the use of VPNs, when  adequately provisioned with appropriate control (e.g.,...",
    furtherDiscussion:
      "Remote access connections pass through untrusted networks and therefore require proper security controls such as encryption to ensure data confidentiality. Initialization of all remote sessions should ensure that only authorized users and devices are connecting. After the remote session is established, the connection is monitored to track who is accessing the network remotely and what files are being accessed during the session. Remote access sessions can encompass more than just remote connecti...",
    assessmentConsiderations: [
      "Do policies identify when remote access is permitted and what methods must be used \n[a,b]?",
      "Are systems configured to permit only approved remote access sessions (e.g., disallow \nremote access sessions by default) [c]?",
      "Are automated or manual mechanisms employed for monitoring remote connections? If \nthe monitoring is manual, does it occur at a frequency commensurate with the level of \nrisk [d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.1.12.d": {
    type: "CONFIG",
    notes:
      "Implement monitoring of remote access sessions so that all remote connections are logged and reviewed.",
    simplafi:
      "Remote sessions need to be monitored — not just allowed and controlled, but watched. In the Microsoft ecosystem, this means Entra sign-in logs capture every remote authentication, including location, device compliance status, and risk level. Set up alerts in the Security admin center for unusual remote access patterns. An assessor will ask to see recent remote access logs.",
    discussion:
      "Remote access is access to organizational systems by users (or processes acting on behalf of  users) communicating through external networks (e.g., the internet). Remote access  methods include dial-up, broadband, and wireless. Organizations often employ encrypted  virtual private networks (VPNs) to enhance confidentiality over remote connections. The use  of encrypted VPNs does not make the access non-remote; however, the use of VPNs, when  adequately provisioned with appropriate control (e.g.,...",
    furtherDiscussion:
      "Remote access connections pass through untrusted networks and therefore require proper security controls such as encryption to ensure data confidentiality. Initialization of all remote sessions should ensure that only authorized users and devices are connecting. After the remote session is established, the connection is monitored to track who is accessing the network remotely and what files are being accessed during the session. Remote access sessions can encompass more than just remote connecti...",
    assessmentConsiderations: [
      "Do policies identify when remote access is permitted and what methods must be used \n[a,b]?",
      "Are systems configured to permit only approved remote access sessions (e.g., disallow \nremote access sessions by default) [c]?",
      "Are automated or manual mechanisms employed for monitoring remote connections? If \nthe monitoring is manual, does it occur at a frequency commensurate with the level of \nrisk [d]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.1.13
  "3.1.13.a": {
    type: "POLICY",
    notes:
      "Identify and document the cryptographic mechanisms selected to protect the confidentiality of remote access sessions.",
    simplafi:
      "Identify which encryption methods protect your remote access sessions. For VPN, this might be IKEv2 or TLS. For browser-based access, it's HTTPS/TLS 1.2+. For Remote Desktop, it's TLS with NLA. Document the specific protocols and cipher suites — this is your encryption baseline for remote access. An assessor needs to see that you've made deliberate encryption choices, not just accepted defaults.",
    discussion:
      "Cryptographic standards include FIPS-validated cryptography and NSA-approved  cryptography.  FURTHER DISCUSSION",
    furtherDiscussion:
      "A remote access session involves logging into the organization’s systems such as its internal  network or a cloud service provider from a remote location such as home or an alternate  work site. Because the use of cryptography in this requirement is to protect the  confidentiality of CUI, the cryptography used must meet the criteria specified in requirement  SC.L2-3.13.11. Although not explicitly required to meet AC.L2-3.1. requirements, this  remote access session must be secured using FIPS-val...",
    assessmentConsiderations: [
      "Are cryptographic mechanisms used for remote access sessions (e.g., Transport Layer \nSecurity (TLS) and Internet Protocol Security (IPSec) using FIPS-validated encryption \nalgorithms) defined and implemented [a,b]? Note that simply using an approved \nalgorithm is not sufficient – the module (software and/or hardware) used to implement \nthe algorithm must be separately validated under FIPS 140.",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.13.b": {
    type: "CONFIG",
    notes:
      "Implement cryptographic mechanisms so that remote access sessions are encrypted to protect confidentiality.",
    simplafi:
      "This is the enforcement side of (a). Your identified encryption methods need to be actively configured and enforced. In Entra and your network infrastructure, ensure TLS 1.2 or higher is required for all remote connections, older protocols are disabled, and certificate validation is enforced. An assessor will inspect the connection properties of a remote session to verify encryption is actually in use.",
    discussion:
      "Cryptographic standards include FIPS-validated cryptography and NSA-approved  cryptography.  FURTHER DISCUSSION",
    furtherDiscussion:
      "A remote access session involves logging into the organization’s systems such as its internal  network or a cloud service provider from a remote location such as home or an alternate  work site. Because the use of cryptography in this requirement is to protect the  confidentiality of CUI, the cryptography used must meet the criteria specified in requirement  SC.L2-3.13.11. Although not explicitly required to meet AC.L2-3.1. requirements, this  remote access session must be secured using FIPS-val...",
    assessmentConsiderations: [
      "Are cryptographic mechanisms used for remote access sessions (e.g., Transport Layer \nSecurity (TLS) and Internet Protocol Security (IPSec) using FIPS-validated encryption \nalgorithms) defined and implemented [a,b]? Note that simply using an approved \nalgorithm is not sufficient – the module (software and/or hardware) used to implement \nthe algorithm must be separately validated under FIPS 140.",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.1.14
  "3.1.14.a": {
    type: "CONFIG",
    notes:
      "Implement managed network access control points through which remote access is routed.",
    simplafi:
      "Every remote connection to your environment should pass through a defined access control point — not connect directly to internal resources. Identify where these control points are: your VPN gateway, Entra application proxy, or conditional access enforcement point. These are the chokepoints where you inspect, authenticate, and authorize remote traffic before it reaches your internal systems.",
    discussion:
      "Routing remote access through managed access control points enhances explicit,  organizational control over such connections, reducing the susceptibility to unauthorized  access to organizational systems resulting in the unauthorized disclosure of CUI.  FURTHER DISCUSSION",
    furtherDiscussion:
      "The OSA can route all remote access through a limited number of remote access control  points to reduce the attack surface and simplify network management. This allows for better  monitoring and control of the remote connections.  This requirement, AC.L2-3.1.14, limits remote access to specific access control points and  complements five other requirements dealing with remote access (AC.L2-3.1.12, AC.L2- 3.1.13, AC.L2-3.1.15, IA.L2-3.5.3, and MA.L2-3.7.5):  38 NIST SP 800-171A, p. 15.  39 NIST S...",
    assessmentConsiderations: [
      "How many managed access control points are implemented [a]?",
      "Is all remote access routed through the managed access control points [b]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },
  "3.1.14.b": {
    type: "CONFIG",
    notes:
      "Restrict remote access routing so that all remote connections are routed through managed network access control points.",
    simplafi:
      "This is the enforcement side — remote traffic must actually route through your managed access control points. In the Microsoft ecosystem, this means all remote access goes through Entra conditional access rather than direct connections to internal servers. Block direct RDP from the internet, require VPN or Entra application proxy for internal apps. An assessor will test whether they can bypass your access control points.",
    discussion:
      "Routing remote access through managed access control points enhances explicit,  organizational control over such connections, reducing the susceptibility to unauthorized  access to organizational systems resulting in the unauthorized disclosure of CUI.  FURTHER DISCUSSION",
    furtherDiscussion:
      "The OSA can route all remote access through a limited number of remote access control  points to reduce the attack surface and simplify network management. This allows for better  monitoring and control of the remote connections.  This requirement, AC.L2-3.1.14, limits remote access to specific access control points and  complements five other requirements dealing with remote access (AC.L2-3.1.12, AC.L2- 3.1.13, AC.L2-3.1.15, IA.L2-3.5.3, and MA.L2-3.7.5):  38 NIST SP 800-171A, p. 15.  39 NIST S...",
    assessmentConsiderations: [
      "How many managed access control points are implemented [a]?",
      "Is all remote access routed through the managed access control points [b]?",
    ],
    confidence: "HIGH",
    verb: "routed",
  },

  // Control 3.1.15
  "3.1.15.a": {
    type: "POLICY",
    notes:
      "Identify and document privileged commands that are authorized for remote execution.",
    simplafi:
      "Some privileged commands — like resetting passwords, modifying security groups, or changing configurations — may need to be run remotely. Identify and document which privileged commands are authorized for remote execution. This is a deliberate allowlist: if a privileged command isn't on this list, it shouldn't be executable remotely. Keep this list short and justified.",
    discussion:
      "A privileged command is a human-initiated (interactively or via a process operating on  behalf of the human) command executed on a system involving the control, monitoring, or  administration of the system including security functions and associated security-relevant  information. Security-relevant information is any information within the system that can  potentially impact the operation of security functions or the provision of security services in  a manner that could result in failure to enf...",
    furtherDiscussion:
      "Privileged users are not necessarily allowed to perform their job functions from a remote  location. Likewise, not all privileged commands may be executed remotely. Allowing remote  execution of privileged commands or remote access to security-relevant information should  be avoided if possible. If absolutely necessary, the privileged commands authorized for  remote execution should be identified and documented. Document which user roles have  permissions to remotely execute privileged commands ...",
    assessmentConsiderations: [
      "Does system documentation identify system administration or security functions that \ncan be executed remotely [a]?",
      "Is execution of the identified privileged commands via remote access only authorized for \ndocumented operational needs [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.15.b": {
    type: "POLICY",
    notes:
      "Identify and document security-relevant information that is authorized to be accessed remotely.",
    simplafi:
      "Identify which security-relevant information can be accessed remotely — audit logs, security configurations, vulnerability scan results, CUI data. Document what's allowed and for whom. This creates guardrails: an admin can review audit logs remotely through the Security admin center, but perhaps can't export them to a personal device.",
    discussion:
      "A privileged command is a human-initiated (interactively or via a process operating on  behalf of the human) command executed on a system involving the control, monitoring, or  administration of the system including security functions and associated security-relevant  information. Security-relevant information is any information within the system that can  potentially impact the operation of security functions or the provision of security services in  a manner that could result in failure to enf...",
    furtherDiscussion:
      "Privileged users are not necessarily allowed to perform their job functions from a remote  location. Likewise, not all privileged commands may be executed remotely. Allowing remote  execution of privileged commands or remote access to security-relevant information should  be avoided if possible. If absolutely necessary, the privileged commands authorized for  remote execution should be identified and documented. Document which user roles have  permissions to remotely execute privileged commands ...",
    assessmentConsiderations: [
      "Does system documentation identify system administration or security functions that \ncan be executed remotely [a]?",
      "Is execution of the identified privileged commands via remote access only authorized for \ndocumented operational needs [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.15.c": {
    type: "CONFIG",
    notes:
      "Enforce authorization controls so that only identified privileged commands can be executed via remote access.",
    simplafi:
      "This is the enforcement side of (a). The privileged commands you authorized for remote execution need to be technically limited to just those commands. In Entra, this means PIM role activations with conditional access policies that restrict what admins can do from remote sessions. An assessor will check whether unauthorized privileged commands can be executed remotely.",
    discussion:
      "A privileged command is a human-initiated (interactively or via a process operating on  behalf of the human) command executed on a system involving the control, monitoring, or  administration of the system including security functions and associated security-relevant  information. Security-relevant information is any information within the system that can  potentially impact the operation of security functions or the provision of security services in  a manner that could result in failure to enf...",
    furtherDiscussion:
      "Privileged users are not necessarily allowed to perform their job functions from a remote  location. Likewise, not all privileged commands may be executed remotely. Allowing remote  execution of privileged commands or remote access to security-relevant information should  be avoided if possible. If absolutely necessary, the privileged commands authorized for  remote execution should be identified and documented. Document which user roles have  permissions to remotely execute privileged commands ...",
    assessmentConsiderations: [
      "Does system documentation identify system administration or security functions that \ncan be executed remotely [a]?",
      "Is execution of the identified privileged commands via remote access only authorized for \ndocumented operational needs [c]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },
  "3.1.15.d": {
    type: "CONFIG",
    notes:
      "Enforce authorization controls so that only identified security-relevant information can be accessed via remote access.",
    simplafi:
      "This is the enforcement side of (b). Access to security-relevant information from remote sessions needs to be controlled. Conditional access policies in Entra should restrict which admin portals and security data can be accessed from remote locations. For example, you might require a compliant device and specific admin roles to access the Security admin center remotely.",
    discussion:
      "A privileged command is a human-initiated (interactively or via a process operating on  behalf of the human) command executed on a system involving the control, monitoring, or  administration of the system including security functions and associated security-relevant  information. Security-relevant information is any information within the system that can  potentially impact the operation of security functions or the provision of security services in  a manner that could result in failure to enf...",
    furtherDiscussion:
      "Privileged users are not necessarily allowed to perform their job functions from a remote  location. Likewise, not all privileged commands may be executed remotely. Allowing remote  execution of privileged commands or remote access to security-relevant information should  be avoided if possible. If absolutely necessary, the privileged commands authorized for  remote execution should be identified and documented. Document which user roles have  permissions to remotely execute privileged commands ...",
    assessmentConsiderations: [
      "Does system documentation identify system administration or security functions that \ncan be executed remotely [a]?",
      "Is execution of the identified privileged commands via remote access only authorized for \ndocumented operational needs [c]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },

  // Control 3.1.16
  "3.1.16.a": {
    type: "POLICY",
    notes:
      "Identify and document all wireless access points within the system boundary.",
    simplafi:
      "Identify every wireless access point in your environment — corporate Wi-Fi, guest networks, and any rogue access points you discover. Document their locations, SSIDs, and purposes. This is your wireless inventory. In environments handling CUI, you also need to periodically scan for unauthorized access points that someone may have plugged into your network without approval.",
    discussion:
      "Establishing usage restrictions and configuration/connection requirements for wireless  access to the system provides criteria for organizations to support wireless access  authorization decisions. Such restrictions and requirements reduce the susceptibility to  unauthorized access to the system through wireless technologies. Wireless networks use  authentication protocols that provide credential protection and mutual authentication.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Guidelines from management form the basis for the requirements that must be met prior to  authorizing a wireless connection. These guidelines may include the following:  • types of devices, such as corporate or privately owned equipment;  • configuration requirements of the devices; and  42 NIST SP 800-171A, pp. 15-16.  43 NIST SP 800-171 Rev. 2, p. 14.  • authorization requirements before granting such connections.  AC.L2-3.1.16, AC.L2-3.1.17, and AC.L2-3.1. are complementary requirements in th...",
    assessmentConsiderations: [
      "Is an updated list of approved network devices providing wireless access to the system \nmaintained [a]?",
      "Are network devices providing wireless access configured to require users or devices be \nauthorized prior to permitting a wireless connection [b]?",
      "Is wireless access to the system authorized and managed [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.16.b": {
    type: "CONFIG",
    notes:
      "Enforce wireless access authorization so that connections are only permitted after authorization is verified.",
    simplafi:
      "This is the enforcement side of (a). Before a wireless device connects to your corporate network, it needs to be authorized. In the Microsoft ecosystem, this means connecting your Wi-Fi to Entra for authentication — users must authenticate with their Entra credentials before gaining network access. Guest networks should be isolated from CUI systems entirely.",
    discussion:
      "Establishing usage restrictions and configuration/connection requirements for wireless  access to the system provides criteria for organizations to support wireless access  authorization decisions. Such restrictions and requirements reduce the susceptibility to  unauthorized access to the system through wireless technologies. Wireless networks use  authentication protocols that provide credential protection and mutual authentication.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Guidelines from management form the basis for the requirements that must be met prior to  authorizing a wireless connection. These guidelines may include the following:  • types of devices, such as corporate or privately owned equipment;  • configuration requirements of the devices; and  42 NIST SP 800-171A, pp. 15-16.  43 NIST SP 800-171 Rev. 2, p. 14.  • authorization requirements before granting such connections.  AC.L2-3.1.16, AC.L2-3.1.17, and AC.L2-3.1. are complementary requirements in th...",
    assessmentConsiderations: [
      "Is an updated list of approved network devices providing wireless access to the system \nmaintained [a]?",
      "Are network devices providing wireless access configured to require users or devices be \nauthorized prior to permitting a wireless connection [b]?",
      "Is wireless access to the system authorized and managed [b]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },

  // Control 3.1.17
  "3.1.17.a": {
    type: "CONFIG",
    notes:
      "Enforce authentication on wireless access using WPA2/WPA3 Enterprise or equivalent mechanisms.",
    simplafi:
      "Every wireless connection to your corporate network must be authenticated — no open networks. In the Microsoft ecosystem, configure your wireless infrastructure to authenticate against Entra using certificate-based authentication or PEAP. The goal is that no device can join your CUI network without proving its identity first. An assessor will look at your wireless configuration to verify authentication is required.",
    discussion:
      "Organizations authenticate individuals and devices to help protect wireless access to the  system. Special attention is given to the wide variety of devices that are part of the Internet  of Things with potential wireless access to organizational systems.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Use a combination of authentication and encryption methods to protect the access to wireless networks. Authenticating users to a wireless access point can be achieved in multiple ways. The most common authentication and encryption methods used include: • WPA2-PSK (WiFi Protected Access-Pre-shared Key) – This method uses a password or passphrase known by the wireless access point and the client (user device). It is common in small companies that have little turnover because the key must be change...",
    assessmentConsiderations: [
      "Is wireless access limited only to authenticated and authorized users (e.g., required to \nsupply a username and password) [a]?",
      "If the organization is securing its wireless network with a pre-shared key, is access to \nthat key restricted to only authorized users [a]?",
      "Is wireless access encrypted using FIPS-validated cryptography? Note that simply using \nan approved algorithm is not sufficient; the module (software and/or hardware) used to \nimplement the algorithm must be separately validated under FIPS 140 [b].",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.1.17.b": {
    type: "CONFIG",
    notes:
      "Enforce encryption on wireless access using WPA2/WPA3 or equivalent cryptographic protocols.",
    simplafi:
      "Wireless traffic must be encrypted in transit. At minimum, use WPA2-Enterprise or WPA3 for all wireless networks that carry CUI. Open networks or WPA2-Personal with shared passwords are not acceptable for CUI environments. An assessor will inspect your wireless controller configuration and may capture traffic to verify encryption is active on the air.",
    discussion:
      "Organizations authenticate individuals and devices to help protect wireless access to the  system. Special attention is given to the wide variety of devices that are part of the Internet  of Things with potential wireless access to organizational systems.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Use a combination of authentication and encryption methods to protect the access to wireless networks. Authenticating users to a wireless access point can be achieved in multiple ways. The most common authentication and encryption methods used include: • WPA2-PSK (WiFi Protected Access-Pre-shared Key) – This method uses a password or passphrase known by the wireless access point and the client (user device). It is common in small companies that have little turnover because the key must be change...",
    assessmentConsiderations: [
      "Is wireless access limited only to authenticated and authorized users (e.g., required to \nsupply a username and password) [a]?",
      "If the organization is securing its wireless network with a pre-shared key, is access to \nthat key restricted to only authorized users [a]?",
      "Is wireless access encrypted using FIPS-validated cryptography? Note that simply using \nan approved algorithm is not sufficient; the module (software and/or hardware) used to \nimplement the algorithm must be separately validated under FIPS 140 [b].",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.1.18
  "3.1.18.a": {
    type: "POLICY",
    notes:
      "Identify and document mobile devices that process, store, or transmit CUI.",
    simplafi:
      "Identify every mobile device — phones, tablets — that processes, stores, or transmits CUI. This is your mobile device inventory. In Intune, you can pull a device compliance report, but you also need a documented list that identifies which devices are approved for CUI access. If employees use personal phones for Teams or email with CUI, those devices are in scope.",
    discussion:
      "A mobile device is a computing device that has a small form factor such that it can easily be  carried by a single individual; is designed to operate without a physical connection (e.g.,  wirelessly transmit or receive information); possesses local, non-removable or removable  data storage; and includes a self-contained power source. Mobile devices may also include  voice communication capabilities, on-board sensors that allow the device to capture  information, or built-in features for synchron...",
    furtherDiscussion:
      "Establish guidelines and acceptable requirements for proper configuration, use, and  management of mobile devices. Devices that process, store, or transmit CUI must be  identified with a device-specific identifier. There are many different types of identifiers, and  it is important to select one that can accommodate all devices and be used in a consistent  manner. These identifiers are important for facilitating the required monitoring and logging  function.  In addition to smartphones, consider...",
    assessmentConsiderations: [
      "Is a list of mobile devices that are permitted to process, store, or transmit CUI maintained \n[a,b]?",
      "Is the system configured to only permit connections from identified, authorized mobile \ndevices [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.18.b": {
    type: "CONFIG",
    notes:
      "Enforce mobile device connection authorization using MDM or equivalent mechanisms so that only authorized devices can connect.",
    simplafi:
      "This is the enforcement side of (a). Mobile device connections to your CUI environment must be explicitly authorized. In Intune, this means devices must be enrolled and compliant before accessing company resources. Conditional access policies in Entra should block unenrolled mobile devices from accessing email, Teams, SharePoint, or any app that handles CUI.",
    discussion:
      "A mobile device is a computing device that has a small form factor such that it can easily be  carried by a single individual; is designed to operate without a physical connection (e.g.,  wirelessly transmit or receive information); possesses local, non-removable or removable  data storage; and includes a self-contained power source. Mobile devices may also include  voice communication capabilities, on-board sensors that allow the device to capture  information, or built-in features for synchron...",
    furtherDiscussion:
      "Establish guidelines and acceptable requirements for proper configuration, use, and  management of mobile devices. Devices that process, store, or transmit CUI must be  identified with a device-specific identifier. There are many different types of identifiers, and  it is important to select one that can accommodate all devices and be used in a consistent  manner. These identifiers are important for facilitating the required monitoring and logging  function.  In addition to smartphones, consider...",
    assessmentConsiderations: [
      "Is a list of mobile devices that are permitted to process, store, or transmit CUI maintained \n[a,b]?",
      "Is the system configured to only permit connections from identified, authorized mobile \ndevices [b]?",
    ],
    confidence: "HIGH",
    verb: "authorized",
  },
  "3.1.18.c": {
    type: "CONFIG",
    notes:
      "Implement monitoring and logging of mobile device connections so that all connections are tracked and auditable.",
    simplafi:
      "Mobile device connections need to be tracked. In Intune, enable logging of device compliance status, connection events, and app access. In the Entra sign-in logs, filter for mobile device authentications. An assessor will ask you to show which mobile devices connected to your CUI environment over the last 30 days and whether they were compliant.",
    discussion:
      "A mobile device is a computing device that has a small form factor such that it can easily be  carried by a single individual; is designed to operate without a physical connection (e.g.,  wirelessly transmit or receive information); possesses local, non-removable or removable  data storage; and includes a self-contained power source. Mobile devices may also include  voice communication capabilities, on-board sensors that allow the device to capture  information, or built-in features for synchron...",
    furtherDiscussion:
      "Establish guidelines and acceptable requirements for proper configuration, use, and  management of mobile devices. Devices that process, store, or transmit CUI must be  identified with a device-specific identifier. There are many different types of identifiers, and  it is important to select one that can accommodate all devices and be used in a consistent  manner. These identifiers are important for facilitating the required monitoring and logging  function.  In addition to smartphones, consider...",
    assessmentConsiderations: [
      "Is a list of mobile devices that are permitted to process, store, or transmit CUI maintained \n[a,b]?",
      "Is the system configured to only permit connections from identified, authorized mobile \ndevices [b]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.1.19
  "3.1.19.a": {
    type: "POLICY",
    notes:
      "Identify and document mobile devices and mobile computing platforms that process, store, or transmit CUI.",
    simplafi:
      "This overlaps with 3.1.18.a but focuses specifically on platforms — iOS, Android, Windows tablets — that might store CUI locally. Identify which mobile platforms are approved for CUI and document whether CUI can be stored on the device or only accessed through managed apps. This decision drives your Intune app protection policy configuration.",
    discussion:
      "Organizations can employ full-device encryption or container-based encryption to protect  the confidentiality of CUI on mobile devices and computing platforms. Container-based  encryption provides a more fine-grained approach to the encryption of data and information  including encrypting selected data structures such as files, records, or fields.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Ensure CUI is encrypted on all mobile devices and mobile computing platforms that process,  store, or transmit CUI including smartphones, tablets, and e-readers.  48 NIST SP 800-171A, p. 17.  49 NIST SP 800-171 Rev. 2, p. 15.  Because the use of cryptography in this requirement is to protect the confidentiality of CUI,  the cryptography used must meet the criteria specified in requirement SC.L2-3.13.11.  This requirement, AC.L2-3.1.19, specifies that CUI be encrypted on mobile devices and  exten...",
    assessmentConsiderations: [
      "Is a list maintained of mobile devices and mobile computing platforms that are permitted \nto process, store, or transmit CUI [a]?",
      "Is CUI encrypted on mobile devices using FIPS-validated algorithms [b]? \nKEY REFERENCE",
      "NIST SP 800-171 Rev. 2 3.1.",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.19.b": {
    type: "CONFIG",
    notes:
      "Implement encryption on identified mobile devices and mobile computing platforms so that CUI is protected at rest and in transit.",
    simplafi:
      "This is the enforcement side of (a). CUI on mobile devices must be encrypted. In Intune, configure app protection policies that require encryption on the device and within managed apps. For iOS and Android, require device encryption as a compliance requirement. Conditional access should block access from devices that don't meet encryption standards. An assessor will check your Intune compliance policies.",
    discussion:
      "Organizations can employ full-device encryption or container-based encryption to protect  the confidentiality of CUI on mobile devices and computing platforms. Container-based  encryption provides a more fine-grained approach to the encryption of data and information  including encrypting selected data structures such as files, records, or fields.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Ensure CUI is encrypted on all mobile devices and mobile computing platforms that process,  store, or transmit CUI including smartphones, tablets, and e-readers.  48 NIST SP 800-171A, p. 17.  49 NIST SP 800-171 Rev. 2, p. 15.  Because the use of cryptography in this requirement is to protect the confidentiality of CUI,  the cryptography used must meet the criteria specified in requirement SC.L2-3.13.11.  This requirement, AC.L2-3.1.19, specifies that CUI be encrypted on mobile devices and  exten...",
    assessmentConsiderations: [
      "Is a list maintained of mobile devices and mobile computing platforms that are permitted \nto process, store, or transmit CUI [a]?",
      "Is CUI encrypted on mobile devices using FIPS-validated algorithms [b]? \nKEY REFERENCE",
      "NIST SP 800-171 Rev. 2 3.1.",
    ],
    confidence: "HIGH",
    verb: "employed",
  },

  // Control 3.1.20
  "3.1.20.a": {
    type: "POLICY",
    notes:
      "Identify and document all connections to external systems.",
    simplafi:
      "Identify every external system your organization connects to — cloud services, partner networks, subcontractor systems, SaaS tools. Document each connection, its purpose, and what data flows across it. This is your external connections inventory. If your team uses a third-party tool that touches CUI, it belongs on this list even if IT didn't set it up.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.20.b": {
    type: "POLICY",
    notes:
      "Identify and document the use of external systems and their purposes.",
    simplafi:
      "Beyond connections, identify how external systems are used — are employees accessing partner portals, uploading CUI to external collaboration tools, or receiving data from external feeds? Document the use cases. This is different from (a) because a system might be connected but used in unexpected ways that weren't originally authorized.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.20.c": {
    type: "CONFIG",
    notes:
      "Enforce verification of connections to external systems using authentication and authorization mechanisms.",
    simplafi:
      "This is the enforcement side of (a). External system connections need to be verified — confirmed that the connecting system is actually the authorized system and not an impersonator. In the Microsoft ecosystem, this means configuring cross-tenant access policies in Entra, verifying partner tenant IDs, and using B2B collaboration settings to control which external organizations can connect.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "verified",
  },
  "3.1.20.d": {
    type: "CONFIG",
    notes:
      "Enforce verification of external system usage so that only authorized use is permitted.",
    simplafi:
      "This is the enforcement side of (b). Verify that external systems are being used only in the ways you authorized. This means monitoring external collaboration activity through Purview audit logs and Entra access reviews. If you authorized a partner to view documents but they're downloading them, that's a use violation you need to detect.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "verified",
  },
  "3.1.20.e": {
    type: "CONFIG",
    notes:
      "Enforce controls to limit connections to external systems through firewalls, access control lists, and connection policies.",
    simplafi:
      "External connections must be actively controlled and limited. In Entra, configure cross-tenant access settings to explicitly allow only approved organizations. Block all other external tenants by default. Use conditional access to restrict what external users can do — for example, allow viewing but block downloading. The default posture should be deny-all for external connections.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.1.20.f": {
    type: "CONFIG",
    notes:
      "Enforce controls to limit the use of external systems through policy enforcement mechanisms and technical restrictions.",
    simplafi:
      "The use of external systems needs to be controlled beyond just the connection. In Purview, configure DLP policies that prevent CUI from being shared to unauthorized external systems. Use sensitivity labels that restrict external sharing. An assessor will test whether they can send CUI to an unapproved external system — the answer should be no.",
    discussion:
      "External systems are systems or components of systems for which organizations typically have no direct supervision and authority over the application of security requirements and controls or the determination of the effectiveness of implemented controls on those systems. External systems include personally owned systems, components, or devices and privately- owned computing and communications devices resident in commercial or public facilities. 50 NIST SP 800-171A, p. 17. 51 NIST SP 800-171 Rev....",
    furtherDiscussion:
      "Control and manage connections between your company network and outside networks.  Outside networks could include the public internet, one of your own company’s networks  that falls outside of your CMMC Assessment Scope (e.g., an isolated lab), or a network that  does not belong to your company. Tools to accomplish include firewalls and connection  allow/deny lists. External systems not controlled by your company could be running  applications that are prohibited or blocked. Control and limit ac...",
    assessmentConsiderations: [
      "Are all connections to external systems outside of the assessment scope identified [a]?",
      "Are external systems (e.g., systems managed by OSAs, partners, or vendors; personal \ndevices) that are permitted to connect to or make use of organizational systems \nidentified [b]?",
      "Are methods employed to ensure that only authorized connections are being made to \nexternal systems (e.g., requiring log-ins or certificates, access from a specific IP address, \nor access via Virtual Private Network (VPN)) [c,e]?",
      "Are methods employed to confirm that only authorized external systems are connecting \n(e.g., if employees are receiving company email on personal cell phones, is the OSA \nchecking to verify that only known/expected devices are connecting) [d]?",
      "Is the use of external systems limited, including by policy or physical control [f]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },

  // Control 3.1.21
  "3.1.21.a": {
    type: "POLICY",
    notes:
      "Identify and document the use of portable storage devices containing CUI on external systems.",
    simplafi:
      "Document any scenarios where portable storage devices — USB drives, external hard drives — containing CUI are used on external systems like personal computers or partner workstations. Many organizations simply prohibit this. If you allow it, document exactly who, under what circumstances, and what protections are required.",
    discussion:
      "Limits on the use of organization-controlled portable storage devices in external systems  include complete prohibition of the use of such devices or restrictions on how the devices  may be used and under what conditions the devices may be used. Note that while “external”  typically refers to outside of the organization’s direct supervision and authority that is not  always the case. Regarding the protection of CUI across an organization, the organization  may have systems that process CUI and o...",
    furtherDiscussion:
      "A portable storage device is a system component that can be inserted or attached and easily  removed from a system. It is used to store data or information. Examples of portable storage  devices include:  • compact/digital video disks (CDs/DVDs);  • Universal Serial Bus (USB) drives;  • external hard disk drives;  • flash memory cards/drives; and  • floppy disks.  This requirement can be implemented in two ways:  • identifying the portable storage device usage restrictions, identifying portable ...",
    assessmentConsiderations: [
      "Are the portable storage devices authorized for external use identified and documented \n[a]?",
      "Are the circumstances defined in which portable storage devices containing CUI may be \nused on external systems (e.g., with management approval) [b]?",
      "Are limitations stipulated for the use of portable storage devices containing CUI on \nexternal systems (e.g., authorized personnel only, encrypted drives required) [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.21.b": {
    type: "POLICY",
    notes:
      "Define and document limits on the use of portable storage devices containing CUI on external systems.",
    simplafi:
      "Define the specific limits on portable storage use with external systems. Can an employee use an encrypted USB drive on a home computer to work on CUI? Most organizations should say no. Whatever your answer, document the limits clearly — approved devices, approved scenarios, required encryption, and any prohibited uses.",
    discussion:
      "Limits on the use of organization-controlled portable storage devices in external systems  include complete prohibition of the use of such devices or restrictions on how the devices  may be used and under what conditions the devices may be used. Note that while “external”  typically refers to outside of the organization’s direct supervision and authority that is not  always the case. Regarding the protection of CUI across an organization, the organization  may have systems that process CUI and o...",
    furtherDiscussion:
      "A portable storage device is a system component that can be inserted or attached and easily  removed from a system. It is used to store data or information. Examples of portable storage  devices include:  • compact/digital video disks (CDs/DVDs);  • Universal Serial Bus (USB) drives;  • external hard disk drives;  • flash memory cards/drives; and  • floppy disks.  This requirement can be implemented in two ways:  • identifying the portable storage device usage restrictions, identifying portable ...",
    assessmentConsiderations: [
      "Are the portable storage devices authorized for external use identified and documented \n[a]?",
      "Are the circumstances defined in which portable storage devices containing CUI may be \nused on external systems (e.g., with management approval) [b]?",
      "Are limitations stipulated for the use of portable storage devices containing CUI on \nexternal systems (e.g., authorized personnel only, encrypted drives required) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.1.21.c": {
    type: "CONFIG",
    notes:
      "Enforce limits on portable storage device use through USB restrictions, DLP, or device management policies so that CUI on external systems is protected.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your portable storage limits need to be technically enforced. In Intune, configure device restriction profiles to control USB storage access. Use Defender for Endpoint's device control policies to block unauthorized removable media. An assessor will plug a USB drive into a managed device and check whether it's blocked or allowed per your policy.",
    discussion:
      "Limits on the use of organization-controlled portable storage devices in external systems  include complete prohibition of the use of such devices or restrictions on how the devices  may be used and under what conditions the devices may be used. Note that while “external”  typically refers to outside of the organization’s direct supervision and authority that is not  always the case. Regarding the protection of CUI across an organization, the organization  may have systems that process CUI and o...",
    furtherDiscussion:
      "A portable storage device is a system component that can be inserted or attached and easily  removed from a system. It is used to store data or information. Examples of portable storage  devices include:  • compact/digital video disks (CDs/DVDs);  • Universal Serial Bus (USB) drives;  • external hard disk drives;  • flash memory cards/drives; and  • floppy disks.  This requirement can be implemented in two ways:  • identifying the portable storage device usage restrictions, identifying portable ...",
    assessmentConsiderations: [
      "Are the portable storage devices authorized for external use identified and documented \n[a]?",
      "Are the circumstances defined in which portable storage devices containing CUI may be \nused on external systems (e.g., with management approval) [b]?",
      "Are limitations stipulated for the use of portable storage devices containing CUI on \nexternal systems (e.g., authorized personnel only, encrypted drives required) [b]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // Control 3.1.22
  "3.1.22.a": {
    type: "POLICY",
    notes:
      "Identify and document individuals authorized to post or process information on publicly accessible systems.",
    simplafi:
      "Identify who in your organization is authorized to post content to publicly accessible systems — your website, social media, public-facing portals. Not everyone should have this ability, and the list should be documented. This is a people-and-process control: only named individuals with specific authorization should be able to publish public content.",
    discussion:
      "In accordance with laws, Executive Orders, directives, policies, regulations, or standards, the  public is not authorized access to nonpublic information (e.g., information protected under  the Privacy Act, CUI, and proprietary information). This requirement addresses systems that  54 NIST SP 800-171A, p. 18.  55 NIST SP 800-171 Rev. 2, p. 16.  are controlled by the organization and accessible to the public, typically without  identification or authentication. Individuals authorized to post CUI ...",
    furtherDiscussion:
      "Only government officials can be authorized to release CUI to the public. Do not allow CUI to  become public – always safeguard the confidentiality of CUI by controlling the posting of CUI  on company-controlled websites or public forums, and the exposure of CUI in public  presentations or on public displays. It is important to know which users are allowed to  publish information on publicly accessible systems, like your company website, and  implement a review process before posting such inform...",
    assessmentConsiderations: [
      "Does information on externally facing systems (i.e., publicly accessible) have a \ndocumented approval chain for public release [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.22.b": {
    type: "POLICY",
    notes:
      "Identify and document procedures to ensure CUI is not posted or processed on publicly accessible systems.",
    simplafi:
      "Document the procedures that prevent CUI from ending up on public-facing systems. This includes review steps before publication, training for content creators on recognizing CUI, and clear rules about what types of information can never be published. This is your guardrail policy — the rules content publishers must follow.",
    discussion:
      "In accordance with laws, Executive Orders, directives, policies, regulations, or standards, the  public is not authorized access to nonpublic information (e.g., information protected under  the Privacy Act, CUI, and proprietary information). This requirement addresses systems that  54 NIST SP 800-171A, p. 18.  55 NIST SP 800-171 Rev. 2, p. 16.  are controlled by the organization and accessible to the public, typically without  identification or authentication. Individuals authorized to post CUI ...",
    furtherDiscussion:
      "Only government officials can be authorized to release CUI to the public. Do not allow CUI to  become public – always safeguard the confidentiality of CUI by controlling the posting of CUI  on company-controlled websites or public forums, and the exposure of CUI in public  presentations or on public displays. It is important to know which users are allowed to  publish information on publicly accessible systems, like your company website, and  implement a review process before posting such inform...",
    assessmentConsiderations: [
      "Does information on externally facing systems (i.e., publicly accessible) have a \ndocumented approval chain for public release [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.1.22.c": {
    type: "POLICY",
    notes:
      "Establish and document a review process that must be completed prior to posting any content to publicly accessible systems.",
    simplafi:
      "Establish a formal review process for all content before it goes public. Someone other than the author should review posts, web pages, and public documents to check for CUI or sensitive information. Document who reviews, what they check for, and how the approval is recorded. This is a human check — technology alone can't catch every CUI disclosure.",
    discussion:
      "In accordance with laws, Executive Orders, directives, policies, regulations, or standards, the  public is not authorized access to nonpublic information (e.g., information protected under  the Privacy Act, CUI, and proprietary information). This requirement addresses systems that  54 NIST SP 800-171A, p. 18.  55 NIST SP 800-171 Rev. 2, p. 16.  are controlled by the organization and accessible to the public, typically without  identification or authentication. Individuals authorized to post CUI ...",
    furtherDiscussion:
      "Only government officials can be authorized to release CUI to the public. Do not allow CUI to  become public – always safeguard the confidentiality of CUI by controlling the posting of CUI  on company-controlled websites or public forums, and the exposure of CUI in public  presentations or on public displays. It is important to know which users are allowed to  publish information on publicly accessible systems, like your company website, and  implement a review process before posting such inform...",
    assessmentConsiderations: [
      "Does information on externally facing systems (i.e., publicly accessible) have a \ndocumented approval chain for public release [c]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.1.22.d": {
    type: "CONFIG",
    notes:
      "Implement content review mechanisms so that publicly accessible content is reviewed and verified to not include CUI.",
    simplafi:
      "This is the enforcement side of (b) and (c). Public-facing content must be actively reviewed to verify it doesn't contain CUI. Beyond the pre-publication review, periodically scan your public systems for CUI that may have slipped through. Purview data loss prevention can help scan for sensitive information patterns in content being published externally.",
    discussion:
      "In accordance with laws, Executive Orders, directives, policies, regulations, or standards, the  public is not authorized access to nonpublic information (e.g., information protected under  the Privacy Act, CUI, and proprietary information). This requirement addresses systems that  54 NIST SP 800-171A, p. 18.  55 NIST SP 800-171 Rev. 2, p. 16.  are controlled by the organization and accessible to the public, typically without  identification or authentication. Individuals authorized to post CUI ...",
    furtherDiscussion:
      "Only government officials can be authorized to release CUI to the public. Do not allow CUI to  become public – always safeguard the confidentiality of CUI by controlling the posting of CUI  on company-controlled websites or public forums, and the exposure of CUI in public  presentations or on public displays. It is important to know which users are allowed to  publish information on publicly accessible systems, like your company website, and  implement a review process before posting such inform...",
    assessmentConsiderations: [
      "Does information on externally facing systems (i.e., publicly accessible) have a \ndocumented approval chain for public release [c]?",
    ],
    confidence: "HIGH",
    verb: "reviewed",
  },
  "3.1.22.e": {
    type: "CONFIG",
    notes:
      "Implement mechanisms to detect, remove, and address improper posting of CUI on publicly accessible systems.",
    simplafi:
      "If CUI does end up on a public system, you need a mechanism to remove it quickly. This means having a documented incident response procedure for public CUI exposure, designated people who can take content down immediately, and tools to do so. In the Microsoft ecosystem, this could leverage Purview eDiscovery to search and purge publicly exposed content.",
    discussion:
      "In accordance with laws, Executive Orders, directives, policies, regulations, or standards, the  public is not authorized access to nonpublic information (e.g., information protected under  the Privacy Act, CUI, and proprietary information). This requirement addresses systems that  54 NIST SP 800-171A, p. 18.  55 NIST SP 800-171 Rev. 2, p. 16.  are controlled by the organization and accessible to the public, typically without  identification or authentication. Individuals authorized to post CUI ...",
    furtherDiscussion:
      "Only government officials can be authorized to release CUI to the public. Do not allow CUI to  become public – always safeguard the confidentiality of CUI by controlling the posting of CUI  on company-controlled websites or public forums, and the exposure of CUI in public  presentations or on public displays. It is important to know which users are allowed to  publish information on publicly accessible systems, like your company website, and  implement a review process before posting such inform...",
    assessmentConsiderations: [
      "Does information on externally facing systems (i.e., publicly accessible) have a \ndocumented approval chain for public release [c]?",
    ],
    confidence: "HIGH",
    verb: "in place",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.2 - AWARENESS AND TRAINING (3 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.2.1
  "3.2.1.a": {
    type: "POLICY",
    notes:
      "Identify and document the security risks associated with organizational activities involving CUI.",
    simplafi:
      "This is about documenting what CUI-related security risks your people need to know about. You're building the foundation of your awareness training program -- before you can train anyone, you need to identify what threats they'll face. Think phishing, social engineering, mishandling sensitive files. Document these risks so your training content has substance. This is the \"what could go wrong\" list that drives everything else in your security awareness program.",
    discussion:
      "Organizations determine the content and frequency of security awareness training and  security awareness techniques based on the specific organizational requirements and the  systems to which personnel have authorized access. The content includes a basic  56 NIST SP 800-171A, p. 19.  57 NIST SP 800-171 Rev. 2, pp. 16-17.  understanding of the need for information security and user actions to maintain security and  to respond to suspected security incidents. The content also addresses awareness o...",
    furtherDiscussion:
      "Awareness training focuses user attention on security. Several techniques can be used, such  as:  • synchronous or asynchronous training;  • simulations (e.g., simulated phishing emails);  • security awareness campaigns (posters, reminders, group discussions); and  • communicating regular email advisories and notices to employees.  Awareness training and role-based training are different. This requirement, AT.L2-3.2.1,  covers awareness training, which provides general security training to influ...",
    assessmentConsiderations: [
      "Do all users, managers, and system administrators receive initial and refresher training \ncommensurate with their roles and responsibilities [c,d]?",
      "Do training materials identify the organization-defined security requirements that must \nbe met by users while interacting with the system as described in written policies, \nstandards, and procedures [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.2.1.b": {
    type: "POLICY",
    notes:
      "Identify and document the policies, standards, and procedures related to the security of the system.",
    simplafi:
      "You need to document the security policies, standards, and procedures your people are expected to follow. This is your rulebook -- acceptable use policies, CUI handling procedures, password requirements, incident reporting steps. Without these written down, your training has nothing to point to. When an assessor asks \"what are your people trained on?\" this documentation is the answer. It also gives you a defensible baseline when someone says they didn't know the rules.",
    discussion:
      "Organizations determine the content and frequency of security awareness training and  security awareness techniques based on the specific organizational requirements and the  systems to which personnel have authorized access. The content includes a basic  56 NIST SP 800-171A, p. 19.  57 NIST SP 800-171 Rev. 2, pp. 16-17.  understanding of the need for information security and user actions to maintain security and  to respond to suspected security incidents. The content also addresses awareness o...",
    furtherDiscussion:
      "Awareness training focuses user attention on security. Several techniques can be used, such  as:  • synchronous or asynchronous training;  • simulations (e.g., simulated phishing emails);  • security awareness campaigns (posters, reminders, group discussions); and  • communicating regular email advisories and notices to employees.  Awareness training and role-based training are different. This requirement, AT.L2-3.2.1,  covers awareness training, which provides general security training to influ...",
    assessmentConsiderations: [
      "Do all users, managers, and system administrators receive initial and refresher training \ncommensurate with their roles and responsibilities [c,d]?",
      "Do training materials identify the organization-defined security requirements that must \nbe met by users while interacting with the system as described in written policies, \nstandards, and procedures [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.2.1.c": {
    type: "POLICY",
    notes:
      "Establish and document a process to ensure managers, systems administrators, and users are made aware of the security risks associated with their activities.",
    simplafi:
      "This is where you actually deliver awareness training to your team about security risks. Everyone -- managers, admins, and regular users -- needs to understand the threats they face when handling CUI. This means running phishing simulations, holding training sessions, posting reminders, and sending periodic security tips. You're configuring your humans to recognize danger. The goal isn't to make everyone a security expert, but to make sure nobody is the weak link that lets an attacker in.",
    discussion:
      "Organizations determine the content and frequency of security awareness training and  security awareness techniques based on the specific organizational requirements and the  systems to which personnel have authorized access. The content includes a basic  56 NIST SP 800-171A, p. 19.  57 NIST SP 800-171 Rev. 2, pp. 16-17.  understanding of the need for information security and user actions to maintain security and  to respond to suspected security incidents. The content also addresses awareness o...",
    furtherDiscussion:
      "Awareness training focuses user attention on security. Several techniques can be used, such  as:  • synchronous or asynchronous training;  • simulations (e.g., simulated phishing emails);  • security awareness campaigns (posters, reminders, group discussions); and  • communicating regular email advisories and notices to employees.  Awareness training and role-based training are different. This requirement, AT.L2-3.2.1,  covers awareness training, which provides general security training to influ...",
    assessmentConsiderations: [
      "Do all users, managers, and system administrators receive initial and refresher training \ncommensurate with their roles and responsibilities [c,d]?",
      "Do training materials identify the organization-defined security requirements that must \nbe met by users while interacting with the system as described in written policies, \nstandards, and procedures [d]?",
    ],
    confidence: "HIGH",
    verb: "made aware",
  },
  "3.2.1.d": {
    type: "POLICY",
    notes:
      "Establish and document a process to ensure managers, systems administrators, and users are made aware of applicable policies, standards, and procedures related to system security.",
    simplafi:
      "Beyond just knowing the risks, your people need to actually know your policies and procedures. This is the companion to 3.2.1.c -- where that one covers threats, this one covers rules. Your team should know your acceptable use policy, how to report incidents, how to handle CUI, and what's expected of them. Training should cover these policies explicitly so nobody can claim ignorance. Document attendance and acknowledgment to prove it happened.",
    discussion:
      "Organizations determine the content and frequency of security awareness training and  security awareness techniques based on the specific organizational requirements and the  systems to which personnel have authorized access. The content includes a basic  56 NIST SP 800-171A, p. 19.  57 NIST SP 800-171 Rev. 2, pp. 16-17.  understanding of the need for information security and user actions to maintain security and  to respond to suspected security incidents. The content also addresses awareness o...",
    furtherDiscussion:
      "Awareness training focuses user attention on security. Several techniques can be used, such  as:  • synchronous or asynchronous training;  • simulations (e.g., simulated phishing emails);  • security awareness campaigns (posters, reminders, group discussions); and  • communicating regular email advisories and notices to employees.  Awareness training and role-based training are different. This requirement, AT.L2-3.2.1,  covers awareness training, which provides general security training to influ...",
    assessmentConsiderations: [
      "Do all users, managers, and system administrators receive initial and refresher training \ncommensurate with their roles and responsibilities [c,d]?",
      "Do training materials identify the organization-defined security requirements that must \nbe met by users while interacting with the system as described in written policies, \nstandards, and procedures [d]?",
    ],
    confidence: "HIGH",
    verb: "made aware",
  },

  // Control 3.2.2
  "3.2.2.a": {
    type: "POLICY",
    notes:
      "Define and document information security-related duties, roles, and responsibilities.",
    simplafi:
      "You need to clearly define what security-related roles exist in your organization. Who is responsible for managing user accounts? Who reviews audit logs? Who handles incidents? Document these duties, roles, and responsibilities so there's no ambiguity. This isn't about job titles -- it's about making sure every security function has a named owner. For a small business, one person might wear multiple hats, and that's fine as long as it's documented.",
    discussion:
      "Organizations determine the content and frequency of security training based on the  assigned duties, roles, and responsibilities of individuals and the security requirements of  organizations and the systems to which personnel have authorized access. In addition,  organizations provide system developers, enterprise architects, security architects,  acquisition/procurement officials, software developers, system developers, systems  integrators,  system/network  administrators,  personnel  conduc...",
    furtherDiscussion:
      "Training imparts skills and knowledge to enable staff to perform a specific job function.  Training should be available to all employees for all organizational roles to accommodate  role changes without being constrained by the training schedule. Awareness training and  role-based training are different. Awareness training provides general security training to  influence user behavior and is covered by AT.L2-3.2.1. This requirement, AT.L2-3.2.2, covers  role-based training that focuses on the kn...",
    assessmentConsiderations: [
      "Are the duties, roles, and responsibilities that impact, directly or indirectly, the \ninformation security of the company or its systems defined and documented [a]?",
      "Do information security-related tasks have accountable owners, and is a strictly limited \ngroup of individuals assigned to perform them [b]?",
      "Are personnel who are assigned information security-related duties, roles, and \nresponsibilities trained on those responsibilities, including the security requirements \nunique or inherent to their roles or responsibilities [c]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.2.2.b": {
    type: "POLICY",
    notes:
      "Assign and document information security-related duties, roles, and responsibilities to designated personnel.",
    simplafi:
      "Once you've defined the security roles in 3.2.2.a, you need to assign actual people to them. Document who owns each security responsibility by name. Your IT admin might be responsible for managing Entra ID accounts, reviewing Defender alerts, and handling Intune compliance. Your office manager might own physical security. Put it in writing so there's clear accountability and no gaps where something falls through the cracks.",
    discussion:
      "Organizations determine the content and frequency of security training based on the  assigned duties, roles, and responsibilities of individuals and the security requirements of  organizations and the systems to which personnel have authorized access. In addition,  organizations provide system developers, enterprise architects, security architects,  acquisition/procurement officials, software developers, system developers, systems  integrators,  system/network  administrators,  personnel  conduc...",
    furtherDiscussion:
      "Training imparts skills and knowledge to enable staff to perform a specific job function.  Training should be available to all employees for all organizational roles to accommodate  role changes without being constrained by the training schedule. Awareness training and  role-based training are different. Awareness training provides general security training to  influence user behavior and is covered by AT.L2-3.2.1. This requirement, AT.L2-3.2.2, covers  role-based training that focuses on the kn...",
    assessmentConsiderations: [
      "Are the duties, roles, and responsibilities that impact, directly or indirectly, the \ninformation security of the company or its systems defined and documented [a]?",
      "Do information security-related tasks have accountable owners, and is a strictly limited \ngroup of individuals assigned to perform them [b]?",
      "Are personnel who are assigned information security-related duties, roles, and \nresponsibilities trained on those responsibilities, including the security requirements \nunique or inherent to their roles or responsibilities [c]?",
    ],
    confidence: "HIGH",
    verb: "assigned",
  },
  "3.2.2.c": {
    type: "POLICY",
    notes:
      "Establish and document a training program to ensure personnel are adequately trained to carry out their assigned information security-related duties, roles, and responsibilities.",
    simplafi:
      "The people you've assigned to security roles need proper training for those specific duties. This goes beyond general awareness -- if someone manages your Entra ID tenant, they need to know how to do that securely. If someone reviews audit logs in Purview, they need to know what to look for. Document your role-based training plan and track completion. You're configuring your humans with the specific skills their security responsibilities demand.",
    discussion:
      "Organizations determine the content and frequency of security training based on the  assigned duties, roles, and responsibilities of individuals and the security requirements of  organizations and the systems to which personnel have authorized access. In addition,  organizations provide system developers, enterprise architects, security architects,  acquisition/procurement officials, software developers, system developers, systems  integrators,  system/network  administrators,  personnel  conduc...",
    furtherDiscussion:
      "Training imparts skills and knowledge to enable staff to perform a specific job function.  Training should be available to all employees for all organizational roles to accommodate  role changes without being constrained by the training schedule. Awareness training and  role-based training are different. Awareness training provides general security training to  influence user behavior and is covered by AT.L2-3.2.1. This requirement, AT.L2-3.2.2, covers  role-based training that focuses on the kn...",
    assessmentConsiderations: [
      "Are the duties, roles, and responsibilities that impact, directly or indirectly, the \ninformation security of the company or its systems defined and documented [a]?",
      "Do information security-related tasks have accountable owners, and is a strictly limited \ngroup of individuals assigned to perform them [b]?",
      "Are personnel who are assigned information security-related duties, roles, and \nresponsibilities trained on those responsibilities, including the security requirements \nunique or inherent to their roles or responsibilities [c]?",
    ],
    confidence: "HIGH",
    verb: "trained",
  },

  // Control 3.2.3
  "3.2.3.a": {
    type: "POLICY",
    notes:
      "Identify and document potential indicators associated with insider threats.",
    simplafi:
      "You need to identify and document what insider threat warning signs look like. These are behavioral indicators -- someone accessing files they don't need, unusual after-hours activity, repeated policy violations, or signs of disgruntlement. Build a list of these indicators that makes sense for your organization. This feeds directly into the training you'll deliver in 3.2.3.b. You're giving your people a checklist of red flags to watch for among their colleagues.",
    discussion:
      "Potential indicators and possible precursors of insider threat include behaviors such as:  inordinate, long-term job dissatisfaction; attempts to gain access to information that is not  required for job performance; unexplained access to financial resources; bullying or sexual  harassment of fellow employees; workplace violence; and other serious violations of the  policies, procedures, directives, rules, or practices of organizations. Security awareness  training includes how to communicate emp...",
    furtherDiscussion:
      "An insider threat is the threat that an insider will use their authorized access, wittingly or  unwittingly, to do harm. Insider threat security awareness training focuses on recognizing  employee behaviors and characteristics that might be indicators of an insider threat and the  guidelines and procedures to handle and report it. Training for managers will provide  guidance on observing team members to identify all potential threat indicators, while  training for general employees will provide ...",
    assessmentConsiderations: [
      "Do training materials include potential indicators associated with insider threats (e.g., \nrepeated security violations, unusual work hours, unexpected significant transfers of \ndata, suspicious contacts, concerning behaviors outside the workplace) [a,b]?",
      "Do training materials include methods of reporting potential indicators of insider threats \nto management or responsible security personnel [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.2.3.b": {
    type: "POLICY",
    notes:
      "Provide and document security awareness training on recognizing and reporting potential indicators of insider threat to managers and employees.",
    simplafi:
      "Deliver actual insider threat awareness training to your managers and employees. Using the indicators you identified in 3.2.3.a, teach people what to watch for and how to report concerns through proper channels. Managers need deeper training since they observe team behavior daily. This isn't about creating a culture of suspicion -- it's about making sure people know that unusual patterns should be reported, not ignored. Document the training and track who completed it.",
    discussion:
      "Potential indicators and possible precursors of insider threat include behaviors such as:  inordinate, long-term job dissatisfaction; attempts to gain access to information that is not  required for job performance; unexplained access to financial resources; bullying or sexual  harassment of fellow employees; workplace violence; and other serious violations of the  policies, procedures, directives, rules, or practices of organizations. Security awareness  training includes how to communicate emp...",
    furtherDiscussion:
      "An insider threat is the threat that an insider will use their authorized access, wittingly or  unwittingly, to do harm. Insider threat security awareness training focuses on recognizing  employee behaviors and characteristics that might be indicators of an insider threat and the  guidelines and procedures to handle and report it. Training for managers will provide  guidance on observing team members to identify all potential threat indicators, while  training for general employees will provide ...",
    assessmentConsiderations: [
      "Do training materials include potential indicators associated with insider threats (e.g., \nrepeated security violations, unusual work hours, unexpected significant transfers of \ndata, suspicious contacts, concerning behaviors outside the workplace) [a,b]?",
      "Do training materials include methods of reporting potential indicators of insider threats \nto management or responsible security personnel [b]?",
    ],
    confidence: "HIGH",
    verb: "provided",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.3 - AUDIT AND ACCOUNTABILITY (9 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.3.1
  "3.3.1.a": {
    type: "POLICY",
    notes:
      "Specify and document the event types to be logged to enable monitoring, analysis, investigation, and reporting of unauthorized system activity.",
    simplafi:
      "You need to decide and document which types of events your systems should log. Think login attempts, file access, permission changes, admin actions -- anything that would help you investigate if something went wrong. This is the policy foundation that tells your IT team what to turn on. You're essentially writing the requirements list: \"We need to log these events because they help us detect unauthorized activity involving CUI.\"",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.3.1.b": {
    type: "POLICY",
    notes:
      "Define and document the required content of audit records to support monitoring, analysis, investigation, and reporting of unauthorized activity.",
    simplafi:
      "Beyond deciding what events to log, you need to define what each log entry should contain. A good audit record includes who did it, what they did, when they did it, where it happened, and whether it succeeded or failed. Document these content requirements so your logs are actually useful for investigations. This is the policy that tells your systems what details to capture in each record.",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.1.c": {
    type: "CONFIG",
    notes:
      "Implement audit logging so that audit records are created and generated for the specified event types.",
    simplafi:
      "This is the enforcement side of 3.3.1.a and 3.3.1.b. Your systems need to actually generate the audit records you defined. In practice, this means audit logging is turned on in Microsoft 365 Compliance Center, Defender, Entra ID, and any other systems handling CUI. Purview Audit should be enabled and capturing events. If the policy says log it, the system must actually be doing it -- no gaps between what's written and what's configured.",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "created (generated)",
  },
  "3.3.1.d": {
    type: "CONFIG",
    notes:
      "Enforce audit record content requirements so that generated records contain all defined fields including timestamps, user identifiers, and event descriptions.",
    simplafi:
      "This is the enforcement side of 3.3.1.b. Once audit records are created, they must contain all the content your policy requires -- who, what, when, where, and outcome. In your Microsoft environment, Purview Audit and Entra ID logs typically capture this by default, but verify the detail level matches your documented requirements. The logs should be rich enough that an investigator can reconstruct what happened without guessing.",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "contain",
  },
  "3.3.1.e": {
    type: "POLICY",
    notes:
      "Define and document retention requirements for audit records including minimum retention periods.",
    simplafi:
      "Document how long you need to keep your audit logs. CMMC doesn't specify an exact number, but your policy should define retention periods based on your compliance needs and investigation timelines. Many organizations choose one year or more. This policy drives how you configure retention settings in Purview and other systems. Without a defined retention period, logs might get deleted before you need them for an investigation or assessment.",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.1.f": {
    type: "CONFIG",
    notes:
      "Implement audit record retention so that records are stored and maintained according to the defined retention requirements.",
    simplafi:
      "This is the enforcement side of 3.3.1.e. Your systems must actually retain audit records for the duration your policy specifies. In Microsoft 365, configure retention policies in Purview Compliance to keep audit logs for your required period. Entra ID logs should be exported or retained through a SIEM or long-term storage. If your policy says keep logs for a year, the system configuration needs to match -- no auto-deletion cutting them short.",
    discussion:
      "An event is any observable occurrence in a system, which includes unlawful or unauthorized system activity. Organizations identify event types for which a logging functionality is needed as those events which are significant and relevant to the security of systems and the environments in which those systems operate to meet specific and ongoing auditing needs. Event types can include password changes, failed logons or failed accesses related to systems, administrative privilege usage, or third-pa...",
    furtherDiscussion:
      "OSAs must ensure that all applicable systems create and retain audit logs that contain  enough information to identify and investigate potentially unlawful or unauthorized system  activity. OSAs must define the audit logs it needs to collect as well as the specific events to  capture within the selected logs. Captured audit records are checked to verify that they  contain the required events.  63 NIST SP 800-171 Rev. 2, pp. 17-18.  In defining the audit log retention period, OSAs must ensure tha...",
    assessmentConsiderations: [
      "Are audit log retention requirements appropriate to the system and its associated level \nof risk [e]?",
    ],
    confidence: "HIGH",
    verb: "retained",
  },

  // Control 3.3.2
  "3.3.2.a": {
    type: "POLICY",
    notes:
      "Define and document the audit record content needed to uniquely trace individual user actions for accountability.",
    simplafi:
      "Document what information your audit records need to capture so you can trace any action back to a specific user. This means your policy should require logs to include unique user identifiers, timestamps, and the specific actions taken. The goal is simple: if something suspicious happens, you can answer \"who did that?\" This policy defines the content standard that makes individual accountability possible.",
    discussion:
      "This requirement ensures that the contents of the audit record include the information  needed to link the audit event to the actions of an individual to the extent feasible.  Organizations consider logging for traceability including results from monitoring of account  usage, remote access, wireless connectivity, mobile device connection, communications at  system boundaries, configuration settings, physical access, nonlocal maintenance, use of  maintenance tools, temperature and humidity, equip...",
    furtherDiscussion:
      "Capturing the necessary information in audit logs ensures that you can trace actions to a  specific user. This may include capturing user IDs, source and destination addresses, and  time stamps. Logging from networks, servers, clients, and applications should be considered  in ensuring accountability.  This requirement, AU.L2-3.3.2, which ensures logging and traceability of user actions,  supports the control of non-privileged users required by AC.L2-3.1. as well as many other  auditing, configu...",
    assessmentConsiderations: [
      "Are users uniquely traced and held responsible for unauthorized actions [a]?",
      "Does the system protect against an individual denying having performed an action (non- \nrepudiation) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.2.b": {
    type: "CONFIG",
    notes:
      "Enforce audit record generation so that records contain the defined content necessary to uniquely trace users to their actions.",
    simplafi:
      "This is the enforcement side of 3.3.2.a. Your systems must actually produce audit records that tie actions to individual users. In your Microsoft environment, Entra ID authentication logs and Purview Audit logs inherently track user identity with each action. Make sure shared accounts are minimized and that every user has a unique login, so your logs can actually trace actions to real people -- not generic accounts.",
    discussion:
      "This requirement ensures that the contents of the audit record include the information  needed to link the audit event to the actions of an individual to the extent feasible.  Organizations consider logging for traceability including results from monitoring of account  usage, remote access, wireless connectivity, mobile device connection, communications at  system boundaries, configuration settings, physical access, nonlocal maintenance, use of  maintenance tools, temperature and humidity, equip...",
    furtherDiscussion:
      "Capturing the necessary information in audit logs ensures that you can trace actions to a  specific user. This may include capturing user IDs, source and destination addresses, and  time stamps. Logging from networks, servers, clients, and applications should be considered  in ensuring accountability.  This requirement, AU.L2-3.3.2, which ensures logging and traceability of user actions,  supports the control of non-privileged users required by AC.L2-3.1. as well as many other  auditing, configu...",
    assessmentConsiderations: [
      "Are users uniquely traced and held responsible for unauthorized actions [a]?",
      "Does the system protect against an individual denying having performed an action (non- \nrepudiation) [b]?",
    ],
    confidence: "HIGH",
    verb: "contain",
  },

  // Control 3.3.3
  "3.3.3.a": {
    type: "POLICY",
    notes:
      "Define and document a process for determining when and how frequently logged events are reviewed.",
    simplafi:
      "Document your process for reviewing audit logs -- how often, who does it, and what triggers a review. Maybe your IT admin reviews Defender alerts daily and does a broader Purview Audit log review weekly. Maybe certain high-severity events trigger immediate review. Write this down as a defined process. Without a schedule, log review becomes something that only happens after a breach, which defeats the purpose of having logs in the first place.",
    discussion:
      "The intent of this requirement is to periodically re-evaluate which logged events will  continue to be included in the list of events to be logged. The event types that are logged by  organizations may change over time. Reviewing and updating the set of logged event types  periodically is necessary to ensure that the current set remains necessary and sufficient.  FURTHER DISCUSSION",
    furtherDiscussion:
      "This requirement is focused on the configuration of the auditing system, not the review of  the audit records produced by the selected events. The review of the audit logs is covered  under AU.L2-3.3. and AU.L2-3.3.6.  66 NIST SP 800-171A, p. 22.  67 NIST SP 800-171 Rev. 2, pp. 18-19.  Example  You are in charge of IT operations for a company that processes CUI and are responsible for  identifying and documenting which events are relevant to the security of your company’s  systems. Your company ...",
    assessmentConsiderations: [
      "Do documented processes include methods for determining when to review logged event \ntypes (i.e., regular frequency, after incidents, after major system changes) [a]?",
      "Do documented processes include methods for reviewing event types being logged (i.e., \nbased on specific threat, use case, retention capacity, current utilization, and/or newly \nadded system component or functionality) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.3.b": {
    type: "CONFIG",
    notes:
      "Implement the defined review process so that event types being logged are reviewed on schedule and findings are documented.",
    simplafi:
      "This is the enforcement side of 3.3.3.a. Your team must actually follow the review process you documented. Someone needs to be regularly checking logs in Purview Audit, reviewing Defender alerts, and looking at Entra ID sign-in reports on the schedule you defined. This isn't about reading every line -- it's about consistently reviewing the right events at the right frequency so suspicious activity doesn't go unnoticed for weeks.",
    discussion:
      "The intent of this requirement is to periodically re-evaluate which logged events will  continue to be included in the list of events to be logged. The event types that are logged by  organizations may change over time. Reviewing and updating the set of logged event types  periodically is necessary to ensure that the current set remains necessary and sufficient.  FURTHER DISCUSSION",
    furtherDiscussion:
      "This requirement is focused on the configuration of the auditing system, not the review of  the audit records produced by the selected events. The review of the audit logs is covered  under AU.L2-3.3. and AU.L2-3.3.6.  66 NIST SP 800-171A, p. 22.  67 NIST SP 800-171 Rev. 2, pp. 18-19.  Example  You are in charge of IT operations for a company that processes CUI and are responsible for  identifying and documenting which events are relevant to the security of your company’s  systems. Your company ...",
    assessmentConsiderations: [
      "Do documented processes include methods for determining when to review logged event \ntypes (i.e., regular frequency, after incidents, after major system changes) [a]?",
      "Do documented processes include methods for reviewing event types being logged (i.e., \nbased on specific threat, use case, retention capacity, current utilization, and/or newly \nadded system component or functionality) [b]?",
    ],
    confidence: "MEDIUM",
    verb: "reviewed",
  },
  "3.3.3.c": {
    type: "CONFIG",
    notes:
      "Implement updates to logged event types based on review findings so that logging configurations reflect current requirements.",
    simplafi:
      "This is the continuous improvement side of your log review process. When your reviews reveal that you're logging too much noise or missing important events, you update what gets logged. Maybe you discover failed login attempts from overseas need a new alert, or a certain event type generates useless volume. Adjust your audit configuration in Purview and Defender based on what your reviews actually teach you.",
    discussion:
      "The intent of this requirement is to periodically re-evaluate which logged events will  continue to be included in the list of events to be logged. The event types that are logged by  organizations may change over time. Reviewing and updating the set of logged event types  periodically is necessary to ensure that the current set remains necessary and sufficient.  FURTHER DISCUSSION",
    furtherDiscussion:
      "This requirement is focused on the configuration of the auditing system, not the review of  the audit records produced by the selected events. The review of the audit logs is covered  under AU.L2-3.3. and AU.L2-3.3.6.  66 NIST SP 800-171A, p. 22.  67 NIST SP 800-171 Rev. 2, pp. 18-19.  Example  You are in charge of IT operations for a company that processes CUI and are responsible for  identifying and documenting which events are relevant to the security of your company’s  systems. Your company ...",
    assessmentConsiderations: [
      "Do documented processes include methods for determining when to review logged event \ntypes (i.e., regular frequency, after incidents, after major system changes) [a]?",
      "Do documented processes include methods for reviewing event types being logged (i.e., \nbased on specific threat, use case, retention capacity, current utilization, and/or newly \nadded system component or functionality) [b]?",
    ],
    confidence: "MEDIUM",
    verb: "updated",
  },

  // Control 3.3.4
  "3.3.4.a": {
    type: "POLICY",
    notes:
      "Identify and document the personnel or roles to be alerted in the event of an audit logging process failure.",
    simplafi:
      "Document who should be notified when audit logging itself breaks. If your logging stops working, you're flying blind -- and that's exactly when attackers strike. Identify by name or role who gets alerted. This might be your IT admin, your security lead, or your managed service provider. The point is that someone specific is responsible for knowing when the safety net has a hole in it.",
    discussion:
      "Audit logging process failures include software and hardware errors, failures in the audit  record capturing mechanisms, and audit record storage capacity being reached or exceeded.  This requirement applies to each audit record data storage repository (i.e., distinct system  component where audit records are stored), the total audit record storage capacity of  organizations (i.e., all audit record data storage repositories combined), or both.  68 NIST SP 800-171A, p. 22.  69 NIST SP 800-171 Rev...",
    furtherDiscussion:
      "Audit logging keeps track of activities occurring on the network, servers, user workstations,  and other components of the overall system. These logs must always be available and  functional. The company’s designated security personnel (e.g., system administrator and  security officer) need to be aware when the audit log process fails or becomes unavailable  [a]. Notifications (e.g., email, Short Message Service (SMS)) should to be sent to the  company’s designated security personnel to immediat...",
    assessmentConsiderations: [
      "Will the system alert personnel with security responsibilities in the event of an audit \nprocessing failure?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.3.4.b": {
    type: "POLICY",
    notes:
      "Define and document the types of audit logging process failures that will trigger alerts.",
    simplafi:
      "Define which types of logging failures should trigger alerts. Not every hiccup needs a fire drill, but critical failures do -- things like audit logging stopping entirely, log storage reaching capacity, or logs failing to write. Document the specific failure scenarios that warrant an alert. This policy ensures your team knows the difference between a minor glitch and a logging outage that needs immediate attention.",
    discussion:
      "Audit logging process failures include software and hardware errors, failures in the audit  record capturing mechanisms, and audit record storage capacity being reached or exceeded.  This requirement applies to each audit record data storage repository (i.e., distinct system  component where audit records are stored), the total audit record storage capacity of  organizations (i.e., all audit record data storage repositories combined), or both.  68 NIST SP 800-171A, p. 22.  69 NIST SP 800-171 Rev...",
    furtherDiscussion:
      "Audit logging keeps track of activities occurring on the network, servers, user workstations,  and other components of the overall system. These logs must always be available and  functional. The company’s designated security personnel (e.g., system administrator and  security officer) need to be aware when the audit log process fails or becomes unavailable  [a]. Notifications (e.g., email, Short Message Service (SMS)) should to be sent to the  company’s designated security personnel to immediat...",
    assessmentConsiderations: [
      "Will the system alert personnel with security responsibilities in the event of an audit \nprocessing failure?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.4.c": {
    type: "CONFIG",
    notes:
      "Implement alerting so that identified personnel or roles are automatically notified when defined audit logging process failures occur.",
    simplafi:
      "This is the enforcement side of 3.3.4.a and 3.3.4.b. Your systems must actually alert the right people when logging fails. In Microsoft 365, configure alert policies in the Security admin center to notify your designated contacts when audit logging issues occur. Defender can also generate alerts for logging disruptions. The goal is automated notification -- don't rely on someone manually checking whether logging is still working.",
    discussion:
      "Audit logging process failures include software and hardware errors, failures in the audit  record capturing mechanisms, and audit record storage capacity being reached or exceeded.  This requirement applies to each audit record data storage repository (i.e., distinct system  component where audit records are stored), the total audit record storage capacity of  organizations (i.e., all audit record data storage repositories combined), or both.  68 NIST SP 800-171A, p. 22.  69 NIST SP 800-171 Rev...",
    furtherDiscussion:
      "Audit logging keeps track of activities occurring on the network, servers, user workstations,  and other components of the overall system. These logs must always be available and  functional. The company’s designated security personnel (e.g., system administrator and  security officer) need to be aware when the audit log process fails or becomes unavailable  [a]. Notifications (e.g., email, Short Message Service (SMS)) should to be sent to the  company’s designated security personnel to immediat...",
    assessmentConsiderations: [
      "Will the system alert personnel with security responsibilities in the event of an audit \nprocessing failure?",
    ],
    confidence: "HIGH",
    verb: "alerted",
  },

  // Control 3.3.5
  "3.3.5.a": {
    type: "POLICY",
    notes:
      "Define and document audit record review, analysis, and reporting processes for investigating and responding to unauthorized or suspicious activity.",
    simplafi:
      "Document your process for reviewing, analyzing, and reporting on audit records when something looks wrong. This is your playbook for what happens when logs reveal suspicious activity -- who investigates, how they correlate events across systems, and how findings get reported. Think of it as the bridge between \"we spotted something odd\" and \"here's what we're doing about it.\" This policy ties your audit capability to your incident response process.",
    discussion:
      "Correlating audit record review, analysis, and reporting processes helps to ensure that they  do not operate independently, but rather collectively. Regarding the assessment of a given  organizational system, the requirement is agnostic as to whether this correlation is applied  at the system level or at the organization level across all systems.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Companies must review, analyze, and report audit records to help detect and respond to  security incidents in a timely manner for the purpose of investigation and corrective actions.  Collection of audit logs into one or more central repositories may facilitate correlated review.  70 NIST SP 800-171A, p. 23.  71 NIST SP 800-171 Rev. 2, p. 19.  Small companies may be able to accomplish this manually with well-defined and -managed  procedures. Larger companies will use an automated system for anal...",
    assessmentConsiderations: [
      "Are mechanisms used across different repositories to integrate audit review, analysis, \ncorrelation, and reporting processes [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.5.b": {
    type: "CONFIG",
    notes:
      "Implement correlation of audit record review, analysis, and reporting processes so they operate collectively rather than independently.",
    simplafi:
      "This is the enforcement side of 3.3.5.a. Your analysis processes must actually correlate audit data across different sources. In practice, this means connecting the dots between Entra ID sign-in logs, Purview Audit records, and Defender alerts. Microsoft Sentinel or Defender XDR can correlate these automatically. The goal is that a suspicious login in Entra, followed by unusual file access in SharePoint, gets flagged as a connected pattern -- not two isolated events.",
    discussion:
      "Correlating audit record review, analysis, and reporting processes helps to ensure that they  do not operate independently, but rather collectively. Regarding the assessment of a given  organizational system, the requirement is agnostic as to whether this correlation is applied  at the system level or at the organization level across all systems.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Companies must review, analyze, and report audit records to help detect and respond to  security incidents in a timely manner for the purpose of investigation and corrective actions.  Collection of audit logs into one or more central repositories may facilitate correlated review.  70 NIST SP 800-171A, p. 23.  71 NIST SP 800-171 Rev. 2, p. 19.  Small companies may be able to accomplish this manually with well-defined and -managed  procedures. Larger companies will use an automated system for anal...",
    assessmentConsiderations: [
      "Are mechanisms used across different repositories to integrate audit review, analysis, \ncorrelation, and reporting processes [b]?",
    ],
    confidence: "HIGH",
    verb: "correlated",
  },

  // Control 3.3.6
  "3.3.6.a": {
    type: "CONFIG",
    notes:
      "Implement an audit record reduction capability that supports on-demand analysis of audit data.",
    simplafi:
      "Your environment needs the ability to filter and reduce large volumes of audit data down to what's relevant for a specific investigation. Purview Audit and Microsoft Sentinel provide search and filtering capabilities that let you narrow thousands of log entries to the specific timeframe, user, or activity you're investigating. This is about having tools that make your logs usable on demand, not just a massive archive nobody can search.",
    discussion:
      "Audit record reduction is a process that manipulates collected audit information and  organizes such information in a summary format that is more meaningful to analysts. Audit  record reduction and report generation capabilities do not always emanate from the same  system or organizational entities conducting auditing activities. Audit record reduction  capability can include, for example, modern data mining techniques with advanced data  filters to identify anomalous behavior in audit records. ...",
    furtherDiscussion:
      "Raw audit log data is difficult to review, analyze, and report because of the volume of data.  Audit record reduction is an automated process that interprets raw audit log data and  extracts meaningful and relevant information without altering the original logs. An example  of log reduction for files to be analyzed would be the removal of details associated with  nightly backups. Report generation on reduced log information allows you to create succinct  customized reports without the need to bu...",
    assessmentConsiderations: [
      "Does the system support on-demand audit review, analysis, and reporting requirements \nand after-the-fact security investigations [b]?",
    ],
    confidence: "HIGH",
    verb: "provided",
  },
  "3.3.6.b": {
    type: "CONFIG",
    notes:
      "Implement a report generation capability that supports on-demand reporting from audit records.",
    simplafi:
      "Your environment needs the ability to generate reports from audit data when needed. Purview Audit, Defender, and Sentinel all offer reporting features that can produce summaries of activity, compliance status, or investigation findings. This means when your assessor or a manager asks \"show me who accessed CUI last month,\" you can pull that report without manually digging through raw logs. On-demand reporting turns data into answers.",
    discussion:
      "Audit record reduction is a process that manipulates collected audit information and  organizes such information in a summary format that is more meaningful to analysts. Audit  record reduction and report generation capabilities do not always emanate from the same  system or organizational entities conducting auditing activities. Audit record reduction  capability can include, for example, modern data mining techniques with advanced data  filters to identify anomalous behavior in audit records. ...",
    furtherDiscussion:
      "Raw audit log data is difficult to review, analyze, and report because of the volume of data.  Audit record reduction is an automated process that interprets raw audit log data and  extracts meaningful and relevant information without altering the original logs. An example  of log reduction for files to be analyzed would be the removal of details associated with  nightly backups. Report generation on reduced log information allows you to create succinct  customized reports without the need to bu...",
    assessmentConsiderations: [
      "Does the system support on-demand audit review, analysis, and reporting requirements \nand after-the-fact security investigations [b]?",
    ],
    confidence: "HIGH",
    verb: "provided",
  },

  // Control 3.3.7
  "3.3.7.a": {
    type: "CONFIG",
    notes:
      "Enforce the use of internal system clocks to generate time stamps for all audit records.",
    simplafi:
      "Your systems must use their internal clocks to timestamp every audit record. This is typically handled automatically by Windows and Microsoft 365 services -- every log entry gets a timestamp from the system clock. The key is making sure this is happening consistently across all systems that generate audit records. Accurate timestamps are critical because without them, you can't reconstruct the sequence of events during an investigation.",
    discussion:
      "Internal system clocks are used to generate time stamps, which include date and time. Time  is expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich  Mean Time (GMT), or local time with an offset from UTC. The granularity of time  measurements refers to the degree of synchronization between system clocks and reference  clocks, for example, clocks synchronizing within hundreds of milliseconds or within tens of  milliseconds. Organizations may define different time gran...",
    furtherDiscussion:
      "Each system must synchronize its time with a central time server to ensure that all systems  are recording audit logs using the same time source. Reviewing audit logs from multiple  systems can be a difficult task if time is not synchronized. Systems can be synchronized to a  network device or directory service or configured manually.  Example  You are setting up several new computers on your company’s network, which contains CUI.  You update the time settings on each machine to use the same aut...",
    assessmentConsiderations: [
      "Can the records’ time stamps map to Coordinated Universal Time (UTC), compare system \nclocks with authoritative Network Time Protocol (NTP) servers, and synchronize system \nclocks when the time difference is greater than 1 second [c]?",
      "Does the system synchronize internal system clocks on a defined frequency [c]?",
    ],
    confidence: "HIGH",
    verb: "used to generate",
  },
  "3.3.7.b": {
    type: "POLICY",
    notes:
      "Specify and document the authoritative time source used to compare and synchronize internal system clocks.",
    simplafi:
      "Document which authoritative time source your systems should synchronize with. For most Microsoft environments, this means specifying a reliable NTP source -- often time.windows.com or a government time server. Write down which time source you've chosen and why. This policy ensures all your systems agree on what time it is, which matters when you're correlating logs across Entra ID, Defender, and Purview during an investigation.",
    discussion:
      "Internal system clocks are used to generate time stamps, which include date and time. Time  is expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich  Mean Time (GMT), or local time with an offset from UTC. The granularity of time  measurements refers to the degree of synchronization between system clocks and reference  clocks, for example, clocks synchronizing within hundreds of milliseconds or within tens of  milliseconds. Organizations may define different time gran...",
    furtherDiscussion:
      "Each system must synchronize its time with a central time server to ensure that all systems  are recording audit logs using the same time source. Reviewing audit logs from multiple  systems can be a difficult task if time is not synchronized. Systems can be synchronized to a  network device or directory service or configured manually.  Example  You are setting up several new computers on your company’s network, which contains CUI.  You update the time settings on each machine to use the same aut...",
    assessmentConsiderations: [
      "Can the records’ time stamps map to Coordinated Universal Time (UTC), compare system \nclocks with authoritative Network Time Protocol (NTP) servers, and synchronize system \nclocks when the time difference is greater than 1 second [c]?",
      "Does the system synchronize internal system clocks on a defined frequency [c]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.3.7.c": {
    type: "CONFIG",
    notes:
      "Implement time synchronization so that internal system clocks are compared to and synchronized with the specified authoritative time source.",
    simplafi:
      "This is the enforcement side of 3.3.7.b. Your systems must actually synchronize their clocks with your designated time source. Windows domain-joined devices typically sync through Active Directory, and Microsoft 365 services handle this automatically. For any on-premises systems, verify NTP is configured correctly. When all clocks agree, your audit trail tells a coherent story -- a login at 2:03 PM followed by file access at 2:04 PM, not conflicting timestamps.",
    discussion:
      "Internal system clocks are used to generate time stamps, which include date and time. Time  is expressed in Coordinated Universal Time (UTC), a modern continuation of Greenwich  Mean Time (GMT), or local time with an offset from UTC. The granularity of time  measurements refers to the degree of synchronization between system clocks and reference  clocks, for example, clocks synchronizing within hundreds of milliseconds or within tens of  milliseconds. Organizations may define different time gran...",
    furtherDiscussion:
      "Each system must synchronize its time with a central time server to ensure that all systems  are recording audit logs using the same time source. Reviewing audit logs from multiple  systems can be a difficult task if time is not synchronized. Systems can be synchronized to a  network device or directory service or configured manually.  Example  You are setting up several new computers on your company’s network, which contains CUI.  You update the time settings on each machine to use the same aut...",
    assessmentConsiderations: [
      "Can the records’ time stamps map to Coordinated Universal Time (UTC), compare system \nclocks with authoritative Network Time Protocol (NTP) servers, and synchronize system \nclocks when the time difference is greater than 1 second [c]?",
      "Does the system synchronize internal system clocks on a defined frequency [c]?",
    ],
    confidence: "HIGH",
    verb: "compared to and synchronized",
  },

  // Control 3.3.8
  "3.3.8.a": {
    type: "CONFIG",
    notes:
      "Enforce access controls to protect audit information from unauthorized access.",
    simplafi:
      "Your audit logs must be protected so unauthorized users can't read them. In your Microsoft environment, Purview Audit logs and Entra ID logs are protected by role-based access controls -- only users with the right admin roles can view them. Make sure you haven't granted broad access to compliance or security portals. Audit data often reveals sensitive patterns about user behavior, so treat log access like you'd treat access to CUI itself.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.3.8.b": {
    type: "CONFIG",
    notes:
      "Enforce integrity controls to protect audit information from unauthorized modification.",
    simplafi:
      "Your audit logs must be protected from unauthorized changes. Nobody should be able to edit or tamper with log entries after they're created. Microsoft 365 audit logs in Purview are inherently write-once -- users can't modify them after creation. For any on-premises logs, ensure they're stored in locations with restricted write permissions. Log integrity is what makes your audit trail trustworthy for investigations and assessments.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.3.8.c": {
    type: "CONFIG",
    notes:
      "Enforce deletion controls to protect audit information from unauthorized deletion.",
    simplafi:
      "Your audit logs must be protected from unauthorized deletion. If someone can delete logs, they can cover their tracks. Microsoft 365 Purview Audit logs can't be deleted by regular users, and retention policies prevent premature removal. For on-premises logs, restrict delete permissions and consider forwarding logs to a central location like Sentinel where the original can't be erased. Preservation of evidence is the goal here.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.3.8.d": {
    type: "CONFIG",
    notes:
      "Enforce access controls to protect audit logging tools from unauthorized access.",
    simplafi:
      "The tools you use for audit logging must be protected from unauthorized access. This means the admin portals for Purview, Defender, and Sentinel should only be accessible to authorized personnel through properly scoped Entra ID roles. If an attacker can access your logging tools, they can learn what you're monitoring and find blind spots. Restrict access to audit administration the same way you restrict access to any sensitive system.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.3.8.e": {
    type: "CONFIG",
    notes:
      "Enforce integrity controls to protect audit logging tools from unauthorized modification.",
    simplafi:
      "The tools you use for audit logging must be protected from unauthorized modification. Nobody outside your authorized admin team should be able to change logging configurations, alert rules, or retention policies. In Microsoft 365, this means tightly controlling who has admin roles in the Security admin center and Purview. If an attacker can modify your logging tools, they can quietly disable the alarms before doing damage.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.3.8.f": {
    type: "CONFIG",
    notes:
      "Enforce deletion controls to protect audit logging tools from unauthorized deletion.",
    simplafi:
      "The tools you use for audit logging must be protected from unauthorized deletion or removal. This means your Purview, Defender, and Sentinel configurations can't be wiped out by someone who shouldn't have access. Control admin role assignments in Entra ID carefully, and consider using Privileged Identity Management to require approval for sensitive admin actions. If someone can remove your logging tools entirely, your entire audit capability disappears.",
    discussion:
      "Audit information includes all information (e.g., audit records, audit log settings, and audit  reports) needed to successfully audit system activity. Audit logging tools are those programs  and devices used to conduct audit and logging activities. This requirement focuses on the  technical protection of audit information and limits the ability to access and execute audit  logging tools to authorized individuals. Physical protection of audit information is addressed  by media protection and phys...",
    furtherDiscussion:
      "Audit information is a critical record of what events occurred, the source of the events, and  the outcomes of the events; this information needs to be protected. The logs must be  properly secured so that the information may not be modified or deleted, either intentionally  or unintentionally. Only those with a legitimate need-to-know should have access to audit  information, whether that information is being accessed directly from logs or from audit  tools.  Example  You are in charge of IT op...",
    assessmentConsiderations: [
      "Is there a list of authorized users for audit systems and tools [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.3.9
  "3.3.9.a": {
    type: "POLICY",
    notes:
      "Define and document the subset of privileged users granted access to manage audit logging functionality.",
    simplafi:
      "Document which privileged users are allowed to manage your audit logging configuration. This should be a very short list -- only the people who genuinely need to configure what gets logged, set retention policies, or manage alert rules. Name them or define the specific roles. This policy prevents scope creep where too many admins can tinker with logging settings, which increases the risk of accidental or intentional tampering.",
    discussion:
      "Individuals with privileged access to a system and who are also the subject of an audit by  that system, may affect the reliability of audit information by inhibiting audit logging  activities or modifying audit records. This requirement specifies that privileged access be  further defined between audit-related privileges and other privileges, thus limiting the users  with audit-related privileges.  78 NIST SP 800-171A, pp. 24-25.  79 NIST SP 800-171 Rev. 2, p. 20.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Companies should restrict access to audit logging functions to a limited number of privileged  users who can modify audit logs and audit settings. General users should not be granted  permissions to perform audit management. All audit managers should be privileged users,  but only a small subset of privileged users will be given audit management responsibilities.  Functions performed by privileged users must be distinctly separate from the functions  performed by users who have audit-related res...",
    assessmentConsiderations: [
      "Are audit records of nonlocal accesses to privileged accounts and the execution of \nprivileged functions protected [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.3.9.b": {
    type: "CONFIG",
    notes:
      "Restrict management of audit logging functionality to the defined subset of privileged users through technical access controls.",
    simplafi:
      "This is the enforcement side of 3.3.9.a. Only the specific users you documented should actually have the ability to manage audit logging. In Entra ID, assign audit-related admin roles only to your approved list. Use Privileged Identity Management if available to make these roles just-in-time rather than always-on. Regularly review role assignments in the Entra admin center to make sure no one has been granted logging management access without approval.",
    discussion:
      "Individuals with privileged access to a system and who are also the subject of an audit by  that system, may affect the reliability of audit information by inhibiting audit logging  activities or modifying audit records. This requirement specifies that privileged access be  further defined between audit-related privileges and other privileges, thus limiting the users  with audit-related privileges.  78 NIST SP 800-171A, pp. 24-25.  79 NIST SP 800-171 Rev. 2, p. 20.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Companies should restrict access to audit logging functions to a limited number of privileged  users who can modify audit logs and audit settings. General users should not be granted  permissions to perform audit management. All audit managers should be privileged users,  but only a small subset of privileged users will be given audit management responsibilities.  Functions performed by privileged users must be distinctly separate from the functions  performed by users who have audit-related res...",
    assessmentConsiderations: [
      "Are audit records of nonlocal accesses to privileged accounts and the execution of \nprivileged functions protected [b]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.4 - CONFIGURATION MANAGEMENT (9 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.4.1
  "3.4.1.a": {
    type: "POLICY",
    notes:
      "Establish and document a baseline configuration for the system.",
    simplafi:
      "You need a documented baseline configuration — a snapshot of what your systems are supposed to look like when they're set up correctly. Think of it as your 'known good' setup: which OS versions, which apps, which settings. This lives in a document or spreadsheet, not just in your head. Without a written baseline, you have no way to detect drift or prove to an assessor that your systems are configured intentionally.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.4.1.b": {
    type: "POLICY",
    notes:
      "Document the baseline configuration to include hardware, software, firmware, and associated documentation.",
    simplafi:
      "Your baseline configuration document needs to cover everything — not just software. Include hardware models, firmware versions, installed applications, and any related documentation like network diagrams or configuration guides. If an assessor asks 'what's supposed to be running on this server?' your baseline should answer that question completely. A partial baseline leaves gaps that make change management and audits nearly impossible.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.4.1.c": {
    type: "CONFIG",
    notes:
      "Implement configuration management controls to maintain and enforce the baseline configuration throughout the system development life cycle.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your baseline can't be a one-time document that sits in a drawer. Every time you patch, upgrade, or reconfigure a system, the baseline needs to be updated. In Intune, your device configuration profiles effectively become your living baseline. The key is having a process — whether quarterly reviews or triggered by changes — that keeps the documentation current.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "maintained",
  },
  "3.4.1.d": {
    type: "POLICY",
    notes:
      "Establish and document a system inventory.",
    simplafi:
      "You need a system inventory — a list of every hardware device, software application, and firmware component in your environment. This is separate from your baseline configuration. The baseline says 'this is how things should be configured.' The inventory says 'these are the things we have.' A spreadsheet, Intune device list export, or asset management tool all work. The point is having a single source of truth.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.4.1.e": {
    type: "POLICY",
    notes:
      "Document the system inventory to include hardware, software, firmware, and associated documentation.",
    simplafi:
      "Your system inventory needs to be comprehensive — hardware like laptops and servers, software including versions and license info, firmware on network devices, and supporting documentation. If something touches CUI or supports a system that does, it belongs on this list. Think of it as your complete parts list. An assessor will ask about a random device and expect to find it in your inventory.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.4.1.f": {
    type: "CONFIG",
    notes:
      "Implement inventory management controls to maintain and update the system inventory throughout the system development life cycle.",
    simplafi:
      "This is the enforcement side of (d) and (e). Your inventory can't be a snapshot from last year — it needs to be maintained as things change. When you add a new laptop, decommission a server, or update firmware, the inventory gets updated. In Intune, device enrollment and retirement automatically updates your device inventory, but you still need a process for non-Intune assets like network equipment.",
    discussion:
      "This requirement establishes and maintains baseline configurations for systems and system  components including for system communications and connectivity. Baseline configurations  are documented, formally reviewed, and agreed-upon sets of specifications for systems or  configuration items within those systems. Baseline configurations serve as a basis for future  builds, releases, and changes to systems. Baseline configurations include information about  system components (e.g., standard softwar...",
    furtherDiscussion:
      "An effective cybersecurity program depends on consistent, secure system and component  configuration and management. Build and configure systems from a known, secure, and  approved configuration baseline. This includes:  • documenting the software and configuration settings of a system;  81 NIST SP 800-171 Rev. 2, p. 20.  • placement within the network; and  • other specifications as required by the organization.  Example  You are in charge of upgrading the computer operating systems of your off...",
    assessmentConsiderations: [
      "Do baseline configurations include software versions and patch level, configuration \nparameters, network information, and communications with connected systems [a,b]?",
      "Are baseline configurations updated as needed to accommodate security risks or \nsoftware changes [c]?",
    ],
    confidence: "HIGH",
    verb: "maintained",
  },

  // Control 3.4.2
  "3.4.2.a": {
    type: "POLICY",
    notes:
      "Establish and document security configuration settings for IT products and include them in the baseline configuration.",
    simplafi:
      "Before you can enforce security settings on your devices, you need to document what those settings should be. This is your security configuration standard — things like password policy values, screen lock timeouts, firewall rules, and encryption requirements. These settings become part of your baseline configuration. Think of it as the recipe that tells Intune what to enforce. Without this document, your configurations are just someone's best guess.",
    discussion:
      "Configuration settings are the set of parameters that can be changed in hardware, software,  or firmware components of the system that affect the security posture or functionality of the  system. Information technology products for which security-related configuration settings  can be defined include mainframe computers, servers, workstations, input and output  devices (e.g., scanners, copiers, and printers), network components (e.g., firewalls, routers,  82 NIST SP 800-171A, pp. 26-27.  83 NIST...",
    furtherDiscussion:
      "Information security is an integral part of a company’s configuration management process.  Security-related configuration settings are customized to satisfy the company’s security  requirements and are applied them to all systems once tested and approved. The  configuration settings must reflect the most restrictive settings that are appropriate for the  system. Any required deviations from the baseline are reviewed, documented, and approved.  Example  You manage baseline configurations for your...",
    assessmentConsiderations: [
      "Do security settings reflect the most restrictive settings appropriate [a]?",
      "Are changes or deviations to security settings documented [b]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.4.2.b": {
    type: "CONFIG",
    notes:
      "Enforce security configuration settings using system controls so that IT products operate according to the established baseline.",
    simplafi:
      "This is the enforcement side of (a). The security settings you documented need to be actively pushed and enforced on every device. In Intune, this means device configuration profiles and compliance policies that match your documented standards. If your policy says 'BitLocker must be enabled,' Intune should enforce it and flag any device that doesn't comply. An assessor will compare your written standards to your Intune profiles.",
    discussion:
      "Configuration settings are the set of parameters that can be changed in hardware, software,  or firmware components of the system that affect the security posture or functionality of the  system. Information technology products for which security-related configuration settings  can be defined include mainframe computers, servers, workstations, input and output  devices (e.g., scanners, copiers, and printers), network components (e.g., firewalls, routers,  82 NIST SP 800-171A, pp. 26-27.  83 NIST...",
    furtherDiscussion:
      "Information security is an integral part of a company’s configuration management process.  Security-related configuration settings are customized to satisfy the company’s security  requirements and are applied them to all systems once tested and approved. The  configuration settings must reflect the most restrictive settings that are appropriate for the  system. Any required deviations from the baseline are reviewed, documented, and approved.  Example  You manage baseline configurations for your...",
    assessmentConsiderations: [
      "Do security settings reflect the most restrictive settings appropriate [a]?",
      "Are changes or deviations to security settings documented [b]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },

  // Control 3.4.3
  "3.4.3.a": {
    type: "CONFIG",
    notes:
      "Implement change tracking so that all modifications to the system are automatically recorded.",
    simplafi:
      "Every change to your systems needs to be tracked — who changed what, when, and why. This isn't just major upgrades; it includes patches, configuration tweaks, and software installs. In the Microsoft ecosystem, Intune tracks device configuration changes, and Entra logs admin actions. The goal is a clear trail so you can answer 'what changed?' when something breaks or an assessor asks.",
    discussion:
      "Tracking, reviewing, approving/disapproving, and logging changes is called configuration  change control. Configuration change control for organizational systems involves the  systematic proposal, justification, implementation, testing, review, and disposition of  changes to the systems, including system upgrades and modifications. Configuration change  control includes changes to baseline configurations for components and configuration items  of systems, changes to configuration settings for in...",
    furtherDiscussion:
      "You must track, review, and approve configuration changes before committing to  production. Changes to computing environments can create unintended and unforeseen  issues that can affect the security and availability of the systems, including those that process  CUI. Relevant experts and stakeholders must review and approve proposed changes. They  should discuss potential impacts before the organization puts the changes in place. Relevant  items include changes to the physical environment and to...",
    assessmentConsiderations: [
      "Are changes to the system authorized by company management and documented \n[a,b,c,d]?",
      "Are changes documented and tracked (e.g., manually written down or included in a \ntracking service such as a ticketing system) [d]?",
    ],
    confidence: "HIGH",
    verb: "tracked",
  },
  "3.4.3.b": {
    type: "CONFIG",
    notes:
      "Implement change review controls so that system changes are reviewed through an enforced workflow.",
    simplafi:
      "Changes shouldn't just be logged — they need to be reviewed by someone with authority. This means someone looks at proposed changes before they go live to verify they're appropriate and won't introduce security risks. Whether it's a weekly change review meeting or an approval workflow in your ticketing system, the point is that changes don't happen in a vacuum.",
    discussion:
      "Tracking, reviewing, approving/disapproving, and logging changes is called configuration  change control. Configuration change control for organizational systems involves the  systematic proposal, justification, implementation, testing, review, and disposition of  changes to the systems, including system upgrades and modifications. Configuration change  control includes changes to baseline configurations for components and configuration items  of systems, changes to configuration settings for in...",
    furtherDiscussion:
      "You must track, review, and approve configuration changes before committing to  production. Changes to computing environments can create unintended and unforeseen  issues that can affect the security and availability of the systems, including those that process  CUI. Relevant experts and stakeholders must review and approve proposed changes. They  should discuss potential impacts before the organization puts the changes in place. Relevant  items include changes to the physical environment and to...",
    assessmentConsiderations: [
      "Are changes to the system authorized by company management and documented \n[a,b,c,d]?",
      "Are changes documented and tracked (e.g., manually written down or included in a \ntracking service such as a ticketing system) [d]?",
    ],
    confidence: "HIGH",
    verb: "reviewed",
  },
  "3.4.3.c": {
    type: "POLICY",
    notes:
      "Define and document the approval process for system changes including designated approval authority.",
    simplafi:
      "You need a documented approval process for system changes. Someone with authority must formally approve or reject changes before implementation. This could be a change advisory board, a manager sign-off in a ticket, or an approval workflow. The key is having a record that shows 'this change was reviewed and authorized by [name] on [date].' Informal verbal approvals won't satisfy an assessor.",
    discussion:
      "Tracking, reviewing, approving/disapproving, and logging changes is called configuration  change control. Configuration change control for organizational systems involves the  systematic proposal, justification, implementation, testing, review, and disposition of  changes to the systems, including system upgrades and modifications. Configuration change  control includes changes to baseline configurations for components and configuration items  of systems, changes to configuration settings for in...",
    furtherDiscussion:
      "You must track, review, and approve configuration changes before committing to  production. Changes to computing environments can create unintended and unforeseen  issues that can affect the security and availability of the systems, including those that process  CUI. Relevant experts and stakeholders must review and approve proposed changes. They  should discuss potential impacts before the organization puts the changes in place. Relevant  items include changes to the physical environment and to...",
    assessmentConsiderations: [
      "Are changes to the system authorized by company management and documented \n[a,b,c,d]?",
      "Are changes documented and tracked (e.g., manually written down or included in a \ntracking service such as a ticketing system) [d]?",
    ],
    confidence: "HIGH",
    verb: "approved or disapproved",
  },
  "3.4.3.d": {
    type: "CONFIG",
    notes:
      "Implement change logging so that all system modifications are automatically logged with relevant details.",
    simplafi:
      "This is closely related to tracking, but specifically about maintaining a log. Every change to the system — approved or not — should appear in an auditable log. In the Microsoft ecosystem, the Entra audit log, Intune device configuration change history, and unified audit log in Purview all contribute. An assessor will ask to see a change log for the past 90 days and expect entries with dates, descriptions, and responsible parties.",
    discussion:
      "Tracking, reviewing, approving/disapproving, and logging changes is called configuration  change control. Configuration change control for organizational systems involves the  systematic proposal, justification, implementation, testing, review, and disposition of  changes to the systems, including system upgrades and modifications. Configuration change  control includes changes to baseline configurations for components and configuration items  of systems, changes to configuration settings for in...",
    furtherDiscussion:
      "You must track, review, and approve configuration changes before committing to  production. Changes to computing environments can create unintended and unforeseen  issues that can affect the security and availability of the systems, including those that process  CUI. Relevant experts and stakeholders must review and approve proposed changes. They  should discuss potential impacts before the organization puts the changes in place. Relevant  items include changes to the physical environment and to...",
    assessmentConsiderations: [
      "Are changes to the system authorized by company management and documented \n[a,b,c,d]?",
      "Are changes documented and tracked (e.g., manually written down or included in a \ntracking service such as a ticketing system) [d]?",
    ],
    confidence: "HIGH",
    verb: "logged",
  },

  // Control 3.4.4
  "3.4.4.a": {
    type: "POLICY",
    notes:
      "Establish and document a process for analyzing the security impact of system changes prior to implementation.",
    simplafi:
      "Before making any change to your systems, someone needs to assess the security impact. Will this patch break a security control? Does this new software open a port? Could this configuration change expose CUI? Document a process for security impact analysis — even a simple checklist works. The point is that you think about security consequences before making changes, not after something goes wrong.",
    discussion:
      "Organizational personnel with information security responsibilities (e.g., system  administrators, system security officers, system security managers, and systems security  engineers) conduct security impact analyses. Individuals conducting security impact  analyses possess the necessary skills and technical expertise to analyze the changes to  systems and the associated security ramifications. Security impact analysis may include  reviewing security plans to understand security requirements and...",
    furtherDiscussion:
      "Changes to complex environments are reviewed for potential security impact before  implemented. Changes to IT systems can cause unforeseen problems and have unintended  consequences for both users and the security of the operating environment. Analyze the  security impact of changes prior to implementing them. This can uncover and mitigate  potential problems before they occur.  Example  You have been asked to deploy a new web browser plug-in. Your standard change  management process requires th...",
    assessmentConsiderations: [
      "Are configuration changes tested, validated, and documented before installing them on \nthe operational system [a]?",
    ],
    confidence: "HIGH",
    verb: "analyzed",
  },

  // Control 3.4.5
  "3.4.5.a": {
    type: "POLICY",
    notes:
      "Define and document physical access restrictions associated with system changes.",
    simplafi:
      "Define who can physically access systems when changes are being made. If a server is being upgraded, who's allowed in the server room? If a workstation is being reimaged, who can touch it? These restrictions should address physical access to hardware during the change process — not everyday access, but specifically during modifications. This is often overlooked in cloud-heavy environments, but it still matters for on-prem equipment.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.5.b": {
    type: "POLICY",
    notes:
      "Document physical access restrictions associated with system changes.",
    simplafi:
      "The physical access restrictions you defined in (a) need to be written down in a formal document. Specify which roles can physically access systems during changes, what the approval process looks like, and any escort or visitor logging requirements. This documentation proves to an assessor that physical access during changes isn't just ad hoc — it's a deliberate, controlled process with clear rules that people actually follow.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "documented",
  },
  "3.4.5.c": {
    type: "POLICY",
    notes:
      "Document approval of physical access restrictions associated with system changes.",
    simplafi:
      "Your documented physical access restrictions from (a) and (b) need formal approval from management. Someone with authority — a facility manager, CISO, or business owner — needs to sign off on who can physically access systems during changes. This approval provides accountability and demonstrates to an assessor that the restrictions were reviewed and endorsed at an appropriate level, not just written by IT and filed away without oversight.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "approved",
  },
  "3.4.5.d": {
    type: "CONFIG",
    notes:
      "Enforce physical access restrictions using access control mechanisms so that only authorized personnel can physically access systems during changes.",
    simplafi:
      "This is the enforcement side of (a) through (c). Your documented and approved physical access restrictions need to actually work in practice — badge access to server rooms should be limited to approved personnel, visitor logs should be maintained during change windows, and unauthorized physical access during changes should be blocked. An assessor will check whether the physical controls on the ground match your documented restrictions.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },
  "3.4.5.e": {
    type: "POLICY",
    notes:
      "Define and document logical access restrictions associated with system changes.",
    simplafi:
      "Define who can logically access systems when changes are being made — who can log in, what admin credentials are needed, and which Entra roles are authorized to make modifications. This is about controlling remote and digital access during the change process specifically. For example, only the change implementer and a designated reviewer should have access to make the approved changes, not the entire IT team.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.5.f": {
    type: "POLICY",
    notes:
      "Document logical access restrictions associated with system changes.",
    simplafi:
      "Document the logical access restrictions you defined in (e). Write down which specific accounts and Entra roles are authorized to make system changes, what authentication is required, and how access is granted and revoked for each change window. This documentation is exactly what an assessor compares against your actual Entra role assignments and Intune admin configurations to verify they match.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "documented",
  },
  "3.4.5.g": {
    type: "POLICY",
    notes:
      "Document approval of logical access restrictions associated with system changes.",
    simplafi:
      "The logical access restrictions from (e) and (f) need formal approval from management. Someone in authority must sign off on who gets digital access to make system changes and under what conditions. This is especially important for privileged access — using Entra PIM for just-in-time access during changes is a natural fit, and the built-in approval workflow in PIM can directly satisfy this requirement.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "approved",
  },
  "3.4.5.h": {
    type: "CONFIG",
    notes:
      "Enforce logical access restrictions using system controls so that only authorized users can make changes to the system.",
    simplafi:
      "This is the enforcement side of (e) through (g). Your approved logical access restrictions must be technically enforced. In Entra, this means PIM role activations with approval workflows for change-related admin access, conditional access policies limiting when and how changes can be made, and Intune RBAC restricting who can modify device configurations. An assessor will test whether unauthorized accounts can make changes.",
    discussion:
      "Any changes to the hardware, software, or firmware components of systems can potentially  have significant effects on the overall security of the systems. Therefore, organizations  permit only qualified and authorized individuals to access systems for purposes of initiating  changes, including upgrades and modifications. Access restrictions for change also include  software libraries. Access restrictions include physical and logical access control  requirements, workflow automation, media librar...",
    furtherDiscussion:
      "Define, identify, and document qualified individuals authorized to make physical and logical changes to the organization’s hardware, software, software libraries, or firmware components. Control of configuration management activities may involve: • physical access control that prohibits unauthorized users from gaining physical access to an asset (e.g., requiring a special key card to enter a server room); • logical access control that prevents unauthorized users from logging onto a system to mak...",
    assessmentConsiderations: [
      "Are only employees who are approved to make physical or logical changes on systems \nallowed to do so [a,d,e,h]?",
      "Are authorized personnel approved and documented by the service owner and IT \nsecurity [a,e]?",
      "Does all change documentation include the name of the authorized employee making the \nchange [b,d,f,h]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },

  // Control 3.4.6
  "3.4.6.a": {
    type: "POLICY",
    notes:
      "Define and document essential system capabilities based on the principle of least functionality.",
    simplafi:
      "Before locking down your systems, define what they actually need to do. List the essential capabilities each system type requires — a workstation needs email, Office apps, and browser access; a file server needs file sharing and backup services. Everything not on this list is nonessential. This is a least-functionality exercise: start with 'what does this system need?' not 'what should we remove?'",
    discussion:
      "Systems can provide a wide variety of functions and services. Some of the functions and  services routinely provided by default, may not be necessary to support essential  organizational missions, functions, or operations. It is sometimes convenient to provide  multiple services from single system components. However, doing so increases risk over  limiting the services provided by any one component. Where feasible, organizations limit  component functionality to a single function per component. ...",
    furtherDiscussion:
      "You should customize organizational systems to remove non-essential applications and  disable unnecessary services. Systems come with many unnecessary applications and  settings enabled by default including unused ports and protocols. Leave only the fewest  capabilities necessary for the systems to operate effectively.  Example  You have ordered a new server, which has arrived with a number of free utilities installed in  addition to the operating system. Before you deploy the server, you resear...",
    assessmentConsiderations: [
      "Are the roles and functions for each system identified along with the software and \nservices required to perform those functions [a]?",
      "Are the software and services required for those defined functions identified [a]?",
      "Is the information system configured to exclude any function not needed in the \noperational environment [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.6.b": {
    type: "CONFIG",
    notes:
      "Implement system configuration so that only the defined essential capabilities are available and all nonessential functionality is disabled.",
    simplafi:
      "This is the enforcement side of (a). Once you've defined essential capabilities, configure your systems to provide only those capabilities and nothing more. In Intune, use device configuration profiles to disable unnecessary features and services. Remove or disable unused Windows features, restrict app installations, and lock down system settings. An assessor will look for unnecessary services running on your systems.",
    discussion:
      "Systems can provide a wide variety of functions and services. Some of the functions and  services routinely provided by default, may not be necessary to support essential  organizational missions, functions, or operations. It is sometimes convenient to provide  multiple services from single system components. However, doing so increases risk over  limiting the services provided by any one component. Where feasible, organizations limit  component functionality to a single function per component. ...",
    furtherDiscussion:
      "You should customize organizational systems to remove non-essential applications and  disable unnecessary services. Systems come with many unnecessary applications and  settings enabled by default including unused ports and protocols. Leave only the fewest  capabilities necessary for the systems to operate effectively.  Example  You have ordered a new server, which has arrived with a number of free utilities installed in  addition to the operating system. Before you deploy the server, you resear...",
    assessmentConsiderations: [
      "Are the roles and functions for each system identified along with the software and \nservices required to perform those functions [a]?",
      "Are the software and services required for those defined functions identified [a]?",
      "Is the information system configured to exclude any function not needed in the \noperational environment [b]?",
    ],
    confidence: "HIGH",
    verb: "configured",
  },

  // Control 3.4.7
  "3.4.7.a": {
    type: "POLICY",
    notes:
      "Define and document essential programs.",
    simplafi:
      "Make a list of programs that are essential for your business operations — Office 365 apps, your line-of-business applications, approved browsers, and security tools like Defender. This documented list is the foundation for controlling what software runs in your environment. If a program isn't on this list, it needs justification to be installed. Keep it practical — include everything your team genuinely needs to do their jobs, but nothing extra.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.b": {
    type: "POLICY",
    notes:
      "Define and document restrictions on the use of nonessential programs.",
    simplafi:
      "Define what counts as nonessential software and what your policy is for handling it. Are games prohibited? What about personal productivity tools or unapproved browsers? Your policy should clearly state which categories of programs are considered nonessential and whether they're restricted, disabled, or completely blocked from running. This gives your technical team clear direction for what to configure and enforce in Intune.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.c": {
    type: "CONFIG",
    notes:
      "Restrict, disable, or prevent the use of nonessential programs using system controls as defined in policy.",
    simplafi:
      "This is the enforcement side of (a) and (b). Nonessential programs need to be technically restricted using your defined policy. In Intune, use app control policies or Windows Defender Application Control to block unapproved software. AppLocker rules can prevent execution of anything not on your approved list. An assessor will try to run an unapproved application and expect it to be blocked.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "restricted, disabled, or prevented",
  },
  "3.4.7.d": {
    type: "POLICY",
    notes:
      "Define and document essential functions.",
    simplafi:
      "Define which system functions are essential for daily operations — like Windows Update, backup services, remote management, and printing. This is similar to programs but focuses on OS-level features and built-in capabilities. Functions not on this list should be candidates for disabling. For example, if nobody uses Remote Desktop on workstations, it's nonessential and should be turned off through your Intune configuration profiles.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.e": {
    type: "POLICY",
    notes:
      "Define and document restrictions on the use of nonessential functions.",
    simplafi:
      "Document which system functions are nonessential and what should happen to them — disabled, restricted, or fully removed. For example, if your workstations don't need the built-in FTP client, PowerShell remoting, or Windows Sandbox, say so explicitly in your policy. This gives your admin team a clear, auditable checklist of exactly what to disable when they build out your Intune configuration profiles.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.f": {
    type: "CONFIG",
    notes:
      "Restrict, disable, or prevent the use of nonessential functions using system controls as defined in policy.",
    simplafi:
      "This is the enforcement side of (d) and (e). Nonessential functions must be technically disabled or restricted on your systems. In Intune, push device configuration profiles that turn off unnecessary Windows features and services. Use endpoint security profiles to disable functions like Remote Desktop or removable media access on machines that don't need them. An assessor will check for unnecessary features enabled on your devices.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "restricted, disabled, or prevented",
  },
  "3.4.7.g": {
    type: "POLICY",
    notes:
      "Define and document essential ports.",
    simplafi:
      "Identify which network ports are essential for your systems to function — common ones include 443 for HTTPS, 25 for email, and whatever your line-of-business apps require. Document each essential port, what it's used for, and which systems need it. Every port not on this list should be closed. This is your port allowlist, and it drives your firewall and endpoint firewall configurations.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.h": {
    type: "POLICY",
    notes:
      "Define and document restrictions on the use of nonessential ports.",
    simplafi:
      "Define which ports are nonessential and document your policy for handling them. If nobody needs FTP (port 21) or Telnet (port 23), say so explicitly. This document tells your network team exactly what to block. It's the complement to your essential ports list — together they create a complete picture of what should and shouldn't be open on your network.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.i": {
    type: "CONFIG",
    notes:
      "Restrict, disable, or prevent the use of nonessential ports using firewall or system controls as defined in policy.",
    simplafi:
      "This is the enforcement side of (g) and (h). Nonessential ports must be blocked on your systems and network. In Intune, configure Windows Firewall profiles to allow only essential ports and block everything else. At the network level, your firewall rules should match. Defender for Endpoint can also flag systems with unexpected open ports. An assessor will run a port scan and expect only your documented essential ports to respond.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "restricted, disabled, or prevented",
  },
  "3.4.7.j": {
    type: "POLICY",
    notes:
      "Define and document essential protocols.",
    simplafi:
      "Identify which network protocols your environment legitimately needs — HTTPS, DNS, DHCP, SMB for file sharing, and whatever your line-of-business applications require. Document each essential protocol along with its business justification. Legacy protocols like Telnet, FTP, or unencrypted HTTP should only appear on this list if there's an absolute business need with documented compensating controls to address their inherent risks.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.k": {
    type: "POLICY",
    notes:
      "Define and document restrictions on the use of nonessential protocols.",
    simplafi:
      "Document which protocols are nonessential and your policy for handling them. If your environment doesn't need LLMNR, NetBIOS, or unencrypted SNMP, write that down explicitly. This is the companion document to your essential protocols list and gives your technical team clear instructions on what to disable across your network. Legacy protocols are a common attack vector, so getting this list right really matters for your security posture.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.l": {
    type: "CONFIG",
    notes:
      "Restrict, disable, or prevent the use of nonessential protocols using system controls as defined in policy.",
    simplafi:
      "This is the enforcement side of (j) and (k). Nonessential protocols must be technically disabled or blocked. In Intune, use device configuration profiles to disable protocols like LLMNR and NetBIOS. In your network infrastructure, block legacy protocols at the firewall. Defender for Endpoint can help identify systems still using deprecated protocols. An assessor will look for unnecessary protocol traffic on your network.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "restricted, disabled, or prevented",
  },
  "3.4.7.m": {
    type: "POLICY",
    notes:
      "Define and document essential services.",
    simplafi:
      "Identify which network services your environment needs to run — DNS, DHCP, Active Directory, print services, file sharing. Document each essential service, which servers run it, and why it's needed. This is your service inventory, and anything not on the list should be a candidate for removal. In cloud-heavy environments, many traditional services are handled by Microsoft 365, so your on-prem list may be short.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.n": {
    type: "POLICY",
    notes:
      "Define and document restrictions on the use of nonessential services.",
    simplafi:
      "Document which services are nonessential and your policy for handling them. If your servers are running services nobody uses — like IIS on a file server or SNMP on a workstation — document that these should be disabled or removed entirely. This list gives your admin team a clear cleanup checklist and ensures nonessential services don't quietly become attack vectors sitting on your network waiting to be exploited.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.4.7.o": {
    type: "CONFIG",
    notes:
      "Restrict, disable, or prevent the use of nonessential services using system controls as defined in policy.",
    simplafi:
      "This is the enforcement side of (m) and (n). Nonessential services must be stopped and disabled on your systems. In Intune, push configuration profiles that disable unnecessary Windows services. On servers, remove roles and features that aren't needed. Defender for Endpoint can identify running services across your environment. An assessor will check your servers and workstations for services that shouldn't be running.",
    discussion:
      "Restricting the use of nonessential software (programs) includes restricting the roles  allowed to approve program execution; prohibiting auto-execute; program blacklisting and  whitelisting; or restricting the number of program instances executed at the same time. The  organization makes a security-based determination which functions, ports, protocols,  and/or services are restricted. Bluetooth, File Transfer Protocol (FTP), and peer-to-peer  networking are examples of protocols organizations c...",
    furtherDiscussion:
      "Organizations should only use the minimum set of programs, services, ports, and protocols required for to accomplish the organization’s mission. This has several implications: • All unnecessary programs and accounts are removed from all endpoints and servers. • The organization makes a policy decision to control the execution of programs through either whitelisting or blacklisting. Whitelisting means a program can only run if the software has been vetted in some way, and the executable name has ...",
    assessmentConsiderations: [
      "Are only applications and services that are needed for the function of the system \nconfigured and enabled [a,b,c,d,e,f]?",
      "Are only those ports and protocols necessary to provide the service of the information \nsystem configured for that system [g,h,i,j,k,l]?",
      "Are systems services reviewed to determine what is essential for the function of that \nsystem [m]?",
    ],
    confidence: "HIGH",
    verb: "restricted, disabled, or prevented",
  },

  // Control 3.4.8
  "3.4.8.a": {
    type: "POLICY",
    notes:
      "Specify and document a policy for whether application whitelisting or blacklisting will be implemented.",
    simplafi:
      "Decide whether your organization will use application whitelisting (only approved software can run) or blacklisting (only known-bad software is blocked). Whitelisting is more secure but harder to manage; blacklisting is easier but less protective. Document this decision in your configuration management policy. Most organizations handling CUI lean toward whitelisting because it's a stronger control. This policy drives everything that follows.",
    discussion:
      "The process used to identify software programs that are not authorized to execute on  systems is commonly referred to as blacklisting. The process used to identify software  94 NIST SP 800-171A, p. 30.  95 NIST SP 800-171 Rev. 2, p. 23.  programs that are authorized to execute on systems is commonly referred to as whitelisting.  Whitelisting is the stronger of the two policies for restricting software program execution.  In addition to whitelisting, organizations consider verifying the integrity...",
    furtherDiscussion:
      "Organizations should determine their blacklisting or whitelisting policy and configure the  system to manage software that is allowed to run. Blacklisting or deny-by-exception allows  all software to run except if on an unauthorized software list such as what is maintained in  antivirus solutions. Whitelisting or permit-by-exception does not allow any software to run  except if on an authorized software list. The stronger policy of the two is whitelisting.  This requirement, CM.L2-3.4.8, require...",
    assessmentConsiderations: [
      "Is the information system configured to only allow authorized software to run [a,b,c]?",
      "Is the system configured to disallow running unauthorized software [a,b,c]?",
      "Is there a defined list of software programs authorized to execute on the system [b]?",
      "Is the authorization policy a deny-all, permit by exception for software allowed to execute \non the system [a,b,c]?",
      "Are automated mechanisms used to prevent program execution in accordance with \ndefined lists (e.g., whitelisting) [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.4.8.b": {
    type: "POLICY",
    notes:
      "Specify and document the software allowed under whitelisting or denied under blacklisting.",
    simplafi:
      "Once you've chosen whitelisting or blacklisting, create the actual list of software. For whitelisting, document every application authorized to run — Office apps, browsers, security tools, and line-of-business software. For blacklisting, document categories and specific programs that are prohibited. Either way, the list needs to be reviewed and maintained as your software needs change over time. This is the master list your Intune and Defender controls enforce.",
    discussion:
      "The process used to identify software programs that are not authorized to execute on  systems is commonly referred to as blacklisting. The process used to identify software  94 NIST SP 800-171A, p. 30.  95 NIST SP 800-171 Rev. 2, p. 23.  programs that are authorized to execute on systems is commonly referred to as whitelisting.  Whitelisting is the stronger of the two policies for restricting software program execution.  In addition to whitelisting, organizations consider verifying the integrity...",
    furtherDiscussion:
      "Organizations should determine their blacklisting or whitelisting policy and configure the  system to manage software that is allowed to run. Blacklisting or deny-by-exception allows  all software to run except if on an unauthorized software list such as what is maintained in  antivirus solutions. Whitelisting or permit-by-exception does not allow any software to run  except if on an authorized software list. The stronger policy of the two is whitelisting.  This requirement, CM.L2-3.4.8, require...",
    assessmentConsiderations: [
      "Is the information system configured to only allow authorized software to run [a,b,c]?",
      "Is the system configured to disallow running unauthorized software [a,b,c]?",
      "Is there a defined list of software programs authorized to execute on the system [b]?",
      "Is the authorization policy a deny-all, permit by exception for software allowed to execute \non the system [a,b,c]?",
      "Are automated mechanisms used to prevent program execution in accordance with \ndefined lists (e.g., whitelisting) [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.4.8.c": {
    type: "CONFIG",
    notes:
      "Implement application whitelisting or blacklisting using system controls so that software execution is enforced as specified in policy.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your whitelist or blacklist must be technically enforced on every system. In Intune, use Windows Defender Application Control or AppLocker policies to allow or block applications matching your documented list. Defender for Endpoint can also flag policy violations. An assessor will try to run software not on your whitelist and expect the system to block it.",
    discussion:
      "The process used to identify software programs that are not authorized to execute on  systems is commonly referred to as blacklisting. The process used to identify software  94 NIST SP 800-171A, p. 30.  95 NIST SP 800-171 Rev. 2, p. 23.  programs that are authorized to execute on systems is commonly referred to as whitelisting.  Whitelisting is the stronger of the two policies for restricting software program execution.  In addition to whitelisting, organizations consider verifying the integrity...",
    furtherDiscussion:
      "Organizations should determine their blacklisting or whitelisting policy and configure the  system to manage software that is allowed to run. Blacklisting or deny-by-exception allows  all software to run except if on an unauthorized software list such as what is maintained in  antivirus solutions. Whitelisting or permit-by-exception does not allow any software to run  except if on an authorized software list. The stronger policy of the two is whitelisting.  This requirement, CM.L2-3.4.8, require...",
    assessmentConsiderations: [
      "Is the information system configured to only allow authorized software to run [a,b,c]?",
      "Is the system configured to disallow running unauthorized software [a,b,c]?",
      "Is there a defined list of software programs authorized to execute on the system [b]?",
      "Is the authorization policy a deny-all, permit by exception for software allowed to execute \non the system [a,b,c]?",
      "Are automated mechanisms used to prevent program execution in accordance with \ndefined lists (e.g., whitelisting) [a,b,c]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.4.9
  "3.4.9.a": {
    type: "POLICY",
    notes:
      "Establish and document a policy for controlling user software installation.",
    simplafi:
      "Create a policy that defines who can install software and under what conditions. Can standard users install anything? Only approved software from the Company Portal? Nothing at all without IT involvement? Most CUI environments restrict users from installing software independently. Document the rules, any exceptions, and the approval process clearly. This policy is what your Intune configuration will enforce, so make it practical and unambiguous.",
    discussion:
      "Users can install software in organizational systems if provided the necessary privileges. To  maintain control over the software installed, organizations identify permitted and  prohibited actions regarding software installation through policies. Permitted software  installations include updates and security patches to existing software and applications from  organization-approved “app stores.” Prohibited software installations may include software  with unknown or suspect pedigrees or software...",
    furtherDiscussion:
      "Software that users have the ability to install is limited to items that the organization  approves. When not controlled, users could install software that can create unnecessary risk.  This risk applies both to the individual machine and to the larger operating environment.  Policies and technical controls reduce risk to the organization by preventing users from  installing unauthorized software.  Example  You are a system administrator. A user calls you for help installing a software package. ...",
    assessmentConsiderations: [
      "Are user controls in place to prohibit the installation of unauthorized software [a]?",
      "Is all software in use on the information systems approved [b]?",
      "Is there a mechanism in place to monitor the types of software a user is permitted to \ndownload (e.g., is there a whitelist of approved software) [c]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.4.9.b": {
    type: "CONFIG",
    notes:
      "Implement system controls to restrict and control user software installation based on the established policy.",
    simplafi:
      "This is the enforcement side of (a). Your software installation policy must be technically enforced. In Intune, restrict standard users from installing software by removing local admin rights and using app deployment to push only approved applications. Windows Autopilot and the Company Portal let users self-service approved apps without needing admin rights. An assessor will try to install unapproved software as a standard user.",
    discussion:
      "Users can install software in organizational systems if provided the necessary privileges. To  maintain control over the software installed, organizations identify permitted and  prohibited actions regarding software installation through policies. Permitted software  installations include updates and security patches to existing software and applications from  organization-approved “app stores.” Prohibited software installations may include software  with unknown or suspect pedigrees or software...",
    furtherDiscussion:
      "Software that users have the ability to install is limited to items that the organization  approves. When not controlled, users could install software that can create unnecessary risk.  This risk applies both to the individual machine and to the larger operating environment.  Policies and technical controls reduce risk to the organization by preventing users from  installing unauthorized software.  Example  You are a system administrator. A user calls you for help installing a software package. ...",
    assessmentConsiderations: [
      "Are user controls in place to prohibit the installation of unauthorized software [a]?",
      "Is all software in use on the information systems approved [b]?",
      "Is there a mechanism in place to monitor the types of software a user is permitted to \ndownload (e.g., is there a whitelist of approved software) [c]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.4.9.c": {
    type: "CONFIG",
    notes:
      "Implement monitoring so that user software installation activity is tracked and logged.",
    simplafi:
      "Beyond blocking unauthorized installs, you need to monitor what gets installed. In the Microsoft ecosystem, Defender for Endpoint tracks software inventory across your devices, and Intune reports on discovered apps. Set up alerts for unexpected software appearing on managed devices. An assessor will ask how you detect unauthorized software installations — your monitoring needs to catch what your blocking might miss.",
    discussion:
      "Users can install software in organizational systems if provided the necessary privileges. To  maintain control over the software installed, organizations identify permitted and  prohibited actions regarding software installation through policies. Permitted software  installations include updates and security patches to existing software and applications from  organization-approved “app stores.” Prohibited software installations may include software  with unknown or suspect pedigrees or software...",
    furtherDiscussion:
      "Software that users have the ability to install is limited to items that the organization  approves. When not controlled, users could install software that can create unnecessary risk.  This risk applies both to the individual machine and to the larger operating environment.  Policies and technical controls reduce risk to the organization by preventing users from  installing unauthorized software.  Example  You are a system administrator. A user calls you for help installing a software package. ...",
    assessmentConsiderations: [
      "Are user controls in place to prohibit the installation of unauthorized software [a]?",
      "Is all software in use on the information systems approved [b]?",
      "Is there a mechanism in place to monitor the types of software a user is permitted to \ndownload (e.g., is there a whitelist of approved software) [c]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.5 - IDENTIFICATION AND AUTHENTICATION (11 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.5.1
  "3.5.1.a": {
    type: "POLICY",
    notes:
      "Identify and document system users authorized to access the system.",
    simplafi:
      "You need a documented list of every user who accesses your systems — not just in Entra, but a separate record that ties real people to their accounts. This could be a spreadsheet, an HR system integration, or a user access register. The point is knowing exactly who has access, by name and role, so you can verify your Entra accounts match real, authorized people. No orphaned or mystery accounts.",
    discussion:
      "Common device identifiers include media access control (MAC), Internet Protocol (IP)  addresses, or device-unique token identifiers. Management of individual identifiers is not  applicable to shared system accounts. Typically, individual identifiers are the user names  associated with the system accounts assigned to those individuals. Organizations may  require unique identification of individuals in group accounts or for detailed accountability  of individual activity. In addition, this require...",
    furtherDiscussion:
      "Make sure to assign individual, unique identifiers (e.g., user names) to all users and  processes that access company systems. Authorized devices also should have unique  identifiers. Unique identifiers can be as simple as a short set of alphanumeric characters (e.g.,  SW001 could refer to a network switch, SW002 could refer to a different network switch).  This requirement, IA.L2-3.5.1, provides a vetted and trusted identity that supports the access  control mechanism required by AC.L2-3.1.1.  ...",
    assessmentConsiderations: [
      "Are unique identifiers issued to individual users (e.g., usernames) [a]?",
      "Are the processes and service accounts that an authorized user initiates identified (e.g., \nscripts, automatic updates, configuration updates, vulnerability scans) [b]?",
      "Are unique device identifiers used for devices that access the system identified [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.5.1.b": {
    type: "POLICY",
    notes:
      "Identify and document processes acting on behalf of users.",
    simplafi:
      "Identify every automated process that acts on behalf of a user — service accounts, scheduled tasks, Power Automate flows, API connections. Each one should be documented with what it does, who owns it, and why it needs access. These processes can access CUI just like humans, so treating them as anonymous background jobs is a gap. Your register should tie each process to a responsible person.",
    discussion:
      "Common device identifiers include media access control (MAC), Internet Protocol (IP)  addresses, or device-unique token identifiers. Management of individual identifiers is not  applicable to shared system accounts. Typically, individual identifiers are the user names  associated with the system accounts assigned to those individuals. Organizations may  require unique identification of individuals in group accounts or for detailed accountability  of individual activity. In addition, this require...",
    furtherDiscussion:
      "Make sure to assign individual, unique identifiers (e.g., user names) to all users and  processes that access company systems. Authorized devices also should have unique  identifiers. Unique identifiers can be as simple as a short set of alphanumeric characters (e.g.,  SW001 could refer to a network switch, SW002 could refer to a different network switch).  This requirement, IA.L2-3.5.1, provides a vetted and trusted identity that supports the access  control mechanism required by AC.L2-3.1.1.  ...",
    assessmentConsiderations: [
      "Are unique identifiers issued to individual users (e.g., usernames) [a]?",
      "Are the processes and service accounts that an authorized user initiates identified (e.g., \nscripts, automatic updates, configuration updates, vulnerability scans) [b]?",
      "Are unique device identifiers used for devices that access the system identified [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.5.1.c": {
    type: "POLICY",
    notes:
      "Identify and document devices authorized to access the system.",
    simplafi:
      "Every device that connects to your environment needs to be identified — laptops, phones, tablets, servers, printers, IoT devices. This is your device identity register. In Intune, enrolled devices are automatically identified, but you also need to account for devices that connect outside of Intune management. An assessor wants to see that you know every device on your network by name, type, and owner.",
    discussion:
      "Common device identifiers include media access control (MAC), Internet Protocol (IP)  addresses, or device-unique token identifiers. Management of individual identifiers is not  applicable to shared system accounts. Typically, individual identifiers are the user names  associated with the system accounts assigned to those individuals. Organizations may  require unique identification of individuals in group accounts or for detailed accountability  of individual activity. In addition, this require...",
    furtherDiscussion:
      "Make sure to assign individual, unique identifiers (e.g., user names) to all users and  processes that access company systems. Authorized devices also should have unique  identifiers. Unique identifiers can be as simple as a short set of alphanumeric characters (e.g.,  SW001 could refer to a network switch, SW002 could refer to a different network switch).  This requirement, IA.L2-3.5.1, provides a vetted and trusted identity that supports the access  control mechanism required by AC.L2-3.1.1.  ...",
    assessmentConsiderations: [
      "Are unique identifiers issued to individual users (e.g., usernames) [a]?",
      "Are the processes and service accounts that an authorized user initiates identified (e.g., \nscripts, automatic updates, configuration updates, vulnerability scans) [b]?",
      "Are unique device identifiers used for devices that access the system identified [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },

  // Control 3.5.2
  "3.5.2.a": {
    type: "CONFIG",
    notes:
      "Implement authentication controls so that user identity is verified as a prerequisite to system access.",
    simplafi:
      "This is the enforcement side of 3.5.1.a. Every user must prove who they are before getting system access. In Entra, this means every account requires authentication — no anonymous access, no shared passwords, no accounts without MFA. Conditional access policies should ensure that authentication happens at every entry point. An assessor will try to access your systems without credentials and expect to be stopped cold.",
    discussion:
      "Individual authenticators include the following: passwords, key cards, cryptographic  devices, and one-time password devices. Initial authenticator content is the actual content  of the authenticator, for example, the initial password. In contrast, the requirements about  authenticator content include the minimum password length. Developers ship system  components with factory default authentication credentials to allow for initial installation  and configuration. Default authentication credenti...",
    furtherDiscussion:
      "Before a person or device is given system access, verify that the user or device is who or what  it claims to be. This verification is called authentication. The most common way to verify  identity is using a username and a hard-to-guess password.  Some devices ship with default usernames and passwords. Some devices ship with a default  username (e.g., admin) and password. A default username and password must be  immediately changed to something unique. Default passwords may be well known to the...",
    assessmentConsiderations: [
      "Are unique authenticators used to verify user identities (e.g., passwords) [a]?",
      "An example of a process acting on behalf of users could be a script that logs in as a person \nor service account [b]. Can the OSA show that it maintains a record of all of those service \naccounts for use when reviewing log data or responding to an incident?",
      "Are user credentials authenticated in system processes (e.g., credentials binding, \ncertificates, tokens) [b]?",
      "Are device identifiers used in authentication processes (e.g., MAC address, non-\nanonymous computer name, certificates) [c]?",
    ],
    confidence: "HIGH",
    verb: "authenticated or verified",
  },
  "3.5.2.b": {
    type: "CONFIG",
    notes:
      "Implement authentication controls so that process identity is verified as a prerequisite to system access.",
    simplafi:
      "This is the enforcement side of 3.5.1.b. Automated processes and service accounts need authentication too — they can't just run with stored credentials that never expire. In Entra, use managed identities or service principals with certificates instead of passwords. Each process should authenticate using its own identity, not a shared account. An assessor will check whether your service accounts have proper authentication configured.",
    discussion:
      "Individual authenticators include the following: passwords, key cards, cryptographic  devices, and one-time password devices. Initial authenticator content is the actual content  of the authenticator, for example, the initial password. In contrast, the requirements about  authenticator content include the minimum password length. Developers ship system  components with factory default authentication credentials to allow for initial installation  and configuration. Default authentication credenti...",
    furtherDiscussion:
      "Before a person or device is given system access, verify that the user or device is who or what  it claims to be. This verification is called authentication. The most common way to verify  identity is using a username and a hard-to-guess password.  Some devices ship with default usernames and passwords. Some devices ship with a default  username (e.g., admin) and password. A default username and password must be  immediately changed to something unique. Default passwords may be well known to the...",
    assessmentConsiderations: [
      "Are unique authenticators used to verify user identities (e.g., passwords) [a]?",
      "An example of a process acting on behalf of users could be a script that logs in as a person \nor service account [b]. Can the OSA show that it maintains a record of all of those service \naccounts for use when reviewing log data or responding to an incident?",
      "Are user credentials authenticated in system processes (e.g., credentials binding, \ncertificates, tokens) [b]?",
      "Are device identifiers used in authentication processes (e.g., MAC address, non-\nanonymous computer name, certificates) [c]?",
    ],
    confidence: "HIGH",
    verb: "authenticated or verified",
  },
  "3.5.2.c": {
    type: "CONFIG",
    notes:
      "Implement authentication controls so that device identity is verified as a prerequisite to system access.",
    simplafi:
      "This is the enforcement side of 3.5.1.c. Devices must prove their identity before connecting to your environment. In Entra, conditional access policies should require device enrollment in Intune and a passing compliance check before granting access to any resources. Unknown or unmanaged devices should be blocked from accessing CUI. An assessor will try to connect an unregistered personal device and expect it to be denied access entirely.",
    discussion:
      "Individual authenticators include the following: passwords, key cards, cryptographic  devices, and one-time password devices. Initial authenticator content is the actual content  of the authenticator, for example, the initial password. In contrast, the requirements about  authenticator content include the minimum password length. Developers ship system  components with factory default authentication credentials to allow for initial installation  and configuration. Default authentication credenti...",
    furtherDiscussion:
      "Before a person or device is given system access, verify that the user or device is who or what  it claims to be. This verification is called authentication. The most common way to verify  identity is using a username and a hard-to-guess password.  Some devices ship with default usernames and passwords. Some devices ship with a default  username (e.g., admin) and password. A default username and password must be  immediately changed to something unique. Default passwords may be well known to the...",
    assessmentConsiderations: [
      "Are unique authenticators used to verify user identities (e.g., passwords) [a]?",
      "An example of a process acting on behalf of users could be a script that logs in as a person \nor service account [b]. Can the OSA show that it maintains a record of all of those service \naccounts for use when reviewing log data or responding to an incident?",
      "Are user credentials authenticated in system processes (e.g., credentials binding, \ncertificates, tokens) [b]?",
      "Are device identifiers used in authentication processes (e.g., MAC address, non-\nanonymous computer name, certificates) [c]?",
    ],
    confidence: "HIGH",
    verb: "authenticated or verified",
  },

  // Control 3.5.3
  "3.5.3.a": {
    type: "POLICY",
    notes:
      "Identify and document privileged accounts.",
    simplafi:
      "Before configuring MFA, identify every privileged account in your environment — Global Admins, Security Admins, Exchange Admins, Intune Admins, and any service accounts with elevated rights. Document each one with the owner's name, their specific privilege level, and the business justification. This inventory is the foundation for your MFA requirements and your PIM configuration in Entra. You simply can't protect what you haven't identified.",
    discussion:
      "Multifactor authentication requires the use of two or more different factors to authenticate.  The factors are defined as something you know (e.g., password, personal identification  number [PIN]); something you have (e.g., cryptographic identification device, token); or  something you are (e.g., biometric). Multifactor authentication solutions that feature  physical authenticators include hardware authenticators providing time-based or challenge- response authenticators and smart cards. In addi...",
    furtherDiscussion:
      "Implement a combination of two or more factors of authentication to verify privileged  account holders’ identity regardless of how the user is accessing the account. Implement a  combination of two or more factors for non-privileged users accessing the system over a  network.  The implementation of multi-factor authentication will depend on the environment and  business needs. Although two-factor authentication directly on the computer is most  common, there are situations (e.g., multi-factor id...",
    assessmentConsiderations: [
      "Does the system uniquely identify and authenticate users, including privileged accounts \n[b,c,d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.5.3.b": {
    type: "CONFIG",
    notes:
      "Implement multifactor authentication so that local access to privileged accounts requires multiple authentication factors.",
    simplafi:
      "Privileged accounts must use multifactor authentication when logging in locally — meaning at the physical device. In Entra, configure conditional access policies that require MFA for all admin role holders regardless of how they connect. Windows Hello for Business on physical workstations also satisfies this requirement. An assessor will sit at a workstation, log in with an admin account, and verify MFA was required.",
    discussion:
      "Multifactor authentication requires the use of two or more different factors to authenticate.  The factors are defined as something you know (e.g., password, personal identification  number [PIN]); something you have (e.g., cryptographic identification device, token); or  something you are (e.g., biometric). Multifactor authentication solutions that feature  physical authenticators include hardware authenticators providing time-based or challenge- response authenticators and smart cards. In addi...",
    furtherDiscussion:
      "Implement a combination of two or more factors of authentication to verify privileged  account holders’ identity regardless of how the user is accessing the account. Implement a  combination of two or more factors for non-privileged users accessing the system over a  network.  The implementation of multi-factor authentication will depend on the environment and  business needs. Although two-factor authentication directly on the computer is most  common, there are situations (e.g., multi-factor id...",
    assessmentConsiderations: [
      "Does the system uniquely identify and authenticate users, including privileged accounts \n[b,c,d]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },
  "3.5.3.c": {
    type: "CONFIG",
    notes:
      "Implement multifactor authentication so that network access to privileged accounts requires multiple authentication factors.",
    simplafi:
      "Privileged accounts must use MFA for any network-based access — signing into admin portals, connecting through VPN, or accessing cloud admin centers. In Entra, conditional access policies should require MFA for all users with admin roles, with no exceptions for trusted networks. An assessor will log into the Entra admin center with a privileged account and verify MFA is enforced.",
    discussion:
      "Multifactor authentication requires the use of two or more different factors to authenticate.  The factors are defined as something you know (e.g., password, personal identification  number [PIN]); something you have (e.g., cryptographic identification device, token); or  something you are (e.g., biometric). Multifactor authentication solutions that feature  physical authenticators include hardware authenticators providing time-based or challenge- response authenticators and smart cards. In addi...",
    furtherDiscussion:
      "Implement a combination of two or more factors of authentication to verify privileged  account holders’ identity regardless of how the user is accessing the account. Implement a  combination of two or more factors for non-privileged users accessing the system over a  network.  The implementation of multi-factor authentication will depend on the environment and  business needs. Although two-factor authentication directly on the computer is most  common, there are situations (e.g., multi-factor id...",
    assessmentConsiderations: [
      "Does the system uniquely identify and authenticate users, including privileged accounts \n[b,c,d]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },
  "3.5.3.d": {
    type: "CONFIG",
    notes:
      "Implement multifactor authentication so that network access to non-privileged accounts requires multiple authentication factors.",
    simplafi:
      "All standard user accounts must also use MFA when accessing systems over the network. In Entra, the simplest approach is a conditional access policy that requires MFA for all users, all cloud apps. This protects against credential theft — even if someone's password is compromised, they can't log in without the second factor. An assessor will log in as a regular user and verify MFA is required.",
    discussion:
      "Multifactor authentication requires the use of two or more different factors to authenticate.  The factors are defined as something you know (e.g., password, personal identification  number [PIN]); something you have (e.g., cryptographic identification device, token); or  something you are (e.g., biometric). Multifactor authentication solutions that feature  physical authenticators include hardware authenticators providing time-based or challenge- response authenticators and smart cards. In addi...",
    furtherDiscussion:
      "Implement a combination of two or more factors of authentication to verify privileged  account holders’ identity regardless of how the user is accessing the account. Implement a  combination of two or more factors for non-privileged users accessing the system over a  network.  The implementation of multi-factor authentication will depend on the environment and  business needs. Although two-factor authentication directly on the computer is most  common, there are situations (e.g., multi-factor id...",
    assessmentConsiderations: [
      "Does the system uniquely identify and authenticate users, including privileged accounts \n[b,c,d]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.5.4
  "3.5.4.a": {
    type: "CONFIG",
    notes:
      "Implement replay-resistant authentication mechanisms for network access to both privileged and non-privileged accounts.",
    simplafi:
      "Your authentication system must prevent replay attacks — where an attacker captures a valid login and plays it back to gain access. In the Microsoft ecosystem, Entra's modern authentication protocols (OAuth 2.0, SAML) are inherently replay-resistant through token binding and nonce values. The key is ensuring legacy authentication protocols are blocked in conditional access, since those older protocols lack replay protection.",
    discussion:
      "Authentication processes resist replay attacks if it is impractical to successfully authenticate  by recording or replaying previous authentication messages. Replay-resistant techniques  include protocols that use nonces or challenges such as time synchronous or challenge- response one-time authenticators.  NIST SP 800-63-3 provides guidance on digital identities.  FURTHER DISCUSSION",
    furtherDiscussion:
      "When insecure protocols are used for access to computing resources, an adversary may be  able to capture login information and immediately reuse (replay) it for other purposes. It is  important to use mechanisms that resist this technique.  104 NIST SP 800-171A, p. 32.  105 NIST SP 800-171 Rev. 2, p. 25.  Example  To protect your IT infrastructure, you understand that the methods for authentication must  not be easily copied and re-sent to your systems by an adversary. You select Kerberos for  a...",
    assessmentConsiderations: [
      "Are only anti-replay authentication mechanisms used [a]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.5.5
  "3.5.5.a": {
    type: "POLICY",
    notes:
      "Define and document the period within which identifiers cannot be reused.",
    simplafi:
      "Define how long a user identifier — a username or account name — must remain retired before it can be reissued to someone else. A common policy is 'never reuse' or 'not within two years.' This prevents confusion in audit logs where 'jsmith' could refer to two different people. Document this policy so your identity management process has clear rules for handling departed employees' usernames.",
    discussion:
      "Identifiers are provided for users, processes acting on behalf of users, or devices (IA.L2- 3.5.1). Preventing reuse of identifiers implies preventing the assignment of previously used  individual, group, role, or device identifiers to different individuals, groups, roles, or devices.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifiers uniquely associate a user ID to an individual, group, role, or device. Establish  guidelines and implement mechanisms to prevent identifiers from being reused for the  period of time established in the policy.  106 NIST SP 800-171A, pp. 32-33.  107 NIST SP 800-171 Rev. 2, p. 25.  Example  As a system administrator, you maintain a central directory/domain that holds the accounts  for users, computers, and network devices. As part of your job, you issue unique usernames  (e.g., riley@a...",
    assessmentConsiderations: [
      "Are accounts uniquely assigned to employees, contractors, and subcontractors [b]?",
      "Are account identifiers reused [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.5.5.b": {
    type: "CONFIG",
    notes:
      "Enforce identifier reuse restrictions so that the system prevents reuse of identifiers within the defined period.",
    simplafi:
      "This is the enforcement side of (a). Your defined reuse period must be technically enforced. In Entra, this typically means never deleting accounts of departed users immediately — instead, disable them and retain them for your defined period. If you delete and recreate an account with the same name, Entra assigns a new object ID, but the username in older logs could still cause confusion.",
    discussion:
      "Identifiers are provided for users, processes acting on behalf of users, or devices (IA.L2- 3.5.1). Preventing reuse of identifiers implies preventing the assignment of previously used  individual, group, role, or device identifiers to different individuals, groups, roles, or devices.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifiers uniquely associate a user ID to an individual, group, role, or device. Establish  guidelines and implement mechanisms to prevent identifiers from being reused for the  period of time established in the policy.  106 NIST SP 800-171A, pp. 32-33.  107 NIST SP 800-171 Rev. 2, p. 25.  Example  As a system administrator, you maintain a central directory/domain that holds the accounts  for users, computers, and network devices. As part of your job, you issue unique usernames  (e.g., riley@a...",
    assessmentConsiderations: [
      "Are accounts uniquely assigned to employees, contractors, and subcontractors [b]?",
      "Are account identifiers reused [b]?",
    ],
    confidence: "HIGH",
    verb: "prevented",
  },

  // Control 3.5.6
  "3.5.6.a": {
    type: "POLICY",
    notes:
      "Define and document the period of inactivity after which an identifier is disabled.",
    simplafi:
      "Define how long an account can sit unused before it gets automatically disabled — 30 days, 60 days, 90 days. Pick a timeframe that makes sense for your organization and document it. Inactive accounts are a security risk because nobody notices if they get compromised. This policy tells your identity management team exactly when to pull the trigger on disabling dormant accounts.",
    discussion:
      "Inactive identifiers pose a risk to organizational information because attackers may exploit  an inactive identifier to gain undetected access to organizational devices. The owners of the  inactive accounts may not notice if unauthorized access to the account has been obtained.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifiers are uniquely associated with an individual, account, process, or device. An  inactive identifier is one that has not been used for a defined extended period of time. For  example, a user account may be needed for a certain time to allow for transition of business  processes to existing or new staff. Once use of the identifier is no longer necessary, it should  be disabled as soon as possible. Failure to maintain awareness of accounts that are no longer  needed yet still active could ...",
    assessmentConsiderations: [
      "Are user accounts or identifiers monitored for inactivity [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.5.6.b": {
    type: "CONFIG",
    notes:
      "Automatically disable identifiers after the defined period of inactivity using system controls.",
    simplafi:
      "This is the enforcement side of (a). Inactive accounts must be automatically disabled after your defined period. In Entra, you can use access reviews or automation through Logic Apps to identify and disable accounts that haven't signed in within your defined window. An assessor will ask to see accounts that haven't logged in recently and verify they've been disabled according to your policy.",
    discussion:
      "Inactive identifiers pose a risk to organizational information because attackers may exploit  an inactive identifier to gain undetected access to organizational devices. The owners of the  inactive accounts may not notice if unauthorized access to the account has been obtained.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifiers are uniquely associated with an individual, account, process, or device. An  inactive identifier is one that has not been used for a defined extended period of time. For  example, a user account may be needed for a certain time to allow for transition of business  processes to existing or new staff. Once use of the identifier is no longer necessary, it should  be disabled as soon as possible. Failure to maintain awareness of accounts that are no longer  needed yet still active could ...",
    assessmentConsiderations: [
      "Are user accounts or identifiers monitored for inactivity [b]?",
    ],
    confidence: "HIGH",
    verb: "disabled",
  },

  // Control 3.5.7
  "3.5.7.a": {
    type: "POLICY",
    notes:
      "Define and document password complexity requirements.",
    simplafi:
      "Define your password complexity requirements — minimum length, character types required (uppercase, lowercase, numbers, special characters), and any other rules your organization needs. Current NIST guidance favors longer passwords over complex character requirements, so consider a minimum of 14 characters rather than a short password with lots of special characters. Document these requirements in your access control policy. This is the standard your Entra password policies will enforce.",
    discussion:
      "This requirement applies to single-factor authentication of individuals using passwords as  individual or group authenticators, and in a similar manner, when passwords are used as  part of multifactor authenticators. The number of changed characters refers to the number  of changes required with respect to the total number of positions in the current password.  To mitigate certain brute force attacks against passwords, organizations may also consider  salting passwords.  110 NIST SP 800-171A, pp...",
    furtherDiscussion:
      "Password complexity means using different types of characters as well as a specified number  of characters. This applies to both the creation of new passwords and the modification of  existing passwords. Characters to manage complexity include numbers, lowercase and  uppercase letters, and symbols. Minimum complexity requirements are left up to the  organization to define. Define the lowest level of password complexity required. Define the  number of characters that must be changed when an exist...",
    assessmentConsiderations: [
      "Is a degree of complexity specified for passwords, (e.g., are account passwords a \nminimum of 12 characters and a mix of upper/lower case, numbers, and special \ncharacters), including minimum requirements for each type [a,b,c]?",
      "Is a change of characters required when new passwords are created [d]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.5.7.b": {
    type: "POLICY",
    notes:
      "Define and document password change of character requirements.",
    simplafi:
      "Define rules for how passwords must differ when changed — for example, the new password can't be identical to or too similar to the previous one. Document how many characters must be different or what similarity threshold applies. This prevents users from making trivial changes like incrementing a number at the end. These rules feed directly into your Entra password policy configuration and work alongside your banned password list.",
    discussion:
      "This requirement applies to single-factor authentication of individuals using passwords as  individual or group authenticators, and in a similar manner, when passwords are used as  part of multifactor authenticators. The number of changed characters refers to the number  of changes required with respect to the total number of positions in the current password.  To mitigate certain brute force attacks against passwords, organizations may also consider  salting passwords.  110 NIST SP 800-171A, pp...",
    furtherDiscussion:
      "Password complexity means using different types of characters as well as a specified number  of characters. This applies to both the creation of new passwords and the modification of  existing passwords. Characters to manage complexity include numbers, lowercase and  uppercase letters, and symbols. Minimum complexity requirements are left up to the  organization to define. Define the lowest level of password complexity required. Define the  number of characters that must be changed when an exist...",
    assessmentConsiderations: [
      "Is a degree of complexity specified for passwords, (e.g., are account passwords a \nminimum of 12 characters and a mix of upper/lower case, numbers, and special \ncharacters), including minimum requirements for each type [a,b,c]?",
      "Is a change of characters required when new passwords are created [d]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.5.7.c": {
    type: "CONFIG",
    notes:
      "Enforce password complexity requirements using system controls so that new passwords must meet the defined minimum complexity.",
    simplafi:
      "This is the enforcement side of (a). Your documented complexity requirements must be enforced by the system when users create new passwords. In Entra, configure password policies to match your documented requirements — minimum length, character requirements, and banned password lists. Entra's custom banned password list lets you block company-specific weak passwords. An assessor will try to set a non-compliant password.",
    discussion:
      "This requirement applies to single-factor authentication of individuals using passwords as  individual or group authenticators, and in a similar manner, when passwords are used as  part of multifactor authenticators. The number of changed characters refers to the number  of changes required with respect to the total number of positions in the current password.  To mitigate certain brute force attacks against passwords, organizations may also consider  salting passwords.  110 NIST SP 800-171A, pp...",
    furtherDiscussion:
      "Password complexity means using different types of characters as well as a specified number  of characters. This applies to both the creation of new passwords and the modification of  existing passwords. Characters to manage complexity include numbers, lowercase and  uppercase letters, and symbols. Minimum complexity requirements are left up to the  organization to define. Define the lowest level of password complexity required. Define the  number of characters that must be changed when an exist...",
    assessmentConsiderations: [
      "Is a degree of complexity specified for passwords, (e.g., are account passwords a \nminimum of 12 characters and a mix of upper/lower case, numbers, and special \ncharacters), including minimum requirements for each type [a,b,c]?",
      "Is a change of characters required when new passwords are created [d]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },
  "3.5.7.d": {
    type: "CONFIG",
    notes:
      "Enforce password change of character requirements using system controls so that new passwords meet the defined minimum character change.",
    simplafi:
      "This is the enforcement side of (b). When users change their password, the system must enforce your character-change requirements automatically. In Entra, the password change process validates against your defined rules at the moment a new password is submitted. Combined with the banned password list and Azure AD Password Protection, this prevents users from cycling through minor variations. An assessor will test whether trivially different passwords get accepted or properly rejected.",
    discussion:
      "This requirement applies to single-factor authentication of individuals using passwords as  individual or group authenticators, and in a similar manner, when passwords are used as  part of multifactor authenticators. The number of changed characters refers to the number  of changes required with respect to the total number of positions in the current password.  To mitigate certain brute force attacks against passwords, organizations may also consider  salting passwords.  110 NIST SP 800-171A, pp...",
    furtherDiscussion:
      "Password complexity means using different types of characters as well as a specified number  of characters. This applies to both the creation of new passwords and the modification of  existing passwords. Characters to manage complexity include numbers, lowercase and  uppercase letters, and symbols. Minimum complexity requirements are left up to the  organization to define. Define the lowest level of password complexity required. Define the  number of characters that must be changed when an exist...",
    assessmentConsiderations: [
      "Is a degree of complexity specified for passwords, (e.g., are account passwords a \nminimum of 12 characters and a mix of upper/lower case, numbers, and special \ncharacters), including minimum requirements for each type [a,b,c]?",
      "Is a change of characters required when new passwords are created [d]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },

  // Control 3.5.8
  "3.5.8.a": {
    type: "POLICY",
    notes:
      "Specify and document the number of password generations during which a password cannot be reused.",
    simplafi:
      "Define how many previous passwords the system should remember — meaning a user can't reuse any of their last X passwords. A common setting is 24 generations, which effectively prevents cycling back to a favorite password. Document this number in your access control policy. It's a simple decision, but it needs to be written down so your Entra configuration has a documented basis.",
    discussion:
      "Password lifetime restrictions do not apply to temporary passwords.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Individuals may not reuse their passwords for a defined period of time and a set number of  passwords generated.  Example  You explain in your company’s security policy that changing passwords regularly provides  increased security by reducing the ability of adversaries to exploit stolen or purchased  passwords over an extended period. You define how often individuals can reuse their  passwords and the minimum number of password generations before reuse [a]. If a user  112 NIST SP 800-171A, p. 3...",
    assessmentConsiderations: [
      "How many generations of password changes need to take place before a password can \nbe reused [a]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.5.8.b": {
    type: "CONFIG",
    notes:
      "Enforce password history using system controls so that password reuse is prohibited during the specified number of generations.",
    simplafi:
      "This is the enforcement side of (a). Entra must enforce your defined password history. Configure the password policy to remember the specified number of previous passwords and reject any reuse attempts. An assessor will try to change a password back to a recently used one and expect the system to reject it. Make sure your Entra password policy matches your documented generation count exactly.",
    discussion:
      "Password lifetime restrictions do not apply to temporary passwords.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Individuals may not reuse their passwords for a defined period of time and a set number of  passwords generated.  Example  You explain in your company’s security policy that changing passwords regularly provides  increased security by reducing the ability of adversaries to exploit stolen or purchased  passwords over an extended period. You define how often individuals can reuse their  passwords and the minimum number of password generations before reuse [a]. If a user  112 NIST SP 800-171A, p. 3...",
    assessmentConsiderations: [
      "How many generations of password changes need to take place before a password can \nbe reused [a]?",
    ],
    confidence: "HIGH",
    verb: "prohibited",
  },

  // Control 3.5.9
  "3.5.9.a": {
    type: "CONFIG",
    notes:
      "Implement system controls so that an immediate change to a permanent password is required when a temporary password is used for logon.",
    simplafi:
      "When a user is given a temporary password — for a new account or a password reset — the system must force them to change it immediately at first login. In Entra, this is the default behavior when an admin resets a password with 'require password change at next sign-in' checked. An assessor will verify that temporary passwords can't be used beyond the initial login. This prevents temporary passwords from becoming permanent backdoors.",
    discussion:
      "Changing temporary passwords to permanent passwords immediately after system logon  ensures that the necessary strength of the authentication mechanism is implemented at the  earliest opportunity, reducing the susceptibility to authenticator compromises.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Users must change their temporary passwords the first time they log in. Temporary  passwords often follow a consistent style within an organization and can be more easily  guessed than passwords created by the unique user. This approach to temporary passwords  should be avoided.  114 NIST SP 800-171A, p. 34.  115 NIST SP 800-171 Rev. 2, p. 25.  Example  One of your duties as a systems administrator is to create accounts for new users. You  configure all systems with user accounts to require user...",
    assessmentConsiderations: [
      "Are temporary passwords only valid to allow a user to perform a password reset [a]?",
      "Does the system enforce an immediate password change after logon when a temporary \npassword is issued [a]?",
    ],
    confidence: "HIGH",
    verb: "required",
  },

  // Control 3.5.10
  "3.5.10.a": {
    type: "CONFIG",
    notes:
      "Implement cryptographic protection so that passwords are protected in storage using approved hashing and salting mechanisms.",
    simplafi:
      "Passwords stored in your systems must be cryptographically protected — meaning hashed, not stored in plain text. In the Microsoft ecosystem, Entra ID handles this automatically using strong hashing algorithms. The risk area is passwords stored outside of Entra — in scripts, configuration files, spreadsheets, or shared documents. An assessor will look for plain-text passwords anywhere in your environment, not just in Entra.",
    discussion:
      "Cryptographically-protected passwords use salted one-way cryptographic hashes of  passwords.  See NIST Cryptographic Standards and Guidelines.  FURTHER DISCUSSION",
    furtherDiscussion:
      "All passwords must be cryptographically protected using a one-way function for storage and  transmission. This type of protection changes passwords into another form, or a hashed  password. A one-way transformation makes it theoretically impossible to turn the hashed  116 NIST SP 800-171A, pp. 34-35.  117 NIST SP 800-171 Rev. 2, pp. 25-26.  password back into the original password, but inadequate complexity (IA.L2-3.5.7) may still  facilitate offline cracking of hashes.  Example  You are respons...",
    assessmentConsiderations: [
      "Are passwords prevented from being stored in reversible encryption form in any \ncompany systems [a]?",
      "Are passwords stored as one-way hashes constructed from passwords [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.5.10.b": {
    type: "CONFIG",
    notes:
      "Implement cryptographic protection so that passwords are protected in transit using encrypted communication channels.",
    simplafi:
      "Passwords must be encrypted when transmitted across the network — no sending credentials in plain text. In the Microsoft ecosystem, Entra uses HTTPS/TLS for all authentication traffic, so this is handled by default for cloud authentication. The risk is legacy systems or on-prem applications using unencrypted protocols like LDAP without TLS. An assessor will check that all authentication traffic is encrypted, including on-prem.",
    discussion:
      "Cryptographically-protected passwords use salted one-way cryptographic hashes of  passwords.  See NIST Cryptographic Standards and Guidelines.  FURTHER DISCUSSION",
    furtherDiscussion:
      "All passwords must be cryptographically protected using a one-way function for storage and  transmission. This type of protection changes passwords into another form, or a hashed  password. A one-way transformation makes it theoretically impossible to turn the hashed  116 NIST SP 800-171A, pp. 34-35.  117 NIST SP 800-171 Rev. 2, pp. 25-26.  password back into the original password, but inadequate complexity (IA.L2-3.5.7) may still  facilitate offline cracking of hashes.  Example  You are respons...",
    assessmentConsiderations: [
      "Are passwords prevented from being stored in reversible encryption form in any \ncompany systems [a]?",
      "Are passwords stored as one-way hashes constructed from passwords [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.5.11
  "3.5.11.a": {
    type: "CONFIG",
    notes:
      "Implement authentication controls so that authentication information is obscured (masked) during the authentication process.",
    simplafi:
      "When users type their passwords, the characters must be obscured on screen — shown as dots or asterisks, not displayed in plain text. In the Microsoft ecosystem, all standard login screens handle this automatically. The risk is custom applications or scripts that might echo passwords to the screen. An assessor will watch the login process and verify that passwords are masked during entry on every system that handles CUI.",
    discussion:
      "The feedback from systems does not provide any information that would allow unauthorized  individuals to compromise authentication mechanisms. For some types of systems or system  components, for example, desktop or notebook computers with relatively large monitors,  the threat (often referred to as shoulder surfing) may be significant. For other types of  systems or components, for example, mobile devices with small displays, this threat may be  less significant, and is balanced against the inc...",
    furtherDiscussion:
      "Authentication information includes passwords. When users enter a password, the system  displays a symbol, such as an asterisk, to obscure feedback preventing others from seeing  118 NIST SP 800-171A, p. 35.  119 NIST SP 800-171 Rev. 2, p. 26.  the actual characters. Feedback is obscured based on a defined policy (e.g., smaller devices  may briefly show characters before obscuring).  Example  As a system administrator, you configure your systems to display an asterisk when users  enter their pas...",
    assessmentConsiderations: [
      "Is the feedback immediately obscured when the authentication is presented on a larger \ndisplay (e.g., desktop or notebook computers with relatively large monitors) [a]?",
    ],
    confidence: "HIGH",
    verb: "obscured",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.6 - INCIDENT RESPONSE (3 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.6.1
  "3.6.1.a": {
    type: "POLICY",
    notes:
      "Establish and document an operational incident-handling capability for the organization.",
    simplafi:
      "You need a documented incident response plan — a playbook your team can grab when something goes wrong. This covers who's on the response team, what their roles are, and how incidents get handled from start to finish. It doesn't live in Microsoft Sentinel or Defender; it's a standalone document that anyone can reference during a crisis. Without this written plan, your technical tools have no framework to operate within.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.6.1.b": {
    type: "POLICY",
    notes:
      "Define and document preparation activities within the operational incident-handling capability.",
    simplafi:
      "Your incident response plan needs a preparation section — what you do before an incident hits. This includes maintaining contact lists, having communication templates ready, ensuring backup access credentials exist, and conducting regular training. Think of it like a fire drill plan. You're documenting the readiness steps so your team isn't scrambling to figure out basics when something actually breaks.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.6.1.c": {
    type: "CONFIG",
    notes:
      "Implement detection capabilities so that incidents are automatically identified through system monitoring and alerting.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your plan says you'll detect incidents — now your systems need to actually do it. In the Microsoft ecosystem, this means Defender for Endpoint is generating alerts, Sentinel is correlating events across your environment, and automated detection rules are actively watching for suspicious activity. An assessor wants to see real alerts firing, not just a plan that mentions detection.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.6.1.d": {
    type: "POLICY",
    notes:
      "Define and document analysis procedures within the incident-handling capability including triage and escalation criteria.",
    simplafi:
      "Your incident response plan needs documented analysis procedures — how your team triages an alert once it fires. What's the severity scale? Who decides whether it's a real incident or a false positive? When does it escalate to leadership? This is a written process, not a technical configuration. It gives your responders a decision tree so they're not making judgment calls from scratch every time.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.6.1.e": {
    type: "POLICY",
    notes:
      "Define and document containment procedures within the incident-handling capability.",
    simplafi:
      "Document your containment procedures — the specific steps your team takes to stop an incident from spreading. This might include isolating a compromised device, disabling a user account, or blocking a malicious IP. The procedures should reference the tools you'll use (like Defender's device isolation feature) but this objective is about having the written playbook, not the tool configuration itself.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.6.1.f": {
    type: "POLICY",
    notes:
      "Define and document recovery procedures within the incident-handling capability.",
    simplafi:
      "Your incident response plan needs a recovery section — after you've contained the threat, how do you get back to normal operations? Document your restoration procedures: rebuilding compromised systems, restoring from backups, verifying systems are clean before reconnecting them to the network. This section should reference your backup strategy and any Microsoft tools you'll use for restoration, but the objective here is having the written recovery playbook ready to go.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },
  "3.6.1.g": {
    type: "POLICY",
    notes:
      "Define and document user response activities within the incident-handling capability.",
    simplafi:
      "Document what your end users should do when they suspect an incident — who to call, what to report, what not to do (like don't try to fix it yourself). This is the user-facing piece of your incident response plan. Think phishing reporting buttons in Outlook, a security hotline number, or a Teams channel for reporting suspicious activity. Users need clear, simple instructions they can follow under stress.",
    discussion:
      "Organizations recognize that incident handling capability is dependent on the capabilities of  organizational systems and the mission/business processes being supported by those  systems. Organizations consider incident handling as part of the definition, design, and  development of mission/business processes and systems. Incident-related information can  be obtained from a variety of sources including audit monitoring, network monitoring,  physical access monitoring, user and administrator repo...",
    furtherDiscussion:
      "Incident handling capabilities prepare your organization to respond to incidents and may: • identify people inside and outside your organization you may need to contact during an incident; • establish a way to report incidents, such as an email address or a phone number; • establish a system for tracking incidents; and • determine a place and a way to store evidence of an incident. Software and hardware may be required to analyze incidents when they occur. Incident prevention activities are also...",
    assessmentConsiderations: [
      "Is there an incident response policy which specifically outlines requirements for handling \nof incidents involving CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "includes",
  },

  // Control 3.6.2
  "3.6.2.a": {
    type: "CONFIG",
    notes:
      "Implement incident tracking so that all incidents are systematically recorded and their status is maintained.",
    simplafi:
      "This is the enforcement side of your incident documentation requirements. Every incident needs to be tracked in a system — not just discussed in email threads. In the Microsoft ecosystem, Sentinel provides incident tracking with case management, status tracking, and timelines. The point is that when an assessor asks 'show me your last five incidents,' you can pull up a tracked record with dates, actions, and outcomes.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "tracked",
  },
  "3.6.2.b": {
    type: "POLICY",
    notes:
      "Define and document incident documentation requirements including timelines, actions taken, and outcomes.",
    simplafi:
      "Beyond tracking incidents in a system, you need documented records of what happened, what you did about it, and how it was resolved. This is your incident documentation standard — what fields must be captured, what level of detail is required, and where the final reports are stored. Think of it as the paperwork standard for your incident files. An assessor will want to see completed incident reports.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "documented",
  },
  "3.6.2.c": {
    type: "POLICY",
    notes:
      "Identify and document the external authorities to whom incidents must be reported.",
    simplafi:
      "Identify and document the external authorities you're required to report incidents to. For defense contractors, this typically includes DIBCAP and the DoD Cyber Crime Center (DC3) for cyber incidents involving CUI. Your incident response plan should list these authorities with contact information, reporting timelines, and what information to include. This is a documentation exercise — know who to call before you need to call them.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.6.2.d": {
    type: "POLICY",
    notes:
      "Identify and document organizational officials to whom incidents must be reported.",
    simplafi:
      "Identify and document which people inside your organization need to be notified when an incident occurs. This typically includes your CISO or security lead, executive leadership, legal counsel, and the system owner. Document the notification chain — who gets told first, how quickly, and through what channel. This is your internal escalation list, and it should be part of your incident response plan.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.6.2.e": {
    type: "CONFIG",
    notes:
      "Implement notification mechanisms so that identified authorities are automatically notified when incidents occur.",
    simplafi:
      "This is the enforcement side of (c). When an incident hits, your external authorities need to actually be notified — not just listed in a plan. In Sentinel, configure automation rules or playbooks that trigger notifications to required external authorities when incidents meet reporting thresholds. An assessor will ask you to demonstrate how a qualifying incident triggers external notification within required timeframes.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "notified",
  },
  "3.6.2.f": {
    type: "CONFIG",
    notes:
      "Implement notification mechanisms so that identified organizational officials are automatically notified when incidents occur.",
    simplafi:
      "This is the enforcement side of (d). Your internal notification chain needs to actually fire when incidents occur. In Sentinel, configure automation rules that send alerts to your documented organizational officials — email notifications, Teams messages, or ticketing system escalations. An assessor wants to see that the right people are automatically notified, not relying on someone remembering to make phone calls.",
    discussion:
      "Tracking and documenting system security incidents includes maintaining records about  each incident, the status of the incident, and other pertinent information necessary for  122 NIST SP 800-171A, pp. 36-37.  123 NIST SP 800-171 Rev. 2, pp. 26-27.  forensics, evaluating incident details, trends, and handling. Incident information can be  obtained from a variety of sources including incident reports, incident response teams, audit  monitoring, network monitoring, physical access monitoring, and...",
    furtherDiscussion:
      "Incident handling is the actions the organization takes to prevent or contain the impact of an  incident to the organization while it is occurring or shortly after it has occurred. The majority  of the process consists of incident identification, containment, eradication, and recovery.  During this process, it is essential to track the work processes required in order to effectively  respond. Designate a central hub to serve as the point to coordinate, communicate, and track  activities. The hub...",
    assessmentConsiderations: [
      "Is there an incident response policy that directs the establishment of requirements for \ntracking and reporting of incidents involving CUI to appropriate officials [a,d]?",
      "Is cybersecurity incident information promptly reported to management [e,f]?",
    ],
    confidence: "HIGH",
    verb: "notified",
  },

  // Control 3.6.3
  "3.6.3.a": {
    type: "POLICY",
    notes:
      "Establish and document a process for testing the incident response capability including tabletop exercises and after-action reviews.",
    simplafi:
      "You need to regularly test your incident response capability — tabletop exercises, simulations, or walk-throughs where your team practices responding to a scenario. Document the testing schedule, what was tested, who participated, and what you learned. After each test, conduct an after-action review and update your plan based on lessons learned. An assessor wants to see evidence of recent testing, not just a plan that's never been exercised.",
    discussion:
      "Organizations test incident response capabilities to determine the effectiveness of the  capabilities and to identify potential weaknesses or deficiencies. Incident response testing  includes the use of checklists, walk-through or tabletop exercises, simulations (both parallel  and full interrupt), and comprehensive exercises. Incident response testing can also include  a determination of the effects on organizational operations (e.g., reduction in mission  capabilities), organizational assets, ...",
    furtherDiscussion:
      "Testing incident response capability validates existing plans and highlights potential  deficiencies. The test should address questions such as what happens during an incident;  124 NIST SP 800-171A, p. 37.  125 NIST SP 800-171 Rev. 2, p. 27.  who is responsible for incident management; what tasks are assigned within the IT  organization; what support is needed from legal, public affairs, or other business  components; how resources are added if needed during the incident; and how law  enforceme...",
    assessmentConsiderations: [
      "Does the incident response policy outline requirements for regular incident response \nplan testing and reviews of incident response capabilities [a]?",
    ],
    confidence: "HIGH",
    verb: "tested",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.7 - MAINTENANCE (6 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.7.1
  "3.7.1.a": {
    type: "POLICY",
    notes:
      "Establish and document system maintenance procedures including schedules, roles, and required activities.",
    simplafi:
      "Document your system maintenance procedures — what gets maintained, how often, and by whom. This covers patching schedules, hardware upkeep, firmware updates, and any recurring maintenance tasks across your environment. It doesn't need to be complicated — a maintenance calendar with assigned owners and scheduled dates works fine. The point is proving that maintenance is deliberate and planned, not just happening whenever someone remembers to do it.",
    discussion:
      "This requirement addresses the information security aspects of the system maintenance  program and applies to all types of maintenance to any system component (including  hardware, firmware, applications) conducted by any local or nonlocal entity. System  maintenance also includes those components not directly associated with information  processing and data or information retention such as scanners, copiers, and printers.  126 NIST SP 800-171A, p. 38.  127 NIST SP 800-171 Rev. 2, p. 27.  FURTHE...",
    furtherDiscussion:
      "One common form of computer security maintenance is regular patching of discovered  vulnerabilities in software and operating systems, though there are others that require  attention.  System maintenance includes:  • corrective maintenance (e.g., repairing problems with the technology);  • preventative maintenance (e.g., updates to prevent potential problems);  • adaptive maintenance (e.g., changes to the operative environment); and  • perfective maintenance (e.g., improve operations).  Example ...",
    assessmentConsiderations: [
      "Are systems, devices, and supporting systems maintained per manufacturer \nrecommendations or company defined schedules [a]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },

  // Control 3.7.2
  "3.7.2.a": {
    type: "CONFIG",
    notes:
      "Enforce controls on maintenance tools so that only approved tools are available and their use is restricted through technical mechanisms.",
    simplafi:
      "This is the enforcement side of your maintenance tool controls. Only approved tools should be available for system maintenance — remote access tools, diagnostic utilities, administrative software. In the Microsoft ecosystem, use Intune to control which applications can be installed on devices and Entra PIM to restrict who can use admin tools. An assessor will check whether unapproved maintenance tools can be installed or run.",
    discussion:
      "This requirement addresses security-related issues with maintenance tools that are not  within the organizational system boundaries that process, store, or transmit CUI, but are  used specifically for diagnostic and repair actions on those systems. Organizations have  flexibility in determining the controls in place for maintenance tools, but can include  approving, controlling, and monitoring the use of such tools. Maintenance tools are potential  128 NIST SP 800-171A, p. 38.  129 NIST SP 800-1...",
    furtherDiscussion:
      "Tools used to perform maintenance must remain secure so they do not introduce viruses or  other malware into your system. Controlling your maintenance techniques prevents  intentional or unintentional harm to your network and systems. Additionally, the personnel  responsible for maintenance activities should be supervised considering their elevated  privilege on company assets.  Example  You are responsible for maintenance activities on your company’s machines. To avoid  introducing additional v...",
    assessmentConsiderations: [
      "Are physical or logical access controls used to limit access to maintenance tools to \nauthorized personnel [a]?",
      "Are physical or logical access controls used to limit access to system documentation and \norganizational maintenance process documentation to authorized personnel [b]?",
      "Are physical or logical access controls used to limit access to automated mechanisms \n(e.g., automated scripts, scheduled jobs) to authorized personnel [c]?",
      "Are physical or logical access controls used to limit access to the system entry points that \nenable maintenance (e.g., administrative portals, local and remote console access, and \nphysical equipment panels) to authorized personnel [d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.7.2.b": {
    type: "POLICY",
    notes:
      "Define and document approved maintenance techniques and procedures that personnel must follow.",
    simplafi:
      "Document which maintenance techniques are approved in your environment — remote patching through Intune, manual firmware updates, in-person hardware maintenance, and any vendor-specific procedures. This is the written standard your maintenance personnel must follow when working on systems that handle CUI. If someone wants to use a new technique not on the approved list, there should be a defined process to evaluate and formally approve it first.",
    discussion:
      "This requirement addresses security-related issues with maintenance tools that are not  within the organizational system boundaries that process, store, or transmit CUI, but are  used specifically for diagnostic and repair actions on those systems. Organizations have  flexibility in determining the controls in place for maintenance tools, but can include  approving, controlling, and monitoring the use of such tools. Maintenance tools are potential  128 NIST SP 800-171A, p. 38.  129 NIST SP 800-1...",
    furtherDiscussion:
      "Tools used to perform maintenance must remain secure so they do not introduce viruses or  other malware into your system. Controlling your maintenance techniques prevents  intentional or unintentional harm to your network and systems. Additionally, the personnel  responsible for maintenance activities should be supervised considering their elevated  privilege on company assets.  Example  You are responsible for maintenance activities on your company’s machines. To avoid  introducing additional v...",
    assessmentConsiderations: [
      "Are physical or logical access controls used to limit access to maintenance tools to \nauthorized personnel [a]?",
      "Are physical or logical access controls used to limit access to system documentation and \norganizational maintenance process documentation to authorized personnel [b]?",
      "Are physical or logical access controls used to limit access to automated mechanisms \n(e.g., automated scripts, scheduled jobs) to authorized personnel [c]?",
      "Are physical or logical access controls used to limit access to the system entry points that \nenable maintenance (e.g., administrative portals, local and remote console access, and \nphysical equipment panels) to authorized personnel [d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.7.2.c": {
    type: "CONFIG",
    notes:
      "Enforce controls on maintenance mechanisms so that only approved mechanisms are enabled and accessible.",
    simplafi:
      "This is the enforcement side of (b) for mechanisms. Only approved maintenance mechanisms should be enabled in your environment — remote desktop for maintenance, Intune's remote management features, and approved diagnostic ports. In Entra, use conditional access and PIM to ensure maintenance mechanisms require proper authentication and authorization before use. Unapproved remote access mechanisms should be technically blocked so they simply cannot be used.",
    discussion:
      "This requirement addresses security-related issues with maintenance tools that are not  within the organizational system boundaries that process, store, or transmit CUI, but are  used specifically for diagnostic and repair actions on those systems. Organizations have  flexibility in determining the controls in place for maintenance tools, but can include  approving, controlling, and monitoring the use of such tools. Maintenance tools are potential  128 NIST SP 800-171A, p. 38.  129 NIST SP 800-1...",
    furtherDiscussion:
      "Tools used to perform maintenance must remain secure so they do not introduce viruses or  other malware into your system. Controlling your maintenance techniques prevents  intentional or unintentional harm to your network and systems. Additionally, the personnel  responsible for maintenance activities should be supervised considering their elevated  privilege on company assets.  Example  You are responsible for maintenance activities on your company’s machines. To avoid  introducing additional v...",
    assessmentConsiderations: [
      "Are physical or logical access controls used to limit access to maintenance tools to \nauthorized personnel [a]?",
      "Are physical or logical access controls used to limit access to system documentation and \norganizational maintenance process documentation to authorized personnel [b]?",
      "Are physical or logical access controls used to limit access to automated mechanisms \n(e.g., automated scripts, scheduled jobs) to authorized personnel [c]?",
      "Are physical or logical access controls used to limit access to the system entry points that \nenable maintenance (e.g., administrative portals, local and remote console access, and \nphysical equipment panels) to authorized personnel [d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.7.2.d": {
    type: "POLICY",
    notes:
      "Define and document personnel authorization requirements for conducting system maintenance.",
    simplafi:
      "Document who is authorized to perform system maintenance on your CUI systems. Not everyone in IT should have maintenance access — identify specific personnel by name or role, their authorization level, and what systems they can maintain. This is your maintenance personnel roster. When a vendor or contractor needs to perform maintenance, this document defines who in your organization can approve that access and under what specific conditions.",
    discussion:
      "This requirement addresses security-related issues with maintenance tools that are not  within the organizational system boundaries that process, store, or transmit CUI, but are  used specifically for diagnostic and repair actions on those systems. Organizations have  flexibility in determining the controls in place for maintenance tools, but can include  approving, controlling, and monitoring the use of such tools. Maintenance tools are potential  128 NIST SP 800-171A, p. 38.  129 NIST SP 800-1...",
    furtherDiscussion:
      "Tools used to perform maintenance must remain secure so they do not introduce viruses or  other malware into your system. Controlling your maintenance techniques prevents  intentional or unintentional harm to your network and systems. Additionally, the personnel  responsible for maintenance activities should be supervised considering their elevated  privilege on company assets.  Example  You are responsible for maintenance activities on your company’s machines. To avoid  introducing additional v...",
    assessmentConsiderations: [
      "Are physical or logical access controls used to limit access to maintenance tools to \nauthorized personnel [a]?",
      "Are physical or logical access controls used to limit access to system documentation and \norganizational maintenance process documentation to authorized personnel [b]?",
      "Are physical or logical access controls used to limit access to automated mechanisms \n(e.g., automated scripts, scheduled jobs) to authorized personnel [c]?",
      "Are physical or logical access controls used to limit access to the system entry points that \nenable maintenance (e.g., administrative portals, local and remote console access, and \nphysical equipment panels) to authorized personnel [d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },

  // Control 3.7.3
  "3.7.3.a": {
    type: "CONFIG",
    notes:
      "Implement sanitization procedures so that equipment is technically verified to be free of CUI before removal for off-site maintenance.",
    simplafi:
      "Before any equipment leaves your facility for off-site maintenance — a laptop going to a repair shop, a server being returned to a vendor — it must be wiped of CUI. This means verifying the device has been sanitized using approved methods before it leaves your controlled area. Document the sanitization procedure and keep records showing each device was cleaned before removal. This is a physical process, not just a technical one.",
    discussion:
      "This requirement addresses the information security aspects of system maintenance that are  performed off-site and applies to all types of maintenance to any system component  (including applications) conducted by a local or nonlocal entity (e.g., in-contract, warranty,  in-house, software maintenance agreement).  NIST SP 800-88 provides guidance on media sanitization.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Sanitization is a process that makes access to data infeasible on media such as a hard drive.  The process may overwrite the entire media with a fixed pattern such as binary zeros. In  130 NIST SP 800-171A, p. 39.  131 NIST SP 800-171 Rev. 2, p. 28.  addition to clearing the data an organization could purge (e.g., degaussing, secure erasing, or  disassembling) the data, or even destroy the media (e.g., incinerating, shredding, or  pulverizing). Performing one of these activities ensures that the...",
    assessmentConsiderations: [
      "Is there a process for sanitizing (e.g., erasing, wiping, degaussing) equipment that was \nused to store, process, or transmit CUI before it is removed from the facility for off-site \nmaintenance (e.g., manufacturer or contracted maintenance support) [a]?",
    ],
    confidence: "HIGH",
    verb: "sanitized",
  },

  // Control 3.7.4
  "3.7.4.a": {
    type: "CONFIG",
    notes:
      "Implement malicious code scanning so that media containing diagnostic and test programs are automatically checked before use.",
    simplafi:
      "Any media containing diagnostic or test programs — USB drives with firmware update tools, diagnostic CDs, vendor-provided maintenance software — must be scanned for malware before connecting to systems that handle CUI. In the Microsoft ecosystem, Defender for Endpoint provides real-time scanning. The point is that maintenance media doesn't get a free pass — it gets scanned like anything else before it touches your environment.",
    discussion:
      "If, upon inspection of media containing maintenance diagnostic and test programs,  organizations determine that the media contain malicious code, the incident is handled  consistent with incident handling policies and procedures.  FURTHER DISCUSSION",
    furtherDiscussion:
      "As part of troubleshooting, a vendor may provide a diagnostic application to install on a  system. As this is executable code, there is a chance that the file is corrupt or infected with  malicious code. Implement procedures to scan any files prior to installation. The same level  of scrutiny must be made as with any file a staff member may download.  This requirement, MA.L2-3.7.4, extends both SI.L2-3.14. and SI.L2-3.14.4. SI.L2-3.14. and  SI.L2-3.14. require the implementation and updating of ...",
    assessmentConsiderations: [
      "Are media containing diagnostic and test programs (e.g., downloaded or copied utilities \nor tools from manufacturer, third-party, or in-house support teams) checked for \nmalicious code (e.g., using antivirus or antimalware scans) before the media are used on \norganizational systems [a]?",
    ],
    confidence: "HIGH",
    verb: "checked",
  },

  // Control 3.7.5
  "3.7.5.a": {
    type: "CONFIG",
    notes:
      "Enforce multifactor authentication so that nonlocal maintenance sessions via external network connections require MFA.",
    simplafi:
      "When someone performs maintenance remotely — logging in from outside your network to update a system or troubleshoot an issue — they must use multifactor authentication. In the Microsoft ecosystem, this means Entra MFA is required for all remote admin sessions through conditional access policies. An assessor will attempt a remote maintenance connection and verify MFA is enforced before access is granted.",
    discussion:
      "Nonlocal maintenance and diagnostic activities are those activities conducted by individuals  communicating through an external network. The authentication techniques employed in  the establishment of these nonlocal maintenance and diagnostic sessions reflect the network  access requirements in IA.L2-3.5.3.  134 NIST SP 800-171A, pp. 39-40.  135 NIST SP 800-171 Rev. 2, p. 28.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Nonlocal maintenance activities must use multifactor authentication. Multifactor  authentication requires at least two factors, such as:  • something you know (e.g., password, personal identification number [PIN]);  • something you have (e.g., cryptographic identification device, token); or  • something you are (e.g., biometric fingerprint or facial scan).  Requiring two or more factors to prove your identity increases the security of the  connection. Nonlocal maintenance activities are activiti...",
    assessmentConsiderations: [
      "Is multifactor authentication required prior to maintenance of a system when connecting \nremotely from outside the system boundary [a]?",
      "Are personnel required to manually terminate remote maintenance sessions established \nvia external network connections when maintenance is complete, or are connections \nterminated automatically through system session management mechanisms [b]?",
    ],
    confidence: "HIGH",
    verb: "used",
  },
  "3.7.5.b": {
    type: "CONFIG",
    notes:
      "Automatically terminate nonlocal maintenance sessions established via external network connections when maintenance is complete.",
    simplafi:
      "Remote maintenance sessions can't just stay open indefinitely. When the maintenance work is done, the session must be terminated — not minimized, not left idle, but ended. In Entra, configure session timeout policies through conditional access so remote admin sessions expire after a defined period. An assessor wants to see that abandoned remote maintenance sessions don't persist as open doors into your environment.",
    discussion:
      "Nonlocal maintenance and diagnostic activities are those activities conducted by individuals  communicating through an external network. The authentication techniques employed in  the establishment of these nonlocal maintenance and diagnostic sessions reflect the network  access requirements in IA.L2-3.5.3.  134 NIST SP 800-171A, pp. 39-40.  135 NIST SP 800-171 Rev. 2, p. 28.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Nonlocal maintenance activities must use multifactor authentication. Multifactor  authentication requires at least two factors, such as:  • something you know (e.g., password, personal identification number [PIN]);  • something you have (e.g., cryptographic identification device, token); or  • something you are (e.g., biometric fingerprint or facial scan).  Requiring two or more factors to prove your identity increases the security of the  connection. Nonlocal maintenance activities are activiti...",
    assessmentConsiderations: [
      "Is multifactor authentication required prior to maintenance of a system when connecting \nremotely from outside the system boundary [a]?",
      "Are personnel required to manually terminate remote maintenance sessions established \nvia external network connections when maintenance is complete, or are connections \nterminated automatically through system session management mechanisms [b]?",
    ],
    confidence: "HIGH",
    verb: "terminated",
  },

  // Control 3.7.6
  "3.7.6.a": {
    type: "POLICY",
    notes:
      "Establish and document supervision procedures for maintenance personnel without required access authorization.",
    simplafi:
      "When a maintenance technician — like a vendor repairing hardware — doesn't have the required security clearance or access authorization, they must be supervised the entire time they're working on your systems. Document who provides supervision, what they're watching for, and how the supervision is recorded. This is a people-and-process control; you're physically watching someone who hasn't been vetted to your standards.",
    discussion:
      "This requirement applies to individuals who are performing hardware or software  maintenance on organizational systems, while PE.L2-3.10. addresses physical access for  individuals whose maintenance duties place them within the physical protection perimeter  of the systems (e.g., custodial staff, physical plant maintenance personnel). Individuals not  previously identified as authorized maintenance personnel, such as information technology  manufacturers, vendors, consultants, and systems integr...",
    furtherDiscussion:
      "Individuals without proper permissions must be supervised while conducting maintenance  on organizational machines. Consider creating temporary accounts with short-term  expiration periods rather than regular user accounts. Additionally, limit the permissions and  access these accounts have to the most restrictive settings possible.  Example  One of your software providers has to come on-site to update the software on your  company’s computers. You give the individual a temporary logon and passw...",
    assessmentConsiderations: [
      "Are there processes for escorting and supervising maintenance personnel without \nrequired access authorization (e.g., vendor support personnel, short-term maintenance \ncontractors) during system maintenance [a]?",
    ],
    confidence: "HIGH",
    verb: "supervised",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.8 - MEDIA PROTECTION (9 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.8.1
  "3.8.1.a": {
    type: "CONFIG",
    notes:
      "Enforce physical controls so that paper media containing CUI is restricted through locked storage and controlled access areas.",
    simplafi:
      "Paper documents containing CUI — printed contracts, engineering drawings, marked reports — need physical controls. This means locked file cabinets, restricted-access rooms, or secure print areas where CUI printouts don't sit in open trays. You need to know where your CUI paper lives, who has keys, and how access is tracked. This is old-school security — locks, keys, and sign-out sheets.",
    discussion:
      "System media includes digital and non-digital media. Digital media includes diskettes,  magnetic tapes, external and removable hard disk drives, flash drives, compact disks, and  digital video disks. Non-digital media includes paper and microfilm. Protecting digital media  includes limiting access to design specifications stored on compact disks or flash drives in  the media library to the project leader and any individuals on the development team.  Physically controlling system media includes c...",
    furtherDiscussion:
      "CUI can be contained on two types of physical media:  • hardcopy (e.g., CD drives, USB drives, magnetic tape); and  • digital devices (e.g., CD drives, USB drives, video).  You should store physical media containing CUI in a secure location. This location should be  accessible only to those people with the proper permissions. All who access CUI should  follow the process for checking it out and returning it.  Example  Your company has CUI for a specific Army contract contained on a USB drive. Yo...",
    assessmentConsiderations: [
      "Is hardcopy media containing CUI handled only by authorized personnel according to \ndefined procedures [a]?",
      "Is digital media containing CUI handled only by authorized personnel according to \ndefined procedures [b]?",
      "Is paper media containing CUI physically secured (e.g., in a locked drawer or cabinet) [c]?",
      "Is digital media containing CUI securely stored (e.g., in access-controlled repositories) \n[d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.8.1.b": {
    type: "CONFIG",
    notes:
      "Enforce physical controls so that digital media containing CUI is restricted through locked storage and controlled access areas.",
    simplafi:
      "Digital media containing CUI — USB drives, external hard drives, backup tapes — need physical controls too. These items should be stored in locked containers or restricted areas when not in use. Track who has them and where they are, similar to how you'd track paper documents. Intune can help manage the digital side, but physical storage of removable media is about locks and inventory logs.",
    discussion:
      "System media includes digital and non-digital media. Digital media includes diskettes,  magnetic tapes, external and removable hard disk drives, flash drives, compact disks, and  digital video disks. Non-digital media includes paper and microfilm. Protecting digital media  includes limiting access to design specifications stored on compact disks or flash drives in  the media library to the project leader and any individuals on the development team.  Physically controlling system media includes c...",
    furtherDiscussion:
      "CUI can be contained on two types of physical media:  • hardcopy (e.g., CD drives, USB drives, magnetic tape); and  • digital devices (e.g., CD drives, USB drives, video).  You should store physical media containing CUI in a secure location. This location should be  accessible only to those people with the proper permissions. All who access CUI should  follow the process for checking it out and returning it.  Example  Your company has CUI for a specific Army contract contained on a USB drive. Yo...",
    assessmentConsiderations: [
      "Is hardcopy media containing CUI handled only by authorized personnel according to \ndefined procedures [a]?",
      "Is digital media containing CUI handled only by authorized personnel according to \ndefined procedures [b]?",
      "Is paper media containing CUI physically secured (e.g., in a locked drawer or cabinet) [c]?",
      "Is digital media containing CUI securely stored (e.g., in access-controlled repositories) \n[d]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.8.1.c": {
    type: "CONFIG",
    notes:
      "Implement secure storage so that paper media containing CUI is protected in locked containers or restricted areas.",
    simplafi:
      "CUI paper documents need secure storage — not just controlled access, but actually locked away. This means locked filing cabinets, safes, or secured rooms with access logs. The difference from (a) is emphasis: controlling access is about who can reach the documents, while secure storage is about the physical protection of the storage location itself. Think fire-rated safes or locked rooms with limited key holders.",
    discussion:
      "System media includes digital and non-digital media. Digital media includes diskettes,  magnetic tapes, external and removable hard disk drives, flash drives, compact disks, and  digital video disks. Non-digital media includes paper and microfilm. Protecting digital media  includes limiting access to design specifications stored on compact disks or flash drives in  the media library to the project leader and any individuals on the development team.  Physically controlling system media includes c...",
    furtherDiscussion:
      "CUI can be contained on two types of physical media:  • hardcopy (e.g., CD drives, USB drives, magnetic tape); and  • digital devices (e.g., CD drives, USB drives, video).  You should store physical media containing CUI in a secure location. This location should be  accessible only to those people with the proper permissions. All who access CUI should  follow the process for checking it out and returning it.  Example  Your company has CUI for a specific Army contract contained on a USB drive. Yo...",
    assessmentConsiderations: [
      "Is hardcopy media containing CUI handled only by authorized personnel according to \ndefined procedures [a]?",
      "Is digital media containing CUI handled only by authorized personnel according to \ndefined procedures [b]?",
      "Is paper media containing CUI physically secured (e.g., in a locked drawer or cabinet) [c]?",
      "Is digital media containing CUI securely stored (e.g., in access-controlled repositories) \n[d]?",
    ],
    confidence: "HIGH",
    verb: "stored",
  },
  "3.8.1.d": {
    type: "CONFIG",
    notes:
      "Implement secure storage so that digital media containing CUI is protected in locked containers or restricted areas.",
    simplafi:
      "Digital media containing CUI needs secure storage when not actively in use. USB drives with CUI should be locked in a drawer or cabinet, not sitting on a desk. Backup tapes go in a locked media safe. This is the physical security complement to encryption — even if the drive is encrypted, it shouldn't be left where someone can walk off with it and attempt to crack it later.",
    discussion:
      "System media includes digital and non-digital media. Digital media includes diskettes,  magnetic tapes, external and removable hard disk drives, flash drives, compact disks, and  digital video disks. Non-digital media includes paper and microfilm. Protecting digital media  includes limiting access to design specifications stored on compact disks or flash drives in  the media library to the project leader and any individuals on the development team.  Physically controlling system media includes c...",
    furtherDiscussion:
      "CUI can be contained on two types of physical media:  • hardcopy (e.g., CD drives, USB drives, magnetic tape); and  • digital devices (e.g., CD drives, USB drives, video).  You should store physical media containing CUI in a secure location. This location should be  accessible only to those people with the proper permissions. All who access CUI should  follow the process for checking it out and returning it.  Example  Your company has CUI for a specific Army contract contained on a USB drive. Yo...",
    assessmentConsiderations: [
      "Is hardcopy media containing CUI handled only by authorized personnel according to \ndefined procedures [a]?",
      "Is digital media containing CUI handled only by authorized personnel according to \ndefined procedures [b]?",
      "Is paper media containing CUI physically secured (e.g., in a locked drawer or cabinet) [c]?",
      "Is digital media containing CUI securely stored (e.g., in access-controlled repositories) \n[d]?",
    ],
    confidence: "HIGH",
    verb: "stored",
  },

  // Control 3.8.2
  "3.8.2.a": {
    type: "CONFIG",
    notes:
      "Restrict access to CUI on system media so that only authorized users can access the information through technical or physical controls.",
    simplafi:
      "Only authorized users should be able to access CUI on system media — whether that's a shared drive, a USB stick, or a backup tape. This means access controls on digital media (permissions, encryption requiring credentials) and physical controls on non-digital media (sign-out sheets, locked storage). In Purview, sensitivity labels can restrict who opens CUI files regardless of where the media ends up.",
    discussion:
      "Access can be limited by physically controlling system media and secure storage areas.  Physically controlling system media includes conducting inventories, ensuring procedures  are in place to allow individuals to check out and return system media to the media library,  and maintaining accountability for all stored media. Secure storage includes a locked drawer,  desk, or cabinet, or a controlled media library.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Limit physical access to CUI to people permitted to access CUI. Use locked or controlled  storage areas and limit access to only those allowed to access CUI. Keep track of who accesses  physical CUI in an audit log.  140 NIST SP 800-171A, p. 41.  141 NIST SP 800-171 Rev. 2, p. 29.  Example  Your company has CUI for a specific Army contract contained on a USB drive. In order to  control the data, you establish specific procedures for handling the drive. You designate the  project manager as the o...",
    assessmentConsiderations: [
      "Is a list of users who are authorized to access the CUI contained on system media \nmaintained [a]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // Control 3.8.3
  "3.8.3.a": {
    type: "CONFIG",
    notes:
      "Implement sanitization or destruction procedures so that system media containing CUI is technically wiped or physically destroyed before disposal.",
    simplafi:
      "Before you throw away or recycle any media that contained CUI — hard drives, USB sticks, printed documents — it must be properly sanitized or destroyed. For digital media, this means secure wiping or physical destruction (shredding, degaussing). For paper, it means cross-cut shredding. Document your sanitization procedures and keep destruction records. An assessor will ask to see your destruction logs.",
    discussion:
      "This requirement applies to all system media, digital and non-digital, subject to disposal or  reuse. Examples include: digital media found in workstations, network components,  scanners, copiers, printers, notebook computers, and mobile devices; and non-digital media  such as paper and microfilm. The sanitization process removes information from the media  such that the information cannot be retrieved or reconstructed. Sanitization techniques,  including clearing, purging, cryptographic erase, ...",
    furtherDiscussion:
      "“Media” refers to a broad range of items that store information, including paper documents,  disks, tapes, digital photography, USB drives, CDs, DVDs, and mobile phones. It is important  to know what information is on media so that you can handle it properly. If there is CUI, you  or someone in your company should either:  • shred or destroy the device before disposal so it cannot be read; or  • clean or purge the information, if you want to reuse the device.  See NIST Special Publication 800-88...",
    assessmentConsiderations: [
      "Is all managed data storage erased, encrypted, or destroyed using mechanisms to ensure \nthat no usable data is retrievable [a,b]?",
    ],
    confidence: "HIGH",
    verb: "sanitized or destroyed",
  },
  "3.8.3.b": {
    type: "CONFIG",
    notes:
      "Implement sanitization procedures so that system media containing CUI is technically wiped and verified clean before reuse.",
    simplafi:
      "Before reusing media that previously contained CUI — reformatting a USB drive for a new project, repurposing a laptop hard drive — the media must be sanitized and verified clean. Simply deleting files isn't enough; a proper wipe using approved methods is required. Document the sanitization process and maintain records showing each piece of media was verified clean before it went back into circulation.",
    discussion:
      "This requirement applies to all system media, digital and non-digital, subject to disposal or  reuse. Examples include: digital media found in workstations, network components,  scanners, copiers, printers, notebook computers, and mobile devices; and non-digital media  such as paper and microfilm. The sanitization process removes information from the media  such that the information cannot be retrieved or reconstructed. Sanitization techniques,  including clearing, purging, cryptographic erase, ...",
    furtherDiscussion:
      "“Media” refers to a broad range of items that store information, including paper documents,  disks, tapes, digital photography, USB drives, CDs, DVDs, and mobile phones. It is important  to know what information is on media so that you can handle it properly. If there is CUI, you  or someone in your company should either:  • shred or destroy the device before disposal so it cannot be read; or  • clean or purge the information, if you want to reuse the device.  See NIST Special Publication 800-88...",
    assessmentConsiderations: [
      "Is all managed data storage erased, encrypted, or destroyed using mechanisms to ensure \nthat no usable data is retrievable [a,b]?",
    ],
    confidence: "HIGH",
    verb: "sanitized",
  },

  // Control 3.8.4
  "3.8.4.a": {
    type: "POLICY",
    notes:
      "Define and document CUI marking requirements so that media containing CUI bears applicable CUI markings.",
    simplafi:
      "CUI media needs to be marked with the appropriate CUI markings — the CUI banner, category markings, and any applicable designations. This applies to both digital and physical media. Document your marking standards so everyone knows what a properly marked document looks like. An assessor will check whether your CUI documents carry the correct markings as specified by the CUI Registry.",
    discussion:
      "The term security marking refers to the application or use of human-readable security  attributes. System media includes digital and non-digital media. Marking of system media  reflects applicable federal laws, Executive Orders, directives, policies, and regulations.  FURTHER DISCUSSION",
    furtherDiscussion:
      "All media, hardcopy and digital, must be properly marked to alert individuals to the presence  of CUI stored on the media. The National Archives and Records Administration (NARA) has  published guidelines for labeling media of different sizes.146  MP.L2-3.8. requires that media have an identifiable owner, so organizations may find it  desirable to include ownership information on the device label as well.  144 NIST SP 800-171A, p. 42.  145 NIST SP 800-171 Rev. 2, p. 30.  146 NARA, CUI Notice 201...",
    assessmentConsiderations: [
      "Are all media containing CUI identified [a,b]?",
    ],
    confidence: "HIGH",
    verb: "marked",
  },
  "3.8.4.b": {
    type: "POLICY",
    notes:
      "Define and document distribution limitation marking requirements so that media containing CUI bears appropriate distribution markings.",
    simplafi:
      "Beyond CUI category markings, media containing CUI needs distribution limitation markings — who can receive it, how it can be shared, and any restrictions on dissemination. Document your distribution marking standards and train your team on when and how to apply them. This ensures that anyone handling CUI media knows at a glance who's authorized to see it and how it can be shared.",
    discussion:
      "The term security marking refers to the application or use of human-readable security  attributes. System media includes digital and non-digital media. Marking of system media  reflects applicable federal laws, Executive Orders, directives, policies, and regulations.  FURTHER DISCUSSION",
    furtherDiscussion:
      "All media, hardcopy and digital, must be properly marked to alert individuals to the presence  of CUI stored on the media. The National Archives and Records Administration (NARA) has  published guidelines for labeling media of different sizes.146  MP.L2-3.8. requires that media have an identifiable owner, so organizations may find it  desirable to include ownership information on the device label as well.  144 NIST SP 800-171A, p. 42.  145 NIST SP 800-171 Rev. 2, p. 30.  146 NARA, CUI Notice 201...",
    assessmentConsiderations: [
      "Are all media containing CUI identified [a,b]?",
    ],
    confidence: "HIGH",
    verb: "marked",
  },

  // Control 3.8.5
  "3.8.5.a": {
    type: "CONFIG",
    notes:
      "Enforce access controls so that media containing CUI is restricted to authorized personnel during transport outside controlled areas.",
    simplafi:
      "When CUI media leaves your controlled area — shipping a hard drive to another office, carrying printed documents to a meeting off-site — access must be controlled during the entire transport. This means sealed containers, locked courier bags, or encrypted digital media with controlled access. Only authorized personnel should handle CUI in transit. Document your transport procedures and approved methods so everyone follows the same protective measures consistently.",
    discussion:
      "Controlled areas are areas or spaces for which organizations provide physical or procedural  controls to meet the requirements established for protecting systems and information.  Controls to maintain accountability for media during transport include locked containers  and cryptography. Cryptographic mechanisms can provide confidentiality and integrity  protections depending upon the mechanisms used. Activities associated with transport  include the actual transport as well as those activities s...",
    furtherDiscussion:
      "CUI is protected in both physical and digital formats. Physical control can be accomplished  using traditional concepts like restricted access to physical locations or locking papers in a  desk or filing cabinet. The digitization of data makes access to CUI much easier. CUI can be  stored and transported on magnetic disks, tapes, USB drives, CD-ROMs, and so on. This  makes digital CUI data very portable. It is important for an organization to apply mechanisms  to prevent unauthorized access to C...",
    assessmentConsiderations: [
      "Do only approved individuals have access to media containing CUI [a]?",
      "Is access to the media containing CUI recorded in an audit log [b]?",
      "Is all CUI data on media encrypted or physically locked prior to transport outside of \nsecure locations [b]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.8.5.b": {
    type: "CONFIG",
    notes:
      "Implement accountability tracking so that media containing CUI is tracked with chain-of-custody controls during transport outside controlled areas.",
    simplafi:
      "Maintain a chain-of-custody record for CUI media during transport. Know who had it, when they had it, and where it went at every step. This could be a simple sign-off sheet that travels with the media or a tracking log. The point is accountability — if CUI media goes missing during transport, you can identify exactly where in the chain the loss occurred.",
    discussion:
      "Controlled areas are areas or spaces for which organizations provide physical or procedural  controls to meet the requirements established for protecting systems and information.  Controls to maintain accountability for media during transport include locked containers  and cryptography. Cryptographic mechanisms can provide confidentiality and integrity  protections depending upon the mechanisms used. Activities associated with transport  include the actual transport as well as those activities s...",
    furtherDiscussion:
      "CUI is protected in both physical and digital formats. Physical control can be accomplished  using traditional concepts like restricted access to physical locations or locking papers in a  desk or filing cabinet. The digitization of data makes access to CUI much easier. CUI can be  stored and transported on magnetic disks, tapes, USB drives, CD-ROMs, and so on. This  makes digital CUI data very portable. It is important for an organization to apply mechanisms  to prevent unauthorized access to C...",
    assessmentConsiderations: [
      "Do only approved individuals have access to media containing CUI [a]?",
      "Is access to the media containing CUI recorded in an audit log [b]?",
      "Is all CUI data on media encrypted or physically locked prior to transport outside of \nsecure locations [b]?",
    ],
    confidence: "HIGH",
    verb: "maintained",
  },

  // Control 3.8.6
  "3.8.6.a": {
    type: "CONFIG",
    notes:
      "Enforce cryptographic protection so that CUI stored on digital media is encrypted or physically safeguarded during transport.",
    simplafi:
      "When CUI is stored on digital media being transported — a USB drive being couriered, a laptop being shipped — the data must be encrypted. BitLocker is the standard tool for Windows devices. For removable media, use BitLocker To Go or equivalent encryption. The alternative is physical safeguards like tamper-evident packaging and secure couriers. An assessor will check whether portable digital media is encrypted.",
    discussion:
      "This requirement applies to portable storage devices (e.g., USB memory sticks, digital video  disks, compact disks, external or removable hard disk drives).  NIST SP 800-111 provides guidance on storage encryption technologies for end user devices.  FURTHER DISCUSSION",
    furtherDiscussion:
      "CUI can be stored and transported on a variety of portable media, which increases the chance  that the CUI can be lost. When identifying the paths CUI flows through your company, identify  devices to include in this requirement.  149 NIST SP 800-171A, p. 43.  150 NIST SP 800-171 Rev. 2, p. 30.  To mitigate the risk of losing or exposing CUI, implement an encryption scheme to protect  the data. Even if the media are lost, proper encryption renders the data inaccessible. When  encryption is not an...",
    assessmentConsiderations: [
      "Are all CUI data on media encrypted or physically protected prior to transport outside of \ncontrolled areas [a]?",
      "Are cryptographic mechanisms used to protect digital media during transport outside of \ncontrolled areas [a]?",
      "Do cryptographic mechanisms comply with FIPS 140-2 [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.8.7
  "3.8.7.a": {
    type: "CONFIG",
    notes:
      "Enforce controls on removable media so that usage on system components is restricted through technical mechanisms such as group policy or endpoint management.",
    simplafi:
      "Control the use of removable media — USB drives, external hard drives, SD cards — on all system components that handle CUI. In the Microsoft ecosystem, use Intune device restriction profiles and Defender for Endpoint device control policies to block or restrict USB storage. Decide whether to block all removable media or allow only approved, encrypted devices. An assessor will plug in a USB drive and test your controls.",
    discussion:
      "In contrast to requirement MP.L2-3.8.1, which restricts user access to media, this requirement restricts the use of certain types of media on systems, for example, restricting or prohibiting the use of flash drives or external hard disk drives. Organizations can employ technical and nontechnical controls (e.g., policies, procedures, and rules of behavior) to control the use of system media. Organizations may control the use of portable storage devices, for example, by using physical cages on wor...",
    furtherDiscussion:
      "Removable media are any type of media storage that you can remove from your computer  or machine (e.g., CDs, DVDs, diskettes, and USB drives). Write a specific policy for removable  media. The policy should cover the various types of removable media (e.g., write-once media  and rewritable media) and should discuss the company’s approach to removable media.  Ensure the following controls are considered and included in the policy:  • limit the use of removable media to the smallest number needed; ...",
    assessmentConsiderations: [
      "Are removable media allowed [a]?",
      "Are policies and/or procedures in use to control the use of removable media [a]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },

  // Control 3.8.8
  "3.8.8.a": {
    type: "CONFIG",
    notes:
      "Enforce prohibition of portable storage devices with no identifiable owner through device whitelisting or registration controls.",
    simplafi:
      "If a USB drive or portable storage device has no identifiable owner — it's found in a parking lot, left in a conference room, or shipped anonymously — it must not be used on any system. In Defender for Endpoint, device control policies can enforce whitelisting so only registered devices work. Train your staff: if you find a random USB drive, don't plug it in. Turn it in to security. This is a social engineering defense.",
    discussion:
      "Requiring identifiable owners (e.g., individuals, organizations, or projects) for portable  storage devices reduces the overall risk of using such technologies by allowing organizations  to assign responsibility and accountability for addressing known vulnerabilities in the  devices (e.g., insertion of malicious code).  FURTHER DISCUSSION",
    furtherDiscussion:
      "A portable storage device is a system component that can be inserted into and removed from  a system and is used to store data or information. It typically plugs into a laptop or desktop  port (e.g., USB port). These devices can contain malicious files that can lead to a compromise  of a connected system. Therefore, use should be prohibited if the device cannot be traced to  an owner who is responsible and accountable for its security.  153 NIST SP 800-171A, p. 43.  154 NIST SP 800-171 Rev. 2, p...",
    assessmentConsiderations: [
      "Do portable storage devices used have identifiable owners [a]?",
    ],
    confidence: "HIGH",
    verb: "prohibited",
  },

  // Control 3.8.9
  "3.8.9.a": {
    type: "CONFIG",
    notes:
      "Enforce confidentiality protections so that backup CUI is encrypted and access-controlled at storage locations.",
    simplafi:
      "Your CUI backups need to be encrypted and access-controlled at the storage location — whether that's a cloud backup vault, an off-site tape storage facility, or a local backup server. In the Microsoft ecosystem, ensure Azure Backup encryption is enabled and access is restricted through Entra RBAC. An assessor will check whether backup storage is encrypted and whether access is limited to authorized backup administrators.",
    discussion:
      "Organizations can employ cryptographic mechanisms or alternative physical controls to  protect the confidentiality of backup information at designated storage locations. Backed-up  information containing CUI may include system-level information and user-level  information. System-level information includes system-state information, operating system  software, application software, and licenses. User-level information includes information  other than system-level information.  FURTHER DISCUSSION",
    furtherDiscussion:
      "You protect CUI to ensure that it remains private (confidentiality) and unchanged (integrity).  Methods to ensure confidentiality may include:  • encrypting files or media;  • managing who has access to the information; and  • physically securing devices and media that contain CUI.  155 NIST SP 800-171A, p. 44.  156 NIST SP 800-171 Rev. 2, p. 31.  Storage locations for information are varied, and may include:  • external hard drives;  • USB drives;  • magnetic media (tape cartridge);  • optical ...",
    assessmentConsiderations: [
      "Are data backups encrypted on media before removal from a secured facility [a]?",
      "Are cryptographic mechanisms FIPS validated [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.9 - PERSONNEL SECURITY (2 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.9.1
  "3.9.1.a": {
    type: "POLICY",
    notes:
      "Establish and document personnel screening procedures to be completed prior to authorizing access to systems containing CUI.",
    simplafi:
      "Before anyone gets access to systems containing CUI, they need to pass a background screening appropriate for their role. Document your screening requirements — what checks are performed (criminal background, credit, references), when they happen (before access is granted, not after), and who is responsible for conducting them. This is an HR process, not a technical one, but it's a prerequisite for everything else in your access control program.",
    discussion:
      "Personnel security screening (vetting) activities involve the evaluation/assessment of  individual’s conduct, integrity, judgment, loyalty, reliability, and stability (i.e., the  trustworthiness of the individual) prior to authorizing access to organizational systems  containing CUI. The screening activities reflect applicable federal laws, Executive Orders,  directives, policies, regulations, and specific criteria established for the level of access  required for assigned positions.  FURTHER DI...",
    furtherDiscussion:
      "Ensure all employees who need access to CUI undergo organization-defined screening before  being granted access. Base the types of screening on the requirements for a given position  and role.  157 NIST SP 800-171A, p. 45.  158 NIST SP 800-171 Rev. 2, p. 31.  The effective screening of personnel provided by this requirement, PS.L2-3.9.1, improves  upon the effectiveness of authentication performed in IA.L2-3.5.2.  Example  You are in charge of security at your organization. You complete standard...",
    assessmentConsiderations: [
      "Are appropriate background checks completed prior granting access to organizational \nsystems containing CUI [a]?",
    ],
    confidence: "HIGH",
    verb: "screened",
  },

  // Control 3.9.2
  "3.9.2.a": {
    type: "POLICY",
    notes:
      "Establish and document a policy and process for terminating system access and credentials coincident with personnel actions such as termination or transfer.",
    simplafi:
      "Document your offboarding and transfer procedures — what happens to someone's system access when they leave the company or change roles. This policy should cover timelines (access disabled same day as departure), who initiates the process (HR notifies IT), what gets collected (laptops, badges, keys), and exit interview requirements. This is the written process that ensures no former employee retains access to CUI.",
    discussion:
      "Protecting CUI during and after personnel actions may include returning system-related  property and conducting exit interviews. System-related property includes hardware  authentication tokens, identification cards, system administration technical manuals, keys,  and building passes. Exit interviews ensure that individuals who have been terminated  understand the security constraints imposed by being former employees and that proper  accountability is achieved for system-related property. Secur...",
    furtherDiscussion:
      "Employee access to CUI is removed when they change jobs or leave the company. When employment or program access is terminated for any reason, the following actions may occur within the defined time frame: • all company IT equipment (e.g., laptops, cell phones, storage devices) is returned; • all identification, access cards, and keys are returned; and • an exit interview is conducted to remind the employee of their obligations to not discuss CUI, even after employment. Additionally, perform the ...",
    assessmentConsiderations: [
      "Is information system access disabled upon employee termination or transfer [c]?",
      "Are authenticators/ credentials associated with the employee revoked upon termination \nor transfer within a certain time frame [b,c]?",
      "Is all company information system-related property retrieved from the terminated or \ntransferred employee within a certain timeframe [a,c]?",
      "Is access to company information and information systems formerly controlled by the \nterminated or transferred employee retained for a certain timeframe [a,c]?",
      "Is the information security office and data owner of the change in authorization notified \nwithin a certain timeframe [a]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.9.2.b": {
    type: "CONFIG",
    notes:
      "Enforce access termination so that system access and credentials are automatically revoked consistent with personnel actions such as termination or transfer.",
    simplafi:
      "This is the enforcement side of (a). When someone leaves or transfers, their accounts and credentials need to actually be disabled — not just planned for, but done. In Entra, this means the account is disabled or deleted, MFA tokens are revoked, and conditional access blocks any lingering sessions. An assessor will pick a recent departure and verify the account was disabled within your policy's required timeframe.",
    discussion:
      "Protecting CUI during and after personnel actions may include returning system-related  property and conducting exit interviews. System-related property includes hardware  authentication tokens, identification cards, system administration technical manuals, keys,  and building passes. Exit interviews ensure that individuals who have been terminated  understand the security constraints imposed by being former employees and that proper  accountability is achieved for system-related property. Secur...",
    furtherDiscussion:
      "Employee access to CUI is removed when they change jobs or leave the company. When employment or program access is terminated for any reason, the following actions may occur within the defined time frame: • all company IT equipment (e.g., laptops, cell phones, storage devices) is returned; • all identification, access cards, and keys are returned; and • an exit interview is conducted to remind the employee of their obligations to not discuss CUI, even after employment. Additionally, perform the ...",
    assessmentConsiderations: [
      "Is information system access disabled upon employee termination or transfer [c]?",
      "Are authenticators/ credentials associated with the employee revoked upon termination \nor transfer within a certain time frame [b,c]?",
      "Is all company information system-related property retrieved from the terminated or \ntransferred employee within a certain timeframe [a,c]?",
      "Is access to company information and information systems formerly controlled by the \nterminated or transferred employee retained for a certain timeframe [a,c]?",
      "Is the information security office and data owner of the change in authorization notified \nwithin a certain timeframe [a]?",
    ],
    confidence: "HIGH",
    verb: "terminated",
  },
  "3.9.2.c": {
    type: "CONFIG",
    notes:
      "Enforce system protections so that access is appropriately adjusted during and after personnel transfer actions.",
    simplafi:
      "This is the enforcement side of (a) for transfers specifically. When someone moves to a new role, their old access needs to be adjusted — not just their new access added on top. In Entra, this means reviewing and updating group memberships, role assignments, and application access to match the new role only. The risk is access accumulation — people collecting permissions from every role they've ever held.",
    discussion:
      "Protecting CUI during and after personnel actions may include returning system-related  property and conducting exit interviews. System-related property includes hardware  authentication tokens, identification cards, system administration technical manuals, keys,  and building passes. Exit interviews ensure that individuals who have been terminated  understand the security constraints imposed by being former employees and that proper  accountability is achieved for system-related property. Secur...",
    furtherDiscussion:
      "Employee access to CUI is removed when they change jobs or leave the company. When employment or program access is terminated for any reason, the following actions may occur within the defined time frame: • all company IT equipment (e.g., laptops, cell phones, storage devices) is returned; • all identification, access cards, and keys are returned; and • an exit interview is conducted to remind the employee of their obligations to not discuss CUI, even after employment. Additionally, perform the ...",
    assessmentConsiderations: [
      "Is information system access disabled upon employee termination or transfer [c]?",
      "Are authenticators/ credentials associated with the employee revoked upon termination \nor transfer within a certain time frame [b,c]?",
      "Is all company information system-related property retrieved from the terminated or \ntransferred employee within a certain timeframe [a,c]?",
      "Is access to company information and information systems formerly controlled by the \nterminated or transferred employee retained for a certain timeframe [a,c]?",
      "Is the information security office and data owner of the change in authorization notified \nwithin a certain timeframe [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.10 - PHYSICAL PROTECTION (6 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.10.1
  "3.10.1.a": {
    type: "POLICY",
    notes:
      "Identify and document authorized individuals allowed physical access to facilities and systems.",
    simplafi:
      "You need a documented list of who is allowed physical access to your facility and the areas where CUI systems live. This isn't just 'employees' — it's a specific list by name, tied to the areas they can access and why. Think badge lists, key holders, and server room access rosters. Keeping this outside your badge system — in a spreadsheet or HR tool — gives you a way to audit whether the right people still have the right access.",
    discussion:
      "This requirement applies to employees, individuals with permanent physical access  authorization credentials, and visitors. Authorized individuals have credentials that include  badges, identification cards, and smart cards. Organizations determine the strength of  authorization credentials needed consistent with applicable laws, directives, policies,  161 NIST SP 800-171A, p. 46.  162 NIST SP 800-171 Rev. 2, p. 32.  regulations, standards, procedures, and guidelines. This requirement applies on...",
    furtherDiscussion:
      "This addresses the company’s physical space (e.g., office, testing environments, equipment  rooms), technical assets, and non-technical assets that need to be protected from  unauthorized physical access. Specific environments are limited to authorized employees,  and access is controlled with badges, electronic locks, physical key locks, etc.  Output devices, such as printers, are placed in areas where their use does not expose data to  unauthorized individuals. Lists of personnel with authoriz...",
    assessmentConsiderations: [
      "Are lists of personnel with authorized access developed and maintained, and are \nappropriate authorization credentials issued [a]?",
      "Has the facility/building manager designated building areas as “sensitive” and designed \nphysical security protections (e.g., guards, locks, cameras, card readers) to limit physical \naccess to the area to only authorized employees [b,c,d]?",
      "Are output devices such as printers placed in areas where their use does not expose data \nto unauthorized individuals [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.10.1.b": {
    type: "CONFIG",
    notes:
      "Enforce physical access controls so that only authorized individuals can access organizational systems.",
    simplafi:
      "This is the enforcement side of (a). You've listed who should have physical access to your systems — now prove that unauthorized people can't walk up to a server, laptop, or workstation. Locked server rooms, badge readers on doors, and secured offices are what this looks like. An assessor will try to access areas where CUI systems live and check whether physical barriers actually stop them.",
    discussion:
      "This requirement applies to employees, individuals with permanent physical access  authorization credentials, and visitors. Authorized individuals have credentials that include  badges, identification cards, and smart cards. Organizations determine the strength of  authorization credentials needed consistent with applicable laws, directives, policies,  161 NIST SP 800-171A, p. 46.  162 NIST SP 800-171 Rev. 2, p. 32.  regulations, standards, procedures, and guidelines. This requirement applies on...",
    furtherDiscussion:
      "This addresses the company’s physical space (e.g., office, testing environments, equipment  rooms), technical assets, and non-technical assets that need to be protected from  unauthorized physical access. Specific environments are limited to authorized employees,  and access is controlled with badges, electronic locks, physical key locks, etc.  Output devices, such as printers, are placed in areas where their use does not expose data to  unauthorized individuals. Lists of personnel with authoriz...",
    assessmentConsiderations: [
      "Are lists of personnel with authorized access developed and maintained, and are \nappropriate authorization credentials issued [a]?",
      "Has the facility/building manager designated building areas as “sensitive” and designed \nphysical security protections (e.g., guards, locks, cameras, card readers) to limit physical \naccess to the area to only authorized employees [b,c,d]?",
      "Are output devices such as printers placed in areas where their use does not expose data \nto unauthorized individuals [c]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },
  "3.10.1.c": {
    type: "CONFIG",
    notes:
      "Enforce physical access controls so that only authorized individuals can access equipment.",
    simplafi:
      "This is the enforcement side of (a) for equipment specifically. Servers, networking gear, printers, copiers, and external drives all need to be in physically secured areas. If your network switch is in an unlocked closet or your printer sits in a public hallway, that's a problem. Lock equipment rooms, secure wiring closets, and place printers where only authorized staff can reach the output tray.",
    discussion:
      "This requirement applies to employees, individuals with permanent physical access  authorization credentials, and visitors. Authorized individuals have credentials that include  badges, identification cards, and smart cards. Organizations determine the strength of  authorization credentials needed consistent with applicable laws, directives, policies,  161 NIST SP 800-171A, p. 46.  162 NIST SP 800-171 Rev. 2, p. 32.  regulations, standards, procedures, and guidelines. This requirement applies on...",
    furtherDiscussion:
      "This addresses the company’s physical space (e.g., office, testing environments, equipment  rooms), technical assets, and non-technical assets that need to be protected from  unauthorized physical access. Specific environments are limited to authorized employees,  and access is controlled with badges, electronic locks, physical key locks, etc.  Output devices, such as printers, are placed in areas where their use does not expose data to  unauthorized individuals. Lists of personnel with authoriz...",
    assessmentConsiderations: [
      "Are lists of personnel with authorized access developed and maintained, and are \nappropriate authorization credentials issued [a]?",
      "Has the facility/building manager designated building areas as “sensitive” and designed \nphysical security protections (e.g., guards, locks, cameras, card readers) to limit physical \naccess to the area to only authorized employees [b,c,d]?",
      "Are output devices such as printers placed in areas where their use does not expose data \nto unauthorized individuals [c]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },
  "3.10.1.d": {
    type: "CONFIG",
    notes:
      "Enforce physical access controls so that only authorized individuals can access operating environments.",
    simplafi:
      "This is the enforcement side of (a) for operating environments — meaning the rooms and spaces where people actually work with CUI. If your team handles CUI at their desks, the workspace itself needs controlled access. That could mean a locked suite, a badge-controlled floor, or a designated secure area. The goal is that a random visitor or unauthorized employee can't wander into the space where CUI work happens.",
    discussion:
      "This requirement applies to employees, individuals with permanent physical access  authorization credentials, and visitors. Authorized individuals have credentials that include  badges, identification cards, and smart cards. Organizations determine the strength of  authorization credentials needed consistent with applicable laws, directives, policies,  161 NIST SP 800-171A, p. 46.  162 NIST SP 800-171 Rev. 2, p. 32.  regulations, standards, procedures, and guidelines. This requirement applies on...",
    furtherDiscussion:
      "This addresses the company’s physical space (e.g., office, testing environments, equipment  rooms), technical assets, and non-technical assets that need to be protected from  unauthorized physical access. Specific environments are limited to authorized employees,  and access is controlled with badges, electronic locks, physical key locks, etc.  Output devices, such as printers, are placed in areas where their use does not expose data to  unauthorized individuals. Lists of personnel with authoriz...",
    assessmentConsiderations: [
      "Are lists of personnel with authorized access developed and maintained, and are \nappropriate authorization credentials issued [a]?",
      "Has the facility/building manager designated building areas as “sensitive” and designed \nphysical security protections (e.g., guards, locks, cameras, card readers) to limit physical \naccess to the area to only authorized employees [b,c,d]?",
      "Are output devices such as printers placed in areas where their use does not expose data \nto unauthorized individuals [c]?",
    ],
    confidence: "HIGH",
    verb: "limited",
  },

  // Control 3.10.2
  "3.10.2.a": {
    type: "CONFIG",
    notes:
      "Implement physical protection measures so that the facility where organizational systems reside is protected.",
    simplafi:
      "Your facility needs physical protections that go beyond just locking the front door. Think about perimeter fencing, secure entry points, reinforced doors, and window locks for areas where CUI systems are housed. For a small business, this often means ensuring the office has a deadbolt or electronic lock on the main entrance and that server or equipment rooms have their own separate lock. The space should be hardened against unauthorized entry.",
    furtherDiscussion:
      "The infrastructure inside of a facility, such as power and network cables, is protected so that  visitors and unauthorized employees cannot access it. The protection is also monitored by  security guards, video cameras, sensors, or alarms.  Example  You are responsible for protecting your IT facilities. You install video cameras at each  entrance and exit, connect them to a video recorder, and show the camera feeds on a display  at the reception desk [c,d]. You also make sure there are secure lo...",
    assessmentConsiderations: [
      "Is physical access monitored to detect and respond to physical security incidents [c, d]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.10.2.b": {
    type: "CONFIG",
    notes:
      "Implement physical protection measures so that the support infrastructure for organizational systems is protected.",
    simplafi:
      "The support infrastructure — power lines, network cabling, HVAC systems, and backup power — needs protection too. If someone can access your network wiring in an unlocked ceiling or cut power to your server room, your security has a gap. Run cables through secured conduits, lock electrical panels, and make sure your UPS or generator isn't sitting in an open area. This is about protecting the things that keep your systems running.",
    furtherDiscussion:
      "The infrastructure inside of a facility, such as power and network cables, is protected so that  visitors and unauthorized employees cannot access it. The protection is also monitored by  security guards, video cameras, sensors, or alarms.  Example  You are responsible for protecting your IT facilities. You install video cameras at each  entrance and exit, connect them to a video recorder, and show the camera feeds on a display  at the reception desk [c,d]. You also make sure there are secure lo...",
    assessmentConsiderations: [
      "Is physical access monitored to detect and respond to physical security incidents [c, d]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.10.2.c": {
    type: "CONFIG",
    notes:
      "Implement monitoring systems so that the physical facility where organizational systems reside is continuously monitored.",
    simplafi:
      "You need monitoring in place for your facility — cameras at entry points, motion sensors in server rooms, or alarm systems on secured doors. For a small business, this often means a basic camera system covering entrances and the server room, with recordings stored for at least 90 days. The point is that if someone enters a secured area, you have a record of it. Security guards or a monitored alarm service count too.",
    furtherDiscussion:
      "The infrastructure inside of a facility, such as power and network cables, is protected so that  visitors and unauthorized employees cannot access it. The protection is also monitored by  security guards, video cameras, sensors, or alarms.  Example  You are responsible for protecting your IT facilities. You install video cameras at each  entrance and exit, connect them to a video recorder, and show the camera feeds on a display  at the reception desk [c,d]. You also make sure there are secure lo...",
    assessmentConsiderations: [
      "Is physical access monitored to detect and respond to physical security incidents [c, d]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.10.2.d": {
    type: "CONFIG",
    notes:
      "Implement monitoring systems so that the support infrastructure for organizational systems is continuously monitored.",
    simplafi:
      "Just as you monitor the facility itself, you need to monitor the support infrastructure — the wiring closets, electrical panels, and HVAC areas. Cameras or sensors in these spaces ensure that if someone tampers with your power, network cabling, or environmental controls, you'll know about it. For many small businesses, this means extending your camera coverage to include utility areas, not just the front door and server room.",
    furtherDiscussion:
      "The infrastructure inside of a facility, such as power and network cables, is protected so that  visitors and unauthorized employees cannot access it. The protection is also monitored by  security guards, video cameras, sensors, or alarms.  Example  You are responsible for protecting your IT facilities. You install video cameras at each  entrance and exit, connect them to a video recorder, and show the camera feeds on a display  at the reception desk [c,d]. You also make sure there are secure lo...",
    assessmentConsiderations: [
      "Is physical access monitored to detect and respond to physical security incidents [c, d]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.10.3
  "3.10.3.a": {
    type: "POLICY",
    notes:
      "Establish and document visitor escort procedures requiring visitors to be escorted at all times within controlled areas.",
    simplafi:
      "You need a documented visitor policy that requires all non-employees to be escorted in areas where CUI systems or data are present. This means visitors sign in at reception, get a visible visitor badge, and are accompanied by an employee at all times in secured areas. The policy should cover who can authorize a visitor, what areas they can access, and how long visits can last. Even trusted vendors and friends need an escort.",
    discussion:
      "Individuals with permanent physical access authorization credentials are not considered  visitors. Audit logs can be used to monitor visitor activity.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Do not allow visitors, even those people you know well, to walk around your facility without  an escort. Make sure that all non-employees wear special visitor badges and/or are escorted  by an employee at all times while on the property.  163 NIST SP 800-171A, p. 47.  164 NIST SP 800-171 Rev. 2, p. 32.  Example  Coming back from a meeting, you see the friend of a coworker walking down the hallway  near your office. You know this person well and trust them, but are not sure why they are in  the b...",
    assessmentConsiderations: [
      "Are personnel required to accompany visitors to areas in a facility with physical access \nto organizational systems [a]?",
      "Are visitors clearly distinguishable from regular personnel [b]?",
      "Is visitor activity monitored (e.g., use of cameras or guards, reviews of secure areas upon \nvisitor departure, review of visitor audit logs) [b]?",
    ],
    confidence: "HIGH",
    verb: "escorted",
  },
  "3.10.3.b": {
    type: "CONFIG",
    notes:
      "Implement monitoring systems so that visitor activity is tracked and recorded.",
    simplafi:
      "This is the enforcement side of (a). Beyond just requiring escorts, you need to actively track and monitor visitor activity. Maintain a visitor log — sign-in sheets with name, date, time in, time out, and who they visited. Camera footage of visitor areas adds another layer. An assessor will look at your visitor log, check whether it's consistently maintained, and may review camera footage to confirm visitors aren't wandering unescorted.",
    discussion:
      "Individuals with permanent physical access authorization credentials are not considered  visitors. Audit logs can be used to monitor visitor activity.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Do not allow visitors, even those people you know well, to walk around your facility without  an escort. Make sure that all non-employees wear special visitor badges and/or are escorted  by an employee at all times while on the property.  163 NIST SP 800-171A, p. 47.  164 NIST SP 800-171 Rev. 2, p. 32.  Example  Coming back from a meeting, you see the friend of a coworker walking down the hallway  near your office. You know this person well and trust them, but are not sure why they are in  the b...",
    assessmentConsiderations: [
      "Are personnel required to accompany visitors to areas in a facility with physical access \nto organizational systems [a]?",
      "Are visitors clearly distinguishable from regular personnel [b]?",
      "Is visitor activity monitored (e.g., use of cameras or guards, reviews of secure areas upon \nvisitor departure, review of visitor audit logs) [b]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.10.4
  "3.10.4.a": {
    type: "CONFIG",
    notes:
      "Implement audit logging so that physical access logs are automatically maintained by access control systems.",
    simplafi:
      "Keep a physical access log — a record of who entered secured areas and when. This could be a paper sign-in sheet at a badge reader door, electronic access logs from your badge system, or even a simple logbook for key-controlled rooms. The point is traceability: if something happens in your server room, you can look back and see who was there. Retain these logs for at least the period your policy defines.",
    discussion:
      "Organizations have flexibility in the types of audit logs employed. Audit logs can be  procedural (e.g., written log of individuals accessing the facility), automated (e.g., capturing  ID provided by a PIV card), or some combination thereof. Physical access points can include  facility access points, interior access points to systems or system components requiring  supplemental access controls, or both. System components (e.g., workstations, notebook  computers) may be in areas designated as pub...",
    furtherDiscussion:
      "Make sure you have a record of who accesses your facility (e.g., office, plant, factory). You can  do this in writing by having employees and visitors sign in and sign out or by electronic  165 NIST SP 800-171A, p. 47.  166 NIST SP 800-171 Rev. 2, pp. 32-33.  means such as badge readers. Whatever means you use, you need to retain the access records  for the time period that your company has defined.  Example  You and your coworkers like to have friends and family join you for lunch at the office...",
    assessmentConsiderations: [
      "Are logs of physical access to sensitive areas (both authorized access and visitor access) \nmaintained per retention requirements [a]?",
      "Are visitor access records retained for as long as required [a]?",
    ],
    confidence: "HIGH",
    verb: "maintained",
  },

  // Control 3.10.5
  "3.10.5.a": {
    type: "POLICY",
    notes:
      "Identify and document all physical access devices including keys, badges, and access cards.",
    simplafi:
      "Identify every physical access device in your environment — keys, badges, access cards, PIN pads, combination locks, biometric readers. Make a list of what you have, where each device controls access to, and how many copies exist. If you have 12 keys to the server room, you need to know who holds each one. This inventory is the foundation for managing and controlling physical access devices.",
    discussion:
      "Physical access devices include keys, locks, combinations, and card readers.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifying and controlling physical access devices (e.g., locks, badges, key cards) is just as  important as monitoring and limiting who is able to physically access certain equipment.  Physical access devices are only strong protection if you know who has them and what access  they allow. Physical access devices can be managed using manual or automatic processes  167 NIST SP 800-171A, pp. 47-48.  168 NIST SP 800-171 Rev. 2, p. 33.  such a list of who is assigned what key, or updating the badge...",
    assessmentConsiderations: [
      "Are lists or inventories of physical access devices maintained (e.g., keys, facility badges, \nkey cards) [a]?",
      "Is access to physical access devices limited (e.g., granted to, and accessible only by, \nauthorized individuals) [b]?",
      "Are physical access devices managed (e.g., revoking key card access when necessary, \nchanging locks as needed, maintaining access control devices and systems) [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.10.5.b": {
    type: "CONFIG",
    notes:
      "Enforce controls on physical access devices so that issuance, use, and revocation are systematically managed.",
    simplafi:
      "This is the enforcement side of (a). Your physical access devices need active controls — keys are tracked and signed out, lost badges are immediately deactivated, PIN codes are changed when personnel leave, and spare keys are stored in a locked cabinet. When an employee is terminated, their badge or key is collected the same day. An assessor will ask what happens when someone loses a key or leaves the company.",
    discussion:
      "Physical access devices include keys, locks, combinations, and card readers.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifying and controlling physical access devices (e.g., locks, badges, key cards) is just as  important as monitoring and limiting who is able to physically access certain equipment.  Physical access devices are only strong protection if you know who has them and what access  they allow. Physical access devices can be managed using manual or automatic processes  167 NIST SP 800-171A, pp. 47-48.  168 NIST SP 800-171 Rev. 2, p. 33.  such a list of who is assigned what key, or updating the badge...",
    assessmentConsiderations: [
      "Are lists or inventories of physical access devices maintained (e.g., keys, facility badges, \nkey cards) [a]?",
      "Is access to physical access devices limited (e.g., granted to, and accessible only by, \nauthorized individuals) [b]?",
      "Are physical access devices managed (e.g., revoking key card access when necessary, \nchanging locks as needed, maintaining access control devices and systems) [c]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.10.5.c": {
    type: "CONFIG",
    notes:
      "Implement management controls so that physical access devices are tracked throughout their lifecycle.",
    simplafi:
      "Beyond day-to-day control, physical access devices need ongoing management. Periodically audit your key and badge inventory — verify all devices are accounted for, rekey locks when keys can't be recovered, and rotate PINs on a schedule. If your badge system shows 50 active badges but you only have 35 employees, something needs investigation. This is the lifecycle management of your physical access tools.",
    discussion:
      "Physical access devices include keys, locks, combinations, and card readers.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Identifying and controlling physical access devices (e.g., locks, badges, key cards) is just as  important as monitoring and limiting who is able to physically access certain equipment.  Physical access devices are only strong protection if you know who has them and what access  they allow. Physical access devices can be managed using manual or automatic processes  167 NIST SP 800-171A, pp. 47-48.  168 NIST SP 800-171 Rev. 2, p. 33.  such a list of who is assigned what key, or updating the badge...",
    assessmentConsiderations: [
      "Are lists or inventories of physical access devices maintained (e.g., keys, facility badges, \nkey cards) [a]?",
      "Is access to physical access devices limited (e.g., granted to, and accessible only by, \nauthorized individuals) [b]?",
      "Are physical access devices managed (e.g., revoking key card access when necessary, \nchanging locks as needed, maintaining access control devices and systems) [c]?",
    ],
    confidence: "HIGH",
    verb: "managed",
  },

  // Control 3.10.6
  "3.10.6.a": {
    type: "POLICY",
    notes:
      "Define and document safeguarding measures for CUI at alternate work sites including telework locations.",
    simplafi:
      "If employees work from home or other locations outside your primary facility, you need a documented policy defining how CUI is protected at those alternate sites. What are the rules for home offices? Can CUI be printed at home? Must the workspace be in a private room? Are locked file cabinets required? Document these safeguards so remote workers know exactly what's expected when handling CUI outside the office.",
    discussion:
      "Alternate work sites may include government facilities or the private residences of  employees. Organizations may define different security requirements for specific alternate  work sites or types of sites depending on the work-related activities conducted at those sites.  NIST SP 800-46 and NIST SP 800-114 provide guidance on enterprise and user security  when teleworking.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Many people work from home or travel as part of their job. Define and implement safeguards  to account for protection of information beyond the enterprise perimeter. Safeguards may  169 NIST SP 800-171A, p. 48.  170 NIST SP 800-171 Rev. 2, p. 33.  include physical protections, such as locked file drawers, as well as electronic protections  such as encryption, audit logging, and proper access controls.  Example  Many of your company’s project managers work remotely as they often travel to sponsor...",
    assessmentConsiderations: [
      "Do all alternate sites where CUI data is stored or processed meet the same physical \nsecurity requirements as the main site [b]?",
      "Does the alternate processing site provide information security measures equivalent to \nthose of the primary site [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.10.6.b": {
    type: "CONFIG",
    notes:
      "Enforce safeguarding measures for CUI at alternate work sites using technical controls such as VPN, encryption, and device management.",
    simplafi:
      "This is the enforcement side of (a). The safeguards you defined for alternate work sites need to be verified and enforced. This could mean periodic self-assessments by remote workers, manager attestations, or even home office inspections for high-sensitivity roles. If your policy says CUI can't be printed at home, you need a way to confirm that's actually happening — whether through Intune print restrictions or employee acknowledgment forms.",
    discussion:
      "Alternate work sites may include government facilities or the private residences of  employees. Organizations may define different security requirements for specific alternate  work sites or types of sites depending on the work-related activities conducted at those sites.  NIST SP 800-46 and NIST SP 800-114 provide guidance on enterprise and user security  when teleworking.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Many people work from home or travel as part of their job. Define and implement safeguards  to account for protection of information beyond the enterprise perimeter. Safeguards may  169 NIST SP 800-171A, p. 48.  170 NIST SP 800-171 Rev. 2, p. 33.  include physical protections, such as locked file drawers, as well as electronic protections  such as encryption, audit logging, and proper access controls.  Example  Many of your company’s project managers work remotely as they often travel to sponsor...",
    assessmentConsiderations: [
      "Do all alternate sites where CUI data is stored or processed meet the same physical \nsecurity requirements as the main site [b]?",
      "Does the alternate processing site provide information security measures equivalent to \nthose of the primary site [b]?",
    ],
    confidence: "HIGH",
    verb: "enforced",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.11 - RISK ASSESSMENT (3 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.11.1
  "3.11.1.a": {
    type: "POLICY",
    notes:
      "Define and document the frequency for assessing risk to organizational operations, assets, and individuals.",
    simplafi:
      "You need to define how often your organization performs risk assessments — annually, semi-annually, or triggered by major changes. Document this frequency in your risk management policy. This isn't just a checkbox; it sets the rhythm for how often you step back and ask 'what could go wrong and how bad would it be?' Most small businesses doing CMMC start with annual assessments plus event-triggered reassessments.",
    discussion:
      "Clearly defined system boundaries are a prerequisite for effective risk assessments. Such risk  assessments consider threats, vulnerabilities, likelihood, and impact to organizational  operations, organizational assets, and individuals based on the operation and use of  organizational systems. Risk assessments also consider risk from external parties (e.g.,  service providers, contractor operating systems on behalf of the organization, individuals  171 NIST SP 800-171A, p. 49.  172 NIST SP 800-1...",
    furtherDiscussion:
      "Risk arises from anything that can reduce an organization’s assurance of mission/business success; cause harm to image or reputation; or harm individuals, other organizations, or the Nation. Organizations assess the risk to their operations and assets at regular intervals. Areas where weakness or vulnerabilities could lead to risk may include: • poorly designed and executed business processes; • inadvertent actions of people, such as disclosure or modification of information; • intentional actio...",
    assessmentConsiderations: [
      "Have initial and periodic risk assessments been conducted [b]?",
      "Are methods defined for assessing risk (e.g., reviewing security assessments, incident \nreports, and security advisories, identifying threat sources, threat events, and \nvulnerabilities, and determining likelihood, impact, and overall risk to the confidentiality \nof CUI) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.11.1.b": {
    type: "POLICY",
    notes:
      "Establish and document a risk assessment process so that risk is assessed with the defined frequency by qualified personnel.",
    simplafi:
      "This is the enforcement side of (a). You've defined the frequency — now actually perform the risk assessment on schedule. Walk through your systems that process CUI, identify threats and vulnerabilities, estimate likelihood and impact, and document the results. This doesn't need to be a massive formal exercise — a structured worksheet covering your key systems, threats, and risk levels works. The assessor wants to see a dated, completed assessment.",
    discussion:
      "Clearly defined system boundaries are a prerequisite for effective risk assessments. Such risk  assessments consider threats, vulnerabilities, likelihood, and impact to organizational  operations, organizational assets, and individuals based on the operation and use of  organizational systems. Risk assessments also consider risk from external parties (e.g.,  service providers, contractor operating systems on behalf of the organization, individuals  171 NIST SP 800-171A, p. 49.  172 NIST SP 800-1...",
    furtherDiscussion:
      "Risk arises from anything that can reduce an organization’s assurance of mission/business success; cause harm to image or reputation; or harm individuals, other organizations, or the Nation. Organizations assess the risk to their operations and assets at regular intervals. Areas where weakness or vulnerabilities could lead to risk may include: • poorly designed and executed business processes; • inadvertent actions of people, such as disclosure or modification of information; • intentional actio...",
    assessmentConsiderations: [
      "Have initial and periodic risk assessments been conducted [b]?",
      "Are methods defined for assessing risk (e.g., reviewing security assessments, incident \nreports, and security advisories, identifying threat sources, threat events, and \nvulnerabilities, and determining likelihood, impact, and overall risk to the confidentiality \nof CUI) [b]?",
    ],
    confidence: "HIGH",
    verb: "assessed",
  },

  // Control 3.11.2
  "3.11.2.a": {
    type: "POLICY",
    notes:
      "Define and document the frequency for performing vulnerability scans on organizational systems and applications.",
    simplafi:
      "Define how often you'll scan your systems and applications for vulnerabilities — most organizations choose monthly or quarterly scans, plus scans triggered by new vulnerability disclosures. Document this frequency in your vulnerability management policy. This sets the expectation so your IT team knows scanning isn't optional and the schedule is predictable. The frequency should match your risk tolerance and the sensitivity of your CUI environment.",
    discussion:
      "Organizations determine the required vulnerability scanning for all system components,  ensuring that potential sources of vulnerabilities such as networked printers, scanners, and  copiers are not overlooked. The vulnerabilities to be scanned are readily updated as new  vulnerabilities are discovered, announced, and scanning methods developed. This process  ensures that potential vulnerabilities in the system are identified and addressed as quickly  as possible. Vulnerability analyses for custo...",
    furtherDiscussion:
      "A vulnerability scanner is an application that identifies vulnerabilities in organizational assets. Most scanners can create a prioritized list of vulnerabilities ordered by their level of severity. Scan for vulnerabilities on all devices connected to the network including servers, desktops, laptops, virtual machines, containers, firewalls, switches, and printers. All assets that are within the scope of the CMMC assessment must be scanned, including assets such as laptop computers that may not r...",
    assessmentConsiderations: [
      "Is the frequency specified for vulnerability scans to be performed in organizational \nsystems and applications (e.g., continuous passive scanning, scheduled active scans) [a]?",
      "Are vulnerability scans performed on a defined frequency or randomly in accordance \nwith company policy [a,b,c]?",
      "Are systems periodically scanned for common and new vulnerabilities [d,e]?",
      "Is the list of scanned system vulnerabilities updated on a defined frequency or when new \nvulnerabilities are identified and reported [d,e]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.11.2.b": {
    type: "CONFIG",
    notes:
      "Implement automated vulnerability scanning so that organizational systems are scanned at the defined frequency.",
    simplafi:
      "This is the enforcement side of (a) for systems. Your servers, workstations, and network devices need vulnerability scans at the frequency you defined. In the Microsoft ecosystem, Defender for Endpoint provides continuous vulnerability assessment for managed devices through the Threat and Vulnerability Management dashboard. An assessor will ask to see recent scan results and confirm they match your defined schedule.",
    discussion:
      "Organizations determine the required vulnerability scanning for all system components,  ensuring that potential sources of vulnerabilities such as networked printers, scanners, and  copiers are not overlooked. The vulnerabilities to be scanned are readily updated as new  vulnerabilities are discovered, announced, and scanning methods developed. This process  ensures that potential vulnerabilities in the system are identified and addressed as quickly  as possible. Vulnerability analyses for custo...",
    furtherDiscussion:
      "A vulnerability scanner is an application that identifies vulnerabilities in organizational assets. Most scanners can create a prioritized list of vulnerabilities ordered by their level of severity. Scan for vulnerabilities on all devices connected to the network including servers, desktops, laptops, virtual machines, containers, firewalls, switches, and printers. All assets that are within the scope of the CMMC assessment must be scanned, including assets such as laptop computers that may not r...",
    assessmentConsiderations: [
      "Is the frequency specified for vulnerability scans to be performed in organizational \nsystems and applications (e.g., continuous passive scanning, scheduled active scans) [a]?",
      "Are vulnerability scans performed on a defined frequency or randomly in accordance \nwith company policy [a,b,c]?",
      "Are systems periodically scanned for common and new vulnerabilities [d,e]?",
      "Is the list of scanned system vulnerabilities updated on a defined frequency or when new \nvulnerabilities are identified and reported [d,e]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },
  "3.11.2.c": {
    type: "CONFIG",
    notes:
      "Implement automated vulnerability scanning so that applications are scanned at the defined frequency.",
    simplafi:
      "This is the enforcement side of (a) for applications. Beyond just scanning operating systems and devices, your business applications need vulnerability scanning too — web apps, databases, custom software. Defender for Endpoint covers many application vulnerabilities on managed devices, but web applications may need separate scanning tools. The key is that apps aren't excluded from your vulnerability scanning program just because they're harder to scan.",
    discussion:
      "Organizations determine the required vulnerability scanning for all system components,  ensuring that potential sources of vulnerabilities such as networked printers, scanners, and  copiers are not overlooked. The vulnerabilities to be scanned are readily updated as new  vulnerabilities are discovered, announced, and scanning methods developed. This process  ensures that potential vulnerabilities in the system are identified and addressed as quickly  as possible. Vulnerability analyses for custo...",
    furtherDiscussion:
      "A vulnerability scanner is an application that identifies vulnerabilities in organizational assets. Most scanners can create a prioritized list of vulnerabilities ordered by their level of severity. Scan for vulnerabilities on all devices connected to the network including servers, desktops, laptops, virtual machines, containers, firewalls, switches, and printers. All assets that are within the scope of the CMMC assessment must be scanned, including assets such as laptop computers that may not r...",
    assessmentConsiderations: [
      "Is the frequency specified for vulnerability scans to be performed in organizational \nsystems and applications (e.g., continuous passive scanning, scheduled active scans) [a]?",
      "Are vulnerability scans performed on a defined frequency or randomly in accordance \nwith company policy [a,b,c]?",
      "Are systems periodically scanned for common and new vulnerabilities [d,e]?",
      "Is the list of scanned system vulnerabilities updated on a defined frequency or when new \nvulnerabilities are identified and reported [d,e]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },
  "3.11.2.d": {
    type: "CONFIG",
    notes:
      "Implement vulnerability scanning so that organizational systems are automatically scanned when new vulnerabilities are identified.",
    simplafi:
      "When a new vulnerability is publicly disclosed — a zero-day or a critical CVE announcement — you need to scan your systems promptly, not wait for the next scheduled scan. Defender for Endpoint's Threat and Vulnerability Management updates continuously and will flag newly disclosed vulnerabilities across your managed devices. The goal is rapid awareness: know within days whether a new threat affects your environment.",
    discussion:
      "Organizations determine the required vulnerability scanning for all system components,  ensuring that potential sources of vulnerabilities such as networked printers, scanners, and  copiers are not overlooked. The vulnerabilities to be scanned are readily updated as new  vulnerabilities are discovered, announced, and scanning methods developed. This process  ensures that potential vulnerabilities in the system are identified and addressed as quickly  as possible. Vulnerability analyses for custo...",
    furtherDiscussion:
      "A vulnerability scanner is an application that identifies vulnerabilities in organizational assets. Most scanners can create a prioritized list of vulnerabilities ordered by their level of severity. Scan for vulnerabilities on all devices connected to the network including servers, desktops, laptops, virtual machines, containers, firewalls, switches, and printers. All assets that are within the scope of the CMMC assessment must be scanned, including assets such as laptop computers that may not r...",
    assessmentConsiderations: [
      "Is the frequency specified for vulnerability scans to be performed in organizational \nsystems and applications (e.g., continuous passive scanning, scheduled active scans) [a]?",
      "Are vulnerability scans performed on a defined frequency or randomly in accordance \nwith company policy [a,b,c]?",
      "Are systems periodically scanned for common and new vulnerabilities [d,e]?",
      "Is the list of scanned system vulnerabilities updated on a defined frequency or when new \nvulnerabilities are identified and reported [d,e]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },
  "3.11.2.e": {
    type: "CONFIG",
    notes:
      "Implement vulnerability scanning so that applications are automatically scanned when new vulnerabilities are identified.",
    simplafi:
      "Same as (d) but for applications specifically. When a new vulnerability is announced affecting software you use — whether it's a browser, PDF reader, or line-of-business application — scan promptly to determine if you're exposed. Defender for Endpoint tracks application vulnerabilities and will alert you through the Security admin center when your installed software versions are affected by newly published disclosures. Don't wait for the next scheduled scan cycle.",
    discussion:
      "Organizations determine the required vulnerability scanning for all system components,  ensuring that potential sources of vulnerabilities such as networked printers, scanners, and  copiers are not overlooked. The vulnerabilities to be scanned are readily updated as new  vulnerabilities are discovered, announced, and scanning methods developed. This process  ensures that potential vulnerabilities in the system are identified and addressed as quickly  as possible. Vulnerability analyses for custo...",
    furtherDiscussion:
      "A vulnerability scanner is an application that identifies vulnerabilities in organizational assets. Most scanners can create a prioritized list of vulnerabilities ordered by their level of severity. Scan for vulnerabilities on all devices connected to the network including servers, desktops, laptops, virtual machines, containers, firewalls, switches, and printers. All assets that are within the scope of the CMMC assessment must be scanned, including assets such as laptop computers that may not r...",
    assessmentConsiderations: [
      "Is the frequency specified for vulnerability scans to be performed in organizational \nsystems and applications (e.g., continuous passive scanning, scheduled active scans) [a]?",
      "Are vulnerability scans performed on a defined frequency or randomly in accordance \nwith company policy [a,b,c]?",
      "Are systems periodically scanned for common and new vulnerabilities [d,e]?",
      "Is the list of scanned system vulnerabilities updated on a defined frequency or when new \nvulnerabilities are identified and reported [d,e]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },

  // Control 3.11.3
  "3.11.3.a": {
    type: "POLICY",
    notes:
      "Identify and document vulnerabilities through assessment processes including scan analysis and threat intelligence review.",
    simplafi:
      "Before you can fix vulnerabilities, you need to identify them from your scan results and other sources — vendor advisories, threat intelligence feeds, CISA alerts. This is a POLICY objective: document your process for collecting and cataloging vulnerabilities. Who reviews scan results? How are vulnerabilities prioritized? What sources do you monitor? A simple vulnerability register that tracks each finding, its severity, and its status is a good start.",
    discussion:
      "Vulnerabilities discovered, for example, via the scanning conducted in response to RA.L2- 3.11.2, are remediated with consideration of the related assessment of risk. The  consideration of risk influences the prioritization of remediation efforts and the level of  effort to be expended in the remediation for specific vulnerabilities.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Not all vulnerabilities captured in a vulnerability scanner may pose the same level of risk to  an organization. Prioritize mitigation efforts to close the most critical vulnerabilities first.  176 NIST SP 800-171A, p. 50.  177 NIST SP 800-171 Rev. 2, p. 34.  Track all vulnerability remediation to ensure completion; also track vulnerabilities that you  have determined not to remediate.  This requirement, RA.L2-3.11.3, benefits from CA.L2-3.12.2. RA.L2-3.11. allows  remediation of vulnerabilities...",
    assessmentConsiderations: [
      "Are the results of risk assessments used to prioritize vulnerabilities for remediation [b]?",
      "For any given vulnerability is action taken for remediation, acceptance, avoidance, or \ntransference of the vulnerability risk [b]?",
      "Are all high risk vulnerabilities prioritized [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.11.3.b": {
    type: "CONFIG",
    notes:
      "Implement remediation actions so that identified vulnerabilities are corrected in accordance with risk assessment priorities.",
    simplafi:
      "This is the enforcement side of (a). Identified vulnerabilities need to be fixed based on their risk level — critical vulnerabilities patched quickly, lower-risk items on a reasonable timeline. In the Microsoft ecosystem, use Defender for Endpoint's remediation recommendations and Intune to push patches. An assessor will pick vulnerabilities from your register and verify they were actually remediated within the timeframes your policy defines.",
    discussion:
      "Vulnerabilities discovered, for example, via the scanning conducted in response to RA.L2- 3.11.2, are remediated with consideration of the related assessment of risk. The  consideration of risk influences the prioritization of remediation efforts and the level of  effort to be expended in the remediation for specific vulnerabilities.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Not all vulnerabilities captured in a vulnerability scanner may pose the same level of risk to  an organization. Prioritize mitigation efforts to close the most critical vulnerabilities first.  176 NIST SP 800-171A, p. 50.  177 NIST SP 800-171 Rev. 2, p. 34.  Track all vulnerability remediation to ensure completion; also track vulnerabilities that you  have determined not to remediate.  This requirement, RA.L2-3.11.3, benefits from CA.L2-3.12.2. RA.L2-3.11. allows  remediation of vulnerabilities...",
    assessmentConsiderations: [
      "Are the results of risk assessments used to prioritize vulnerabilities for remediation [b]?",
      "For any given vulnerability is action taken for remediation, acceptance, avoidance, or \ntransference of the vulnerability risk [b]?",
      "Are all high risk vulnerabilities prioritized [b]?",
    ],
    confidence: "HIGH",
    verb: "remediated",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.12 - SECURITY ASSESSMENT (4 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.12.1
  "3.12.1.a": {
    type: "POLICY",
    notes:
      "Define and document the frequency for performing security control assessments.",
    simplafi:
      "Define how often you'll assess whether your security controls are actually working — annually is the most common cadence. Document this in your security assessment policy. This is separate from vulnerability scanning; it's a broader review asking 'are the controls we put in place still effective?' Think of it as your security health checkup schedule. The frequency should be at least annual, with reassessments after significant changes.",
    discussion:
      "Organizations assess security controls in organizational systems and the environments in  which those systems operate as part of the system development life cycle. Security controls  are the safeguards or countermeasures organizations implement to satisfy security  requirements. By assessing the implemented security controls, organizations determine if  the security safeguards or countermeasures are in place and operating as intended. Security  control assessments ensure that information securit...",
    furtherDiscussion:
      "Avoid a “set it and forget it” mentality when implementing security controls. The security  landscape is constantly changing. Reassess existing controls at periodic intervals in order to  validate their effectiveness in your environment. Set the assessment schedule according to  organizational needs. Consider regulatory obligations and internal policies when assessing  the controls.  Outputs from security control assessments typically include:  • documented assessment results;  • proposed new co...",
    assessmentConsiderations: [
      "Are security controls assessed at least annually [a]?",
      "Is the output of the security controls assessment documented [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.12.1.b": {
    type: "POLICY",
    notes:
      "Establish and document a security control assessment process so that controls are evaluated for effectiveness at the defined frequency.",
    simplafi:
      "This is the enforcement side of (a). At the frequency you defined, actually test your security controls. Are your conditional access policies still blocking what they should? Is your visitor log still being maintained? Are your Intune compliance policies still enforced? Walk through your controls systematically and document what's working and what isn't. The output is an assessment report that shows your security posture as of that date.",
    discussion:
      "Organizations assess security controls in organizational systems and the environments in  which those systems operate as part of the system development life cycle. Security controls  are the safeguards or countermeasures organizations implement to satisfy security  requirements. By assessing the implemented security controls, organizations determine if  the security safeguards or countermeasures are in place and operating as intended. Security  control assessments ensure that information securit...",
    furtherDiscussion:
      "Avoid a “set it and forget it” mentality when implementing security controls. The security  landscape is constantly changing. Reassess existing controls at periodic intervals in order to  validate their effectiveness in your environment. Set the assessment schedule according to  organizational needs. Consider regulatory obligations and internal policies when assessing  the controls.  Outputs from security control assessments typically include:  • documented assessment results;  • proposed new co...",
    assessmentConsiderations: [
      "Are security controls assessed at least annually [a]?",
      "Is the output of the security controls assessment documented [b]?",
    ],
    confidence: "HIGH",
    verb: "assessed",
  },

  // Control 3.12.2
  "3.12.2.a": {
    type: "POLICY",
    notes:
      "Identify and document deficiencies and vulnerabilities that need to be addressed in the plan of action.",
    simplafi:
      "When your security assessments, vulnerability scans, or audits find problems, you need to catalog them. Identify each deficiency — a control that's not working, a policy that's not being followed, a vulnerability that hasn't been patched. Document each one clearly enough that someone could understand the problem and its potential impact. This becomes the input for your plan of action and milestones (POA&M).",
    discussion:
      "The plan of action is a key document in the information security program. Organizations  develop plans of action that describe how any unimplemented security requirements will be  met and how any planned mitigations will be implemented. Organizations can document the  system security plan and plan of action as separate or combined documents and in any  chosen format.  Federal agencies may consider the submitted system security plans and plans of action as  critical inputs to an overall risk mana...",
    furtherDiscussion:
      "When you write a plan of action, define the clear goal or objective of the plan. You may include the following in the action plan: • ownership of who is accountable for ensuring the plan’s performance; • specific steps or milestones that are clear and actionable; • assigned responsibility for each step or milestone; • milestones to measure plan progress; and • completion dates. This requirement, CA.L2-3.12.2, which ensures developing and implementing operational plans of action to correct and re...",
    assessmentConsiderations: [
      "Is there an action plan to remediate identified weaknesses or deficiencies [a]?",
      "Is the action plan maintained as remediation is performed [b]?",
      "Does the action plan designate remediation dates and milestones for each item [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.12.2.b": {
    type: "POLICY",
    notes:
      "Establish and document a plan of action to correct identified deficiencies and reduce or eliminate identified vulnerabilities.",
    simplafi:
      "Take those identified deficiencies from (a) and build a formal plan of action and milestones — a POA&M. For each deficiency, document what you'll do to fix it, who's responsible, the target completion date, and any milestones along the way. This is one of the most important documents in your CMMC assessment. It shows you're not ignoring problems — you have a concrete, tracked plan to address them.",
    discussion:
      "The plan of action is a key document in the information security program. Organizations  develop plans of action that describe how any unimplemented security requirements will be  met and how any planned mitigations will be implemented. Organizations can document the  system security plan and plan of action as separate or combined documents and in any  chosen format.  Federal agencies may consider the submitted system security plans and plans of action as  critical inputs to an overall risk mana...",
    furtherDiscussion:
      "When you write a plan of action, define the clear goal or objective of the plan. You may include the following in the action plan: • ownership of who is accountable for ensuring the plan’s performance; • specific steps or milestones that are clear and actionable; • assigned responsibility for each step or milestone; • milestones to measure plan progress; and • completion dates. This requirement, CA.L2-3.12.2, which ensures developing and implementing operational plans of action to correct and re...",
    assessmentConsiderations: [
      "Is there an action plan to remediate identified weaknesses or deficiencies [a]?",
      "Is the action plan maintained as remediation is performed [b]?",
      "Does the action plan designate remediation dates and milestones for each item [c]?",
    ],
    confidence: "HIGH",
    verb: "developed",
  },
  "3.12.2.c": {
    type: "CONFIG",
    notes:
      "Implement the plan of action so that identified deficiencies are corrected and vulnerabilities are reduced or eliminated through technical controls.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your POA&M can't just sit on a shelf — you need to actively work through it. Assign owners, track progress against milestones, and close items as they're completed. An assessor will look at your POA&M and ask about specific items: what's been done, what's in progress, and what's overdue. Regular POA&M review meetings — monthly or quarterly — keep remediation on track.",
    discussion:
      "The plan of action is a key document in the information security program. Organizations  develop plans of action that describe how any unimplemented security requirements will be  met and how any planned mitigations will be implemented. Organizations can document the  system security plan and plan of action as separate or combined documents and in any  chosen format.  Federal agencies may consider the submitted system security plans and plans of action as  critical inputs to an overall risk mana...",
    furtherDiscussion:
      "When you write a plan of action, define the clear goal or objective of the plan. You may include the following in the action plan: • ownership of who is accountable for ensuring the plan’s performance; • specific steps or milestones that are clear and actionable; • assigned responsibility for each step or milestone; • milestones to measure plan progress; and • completion dates. This requirement, CA.L2-3.12.2, which ensures developing and implementing operational plans of action to correct and re...",
    assessmentConsiderations: [
      "Is there an action plan to remediate identified weaknesses or deficiencies [a]?",
      "Is the action plan maintained as remediation is performed [b]?",
      "Does the action plan designate remediation dates and milestones for each item [c]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.12.3
  "3.12.3.a": {
    type: "CONFIG",
    notes:
      "Implement continuous monitoring so that security controls are monitored on an ongoing basis to ensure continued effectiveness.",
    simplafi:
      "Your security controls need ongoing monitoring, not just periodic assessments. This means continuously watching for signs that controls are degrading or failing. In the Microsoft ecosystem, the Security admin center provides a Secure Score that tracks your security posture over time. Set up alerts for when compliance policies change, conditional access rules are modified, or device compliance drops. Ongoing monitoring catches drift between formal assessments.",
    discussion:
      "Continuous monitoring programs facilitate ongoing awareness of threats, vulnerabilities,  and information security to support organizational risk management decisions. The terms  continuous and ongoing imply that organizations assess and analyze security controls and  information security-related risks at a frequency sufficient to support risk-based decisions.  The results of continuous monitoring programs generate appropriate risk response actions  by organizations. Providing access to security...",
    furtherDiscussion:
      "Provide a plan for monitoring the state of security controls on a recurring basis that occurs  more frequently than the periodic assessments discussed in CA.L2-3.12.1. This process  provides a mechanism to assess the overall security posture of your organization, which  directly relates to activities discussed in CA.L2-3.12.4. As a result, the process not only  maintains awareness of vulnerabilities and threats, but it also informs management of the  effectiveness of the security controls in det...",
    assessmentConsiderations: [
      "Are the security controls that need to be continuously monitored identified [a]?",
      "Is the timeframe for continuous monitoring activities to support risk-based decision \nmaking defined [a]?",
      "Is the output of continuous monitoring activities provided to stakeholders [a]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.12.4
  "3.12.4.a": {
    type: "POLICY",
    notes:
      "Establish and document a system security plan covering the organizational system.",
    simplafi:
      "You need a System Security Plan — an SSP. This is the master document that describes your entire security program: what systems are in scope, what controls you've implemented, and how they work together. It doesn't need to be hundreds of pages, but it needs to exist and be comprehensive. Think of it as the blueprint an assessor uses to understand your environment before they start testing anything.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "developed",
  },
  "3.12.4.b": {
    type: "POLICY",
    notes:
      "Define and document the system boundary within the system security plan.",
    simplafi:
      "Your SSP needs to clearly define your system boundary — what's in scope for CMMC and what's not. This means documenting which networks, devices, applications, and cloud services handle CUI. In a Microsoft GCC/GCC High environment, your boundary typically includes your M365 tenant, managed devices in Intune, and any on-premises systems that touch CUI. Draw the line clearly so everyone agrees on what's being protected.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "described and documented",
  },
  "3.12.4.c": {
    type: "POLICY",
    notes:
      "Define and document the system environment of operation within the system security plan.",
    simplafi:
      "Describe the environment your systems operate in — where are they located, who manages them, and what's the broader context? Document your physical facilities, cloud hosting (GCC High tenant details), network topology, and organizational structure. This gives an assessor the background to understand how your security controls fit into your actual business operations. It's the 'about us' section of your SSP.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "described and documented",
  },
  "3.12.4.d": {
    type: "POLICY",
    notes:
      "Identify and document security requirements approved as non-applicable by the designated authority.",
    simplafi:
      "Some CMMC security requirements may not apply to your specific environment. If so, identify them, explain why they don't apply, and get your designated authority to approve the non-applicability. Document this in your SSP. For example, if you don't use wireless networks, the wireless security requirements may be non-applicable. But you can't just skip requirements — each exclusion needs a clear justification.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.12.4.e": {
    type: "POLICY",
    notes:
      "Define and document the method of security requirement implementation within the system security plan.",
    simplafi:
      "For each security requirement in your SSP, describe how you actually implemented it. This is the heart of your SSP — mapping each CMMC requirement to your specific tools and processes. For example, 'We enforce MFA through Entra conditional access policies' or 'We manage patching through Intune update rings.' An assessor reads this section to understand what they should expect to find when they start testing.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "described and documented",
  },
  "3.12.4.f": {
    type: "POLICY",
    notes:
      "Define and document the relationships and connections to other systems within the system security plan.",
    simplafi:
      "Document every connection between your system and other systems — partner networks, cloud services, internet connections, and shared services. For each connection, describe what data flows across it and what protections are in place. If you share data with a subcontractor through encrypted email, that's a connection. If your GCC High tenant connects to an on-premises file server, that's a connection. Map them all in your SSP.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "described and documented",
  },
  "3.12.4.g": {
    type: "POLICY",
    notes:
      "Define and document the frequency for updating the system security plan.",
    simplafi:
      "Define how often you'll update your SSP — annually at minimum, plus after significant changes like adding new systems, changing cloud providers, or restructuring your network. Document this update frequency in the SSP itself. An SSP that was written two years ago and never updated is a major red flag for assessors. Set a realistic review cadence, assign someone to own the update process, and stick to it consistently.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.12.4.h": {
    type: "POLICY",
    notes:
      "Establish and document a process to update the system security plan at the defined frequency to reflect current system state.",
    simplafi:
      "This is the enforcement side of (g). Actually update your SSP at the frequency you defined. When you add a new system, change a security tool, or modify your boundary, the SSP should reflect it. An assessor will compare your SSP to your actual environment — if the SSP says you use one tool but you've switched to another, that's a finding. Keep a revision history so updates are traceable.",
    discussion:
      "System security plans relate security requirements to a set of security controls. System  security plans also describe, at a high level, how the security controls meet those security  requirements, but do not provide detailed, technical descriptions of the design or  implementation of the controls. System security plans contain sufficient information to  enable a design and implementation that is unambiguously compliant with the intent of the  plans and subsequent determinations of risk if the p...",
    furtherDiscussion:
      "A system security plan (SSP) is a document that outlines how an organization implements its security requirements. OSAs must have an SSP in place at the time of assessment to describe each information system within the CMMC Assessment Scope. The absence of an up-to-date SSP at the time of the assessment would result in a finding that an assessment could not be completed due to incomplete information and noncompliance with DFARS clause 252.204-7012. OSAs are free to choose the format of their SSP...",
    assessmentConsiderations: [
      "Do mechanisms exist to develop and periodically update an SSP [a,g]?",
      "Are security requirements identified and approved by the designated authority as \nnon-applicable documented [d]?",
    ],
    confidence: "HIGH",
    verb: "updated",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.13 - SYSTEM AND COMMUNICATIONS PROTECTION (16 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.13.1
  "3.13.1.a": {
    type: "POLICY",
    notes:
      "Define and document the external system boundary including all entry and exit points.",
    simplafi:
      "Define where your network meets the outside world — your external boundary. This is a documentation exercise: identify your internet connection points, cloud service boundaries (like where your GCC High tenant interfaces with the internet), and any direct connections to partner networks. Write this down in your SSP with a network diagram. You can't protect a boundary you haven't defined.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.13.1.b": {
    type: "POLICY",
    notes:
      "Define and document key internal system boundaries including network segmentation points.",
    simplafi:
      "Identify the key internal boundaries within your network — the lines between your CUI enclave and your general corporate network, between user workstations and servers, or between different security zones. Document these in your network diagram. Not every internal segment needs a boundary, but the ones separating CUI systems from everything else are critical. This is the foundation for your network segmentation strategy.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.13.1.c": {
    type: "CONFIG",
    notes:
      "Implement monitoring at the external system boundary so that all communications are observed and logged.",
    simplafi:
      "This is the enforcement side of (a). Traffic crossing your external boundary needs to be monitored. In the Microsoft ecosystem, Defender for Endpoint monitors endpoint traffic, and your firewall should log all inbound and outbound connections. The Security admin center aggregates alerts about suspicious external communications. An assessor wants to see that you know what's crossing your perimeter and can detect anomalies.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.13.1.d": {
    type: "CONFIG",
    notes:
      "Implement monitoring at key internal boundaries so that communications between segments are observed and logged.",
    simplafi:
      "This is the enforcement side of (b). Traffic crossing your key internal boundaries needs monitoring too. If someone on your general network tries to reach a CUI system, that should be visible. Defender for Endpoint can detect lateral movement attempts, and network segmentation with logging ensures internal boundary crossings are tracked. This catches insider threats and compromised devices trying to reach sensitive areas.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.13.1.e": {
    type: "CONFIG",
    notes:
      "Enforce communications controls at the external system boundary using firewalls and access control lists.",
    simplafi:
      "Beyond just monitoring, external boundary traffic must be actively controlled — meaning you have clear rules about what's allowed in and out. Your firewall rules, Defender for Endpoint network protection, and conditional access policies all contribute here. The default posture should be deny-all with explicit, documented exceptions for legitimate business traffic. An assessor will review your firewall rules and ask why each individual allow rule exists.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.13.1.f": {
    type: "CONFIG",
    notes:
      "Enforce communications controls at key internal boundaries using internal firewalls and segmentation.",
    simplafi:
      "Same as (e) but for your internal boundaries. Traffic between your CUI enclave and general corporate network should be actively controlled — not just monitored. Use network segmentation, firewall rules between VLANs, or conditional access policies that restrict which devices can reach CUI resources. The goal is that a compromised device sitting on your general network can't freely communicate with systems in your CUI enclave.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.13.1.g": {
    type: "CONFIG",
    notes:
      "Implement protection mechanisms at the external system boundary so that communications are secured.",
    simplafi:
      "External boundary communications need protection — meaning encryption and integrity checking for everything crossing that line. All traffic crossing your external boundary should use encrypted protocols. In the Microsoft ecosystem, GCC High enforces TLS for all cloud communications automatically. For VPN connections and general web traffic, ensure TLS 1.2 or higher is required. Any unencrypted protocols attempting to cross your perimeter should be blocked or flagged for review.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },
  "3.13.1.h": {
    type: "CONFIG",
    notes:
      "Implement protection mechanisms at key internal boundaries so that communications between segments are secured.",
    simplafi:
      "Internal boundary communications carrying CUI also need protection — don't assume that traffic inside your network is safe just because it's internal. Traffic between security zones should be encrypted where practical. Defender for Endpoint can enforce encrypted connections, and services within your GCC High tenant use encryption by default. This protects against network sniffing if someone gains access to your internal network infrastructure through a compromised device or rogue connection.",
    discussion:
      "Communications can be monitored, controlled, and protected at boundary components and  by restricting or prohibiting interfaces in organizational systems. Boundary components  include gateways, routers, firewalls, guards, network-based malicious code analysis and  virtualization systems, or encrypted tunnels implemented within a system security  architecture (e.g., routers protecting firewalls or application gateways residing on protected  subnetworks). Restricting or prohibiting interfaces in o...",
    furtherDiscussion:
      "Fences, locks, badges, and key cards help keep non-employees out of your physical facilities. Similarly, your company’s IT network or system has boundaries that must be protected. Many companies use a web proxy and a firewall. When an employee uses a company computer to go to a website, a web proxy makes the request on the user’s behalf, looks at the web request, and decides if it should let the employee go to the website. A firewall controls access from the inside and outside, protecting valuab...",
    assessmentConsiderations: [
      "What are the external system boundary components that make up the entry and exit \npoints for data flow (e.g., firewalls, gateways, cloud service boundaries), behind which all \nsystem components that handle regulated data are contained? What are the supporting \nsystem components necessary for the protection of regulated data [a]?",
      "What are the internal system boundary components that make up the entry and exit \npoints for key internal data flow (e.g., internal firewalls, routers, any devices that can \nbridge the connection between one segment of the system and another) that separate \nsegments of the internal network – including devices that separate internal network \nsegments such as development and production networks as well as a traditional \nDemilitarized Zone (DMZ) at the edge of the network [b]?",
      "Is data flowing in and out of the external and key internal system boundaries monitored \n(e.g., connections are logged and able to be reviewed, suspicious traffic generates alerts) \n[c,d]?",
      "Is data traversing the external and internal system boundaries controlled such that \nconnections are denied by default and only authorized connections are allowed [e,f]?",
      "Is data flowing in and out of the external and key internal system boundaries protected \n(e.g., applying encryption when required or prudent, tunneling traffic as needed) [g,h]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.13.2
  "3.13.2.a": {
    type: "POLICY",
    notes:
      "Identify and document architectural designs that promote effective information security.",
    simplafi:
      "Identify the architectural design principles that guide your security — things like defense in depth, least privilege, zero trust, and network segmentation. Document these in your SSP or security architecture document. This is a planning exercise: before building anything, articulate the design philosophy. For a Microsoft environment, your architecture likely centers on Entra as the identity plane, Intune for device management, and Defender for threat protection.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.2.b": {
    type: "POLICY",
    notes:
      "Identify and document software development techniques that promote effective information security.",
    simplafi:
      "If your organization develops software, identify the secure development practices you follow — input validation, code reviews, secure coding standards, and testing procedures. Most small businesses don't develop custom software, but if you do, document your approach thoroughly. If you only use commercial off-the-shelf or cloud software like Microsoft 365, document that you rely on vendor secure development practices and evaluate those vendors for security compliance accordingly.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.2.c": {
    type: "POLICY",
    notes:
      "Identify and document systems engineering principles that promote effective information security.",
    simplafi:
      "Identify the systems engineering principles that guide how you build and maintain your IT environment — standardized configurations, change management, separation of development and production environments. Document these principles so your technical team has a consistent framework to work from. For a Microsoft shop, this might include 'all devices are managed through Intune' and 'all identity goes through Entra' as foundational engineering principles that shape every decision.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.2.d": {
    type: "CONFIG",
    notes:
      "Implement the identified architectural designs so that effective information security is employed in the system.",
    simplafi:
      "This is the enforcement side of (a). Your documented architectural designs need to actually be implemented. If you said 'defense in depth' is a principle, show it: firewall at the perimeter, Defender on endpoints, conditional access at the identity layer, and Purview protecting data. An assessor will compare your stated architecture to what's actually deployed. The design document and reality should match.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "employed",
  },
  "3.13.2.e": {
    type: "CONFIG",
    notes:
      "Implement the identified software development techniques so that effective information security is employed.",
    simplafi:
      "This is the enforcement side of (b). If you identified secure development practices, they need to be followed. If you rely on vendor practices, show that you evaluate vendors for security. For most small businesses in the Microsoft ecosystem, this means verifying that Microsoft's GCC High meets FedRAMP High requirements and that any third-party tools also meet your security standards.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "employed",
  },
  "3.13.2.f": {
    type: "CONFIG",
    notes:
      "Implement the identified systems engineering principles so that effective information security is employed.",
    simplafi:
      "This is the enforcement side of (c). Your systems engineering principles need to be visible in how your environment is actually built and maintained. If 'all devices through Intune' is your principle, every device in scope should be Intune-managed. If 'change management' is a principle, show your change request records. An assessor checks whether your engineering principles are practiced, not just documented.",
    discussion:
      "Organizations apply systems security engineering principles to new development systems  or systems undergoing major upgrades. For legacy systems, organizations apply systems  security engineering principles to system upgrades and modifications to the extent feasible,  given the current state of hardware, software, and firmware components within those  systems. The application of systems security engineering concepts and principles helps to  develop trustworthy, secure, and resilient systems and ...",
    furtherDiscussion:
      "Familiarity with security engineering principles and their successful application to your infrastructure will increase the security of your environment. NIST SP 800-160 System Security Engineering: Considerations for a Multidisciplinary Approach in the Engineering of Trustworthy Secure Systems can serve as a source of security engineering and design principles. Decide which designs and principles to apply. Some will not be possible or appropriate for a given company or for specific systems or co...",
    assessmentConsiderations: [
      "Does the organization have a defined system architecture [a,d]?",
      "Are system security engineering principles applied in the specification, design, \ndevelopment and implementation of the systems [d,e,f]?",
    ],
    confidence: "HIGH",
    verb: "employed",
  },

  // Control 3.13.3
  "3.13.3.a": {
    type: "POLICY",
    notes:
      "Identify and document user functionality to distinguish it from system management functionality.",
    simplafi:
      "Identify the user-facing functions in your environment — email, document editing, web browsing, Teams collaboration. These are the everyday tools your workforce uses. Listing them separately from administrative functions creates a clear distinction that drives how you structure access. The point is to draw a line between what normal users do and what system administrators do, so you can separate them technically.",
    discussion:
      "System management functionality includes functions necessary to administer databases,  network components, workstations, or servers, and typically requires privileged user access.  The separation of user functionality from system management functionality is physical or  logical. Organizations can implement separation of system management functionality from  user functionality by using different computers, different central processing units, different  instances of operating systems, or different...",
    furtherDiscussion:
      "Prevent users and user services from accessing system management functionality on IT  components (e.g., databases, network components, workstations, servers). This reduces the  attack surface to those critical interfaces by limiting who can access and how they can be  accessed. By separating the user functionality from system management functionality, the  administrator or privileged functions are not available to the general user.  The intent of this requirement is to ensure:  • general users a...",
    assessmentConsiderations: [
      "Are physical or logical controls used to separate user functionality from system \nmanagement-related functionality (e.g., to ensure that administration (e.g., privilege) \noptions are not available to general users) [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.3.b": {
    type: "POLICY",
    notes:
      "Identify and document system management functionality to distinguish it from user functionality.",
    simplafi:
      "Identify the system management functions in your environment — managing Entra, configuring Intune policies, modifying firewall rules, managing Exchange settings, and administering security tools in the Security admin center. These are the administrative and infrastructure functions that keep the system running. Documenting them separately from user functions establishes which activities require elevated privileges and which administrative tasks should be isolated from everyday user activity.",
    discussion:
      "System management functionality includes functions necessary to administer databases,  network components, workstations, or servers, and typically requires privileged user access.  The separation of user functionality from system management functionality is physical or  logical. Organizations can implement separation of system management functionality from  user functionality by using different computers, different central processing units, different  instances of operating systems, or different...",
    furtherDiscussion:
      "Prevent users and user services from accessing system management functionality on IT  components (e.g., databases, network components, workstations, servers). This reduces the  attack surface to those critical interfaces by limiting who can access and how they can be  accessed. By separating the user functionality from system management functionality, the  administrator or privileged functions are not available to the general user.  The intent of this requirement is to ensure:  • general users a...",
    assessmentConsiderations: [
      "Are physical or logical controls used to separate user functionality from system \nmanagement-related functionality (e.g., to ensure that administration (e.g., privilege) \noptions are not available to general users) [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.3.c": {
    type: "CONFIG",
    notes:
      "Enforce separation of user functionality from system management functionality through technical controls.",
    simplafi:
      "This is the enforcement side of (a) and (b). User functions and admin functions must be technically separated. In the Microsoft ecosystem, this means admins use separate accounts for administrative work, admin portals are accessible only from compliant devices through conditional access, and administrative tools aren't available from standard user workstations. The Entra admin center, Intune portal, and Security admin center should require privileged accounts and compliant devices.",
    discussion:
      "System management functionality includes functions necessary to administer databases,  network components, workstations, or servers, and typically requires privileged user access.  The separation of user functionality from system management functionality is physical or  logical. Organizations can implement separation of system management functionality from  user functionality by using different computers, different central processing units, different  instances of operating systems, or different...",
    furtherDiscussion:
      "Prevent users and user services from accessing system management functionality on IT  components (e.g., databases, network components, workstations, servers). This reduces the  attack surface to those critical interfaces by limiting who can access and how they can be  accessed. By separating the user functionality from system management functionality, the  administrator or privileged functions are not available to the general user.  The intent of this requirement is to ensure:  • general users a...",
    assessmentConsiderations: [
      "Are physical or logical controls used to separate user functionality from system \nmanagement-related functionality (e.g., to ensure that administration (e.g., privilege) \noptions are not available to general users) [c]?",
    ],
    confidence: "HIGH",
    verb: "separated",
  },

  // Control 3.13.4
  "3.13.4.a": {
    type: "CONFIG",
    notes:
      "Automatically prevent unauthorized and unintended information transfer via shared system resources.",
    simplafi:
      "Prevent data leakage between users or processes through shared system resources — memory, storage, processor caches. In the Microsoft ecosystem, GCC High's cloud infrastructure handles multi-tenant isolation automatically. For on-premises systems, ensure proper user session isolation and clear temporary files between sessions. Intune can configure Windows devices to clear page files on shutdown. The concern is that one user's CUI doesn't linger in shared resources for another to find.",
    discussion:
      "The control of information in shared system resources (e.g., registers, cache memory, main  memory, hard disks) is also commonly referred to as object reuse and residual information  protection. This requirement prevents information produced by the actions of prior users or  roles (or the actions of processes acting on behalf of prior users or roles) from being available  to any current users or roles (or current processes acting on behalf of current users or roles)  that obtain access to shared...",
    furtherDiscussion:
      "No shared system resource, such as cache memory, hard disks, registers, or main memory  may pass information from one user to another user. In other words, when objects are  reused no residual information should exist on that object. This protects the confidentiality  of the information. This is typically a feature provided by operating system and software  vendors.  Example  You are a system administrator responsible for creating and deploying the system hardening  procedures for your company’s...",
    assessmentConsiderations: [
      "Are shared system resources identified and documented [a]?",
    ],
    confidence: "HIGH",
    verb: "prevented",
  },

  // Control 3.13.5
  "3.13.5.a": {
    type: "POLICY",
    notes:
      "Identify and document all publicly accessible system components.",
    simplafi:
      "Identify any system components that are publicly accessible — your website, public-facing APIs, mail server, or any service reachable from the internet. Document each one, what it does, and whether it should be accessible. Many small businesses have more public-facing components than they realize. This inventory is critical because public-facing systems are your most attacked surface and must be isolated from CUI systems.",
    discussion:
      "Subnetworks that are physically or logically separated from internal networks are referred  to as demilitarized zones (DMZs). DMZs are typically implemented with boundary control  devices and techniques that include routers, gateways, firewalls, virtualization, or cloud- based technologies.  NIST SP 800-41 provides guidance on firewalls and firewall policy. SP 800-125B provides  guidance on security for virtualization technologies.  195 NIST SP 800-171A, p. 55.  FURTHER DISCUSSION196",
    furtherDiscussion:
      "Separate the publicly accessible systems from the internal systems that need to be protected.  Do not place internal systems on the same network as the publicly accessible systems and  block access by default from DMZ networks to internal networks.  One method of accomplishing this is to create a DMZ network, which enhances security by  providing public access to a specific set of resources while preventing connections from  those resources to the rest of the IT environment. Some OSAs achieve a ...",
    assessmentConsiderations: [
      "Are any system components reachable by the public (e.g., internet-facing web servers, \nVPN gateways, publicly accessible cloud services) [a]?",
      "Are publicly accessible system components on physically or logically separated \nsubnetworks (e.g., isolated subnetworks using separate, dedicated VLAN segments such \nas DMZs) [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.5.b": {
    type: "CONFIG",
    notes:
      "Enforce network separation so that publicly accessible system components reside on subnetworks isolated from internal networks.",
    simplafi:
      "This is the enforcement side of (a). Your publicly accessible components must be on a separate network segment — physically or logically separated from your internal CUI network. A compromised website shouldn't give an attacker a path to your CUI systems. In the Microsoft ecosystem, this means your public web presence should not share infrastructure with your GCC High environment. Use network segmentation, separate VLANs, or entirely separate hosting.",
    discussion:
      "Subnetworks that are physically or logically separated from internal networks are referred  to as demilitarized zones (DMZs). DMZs are typically implemented with boundary control  devices and techniques that include routers, gateways, firewalls, virtualization, or cloud- based technologies.  NIST SP 800-41 provides guidance on firewalls and firewall policy. SP 800-125B provides  guidance on security for virtualization technologies.  195 NIST SP 800-171A, p. 55.  FURTHER DISCUSSION196",
    furtherDiscussion:
      "Separate the publicly accessible systems from the internal systems that need to be protected.  Do not place internal systems on the same network as the publicly accessible systems and  block access by default from DMZ networks to internal networks.  One method of accomplishing this is to create a DMZ network, which enhances security by  providing public access to a specific set of resources while preventing connections from  those resources to the rest of the IT environment. Some OSAs achieve a ...",
    assessmentConsiderations: [
      "Are any system components reachable by the public (e.g., internet-facing web servers, \nVPN gateways, publicly accessible cloud services) [a]?",
      "Are publicly accessible system components on physically or logically separated \nsubnetworks (e.g., isolated subnetworks using separate, dedicated VLAN segments such \nas DMZs) [b]?",
    ],
    confidence: "HIGH",
    verb: "separated",
  },

  // Control 3.13.6
  "3.13.6.a": {
    type: "CONFIG",
    notes:
      "Enforce default-deny firewall rules so that network communications traffic is denied by default.",
    simplafi:
      "Your network's default posture should be deny-all — no traffic flows unless explicitly permitted. This applies to firewalls, network access controls, and security group rules. Instead of blocking known threats, you allow only known-good traffic. In the Microsoft ecosystem, conditional access works this way by default — access is blocked unless a policy explicitly grants it. Your firewall should follow the same philosophy.",
    discussion:
      "This requirement applies to inbound and outbound network communications traffic at the  system boundary and at identified points within the system. A deny-all, permit-by-exception  network communications traffic policy ensures that only those connections which are  essential and approved are allowed.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Block all traffic entering and leaving the network, but permit specific traffic based on  organizational policies, exceptions, or criteria. This process of permitting only authorized  traffic to the network is called whitelisting and limits the number of unintentional  connections to the network.  197 NIST SP 800-171A, p. 55.  198 NIST SP 800-171 Rev. 2, p. 38.  This requirement, SC.L2-3.13.6, requires a deny-all permit by exception approach for all  network communications. In doing so, it adds ...",
    assessmentConsiderations: [
      "Are network communications traffic on relevant system components (e.g., host and \nnetwork firewalls, routers, gateways) denied by default (e.g., configured with an implicit \ndeny rule that takes effect in the absence of any other matching traffic rules) [a]?",
      "Are network communications traffic on relevant system components (e.g., host and \nnetwork firewalls, routers, gateways) allowed by exception (e.g., configured with explicit \nallow rules that takes effect only when network traffic matches one or more rules) [b]?",
    ],
    confidence: "HIGH",
    verb: "denied",
  },
  "3.13.6.b": {
    type: "CONFIG",
    notes:
      "Enforce exception-based allow rules so that only explicitly authorized network traffic is permitted.",
    simplafi:
      "This is the companion to (a). After establishing deny-by-default, create explicit allow rules for legitimate traffic. Each exception should be documented and justified — web traffic on port 443, email traffic, specific application communications. In conditional access, each allow policy should have a clear business purpose. An assessor will review your allow rules and ask why each one exists. Keep the exception list as short as possible.",
    discussion:
      "This requirement applies to inbound and outbound network communications traffic at the  system boundary and at identified points within the system. A deny-all, permit-by-exception  network communications traffic policy ensures that only those connections which are  essential and approved are allowed.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Block all traffic entering and leaving the network, but permit specific traffic based on  organizational policies, exceptions, or criteria. This process of permitting only authorized  traffic to the network is called whitelisting and limits the number of unintentional  connections to the network.  197 NIST SP 800-171A, p. 55.  198 NIST SP 800-171 Rev. 2, p. 38.  This requirement, SC.L2-3.13.6, requires a deny-all permit by exception approach for all  network communications. In doing so, it adds ...",
    assessmentConsiderations: [
      "Are network communications traffic on relevant system components (e.g., host and \nnetwork firewalls, routers, gateways) denied by default (e.g., configured with an implicit \ndeny rule that takes effect in the absence of any other matching traffic rules) [a]?",
      "Are network communications traffic on relevant system components (e.g., host and \nnetwork firewalls, routers, gateways) allowed by exception (e.g., configured with explicit \nallow rules that takes effect only when network traffic matches one or more rules) [b]?",
    ],
    confidence: "HIGH",
    verb: "allowed",
  },

  // Control 3.13.7
  "3.13.7.a": {
    type: "CONFIG",
    notes:
      "Enforce VPN configuration to prevent split tunneling so that remote devices cannot simultaneously connect to internal and external networks.",
    simplafi:
      "Split tunneling lets a remote user connect to your VPN and the public internet simultaneously — which means CUI traffic could leak through the unprotected internet path. Prevent this. In the Microsoft ecosystem, configure your VPN or Defender for Endpoint network protection to force all traffic through your managed connection when accessing CUI systems. Conditional access policies requiring compliant devices add enforcement. An assessor will test whether a remote device can reach both your network and the open internet at the same time.",
    discussion:
      "Split tunneling might be desirable by remote users to communicate with local system  resources such as printers or file servers. However, split tunneling allows unauthorized  external connections, making the system more vulnerable to attack and to exfiltration of  organizational information. This requirement is implemented in remote devices (e.g.,  notebook computers, smart phones, and tablets) through configuration settings to disable  split tunneling in those devices, and by preventing configu...",
    furtherDiscussion:
      "Split tunneling for a remote user utilizes two connections: accessing resources on the  internal network via a VPN and simultaneously accessing an external network such as a  public network or the internet.  Split tunneling presents a potential opportunity where an open unencrypted connection  from a public network could allow an adversary to access resources on internal network. As  a mitigation strategy, the split tunneling setting should be disabled on all devices so that all  traffic, includ...",
    assessmentConsiderations: [
      "Does the system prevent remote devices that have established connections (e.g., remote \nlaptops) with the system from communicating outside that communications path with \nresources on uncontrolled/unauthorized networks [a]?",
    ],
    confidence: "HIGH",
    verb: "prevented",
  },

  // Control 3.13.8
  "3.13.8.a": {
    type: "POLICY",
    notes:
      "Identify and document cryptographic mechanisms intended to prevent unauthorized disclosure of CUI during transmission.",
    simplafi:
      "Identify the specific encryption methods you'll use to protect CUI in transit — TLS 1.2+ for web and email, IPSec for VPN, SRTP for voice. Document these in your security plan. This is the decision-making step: choosing your encryption standards before configuring anything. In the Microsoft ecosystem, GCC High enforces TLS for cloud services, but you need to document this deliberately, not just accept the default.",
    discussion:
      "This requirement applies to internal and external networks and any system components that  can transmit information including servers, notebook computers, desktop computers,  mobile devices, printers, copiers, scanners, and facsimile machines. Communication paths  outside the physical protection of controlled boundaries are susceptible to both interception  and modification. Organizations relying on commercial providers offering transmission  services as commodity services rather than as fully d...",
    furtherDiscussion:
      "The intent of this requirement is to ensure CUI is cryptographically protected during transit,  particularly on the internet. The most common way to accomplish this is to establish a TLS  tunnel between the source and destination using the most current version of TLS. This  requirement does not specify a mutually authenticated handshake, but mutual  authentication is the most secure approach to creating a tunnel.  Because the use of cryptography in this requirement is to protect the confidential...",
    assessmentConsiderations: [
      "Are cryptographic mechanisms used to prevent unauthorized disclosure of information \nduring transmission unless otherwise protected by alternative physical measures (e.g., \nPDS) [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.8.b": {
    type: "POLICY",
    notes:
      "Identify and document alternative physical safeguards intended to prevent unauthorized disclosure of CUI during transmission.",
    simplafi:
      "If encryption isn't feasible for certain transmission paths, identify alternative physical safeguards — protected distribution systems (secured cabling), courier services, or hand-delivery of physical media. Document specifically when and where you'll use physical safeguards instead of encryption and why encryption isn't feasible. For most Microsoft-based environments, encryption covers nearly everything, but physical media transfers or certain legacy system connections might still need physical protections as an alternative.",
    discussion:
      "This requirement applies to internal and external networks and any system components that  can transmit information including servers, notebook computers, desktop computers,  mobile devices, printers, copiers, scanners, and facsimile machines. Communication paths  outside the physical protection of controlled boundaries are susceptible to both interception  and modification. Organizations relying on commercial providers offering transmission  services as commodity services rather than as fully d...",
    furtherDiscussion:
      "The intent of this requirement is to ensure CUI is cryptographically protected during transit,  particularly on the internet. The most common way to accomplish this is to establish a TLS  tunnel between the source and destination using the most current version of TLS. This  requirement does not specify a mutually authenticated handshake, but mutual  authentication is the most secure approach to creating a tunnel.  Because the use of cryptography in this requirement is to protect the confidential...",
    assessmentConsiderations: [
      "Are cryptographic mechanisms used to prevent unauthorized disclosure of information \nduring transmission unless otherwise protected by alternative physical measures (e.g., \nPDS) [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.8.c": {
    type: "CONFIG",
    notes:
      "Implement cryptographic mechanisms or alternative physical safeguards to prevent unauthorized disclosure of CUI during transmission.",
    simplafi:
      "This is the enforcement side of (a) and (b). Your chosen encryption methods or physical safeguards must be actively implemented. In the Microsoft ecosystem, verify that TLS 1.2+ is enforced in Entra conditional access, email uses TLS in transit, and VPN connections use your documented encryption. Defender for Endpoint can verify encryption compliance on managed devices. An assessor will inspect actual connection properties to confirm encryption is active.",
    discussion:
      "This requirement applies to internal and external networks and any system components that  can transmit information including servers, notebook computers, desktop computers,  mobile devices, printers, copiers, scanners, and facsimile machines. Communication paths  outside the physical protection of controlled boundaries are susceptible to both interception  and modification. Organizations relying on commercial providers offering transmission  services as commodity services rather than as fully d...",
    furtherDiscussion:
      "The intent of this requirement is to ensure CUI is cryptographically protected during transit,  particularly on the internet. The most common way to accomplish this is to establish a TLS  tunnel between the source and destination using the most current version of TLS. This  requirement does not specify a mutually authenticated handshake, but mutual  authentication is the most secure approach to creating a tunnel.  Because the use of cryptography in this requirement is to protect the confidential...",
    assessmentConsiderations: [
      "Are cryptographic mechanisms used to prevent unauthorized disclosure of information \nduring transmission unless otherwise protected by alternative physical measures (e.g., \nPDS) [c]?",
    ],
    confidence: "HIGH",
    verb: "implemented",
  },

  // Control 3.13.9
  "3.13.9.a": {
    type: "POLICY",
    notes:
      "Define and document the period of inactivity after which network connections associated with communications sessions are terminated.",
    simplafi:
      "Define how long a network session can sit idle before it's automatically disconnected — not just screen lock, but the actual network connection terminating. Document this timeout in your policy. Common values range from 15 to 30 minutes depending on the system. This is different from screen lock (that's AC.L2-3.1.10) — this is about killing the network session itself after inactivity.",
    discussion:
      "This requirement applies to internal and external networks. Terminating network  connections associated with communications sessions include de-allocating associated  TCP/IP address or port pairs at the operating system level, or de-allocating networking  assignments at the application level if multiple application sessions are using a single,  operating system-level network connection. Time periods of user inactivity may be  established by organizations and include time periods by type of netwo...",
    furtherDiscussion:
      "Prevent malicious actors from taking advantage of an open network session or an  unattended computer at the end of the connection. Balance user work patterns and needs  against security to determine the length of inactivity that will force a termination.  This requirement, SC.L2-3.13.9, specifies network connections be terminated under certain  conditions, which complements AC.L2-3.1. that specifies control of mobile device  connections.  Example  You are an administrator of a server that provid...",
    assessmentConsiderations: [
      "Are the network connections requiring management and time-out for inactivity \ndocumented [a]?",
      "Are the network connections requiring management and time-out for inactivity \nconfigured and implemented [c]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.13.9.b": {
    type: "CONFIG",
    notes:
      "Automatically terminate network connections associated with communications sessions at the end of the sessions.",
    simplafi:
      "This is the enforcement side of session termination at the end of a session. When a user logs off or closes their connection, the network session should be fully terminated — not left hanging. In Entra, configure token lifetime policies and sign-in frequency controls so sessions don't persist after they should be over. An assessor will check that closing a browser or disconnecting actually ends the authenticated session.",
    discussion:
      "This requirement applies to internal and external networks. Terminating network  connections associated with communications sessions include de-allocating associated  TCP/IP address or port pairs at the operating system level, or de-allocating networking  assignments at the application level if multiple application sessions are using a single,  operating system-level network connection. Time periods of user inactivity may be  established by organizations and include time periods by type of netwo...",
    furtherDiscussion:
      "Prevent malicious actors from taking advantage of an open network session or an  unattended computer at the end of the connection. Balance user work patterns and needs  against security to determine the length of inactivity that will force a termination.  This requirement, SC.L2-3.13.9, specifies network connections be terminated under certain  conditions, which complements AC.L2-3.1. that specifies control of mobile device  connections.  Example  You are an administrator of a server that provid...",
    assessmentConsiderations: [
      "Are the network connections requiring management and time-out for inactivity \ndocumented [a]?",
      "Are the network connections requiring management and time-out for inactivity \nconfigured and implemented [c]?",
    ],
    confidence: "HIGH",
    verb: "terminated",
  },
  "3.13.9.c": {
    type: "CONFIG",
    notes:
      "Automatically terminate network connections after the defined period of inactivity.",
    simplafi:
      "This is the enforcement side of (a). Your defined inactivity timeout must be technically enforced. In Entra, configure conditional access session controls with sign-in frequency and persistent browser session settings. For VPN connections, set idle timeout values. The goal is that an abandoned session doesn't stay connected indefinitely. An assessor will leave a session idle and verify it disconnects at the time you defined.",
    discussion:
      "This requirement applies to internal and external networks. Terminating network  connections associated with communications sessions include de-allocating associated  TCP/IP address or port pairs at the operating system level, or de-allocating networking  assignments at the application level if multiple application sessions are using a single,  operating system-level network connection. Time periods of user inactivity may be  established by organizations and include time periods by type of netwo...",
    furtherDiscussion:
      "Prevent malicious actors from taking advantage of an open network session or an  unattended computer at the end of the connection. Balance user work patterns and needs  against security to determine the length of inactivity that will force a termination.  This requirement, SC.L2-3.13.9, specifies network connections be terminated under certain  conditions, which complements AC.L2-3.1. that specifies control of mobile device  connections.  Example  You are an administrator of a server that provid...",
    assessmentConsiderations: [
      "Are the network connections requiring management and time-out for inactivity \ndocumented [a]?",
      "Are the network connections requiring management and time-out for inactivity \nconfigured and implemented [c]?",
    ],
    confidence: "HIGH",
    verb: "terminated",
  },

  // Control 3.13.10
  "3.13.10.a": {
    type: "CONFIG",
    notes:
      "Implement cryptographic key establishment processes so that keys are properly generated whenever cryptography is employed.",
    simplafi:
      "Wherever you use encryption — for email, file storage, VPN, or disk encryption — the cryptographic keys backing that encryption need to be properly created. In the Microsoft ecosystem, most key generation is handled automatically by services like Purview, BitLocker, and Entra. The important thing is that you're not creating weak keys or using default/shared keys. Document which services generate keys and how they're established.",
    discussion:
      "Cryptographic key management and establishment can be performed using manual  procedures or mechanisms supported by manual procedures. Organizations define key  management requirements in accordance with applicable federal laws, Executive Orders,  policies, directives, regulations, and standards specifying appropriate options, levels, and  parameters.  NIST SP 800-56A and NIST SP 800-57-1 provide guidance on cryptographic key management  and key establishment.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Develop processes and technical mechanisms to protect the cryptographic keys’ confidentiality, authenticity, and authorized use in accordance with industry standards and 205 NIST SP 800-171A, p. 57. 206 NIST SP 800-171 Rev. 2, p. 39. regulations. Key management systems provide oversight, assurance, and the capability to demonstrate the cryptographic keys are created in a secure manner and protected from loss or misuse throughout their lifecycle (e.g., active, expired, revoked). For a small numbe...",
    assessmentConsiderations: [
      "Are cryptographic keys established whenever cryptography is employed (e.g., digital \nsignatures, \nauthentication, \nauthorization, \ntransport, \nor \nother \ncryptographic \nmechanisms) [a]?",
      "Are cryptographic keys maintained whenever cryptography is employed (e.g., key \nstorage, backup, recovery, revocation, destruction, etc.) [b]?",
    ],
    confidence: "HIGH",
    verb: "established",
  },
  "3.13.10.b": {
    type: "CONFIG",
    notes:
      "Implement cryptographic key management so that keys are stored, rotated, and revoked through controlled processes.",
    simplafi:
      "Cryptographic keys need lifecycle management — creation, distribution, storage, rotation, and destruction. In the Microsoft ecosystem, Purview manages encryption keys for data protection, BitLocker keys are stored in Entra, and certificate management handles TLS keys. Document your key management approach: how keys are backed up, who can access recovery keys, and how expired or compromised keys are rotated. An assessor will ask about your key lifecycle.",
    discussion:
      "Cryptographic key management and establishment can be performed using manual  procedures or mechanisms supported by manual procedures. Organizations define key  management requirements in accordance with applicable federal laws, Executive Orders,  policies, directives, regulations, and standards specifying appropriate options, levels, and  parameters.  NIST SP 800-56A and NIST SP 800-57-1 provide guidance on cryptographic key management  and key establishment.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Develop processes and technical mechanisms to protect the cryptographic keys’ confidentiality, authenticity, and authorized use in accordance with industry standards and 205 NIST SP 800-171A, p. 57. 206 NIST SP 800-171 Rev. 2, p. 39. regulations. Key management systems provide oversight, assurance, and the capability to demonstrate the cryptographic keys are created in a secure manner and protected from loss or misuse throughout their lifecycle (e.g., active, expired, revoked). For a small numbe...",
    assessmentConsiderations: [
      "Are cryptographic keys established whenever cryptography is employed (e.g., digital \nsignatures, \nauthentication, \nauthorization, \ntransport, \nor \nother \ncryptographic \nmechanisms) [a]?",
      "Are cryptographic keys maintained whenever cryptography is employed (e.g., key \nstorage, backup, recovery, revocation, destruction, etc.) [b]?",
    ],
    confidence: "HIGH",
    verb: "managed",
  },

  // Control 3.13.11
  "3.13.11.a": {
    type: "CONFIG",
    notes:
      "Enforce the use of FIPS-validated cryptography to protect the confidentiality of CUI.",
    simplafi:
      "All encryption protecting CUI must use FIPS-validated cryptography. In the Microsoft ecosystem, GCC High services use FIPS-validated modules by default. For Windows devices, enable FIPS mode through Intune device configuration policies. BitLocker uses FIPS-validated encryption for disk protection. The key here is that you're not using homegrown or unvalidated encryption — you're relying on certified implementations. An assessor may ask to see your FIPS compliance settings.",
    discussion:
      "Cryptography can be employed to support many security solutions including the protection  of controlled unclassified information, the provision of digital signatures, and the  enforcement of information separation when authorized individuals have the necessary  clearances for such information but lack the necessary formal access approvals.  Cryptography can also be used to support random number generation and hash generation.  Cryptographic standards include FIPS-validated cryptography and/or NS...",
    furtherDiscussion:
      "FIPS-validated cryptography means the cryptographic module has to have been tested and  validated to meet FIPS 140-2 requirements. Simply using an approved algorithm is not  sufficient – the module (software and/or hardware) used to implement the algorithm must  be separately validated under FIPS 140. Accordingly, FIPS-validated cryptography is  207 NIST SP 800-171A, pp. 57-58.  208 NIST SP 800-171 Rev. 2, p. 39.  required to protect CUI when transmitted or stored outside the protected environme...",
    assessmentConsiderations: [
      "Is cryptography implemented to protect the confidentiality of CUI at rest and in transit, \nthrough the configuration of systems and applications or through the use of encryption \ntools [a]?",
    ],
    confidence: "HIGH",
    verb: "employed",
  },

  // Control 3.13.12
  "3.13.12.a": {
    type: "POLICY",
    notes:
      "Identify and document collaborative computing devices including cameras, microphones, and conferencing systems.",
    simplafi:
      "Identify all collaborative computing devices in your environment — conference room cameras, smart displays, speakerphones, webcams, and smart TVs. These devices can inadvertently capture CUI discussions or display CUI on screen. Make a list of what you have, where each device is located, and what it's capable of. If a conference room has a webcam and microphone, it's a collaborative computing device.",
    discussion:
      "Collaborative computing devices include networked white boards, cameras, and  microphones. Indication of use includes signals to users when collaborative computing  devices are activated. Dedicated video conferencing systems, which rely on one of the  participants calling or connecting to the other party to activate the video conference, are  excluded.  209 NIST SP 800-171A, p. 58.  210 NIST SP 800-171 Rev. 2, p. 39.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Notification that a device is in use can include an indicator light that turns on or a specific  text window that appears on screen. If a device does not have the means to alert a user when  in use, the organization should provide manual means. Manual means can include, as  necessary:  • paper notification on entryways; and  • locking entryways when a collaborative computing device is in use.  This requirement is not intended to include technologies that enable users to share the  contents of th...",
    assessmentConsiderations: [
      "Are the collaborative computing devices configured to provide indication to users when \nin use (e.g., a light, text notification, or audio tone) or are users alerted before entering a \nspace (e.g., written notice posted outside the space) where they are in use [b]?",
      "Are the collaborative computing devices configured to prevent them from being turned \non without user interaction or consent [c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.13.12.b": {
    type: "CONFIG",
    notes:
      "Implement indicators on collaborative computing devices so that users are notified when devices are in use.",
    simplafi:
      "This is the enforcement side of (a). Users need a clear way to know when collaborative devices are active — a light when the camera is on, an indicator when the microphone is live. In Teams Rooms devices and conference systems, look for physical indicators. The goal is that no one accidentally discusses CUI while a camera or mic is secretly active. Check that indicator lights haven't been disabled or covered.",
    discussion:
      "Collaborative computing devices include networked white boards, cameras, and  microphones. Indication of use includes signals to users when collaborative computing  devices are activated. Dedicated video conferencing systems, which rely on one of the  participants calling or connecting to the other party to activate the video conference, are  excluded.  209 NIST SP 800-171A, p. 58.  210 NIST SP 800-171 Rev. 2, p. 39.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Notification that a device is in use can include an indicator light that turns on or a specific  text window that appears on screen. If a device does not have the means to alert a user when  in use, the organization should provide manual means. Manual means can include, as  necessary:  • paper notification on entryways; and  • locking entryways when a collaborative computing device is in use.  This requirement is not intended to include technologies that enable users to share the  contents of th...",
    assessmentConsiderations: [
      "Are the collaborative computing devices configured to provide indication to users when \nin use (e.g., a light, text notification, or audio tone) or are users alerted before entering a \nspace (e.g., written notice posted outside the space) where they are in use [b]?",
      "Are the collaborative computing devices configured to prevent them from being turned \non without user interaction or consent [c]?",
    ],
    confidence: "HIGH",
    verb: "provide indication",
  },
  "3.13.12.c": {
    type: "CONFIG",
    notes:
      "Enforce device configuration to prohibit remote activation of collaborative computing devices.",
    simplafi:
      "Collaborative computing devices must not be remotely activatable — no one should be able to turn on a conference room camera or microphone from outside the room. In Microsoft Teams Rooms, configure devices so that sessions must be initiated locally. Disable remote wake features on smart displays and conference systems. If a device can be turned on remotely, it's a surveillance risk in spaces where CUI is discussed.",
    discussion:
      "Collaborative computing devices include networked white boards, cameras, and  microphones. Indication of use includes signals to users when collaborative computing  devices are activated. Dedicated video conferencing systems, which rely on one of the  participants calling or connecting to the other party to activate the video conference, are  excluded.  209 NIST SP 800-171A, p. 58.  210 NIST SP 800-171 Rev. 2, p. 39.  FURTHER DISCUSSION",
    furtherDiscussion:
      "Notification that a device is in use can include an indicator light that turns on or a specific  text window that appears on screen. If a device does not have the means to alert a user when  in use, the organization should provide manual means. Manual means can include, as  necessary:  • paper notification on entryways; and  • locking entryways when a collaborative computing device is in use.  This requirement is not intended to include technologies that enable users to share the  contents of th...",
    assessmentConsiderations: [
      "Are the collaborative computing devices configured to provide indication to users when \nin use (e.g., a light, text notification, or audio tone) or are users alerted before entering a \nspace (e.g., written notice posted outside the space) where they are in use [b]?",
      "Are the collaborative computing devices configured to prevent them from being turned \non without user interaction or consent [c]?",
    ],
    confidence: "HIGH",
    verb: "prohibited",
  },

  // Control 3.13.13
  "3.13.13.a": {
    type: "CONFIG",
    notes:
      "Enforce controls on mobile code execution through browser policies and application whitelisting.",
    simplafi:
      "Mobile code — browser scripts, macros, embedded content — needs to be controlled. In the Microsoft ecosystem, use Defender for Endpoint's attack surface reduction rules to control macro execution in Office, and configure browser policies through Intune to manage JavaScript and plugin behavior. The goal is that untrusted code can't execute on your devices without scrutiny. Blocking macros from internet-downloaded files is a common starting point.",
    discussion:
      "Mobile code technologies include Java, JavaScript, ActiveX, Postscript, PDF, Flash animations,  and VBScript. Decisions regarding the use of mobile code in organizational systems are based  on the potential for the code to cause damage to the systems if used maliciously. Usage  restrictions and implementation guidance apply to the selection and use of mobile code  installed on servers and mobile code downloaded and executed on individual workstations,  notebook computers, and devices (e.g., smar...",
    furtherDiscussion:
      "Ensure mobile code is authorized to execute in company systems only in accordance with policy and technical configuration, and that unauthorized mobile code is not. Monitor the use of mobile code through boundary devices (e.g., firewalls), audit logs, or security utilities (e.g., mobile device management, advanced endpoint protection) and implement remediation activities as needed. The first intent of this requirement is to ensure the limits of mobile code usage and usage restrictions are docume...",
    assessmentConsiderations: [
      "Are there defined limits of mobile code usage and established usage restrictions, which \nspecifically authorize use of mobile code (e.g., Java, JavaScript, ActiveX, PDF, Flash, \nShockwave, Postscript, VBScript) within the information system [a]?",
      "Is the use of mobile code documented, monitored, and managed (e.g., Java, JavaScript, \nActiveX, PDF, Flash, Shockwave, Postscript, VBScript) [b]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.13.13.b": {
    type: "CONFIG",
    notes:
      "Implement monitoring so that mobile code usage is tracked and logged.",
    simplafi:
      "Beyond controlling mobile code, you need to monitor its execution. Defender for Endpoint tracks macro execution, script activity, and suspicious code behavior. The Security admin center shows alerts when potentially malicious scripts or macros are detected. An assessor wants to see that you're not just blocking known-bad code but also watching for unusual code execution patterns that could indicate a compromise.",
    discussion:
      "Mobile code technologies include Java, JavaScript, ActiveX, Postscript, PDF, Flash animations,  and VBScript. Decisions regarding the use of mobile code in organizational systems are based  on the potential for the code to cause damage to the systems if used maliciously. Usage  restrictions and implementation guidance apply to the selection and use of mobile code  installed on servers and mobile code downloaded and executed on individual workstations,  notebook computers, and devices (e.g., smar...",
    furtherDiscussion:
      "Ensure mobile code is authorized to execute in company systems only in accordance with policy and technical configuration, and that unauthorized mobile code is not. Monitor the use of mobile code through boundary devices (e.g., firewalls), audit logs, or security utilities (e.g., mobile device management, advanced endpoint protection) and implement remediation activities as needed. The first intent of this requirement is to ensure the limits of mobile code usage and usage restrictions are docume...",
    assessmentConsiderations: [
      "Are there defined limits of mobile code usage and established usage restrictions, which \nspecifically authorize use of mobile code (e.g., Java, JavaScript, ActiveX, PDF, Flash, \nShockwave, Postscript, VBScript) within the information system [a]?",
      "Is the use of mobile code documented, monitored, and managed (e.g., Java, JavaScript, \nActiveX, PDF, Flash, Shockwave, Postscript, VBScript) [b]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.13.14
  "3.13.14.a": {
    type: "CONFIG",
    notes:
      "Enforce controls on VoIP technologies through network segmentation and access controls.",
    simplafi:
      "If your organization uses VoIP — Microsoft Teams calling, for example — you need controls around it. Configure Teams calling policies to restrict who can make external calls, record calls involving CUI discussions per your policy, and ensure VoIP traffic is encrypted. In the Microsoft ecosystem, Teams handles encryption automatically, but calling policies and compliance recording settings need deliberate configuration through the Teams admin center.",
    discussion:
      "VoIP has different requirements, features, functionality, availability, and service limitations  when compared with the Plain Old Telephone Service (POTS) (i.e., the standard telephone  service). In contrast, other telephone services are based on high-speed, digital  communications lines, such as Integrated Services Digital Network (ISDN) and Fiber  Distributed Data Interface (FDDI). The main distinctions between POTS and non-POTS  services are speed and bandwidth. To address the threats associa...",
    furtherDiscussion:
      "Controlling VoIP technologies starts with establishing guidelines and enforcing the  appropriate usage that is described in organizational policies. Monitoring should include the  users’ activity for anything other than what is permitted and authorized and detection of  insecure or unauthorized use of the VoIP technology. Security concerns for VoIP include  eavesdropping on calls and using ID spoofing to impersonate trusted individuals.  Selecting a solution that can encrypt VoIP traffic is help...",
    assessmentConsiderations: [
      "Are VoIP technologies (e.g., approved and managed products or solutions) that may or \nmay not be used in the system defined [a]?",
      "Is monitoring for unapproved VoIP technologies or unapproved use of the allowed VoIP \nsolutions employed [b]?",
    ],
    confidence: "HIGH",
    verb: "controlled",
  },
  "3.13.14.b": {
    type: "CONFIG",
    notes:
      "Implement monitoring so that VoIP technology usage is tracked and logged.",
    simplafi:
      "VoIP traffic needs monitoring alongside control. In the Microsoft ecosystem, Teams call quality dashboards and Defender for Endpoint can monitor VoIP traffic patterns. The Security admin center can alert on unusual calling patterns. The concern is that VoIP can be an exfiltration channel — someone could read CUI over a phone call to bypass your data loss prevention controls. Monitor for anomalous call patterns and volumes.",
    discussion:
      "VoIP has different requirements, features, functionality, availability, and service limitations  when compared with the Plain Old Telephone Service (POTS) (i.e., the standard telephone  service). In contrast, other telephone services are based on high-speed, digital  communications lines, such as Integrated Services Digital Network (ISDN) and Fiber  Distributed Data Interface (FDDI). The main distinctions between POTS and non-POTS  services are speed and bandwidth. To address the threats associa...",
    furtherDiscussion:
      "Controlling VoIP technologies starts with establishing guidelines and enforcing the  appropriate usage that is described in organizational policies. Monitoring should include the  users’ activity for anything other than what is permitted and authorized and detection of  insecure or unauthorized use of the VoIP technology. Security concerns for VoIP include  eavesdropping on calls and using ID spoofing to impersonate trusted individuals.  Selecting a solution that can encrypt VoIP traffic is help...",
    assessmentConsiderations: [
      "Are VoIP technologies (e.g., approved and managed products or solutions) that may or \nmay not be used in the system defined [a]?",
      "Is monitoring for unapproved VoIP technologies or unapproved use of the allowed VoIP \nsolutions employed [b]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.13.15
  "3.13.15.a": {
    type: "CONFIG",
    notes:
      "Implement session authentication mechanisms to protect the authenticity of communications sessions.",
    simplafi:
      "Every communication session in your environment — email exchanges, Teams chats, remote desktop sessions — needs protection against session hijacking and impersonation. In the Microsoft ecosystem, Entra handles session authentication with token-based security, and TLS protects communications in transit. Conditional access policies that enforce sign-in frequency and token lifetime limits add another layer. The goal is that a bad actor can't steal or forge a session.",
    discussion:
      "Authenticity protection includes protecting against man-in-the-middle attacks, session  hijacking, and the insertion of false information into communications sessions. This  requirement addresses communications protection at the session versus packet level (e.g.,  sessions in service-oriented architectures providing web-based services) and establishes  grounds for confidence at both ends of communications sessions in ongoing identities of  other parties and in the validity of information transmi...",
    furtherDiscussion:
      "The intent of this requirement is to ensure a trust relationship is established between both  ends of a communication session. Each end can be assured that the other end is who it is  supposed to be. This is often implemented using a mutual authentication handshake when  the session is established, especially between devices. Session authenticity is usually  215 NIST SP 800-171A, p. 59.  216 NIST SP 800-171 Rev. 2, p. 40.  provided by a security protocol enforced for a communication session. Cho...",
    assessmentConsiderations: [
      "Is a communications protocol used that ensures the sending and receiving parties do not \nchange during a communications session [a]?",
      "Are controls in place to validate the identities and information transmitted to protect \nagainst man-in-the-middle attacks, session hijacking, and insertion of false information \ninto communications sessions [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // Control 3.13.16
  "3.13.16.a": {
    type: "CONFIG",
    notes:
      "Enforce encryption of CUI at rest to protect confidentiality using FIPS-validated cryptographic mechanisms.",
    simplafi:
      "CUI stored on devices and in cloud storage must be encrypted at rest. In the Microsoft ecosystem, BitLocker encrypts Windows device drives (managed through Intune), and GCC High encrypts data at rest in SharePoint, OneDrive, and Exchange. For on-premises file servers, ensure drive encryption is enabled. Purview sensitivity labels can add an additional encryption layer to specific files. An assessor will check that BitLocker is active on all managed devices.",
    discussion:
      "Information at rest refers to the state of information when it is not in process or in transit  and is located on storage devices as specific components of systems. The focus of protection  at rest is not on the type of storage device or the frequency of access but rather the state of  the information. Organizations can use different mechanisms to achieve confidentiality  protections, including the use of cryptographic mechanisms and file share scanning.  Organizations may also use other control...",
    furtherDiscussion:
      "CUI at rest means information that is not moving through the network; typically this means data currently stored on hard drives, media, and mobile devices. Implement the necessary security controls to protect the confidentiality of CUI at rest. Although an approved 217 NIST SP 800-171A, pp. 59-60. 218 NIST SP 800-171 Rev. 2, p. 40. encryption method protects data stored at rest, there are other technical and physical solutions. The methods chosen should depend on the environment and business nee...",
    assessmentConsiderations: [
      "Is the confidentiality of CUI at rest protected using encryption of storage devices and/or \nappropriate physical methods [a]?",
    ],
    confidence: "HIGH",
    verb: "protected",
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // 3.14 - SYSTEM AND INFORMATION INTEGRITY (7 controls)
  // ═══════════════════════════════════════════════════════════════════════════

  // Control 3.14.1
  "3.14.1.a": {
    type: "POLICY",
    notes:
      "Specify and document the time within which system flaws must be identified.",
    simplafi:
      "Define how quickly system flaws — software bugs, security vulnerabilities, misconfigurations — must be identified after they become known publicly. Document this timeframe in your vulnerability management policy. For example, 'critical vulnerabilities must be identified within 48 hours of public disclosure.' This sets the clock for your IT team so there's no ambiguity about how fast they need to act when a new flaw is announced.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.14.1.b": {
    type: "CONFIG",
    notes:
      "Implement flaw identification mechanisms so that system flaws are detected within the specified time frame.",
    simplafi:
      "This is the enforcement side of (a). Within your defined timeframe, flaws must actually be identified on your systems. In the Microsoft ecosystem, Defender for Endpoint's Threat and Vulnerability Management continuously scans managed devices and flags known flaws. Windows Update through Intune identifies missing patches. An assessor will pick a recent vulnerability and check whether your team identified it within your stated timeframe.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.14.1.c": {
    type: "POLICY",
    notes:
      "Specify and document the time within which system flaws must be reported.",
    simplafi:
      "Define how quickly identified flaws must be reported to the appropriate people — your IT security lead, management, or incident response team. Document this reporting timeframe in your vulnerability management policy. For example, 'critical flaws are reported to the security team within 24 hours of identification.' This ensures vulnerabilities don't sit buried in a scan report for weeks before anyone with authority to act on them even knows they exist.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.14.1.d": {
    type: "CONFIG",
    notes:
      "Implement automated flaw reporting so that system flaws are reported within the specified time frame.",
    simplafi:
      "This is the enforcement side of (c). Flaws must actually be reported to the right people within your defined timeframe. In the Microsoft ecosystem, configure alert rules in the Security admin center so that critical findings from Defender automatically notify your security team via email or Teams channels. An assessor will check whether your alert and notification pipeline actually delivers vulnerability information to decision-makers on time.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "reported",
  },
  "3.14.1.e": {
    type: "POLICY",
    notes:
      "Specify and document the time within which system flaws must be corrected.",
    simplafi:
      "Define how quickly identified and reported flaws must be corrected — patched, remediated, or mitigated with a workaround. Document remediation timeframes by severity level: critical flaws within 14 days, high within 30 days, moderate within 90 days, and so on. This sets clear expectations for your IT team and gives your POA&M concrete deadlines. The timeframes should be realistic for your organization but aggressive enough to minimize your window of exposure.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "specified",
  },
  "3.14.1.f": {
    type: "CONFIG",
    notes:
      "Implement flaw remediation so that system flaws are corrected through patches and configuration changes within the specified time frame.",
    simplafi:
      "This is the enforcement side of (e). Flaws must be corrected within your defined timeframes. In the Microsoft ecosystem, use Intune update rings to push patches on schedule, and track remediation through Defender for Endpoint's vulnerability management dashboard. An assessor will compare your defined correction timeframes against actual patch deployment dates. If your policy says 14 days for critical patches, your Intune deployment data should confirm that.",
    discussion:
      "Organizations identify systems that are affected by announced software and firmware flaws  including potential vulnerabilities resulting from those flaws and report this information to  designated personnel with information security responsibilities. Security-relevant updates  include patches, service packs, hot fixes, and anti-virus signatures. Organizations address  flaws discovered during security assessments, continuous monitoring, incident response  activities, and system error handling. Or...",
    furtherDiscussion:
      "All software and firmware have potential flaws. Many vendors work to remedy those flaws  by releasing vulnerability information and updates to their software and firmware. OSAs  must have a process to review relevant vendor notifications and updates about problems or  weaknesses. After reviewing the information, the OSA must implement a patch management  process that allows for software and firmware flaws to be fixed without adversely affecting  the system functionality. OSAs must define the tim...",
    assessmentConsiderations: [
      "Is the time frame (e.g., a set number of days) within which system flaw identification \nactivities (e.g., vulnerability scans, configuration scans, manual review) must be \nperformed defined and documented [a]?",
      "Are system flaws (e.g., vulnerabilities, misconfigurations) identified in accordance with \nthe specified time frame [b]?",
      "Is the time frame (e.g., a set number of days dependent on the assessed severity of a flaw) \nwithin which system flaws must be corrected defined and documented [e]?",
      "Are system flaws (e.g., applied security patches, made configuration changes, or \nimplemented workarounds or mitigations) corrected in accordance with the specified \ntime frame [f]?",
    ],
    confidence: "HIGH",
    verb: "corrected",
  },

  // Control 3.14.2
  "3.14.2.a": {
    type: "POLICY",
    notes:
      "Identify and document designated locations requiring malicious code protection including endpoints, servers, and network boundaries.",
    simplafi:
      "Identify where in your environment malicious code protection needs to be deployed — every endpoint, every email gateway, every file download point. Document these locations: all Windows workstations, servers, mobile devices, and email in transit. In the Microsoft ecosystem, this typically means Defender for Endpoint on every managed device and Defender for Office 365 protecting email. The locations list ensures nothing gets missed.",
    discussion:
      "Designated locations include system entry and exit points which may include firewalls,  remote access servers, workstations, electronic mail servers, web servers, proxy servers,  notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan  horses, and spyware. Malicious code can be encoded in various formats (e.g., UUENCODE,  221 NIST SP 800-171A, pp. 61-62.  222 NIST SP 800-171 Rev. 2, p. 41.  Unicode), contained within compressed or hidden files, or hidden in files u...",
    furtherDiscussion:
      "A designated location may be a network device such as a firewall or an end user’s computer.  Malicious code, which can be delivered by a range of means (e.g., email, removable media, or  websites), includes the following:  • virus – program designed to damage, steal information, change data, send email, show  messages, or any combination of these things;  • spyware – program designed to gather information about a person’s activity in secret  when they click on a link, usually installed without t...",
    assessmentConsiderations: [
      "Are system components (e.g., workstations, servers, email gateways, mobile devices) for \nwhich malicious code protection must be provided identified and documented [a]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.14.2.b": {
    type: "CONFIG",
    notes:
      "Implement malicious code protection at all designated locations so that endpoints, servers, and boundaries are actively protected.",
    simplafi:
      "This is the enforcement side of (a). Every location you identified must have active malware protection running. Defender for Endpoint should be deployed on all managed devices through Intune, and Defender for Office 365 should be scanning all inbound email and attachments. An assessor will check random devices to verify Defender is installed, running, and reporting to the Security admin center. No gaps allowed.",
    discussion:
      "Designated locations include system entry and exit points which may include firewalls,  remote access servers, workstations, electronic mail servers, web servers, proxy servers,  notebook computers, and mobile devices. Malicious code includes viruses, worms, Trojan  horses, and spyware. Malicious code can be encoded in various formats (e.g., UUENCODE,  221 NIST SP 800-171A, pp. 61-62.  222 NIST SP 800-171 Rev. 2, p. 41.  Unicode), contained within compressed or hidden files, or hidden in files u...",
    furtherDiscussion:
      "A designated location may be a network device such as a firewall or an end user’s computer.  Malicious code, which can be delivered by a range of means (e.g., email, removable media, or  websites), includes the following:  • virus – program designed to damage, steal information, change data, send email, show  messages, or any combination of these things;  • spyware – program designed to gather information about a person’s activity in secret  when they click on a link, usually installed without t...",
    assessmentConsiderations: [
      "Are system components (e.g., workstations, servers, email gateways, mobile devices) for \nwhich malicious code protection must be provided identified and documented [a]?",
    ],
    confidence: "HIGH",
    verb: "provided",
  },

  // Control 3.14.3
  "3.14.3.a": {
    type: "POLICY",
    notes:
      "Identify and document response actions for system security alerts and advisories.",
    simplafi:
      "When a security alert or advisory arrives — from Microsoft, CISA, or your security tools — you need a documented plan for what happens next. Identify who receives alerts, who evaluates them, and what response actions are available: patching, blocking, isolating, or escalating. This is your playbook for security alerts, not just 'someone looks at it.' Document the decision tree so responses are consistent.",
    discussion:
      "There are many publicly available sources of system security alerts and advisories. The  United States Computer Emergency Readiness Team (US-CERT) generates security alerts  and advisories to maintain situational awareness across the federal government and in  nonfederal organizations. Software vendors, subscription services, and relevant industry  information sharing and analysis centers (ISACs) may also provide security alerts and  advisories. Examples of response actions include notifying rel...",
    furtherDiscussion:
      "Solicit and receive security alerts, advisories, and directives from reputable external  organizations. Identify sources relevant to the industry and technology used by your  company. Methods to receive alerts and advisories may include:  • signing up for email distributions;  • subscribing to RSS feeds; and  • attending meetings.  Review alerts and advisories for applicability as they are received. The frequency of the  reviews should be based on the frequency of the alerts and advisories to en...",
    assessmentConsiderations: [
      "Are the responses to system security alerts and advisories identified in relation to the \nassessed severity of potential flaws (e.g., communicating with responsible personnel, \ninitiating vulnerability scans, initiating system flaw remediation activities) [a]?",
      "Are system security alerts and advisories addressed (e.g., assessing potential severity or \nlikelihood, communicating with responsible personnel, initiating vulnerability scans, \ninitiating system flaw remediation activities) [a,c]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },
  "3.14.3.b": {
    type: "CONFIG",
    notes:
      "Implement monitoring so that system security alerts and advisories are continuously tracked from relevant sources.",
    simplafi:
      "This is the enforcement side of monitoring. Your organization must actively watch for security alerts and advisories. In the Microsoft ecosystem, the Security admin center aggregates alerts from Defender for Endpoint, Defender for Office 365, and Entra Identity Protection. Configure alert notifications so your security team sees them in real time via email or Teams. An assessor will ask how you learn about new threats and how quickly.",
    discussion:
      "There are many publicly available sources of system security alerts and advisories. The  United States Computer Emergency Readiness Team (US-CERT) generates security alerts  and advisories to maintain situational awareness across the federal government and in  nonfederal organizations. Software vendors, subscription services, and relevant industry  information sharing and analysis centers (ISACs) may also provide security alerts and  advisories. Examples of response actions include notifying rel...",
    furtherDiscussion:
      "Solicit and receive security alerts, advisories, and directives from reputable external  organizations. Identify sources relevant to the industry and technology used by your  company. Methods to receive alerts and advisories may include:  • signing up for email distributions;  • subscribing to RSS feeds; and  • attending meetings.  Review alerts and advisories for applicability as they are received. The frequency of the  reviews should be based on the frequency of the alerts and advisories to en...",
    assessmentConsiderations: [
      "Are the responses to system security alerts and advisories identified in relation to the \nassessed severity of potential flaws (e.g., communicating with responsible personnel, \ninitiating vulnerability scans, initiating system flaw remediation activities) [a]?",
      "Are system security alerts and advisories addressed (e.g., assessing potential severity or \nlikelihood, communicating with responsible personnel, initiating vulnerability scans, \ninitiating system flaw remediation activities) [a,c]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.14.3.c": {
    type: "CONFIG",
    notes:
      "Implement response actions so that system security alerts and advisories are addressed through patches, configurations, and mitigations.",
    simplafi:
      "This is the enforcement side of (a). When alerts come in, your team must take the documented response actions. If Defender flags malware on a device, someone needs to isolate it. If a critical advisory comes from CISA, someone needs to evaluate and patch. The Security admin center provides recommended actions for each alert. An assessor will review recent alerts and ask what actions were taken and when.",
    discussion:
      "There are many publicly available sources of system security alerts and advisories. The  United States Computer Emergency Readiness Team (US-CERT) generates security alerts  and advisories to maintain situational awareness across the federal government and in  nonfederal organizations. Software vendors, subscription services, and relevant industry  information sharing and analysis centers (ISACs) may also provide security alerts and  advisories. Examples of response actions include notifying rel...",
    furtherDiscussion:
      "Solicit and receive security alerts, advisories, and directives from reputable external  organizations. Identify sources relevant to the industry and technology used by your  company. Methods to receive alerts and advisories may include:  • signing up for email distributions;  • subscribing to RSS feeds; and  • attending meetings.  Review alerts and advisories for applicability as they are received. The frequency of the  reviews should be based on the frequency of the alerts and advisories to en...",
    assessmentConsiderations: [
      "Are the responses to system security alerts and advisories identified in relation to the \nassessed severity of potential flaws (e.g., communicating with responsible personnel, \ninitiating vulnerability scans, initiating system flaw remediation activities) [a]?",
      "Are system security alerts and advisories addressed (e.g., assessing potential severity or \nlikelihood, communicating with responsible personnel, initiating vulnerability scans, \ninitiating system flaw remediation activities) [a,c]?",
    ],
    confidence: "HIGH",
    verb: "taken",
  },

  // Control 3.14.4
  "3.14.4.a": {
    type: "CONFIG",
    notes:
      "Implement automatic updates so that malicious code protection mechanisms are updated when new releases are available.",
    simplafi:
      "Your malware protection tools must stay current — new malware definitions, engine updates, and signature files need to be applied as soon as they're available. In the Microsoft ecosystem, Defender for Endpoint updates automatically through the cloud, but you should verify through the Security admin center that all devices are receiving updates. Intune compliance policies can flag devices with outdated definitions. An assessor will check whether any device is running stale protection.",
    discussion:
      "Malicious code protection mechanisms include anti-virus signature definitions and  reputation-based technologies. A variety of technologies and methods exist to limit or  eliminate the effects of malicious code. Pervasive configuration management and  comprehensive software integrity controls may be effective in preventing execution of  unauthorized code. In addition to commercial off-the-shelf software, malicious code may also  be present in custom-built software. This could include logic bombs...",
    furtherDiscussion:
      "Malware changes on an hourly or daily basis, and it is important to update detection and  protection mechanisms frequently to maintain the effectiveness of the protection.  Example  You have installed anti-malware software to protect a computer from malicious code.  Knowing that malware evolves rapidly, you configure the software to automatically check  for malware definition updates every day and update as needed [a].",
    assessmentConsiderations: [
      "Is there a defined frequency by which malicious code protection mechanisms must be \nupdated (e.g., frequency of automatic updates or manual processes) [a]?",
    ],
    confidence: "HIGH",
    verb: "updated",
  },

  // Control 3.14.5
  "3.14.5.a": {
    type: "POLICY",
    notes:
      "Define and document the frequency for performing malicious code scans.",
    simplafi:
      "Define how often full malware scans run on your systems — daily quick scans and weekly full scans is a common baseline. Document this frequency in your security policy. This is separate from real-time protection (which runs continuously); this is about scheduled comprehensive scans that catch malware real-time protection might have missed. Consistent scheduling ensures no device goes too long between thorough scans.",
    discussion:
      "Periodic scans of organizational systems and real-time scans of files from external sources  can detect malicious code. Malicious code can be encoded in various formats (e.g.,  227 NIST SP 800-171A, p. 63.  228 NIST SP 800-171 Rev. 2, p. 42.  UUENCODE, Unicode), contained within compressed or hidden files, or hidden in files using  techniques such as steganography. Malicious code can be inserted into systems in a variety  of ways including web accesses, electronic mail, electronic mail attachmen...",
    furtherDiscussion:
      "Use anti-malware software to scan for and identify viruses in your computer systems and  determine how often scans are conducted. Real-time scans look at the system whenever new  files are downloaded, opened, and saved. Periodic scans check previously saved files against  updated malware information.  Example  You work with your company’s email provider to enable enhanced protections that will scan  all attachments to identify and quarantine those that may be harmful prior to a user opening  the...",
    assessmentConsiderations: [
      "Are files from media (e.g., USB drives, CD-ROM) included in the definition of external \nsources and are they being scanned [c]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.14.5.b": {
    type: "CONFIG",
    notes:
      "Implement scheduled malicious code scanning so that scans are performed at the defined frequency.",
    simplafi:
      "This is the enforcement side of (a). Scheduled malware scans must actually run at the frequency you defined. In Intune, configure Defender Antivirus scan schedules through device configuration profiles. The Security admin center shows scan completion status across your device fleet. An assessor will check whether scheduled scans are actually completing on time or being skipped because devices are off or users are canceling them.",
    discussion:
      "Periodic scans of organizational systems and real-time scans of files from external sources  can detect malicious code. Malicious code can be encoded in various formats (e.g.,  227 NIST SP 800-171A, p. 63.  228 NIST SP 800-171 Rev. 2, p. 42.  UUENCODE, Unicode), contained within compressed or hidden files, or hidden in files using  techniques such as steganography. Malicious code can be inserted into systems in a variety  of ways including web accesses, electronic mail, electronic mail attachmen...",
    furtherDiscussion:
      "Use anti-malware software to scan for and identify viruses in your computer systems and  determine how often scans are conducted. Real-time scans look at the system whenever new  files are downloaded, opened, and saved. Periodic scans check previously saved files against  updated malware information.  Example  You work with your company’s email provider to enable enhanced protections that will scan  all attachments to identify and quarantine those that may be harmful prior to a user opening  the...",
    assessmentConsiderations: [
      "Are files from media (e.g., USB drives, CD-ROM) included in the definition of external \nsources and are they being scanned [c]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },
  "3.14.5.c": {
    type: "CONFIG",
    notes:
      "Implement real-time malicious code scanning so that files from external sources are scanned as they are downloaded, opened, or executed.",
    simplafi:
      "Beyond scheduled scans, files from external sources — email attachments, downloads, USB transfers — must be scanned in real time as they arrive. Defender for Endpoint provides real-time protection that scans files when they're downloaded, opened, or executed. Defender for Office 365 scans email attachments before delivery. This is your first line of defense against malware entering your environment. Verify real-time protection is enabled and not disabled by users.",
    discussion:
      "Periodic scans of organizational systems and real-time scans of files from external sources  can detect malicious code. Malicious code can be encoded in various formats (e.g.,  227 NIST SP 800-171A, p. 63.  228 NIST SP 800-171 Rev. 2, p. 42.  UUENCODE, Unicode), contained within compressed or hidden files, or hidden in files using  techniques such as steganography. Malicious code can be inserted into systems in a variety  of ways including web accesses, electronic mail, electronic mail attachmen...",
    furtherDiscussion:
      "Use anti-malware software to scan for and identify viruses in your computer systems and  determine how often scans are conducted. Real-time scans look at the system whenever new  files are downloaded, opened, and saved. Periodic scans check previously saved files against  updated malware information.  Example  You work with your company’s email provider to enable enhanced protections that will scan  all attachments to identify and quarantine those that may be harmful prior to a user opening  the...",
    assessmentConsiderations: [
      "Are files from media (e.g., USB drives, CD-ROM) included in the definition of external \nsources and are they being scanned [c]?",
    ],
    confidence: "HIGH",
    verb: "performed",
  },

  // Control 3.14.6
  "3.14.6.a": {
    type: "CONFIG",
    notes:
      "Implement system monitoring to detect attacks and indicators of potential attacks using IDS/IPS and SIEM tools.",
    simplafi:
      "Your systems need active attack detection — not just antivirus, but monitoring for suspicious behavior patterns, unauthorized access attempts, and indicators of compromise. In the Microsoft ecosystem, Defender for Endpoint provides endpoint detection and response (EDR) that watches for attack techniques beyond just known malware. The Security admin center displays active incidents and alerts. An assessor wants to see that you're watching for attacks, not just malware.",
    discussion:
      "System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the system boundary (i.e., part of perimeter defense and boundary protection). Internal monitoring includes the observation of events occurring within the system. Organizations can monitor systems, for example, by observing audit record activities in real time or by observing other system aspects such as access patterns, characteristics of access, and other actions. Th...",
    furtherDiscussion:
      "Think of indicators of attack as a set of footprints an adversary leaves during an attack.  Indicators of attack provide information on the steps the adversary followed and its intent.  Indicators of attacks on organizational systems may include:  • internal traffic that indicates the presence of malicious code;  • anomalous activity detected during non-business hours;  • unauthorized data leaving the organization; and  • communicating to external information systems.  230 NIST SP 800-171 Rev. 2...",
    assessmentConsiderations: [
      "Are details provided for the methodology of determining attacks and indicators of attack \n[a]?",
      "Are monitoring devices deployed within the information system to collect information \nthat may indicate an attack [a]?",
      "Are communications traffic flows understood and is there a deployed capability to review \nthat traffic [b,c]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.14.6.b": {
    type: "CONFIG",
    notes:
      "Implement inbound traffic monitoring to detect attacks and indicators of potential attacks.",
    simplafi:
      "Inbound traffic to your systems must be monitored for attack indicators — port scans, brute force attempts, exploit payloads, phishing. Defender for Endpoint monitors inbound connections at the endpoint level, while Defender for Office 365 catches email-based attacks. Your firewall logs should capture inbound connection attempts. The Security admin center correlates these signals into attack narratives. An assessor will ask how you detect someone trying to break in.",
    discussion:
      "System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the system boundary (i.e., part of perimeter defense and boundary protection). Internal monitoring includes the observation of events occurring within the system. Organizations can monitor systems, for example, by observing audit record activities in real time or by observing other system aspects such as access patterns, characteristics of access, and other actions. Th...",
    furtherDiscussion:
      "Think of indicators of attack as a set of footprints an adversary leaves during an attack.  Indicators of attack provide information on the steps the adversary followed and its intent.  Indicators of attacks on organizational systems may include:  • internal traffic that indicates the presence of malicious code;  • anomalous activity detected during non-business hours;  • unauthorized data leaving the organization; and  • communicating to external information systems.  230 NIST SP 800-171 Rev. 2...",
    assessmentConsiderations: [
      "Are details provided for the methodology of determining attacks and indicators of attack \n[a]?",
      "Are monitoring devices deployed within the information system to collect information \nthat may indicate an attack [a]?",
      "Are communications traffic flows understood and is there a deployed capability to review \nthat traffic [b,c]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },
  "3.14.6.c": {
    type: "CONFIG",
    notes:
      "Implement outbound traffic monitoring to detect attacks and indicators of potential attacks.",
    simplafi:
      "Outbound traffic needs monitoring too — this catches compromised devices calling home to command-and-control servers, data exfiltration attempts, and unauthorized communications. Defender for Endpoint's network protection monitors outbound connections and blocks known malicious destinations. The Security admin center alerts on suspicious outbound patterns. This is often how you discover a breach: something inside is talking to something it shouldn't be.",
    discussion:
      "System monitoring includes external and internal monitoring. External monitoring includes the observation of events occurring at the system boundary (i.e., part of perimeter defense and boundary protection). Internal monitoring includes the observation of events occurring within the system. Organizations can monitor systems, for example, by observing audit record activities in real time or by observing other system aspects such as access patterns, characteristics of access, and other actions. Th...",
    furtherDiscussion:
      "Think of indicators of attack as a set of footprints an adversary leaves during an attack.  Indicators of attack provide information on the steps the adversary followed and its intent.  Indicators of attacks on organizational systems may include:  • internal traffic that indicates the presence of malicious code;  • anomalous activity detected during non-business hours;  • unauthorized data leaving the organization; and  • communicating to external information systems.  230 NIST SP 800-171 Rev. 2...",
    assessmentConsiderations: [
      "Are details provided for the methodology of determining attacks and indicators of attack \n[a]?",
      "Are monitoring devices deployed within the information system to collect information \nthat may indicate an attack [a]?",
      "Are communications traffic flows understood and is there a deployed capability to review \nthat traffic [b,c]?",
    ],
    confidence: "HIGH",
    verb: "monitored",
  },

  // Control 3.14.7
  "3.14.7.a": {
    type: "POLICY",
    notes:
      "Define and document authorized use of the system through acceptable use policies.",
    simplafi:
      "Define what authorized use of your systems looks like — who can use them, for what purposes, during what hours, and from where. Document this in an acceptable use policy. This goes beyond access control; it covers behavior. Can employees use company laptops for personal browsing? Can they install personal software? These boundaries define what's normal so you can detect what's abnormal.",
    discussion:
      "System monitoring includes external and internal monitoring. System monitoring can detect  unauthorized use of organizational systems. System monitoring is an integral part of  continuous monitoring and incident response programs. Monitoring is achieved through a  variety of tools and techniques (e.g., intrusion detection systems, intrusion prevention  systems, malicious code protection software, scanning tools, audit record monitoring  software, network monitoring software). Output from system ...",
    furtherDiscussion:
      "Define authorized use of your systems. Create an acceptable use policy to establish the  baseline for how users access devices, internal network services, and the internet. Define  authorized use by specific roles such as: user, administrator, and technician. After authorized  use is defined, identify unauthorized use of systems.  Monitor systems by observing audit activities from the system logs. This can be  accomplished in real time using automated solutions or by manual means. To identify  u...",
    assessmentConsiderations: [
      "Is authorized use of systems defined (e.g., data types permitted for storage or processing, \npersonnel authorized to access, times or days of permitted use, permitted software) [a]?",
      "Is unauthorized use of systems defined (e.g., not authorized to use systems for bitcoin \nmining, not authorized for pornographic content, not authorized to access gambling \ngames/content) [b]?",
    ],
    confidence: "HIGH",
    verb: "defined",
  },
  "3.14.7.b": {
    type: "CONFIG",
    notes:
      "Implement monitoring to identify unauthorized use of the system through behavioral analysis and anomaly detection.",
    simplafi:
      "This is the enforcement side of (a). Your systems must be able to detect unauthorized use — someone using a system outside approved hours, for unapproved purposes, or in ways that violate your acceptable use policy. In the Microsoft ecosystem, Entra sign-in logs and Defender for Endpoint user activity monitoring can flag anomalous behavior. The Security admin center's user risk indicators help identify when someone's usage pattern deviates from the norm.",
    discussion:
      "System monitoring includes external and internal monitoring. System monitoring can detect  unauthorized use of organizational systems. System monitoring is an integral part of  continuous monitoring and incident response programs. Monitoring is achieved through a  variety of tools and techniques (e.g., intrusion detection systems, intrusion prevention  systems, malicious code protection software, scanning tools, audit record monitoring  software, network monitoring software). Output from system ...",
    furtherDiscussion:
      "Define authorized use of your systems. Create an acceptable use policy to establish the  baseline for how users access devices, internal network services, and the internet. Define  authorized use by specific roles such as: user, administrator, and technician. After authorized  use is defined, identify unauthorized use of systems.  Monitor systems by observing audit activities from the system logs. This can be  accomplished in real time using automated solutions or by manual means. To identify  u...",
    assessmentConsiderations: [
      "Is authorized use of systems defined (e.g., data types permitted for storage or processing, \npersonnel authorized to access, times or days of permitted use, permitted software) [a]?",
      "Is unauthorized use of systems defined (e.g., not authorized to use systems for bitcoin \nmining, not authorized for pornographic content, not authorized to access gambling \ngames/content) [b]?",
    ],
    confidence: "HIGH",
    verb: "identified",
  },

};
