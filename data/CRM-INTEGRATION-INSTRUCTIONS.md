# CRM Integration — Remaining Steps for App Agent

> **Context:** The skeleton UI is already deployed and dormant — `shared/crm.ts` (empty data + types + helpers), CRM badge in `ControlCard.tsx`, and CRM rollup in `DomainView.tsx` are all in place. These instructions cover only what's left.

---

## 1. Replace `shared/crm.ts` with Populated Data

Copy the populated data file over the skeleton:

**Source:**
```
C:\Users\john\SimplafiTech\Simplafi - Documents\Claude CoWork\Policy or Config\data\app-integration\crm.ts
```

**Destination:**
```
C:\CMMC Scoreboard\shared\crm.ts
```

This is a **full file replacement**, not a merge. The populated file contains the same types, interfaces, and helper functions the skeleton defined, plus:

- **110 data entries** (was `{}`) — all CMMC L2 controls with tier, services, microsoftCovers, customerOwns, summary
- **`crmDisclaimer` constant** (new export) — two-line footer array for popovers

### Updated tier distribution
| Tier | Count | Notes |
|---|---|---|
| Inherited | 44 | Microsoft handles it in GCC High |
| Shared | 66 | Microsoft provides the tool, customer configures it |
| Company | 0 | None currently — type kept for future use |

> **Important:** The placemat originally tagged 3.4.8 as "Customer Responsibility" but we reclassified it to **Shared** — Microsoft provides Intune application control (AppLocker/WDAC), Defender for Cloud Apps, and Azure Firewall default-deny rules as enforcement mechanisms. The customer defines the allowlist, Microsoft enforces it. That's Shared by our definition.

After copying, run a type check to verify clean compile. No import changes should be needed — the export names and signatures are identical.

---

## 2. Wire Up `crmDisclaimer` in Popover Footer

The populated file adds a new export:

```typescript
export const crmDisclaimer = [
  "Based on Microsoft 365 GCC High at the G5 license level. Verify current coverage in the Microsoft Service Trust Portal.",
  "{Organization Name} retains responsibility for all requirements not explicitly inherited by Microsoft.",
];
```

### Update the existing CRM popover/dialog to:
1. Import `crmDisclaimer` alongside the existing imports:
   ```typescript
   import { hasCrm, getCrm, crmDisclaimer } from "@shared/crm";
   ```
2. Render both lines at the bottom of every CRM popover as italic muted footer text
3. Replace `{Organization Name}` at render time with the app's tenant/org name, or fall back to `"Your organization"`

```tsx
{/* Disclaimer Footer */}
<div className="border-t pt-3 space-y-1">
  {crmDisclaimer.map((line, i) => (
    <p key={i} className="text-[10px] text-muted-foreground italic leading-snug">
      {line.replace("{Organization Name}", orgName ?? "Your organization")}
    </p>
  ))}
</div>
```

The second line is C3PAO-tested safe harbor language. It must appear on every CRM popover regardless of tier.

---

## 3. Color Collision Check — CRM "Shared" vs POLICY Badge

Both currently use blue. They appear at different levels (control header vs objective row) so it may be fine visually. But if it feels too similar once data is live, consider shifting CRM "Shared" to **indigo**:

```
border-indigo-300 bg-indigo-50 text-indigo-700
dark:border-indigo-700 dark:bg-indigo-950 dark:text-indigo-300
```

This is a judgment call once you see it rendered — not a blocker.

---

## 4. Remove "Basic" Badge

If the "Basic" badge is still present in `ControlCard.tsx`, remove it. The CRM tier badge replaces its function.

---

## 5. Wire Up "Let's Simplafi It" on Objective Popover

The `simplafi` field on `objectiveGuidance` is populated for all 320 objectives and ready to display.

### Data access
```typescript
const guidance = objectiveGuidance[obj.id];
const simplafiText = guidance?.simplafi;  // string | undefined — 60-90 words, plain English
```

### Recommended UI — Option C: Default to Simplafi

Show `guidance.simplafi` as the **default** popover content when the user clicks the `(i)` icon. Add a "More details" expandable section or link below it that reveals `guidance.notes` (the technical implementation guidance).

**Rationale:** Simplafi was designed as the hover-over / first-glance content for non-technical users. The full enrichment (`notes`) is the "click-in" detail for someone who wants the technical picture.

**Alternative approaches if preferred:**
- **Toggle:** Add `Technical | Simplafi` tabs at the top of the existing popover
- **Second icon:** Add a lightbulb/sparkle icon next to `(i)` for a separate Simplafi popover

### Content characteristics
- 320/320 objectives covered
- 60-90 words each, conversational tone
- References Microsoft GCC High ecosystem (Entra, Intune, Purview, Defender, PIM, Security admin center)
- CONFIG objectives reference their POLICY pair (e.g., "This is the enforcement side of (a)")
- Written for a non-technical business owner audience

---

## 6. Checklist — Remaining Items Only

- [ ] Copy populated `crm.ts` → `shared/crm.ts` (full replacement)
- [ ] Type check — verify clean compile
- [ ] Import and render `crmDisclaimer` in CRM popover footer
- [ ] Handle `{Organization Name}` replacement (app org name or fallback)
- [ ] Evaluate Shared/POLICY blue collision — switch to indigo if needed
- [ ] Remove "Basic" badge if still present
- [ ] Wire up `guidance.simplafi` in objective popover (recommend Option C)
- [ ] Verify dark mode on disclaimer text
- [ ] Test responsive on mobile — badges and popover content
