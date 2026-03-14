# SPRS Score Calculator

## Branding
- Company: MSP Super Easy LLC dba Simplafi
- Logo: attached_assets/SImplafi_Logo_2025-white_1768695773677.png

## Overview
A web-based tool for DoD suppliers to calculate their SPRS (Supplier Performance Risk System) score based on NIST SP 800-171 Rev 2 compliance assessment. This allows organizations to assess their cybersecurity readiness before the official DoD assessment.

## Layout
- Uses natural browser scrolling (`min-h-screen flex flex-col`) — no internal scrollbars
- Header and progress bar are sticky at the top
- Sidebar is sticky on desktop, slide-out drawer on mobile
- Footer appears at the bottom of content (not pinned to viewport)

## Features
- Simple "Get Started" button to begin assessment (SSP check moved to future roadmap as finality CTA)
- All 110 NIST 800-171 controls organized by 14 security families with **family-based pagination**
- **Live Scoreboard**: Real-time SPRS score and objectives progress (e.g., "248 / 320") displayed at the top of the sidebar (desktop) and mobile drawer, color-coded by score tier (green 90+, yellow 60-89, orange 0-59, red below 0)
- **Navigation Sidebar**: Sticky sidebar on desktop showing all 14 families with progress counts; on mobile, a slide-out drawer accessible via hamburger menu replaces the sidebar
- **Assessment Objectives**: Each control has detailed objectives (320 total) that must be verified - status is auto-calculated from objectives
- **Auto-Calculated Status**: Control status is driven solely by objective completion:
  - 0 objectives checked = Not Met
  - Some but not all = Partially Met
  - All objectives checked = Met
- No manual status selection - status updates automatically as objectives are checked
- **Implementation Notes**: Each control has a rich text notes field to track implementation details before transferring to official documentation
- **Objective Guidance**: Each objective displays a type label (POLICY or CONFIG) and an info icon with implementation notes when available
- Point-weighted scoring algorithm (5/3/1 points per control)
- Special partial credit handling for controls 3.5.3 (MFA) and 3.13.11 (FIPS cryptography)
- Visual score gauge with color-coded results
- Detailed breakdown of deductions by weight category
- Quick actions to mark all controls met/not met
- Real-time progress tracking
- **User Authentication**: Sign in with Google, GitHub, or email via Replit Auth
- **Persistent Storage**: Auto-saves assessment progress to PostgreSQL database
- **Resume Assessment**: Logged-in users can return and continue their assessment
- **CRM Integration**: Auto-syncs new user contacts to Lead Connector CRM on sign-in (fire-and-forget, deduplicates by email)

## SPRS Scoring Algorithm
- Maximum score: 110 (all controls implemented)
- Minimum score: -200 (no controls implemented, includes special handling for controls 3.5.3 and 3.13.11)
- Point weights:
  - 5 points: 42 high-impact controls (23 basic + 19 derived)
  - 3 points: 14 medium-impact controls
  - 1 point: 54 remaining controls

## Tech Stack
- Frontend: React with TypeScript, Vite, TanStack Query
- UI: Tailwind CSS, shadcn/ui components
- Backend: Express.js with Replit Auth (OpenID Connect)
- Database: PostgreSQL (Neon-backed) for user data and assessments
- Session: express-session with connect-pg-simple

## Project Structure
```
client/src/
├── components/
│   ├── ControlCard.tsx        # Individual control assessment card
│   ├── FamilySection.tsx      # Collapsible family group
│   ├── Header.tsx             # App header with theme toggle
│   ├── ProgressBar.tsx        # Assessment progress tracker
│   ├── QuickActions.tsx       # Bulk actions toolbar
│   ├── ResultsSummary.tsx     # Score results display
│   ├── ScoreGauge.tsx         # Animated score visualization
│   ├── SSPCheck.tsx           # SSP prerequisite check
│   ├── ThemeToggle.tsx        # Dark/light mode toggle
│   └── NavigationSidebar.tsx  # Sidebar nav for quick access to families/controls
├── pages/
│   └── Calculator.tsx         # Main calculator page
└── App.tsx                    # Router setup

shared/
├── schema.ts                  # TypeScript types and Zod schemas
├── models/auth.ts             # User, session, and assessment Drizzle schemas
├── controls.ts                # All 110 NIST 800-171 controls data
└── objectives.ts              # 320 assessment objectives mapped to controls

server/
├── routes.ts                  # API endpoints for score calculation and assessments
├── db.ts                      # Database connection
├── integrations/
│   └── leadconnector.ts       # Lead Connector CRM contact sync
└── replit_integrations/auth/  # Replit Auth integration module
```

## API Endpoints
- `POST /api/calculate` - Calculate SPRS score from control assessments
- `GET /api/auth/user` - Get current authenticated user
- `GET /api/login` - Initiate login flow
- `GET /api/logout` - Log out user
- `GET /api/assessments` - Get user's saved assessments (auth required)
- `GET /api/assessments/:id` - Get specific assessment (auth required)
- `POST /api/assessments` - Create new assessment (auth required)
- `PUT /api/assessments/:id` - Update assessment (auth required)
- `DELETE /api/assessments/:id` - Delete assessment (auth required)

## Development
- Run: `npm run dev`
- Frontend: http://localhost:5000

## Future Roadmap

### 1. Score-Based Outcome Tiers (RECOMMENDED NEXT)
Display tailored messaging based on score ranges:
| Score Range | Label | Messaging Focus |
|------------|-------|-----------------|
| 90–110 | Strong posture | Validation, maintenance |
| 60–89 | Moderate risk | Gap remediation |
| 0–59 | High risk | Contract eligibility risk |
| Below 0 | Critical | Immediate action |

Each tier should have one tailored next step CTA.

### 2. Enhanced Branding & Credibility (COMPLETED)
- Header sub-branding: "Simplafi CMMC Readiness Tools" ✓
- Credibility line: "Built by CMMC practitioners supporting DoD contractors nationwide" ✓
- Contextual "Why this matters" guidance blocks after SSP question ✓

### 3. PDF Export & Email Capture
- Save results as PDF without login
- Email summary option with score, top 5 deductions, and assessor tips
- Progressive value exchange for lead capture

### 4. Assessor-Language Previews
- "How an assessor will interpret this answer" callouts
- "What evidence typically satisfies this control" hints
- Some content gated behind email capture

### 5. Consulting Pre-Qualification Data
Capture structured handoff data for discovery calls:
- Score and SSP status
- Top failing control families
- Environment type (Commercial, GCC, GCC High)

### 6. Industry Resource Positioning
- Marketing language for LinkedIn/partner referrals
- Credibility signal: "Used by DoD contractors preparing for Level 2 assessments"

### 7. Monetization Strategy
- Free: Calculator tool
- Paid services: Readiness review, Assessor-style control walkthrough, SSP validation
