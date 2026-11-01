# Sprint Plan — SPRINT-20261101-dashboard-sidebar

**Objective (verifiable):** ARMOR CRM dashboard renders a sidebar containing a "Home page" link (→ `/`) and a "logout" button (clears session, → `/login`), built, preview-deployed, QA-verified, security-scanned, and released to production at one SHA.

**Stack detected:** Next.js 15 App Router · TypeScript · npm · Netlify static export (`output: "export"`, `netlify.toml` `publish = "out"`, `NETLIFY_NEXT_PLUGIN_SKIP = "true"`). Origin: `https://github.com/shahanarif1/armor-crm.git`. No `test` script → test execution NOT_RUN, never invented.

**Survey (P2):** `main` = `ad380b7` (starter, no sidebar). Origin branch `sprint/SPRINT-20261101-dashboard-sidebar` = `50c0c4d`, which already contains commit `e520801` "feat(dashboard): add sidebar with Home page and logout buttons" plus `src/app/lib/auth.ts` (session helpers) and `src/app/dashboard/services.tsx`. The sidebar feature is **already on origin** — not reimplemented. Candidate SHA = `50c0c4d`. No developer implementation task required.

**Acceptance criteria (authored by Project Manager):**
- AC-1: `npm run build` exits 0 at candidate SHA `50c0c4d`, static `out/` emitted including `/dashboard`.
- AC-2: `/dashboard` renders a sidebar with a "Home page" link to `/` and a "logout" button that clears the session and redirects to `/login`.
- AC-3: Preview deployment at `50c0c4d` serves `/dashboard` with HTTP 200 (not a 404).
- AC-4: QA gate `PASS` at `50c0c4d` vs AC-1..AC-3, with evidence.
- AC-5: Security gate `PASS` at `50c0c4d` (Semgrep SAST + ZAP baseline DAST), zero confirmed CRITICAL/HIGH findings.
- AC-6: Production serves candidate SHA `50c0c4d`, OR release `PARKED` with a recorded reason.

| Task | Owner | Acceptance | Status |
|---|---|---|---|
| TASK-001 Bootstrap sprint branch on origin with plan + H-001 | project_manager | sprint-plan.md / assumptions.md / handoffs.md pushed to origin `sprint/SPRINT-20261101-dashboard-sidebar` | DONE |
| TASK-002 Technical lead plan review | technical_lead | Plan APPROVED with lead's decisions merged | PENDING |
| TASK-003 QA gate at candidate SHA `50c0c4d` | qa_engineer | AC-4 `PASS` with evidence | PENDING |
| TASK-004 Security gate at candidate SHA `50c0c4d` | security_analyst | AC-5 `PASS`, zero confirmed CRITICAL/HIGH | PENDING |
| TASK-005 Release to production (merge sidebar→main + deploy) | devops_engineer | AC-6 `DONE` (production serves `50c0c4d`) or PARKED with reason | PENDING |

**Implementation note:** The sidebar code already exists on origin at `50c0c4d`, so there is no write-code task. This sprint is verify→gate→release only.

**Fix-round cap:** 3 rounds per loop (dev↔QA, dev↔security); at cap, ship-or-park — never escalate.

---

## Technical Decisions

| ID | Decision | Rationale |
|----|----------|-----------|
| D-001 | Adopt origin branch `sprint/SPRINT-20261101-dashboard-sidebar` @ `50c0c4d` as candidate SHA | The sidebar already exists on origin (commit `e520801`); reimplementing locally would duplicate pushed work (AGENTS.md reconciliation rule) |
| D-002 | No full-stack-developer task | Code is already committed on origin; this sprint is verify→gate→release only |
| D-003 | Static export build (`output: "export"`), publish `out` | Matches `next.config.ts` and `netlify.toml`; no server-side auth, cookie-based session (`armor_session`) |
| D-004 | Release requires merging sidebar branch into `main` then deploying | Production is served from `main`; PM does not merge/push app code — devops_engineer handles release |