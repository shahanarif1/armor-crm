# Handoff Ledger — SPRINT-20261101-dashboard-sidebar

## H-001 — project_manager → team (S0/S1 bootstrapped)

- **SPRINT-ID:** SPRINT-20261101-dashboard-sidebar
- **Sprint branch:** `sprint/SPRINT-20261101-dashboard-sidebar` (exists on origin at `50c0c4d`)
- **Origin URL:** `https://github.com/shahanarif1/armor-crm.git`
- **Working copy:** `project/` (this workspace)
- **Candidate SHA:** `50c0c4d` (already contains sidebar "Home page" + "logout", auth `src/app/lib/auth.ts`, services table)
- **Base commit:** `50c0c4d` "feat(dashboard): add services table and auth files" (contains sidebar commit `e520801`)
- **Branches on origin:** `main` (`ad380b7`), `fix/netlify-nextjs-deploy` (`1f67f98`, closed PR #1), `sprint/SPRINT-20261101-dashboard-sidebar` (`50c0c4d`)
- **gh:** not installed locally; use github-server tools + `git` for remote queries
- **Assumptions:** A-001..A-006 in `assumptions.md` — adopt origin's pushed sidebar, candidate `50c0c4d`, static export, devops owns release
- **Plan:** `sprint-plan.md` written, marked APPROVED under delegated authority (no human approval step); technical_lead review pending (TASK-002)
- **Next state:** technical_lead plan review → QA gate → security gate → release
- **Shared state rule:** the git remote (`origin`) is the only shared state; unpushed work does not exist (SHARED-STATE.md P1–P4)