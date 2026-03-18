export type ResponsibilityTier = "Inherited" | "Shared" | "Company";

export interface ControlCrm {
  tier: ResponsibilityTier;
  services: string[];
  microsoftCovers: string;
  customerOwns: string;
  summary: string;
}

export const crmData: Record<string, ControlCrm> = {
  // Data will be populated by the data agent
};

export function hasCrm(controlId: string): boolean {
  return controlId in crmData;
}

export function getCrm(controlId: string): ControlCrm | undefined {
  return crmData[controlId];
}

export function getDomainCrmCounts(controls: { id: string }[]): {
  inherited: number;
  shared: number;
  company: number;
} {
  let inherited = 0, shared = 0, company = 0;
  for (const c of controls) {
    const crm = crmData[c.id];
    if (!crm) continue;
    if (crm.tier === "Inherited") inherited++;
    else if (crm.tier === "Shared") shared++;
    else if (crm.tier === "Company") company++;
  }
  return { inherited, shared, company };
}
