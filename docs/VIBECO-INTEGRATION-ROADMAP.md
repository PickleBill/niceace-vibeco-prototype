# NiceAce x Vibeco Integration Roadmap

## Product stance

NiceAce should be a standalone golf entertainment product. Vibeco should not appear as a dashboard inside the player experience. Vibeco is the product-development operating system behind NiceAce: it proactively scans for problems and opportunities, evaluates them, turns accepted ideas into build artifacts, and writes reusable lessons back into playbooks.

NiceAce is the first full proof loop:

1. Idea originated and was pressure-tested in Vibeco.
2. Prototype moved through Lovable and Claude design.
3. Codex turns the best concept into a deployable public prototype.
4. Market signals should flow back into Vibeco as structured product opportunities.

## NiceAce V1 roadmap

### V0: playable proof

- QR arrival page for a course/hole/day.
- One-tap entry simulation.
- Live pot dashboard.
- Invite foursome action.
- Simulated ace claim overlay.
- Jackpot and Broadcast aesthetic modes.

### V1: course pilot

- Course admin can create a challenge.
- Challenge has course, hole, date, entry price, sponsor, prize rules, and max liability.
- Player entry is payment-ready.
- Live pot and field count update.
- Operator can pause/close event.
- Claim queue exists, even if review is manual.
- Sponsor recap page is generated after the event.

### Social competition module

- Group challenge mode.
- Golf trip ledger.
- Closest-to-pin and long-drive formats.
- Trophy room.
- Sponsored milestones.
- Shareable post-round recap.

This can be pulled forward as its own build. It does not need to wait for a large trust-layer release. The correct V1 scope is probably "trip ledger and group challenge summary" without peer-to-peer money movement.

## Vibeco product changes

### 1. Opportunity signals become first-class objects

Add an `opportunity_signals` object to Vibeco, separate from ideas and separate from user-submitted feedback.

Required fields:

- source: Reddit, X/Twitter, forum, app review, competitor changelog, customer, sponsor, operator, internal observation
- product: NiceAce, Vibeco, Courtana, other
- raw text
- segment
- confidence
- urgency
- compliance sensitivity
- attached URL or artifact
- cluster id
- opportunity type: pain, workaround, willingness-to-pay, competitor gap, sponsor demand, compliance risk
- status: collected, clustered, agent-reviewed, accepted, rejected, shipped

Why: Vibeco currently helps expand and distill ideas. The next creative layer is discovering real-world friction before a user takes the time to submit feedback.

### 2. Agent reviews become pipelines, not one-off reports

For NiceAce, the default agent stack should be:

- Customer: would a golfer actually care?
- Course operator: does this create work or revenue?
- Sponsor: is this attributable enough to buy?
- Builder: can V1 ship without fake complexity?
- Skeptic: what breaks trust?
- Compliance: does this drift toward regulated wagering?
- Growth: does it create a repeatable social loop?

Output should be structured:

- recommendation
- confidence
- V1 scope
- cut list
- acceptance criteria
- risk notes
- Lovable prompt
- Claude Code task brief
- GitHub issue body

### 3. Build handoff connects Lovable, Claude Code, and GitHub

Accepted Vibeco signals should create:

- a GitHub issue
- a Lovable-ready prompt
- a Claude Code implementation brief
- a link back to the source signal
- a playbook append if the learning can apply to other products

For NiceAce, this means a golfer complaint like “nobody remembers trip bets” can become:

- feature candidate: trip ledger
- agent review
- V1 cut: settlement summary only, no peer payments yet
- GitHub issue
- prototype change
- post-ship lesson

### 4. Public-source scanner is the next product module

Do not bolt scraping directly into NiceAce. Build it as a Vibeco module that can serve NiceAce, Courtana, and future products.

Sources to evaluate:

- Reddit golf communities
- X/Twitter golf and betting conversations
- golf forums
- sponsor/local business comments
- app reviews for golf scoring and tournament apps

Pipeline:

1. collect public signal
2. dedupe and cluster
3. classify segment and product relevance
4. score pain intensity
5. run agent review
6. create PRD only if the cluster clears threshold
7. generate GitHub issue, Lovable prompt, and Claude Code task brief

## Infrastructure recommendation

### Short term

- Keep NiceAce public prototype in GitHub Pages.
- Keep the richer React/Sites version for internal iteration.
- Add GitHub issues for product tasks.
- Use this roadmap as the next build-session handoff.
- Build an Opportunity Radar prototype inside this repo to show the proactive scanning workflow.

### Medium term

- Add a lightweight Supabase backend for NiceAce pilots:
  - courses
  - holes
  - challenges
  - entries
  - sponsors
  - claims
  - recap links
- Add a Vibeco `signals` table.
- Add a Vibeco `opportunity_signals` table.
- Add a scanner job that collects public signals and sends clusters into Vibeco's agent pipeline.
- Add an edge function that turns accepted opportunities into GitHub issues and prompt artifacts.

### Later

- Connect public-source collection.
- Add multi-agent reviews as scheduled jobs.
- Add playbook writes back into `VIBECO-OS/PLAYBOOKS`.
- Build a private Vibeco operator view that shows signals across products without appearing inside customer-facing products.

## Immediate next build

Build NiceAce V1 as a real app surface:

1. Player QR entry flow.
2. Course challenge setup.
3. Sponsor recap page.
4. Claim review queue.
5. Static legal/prize-rules preview before payment.

Then wire the first Vibeco integration as a proactive scanner, not as a passive feedback form:

1. Scan public sources for golf, betting, tournament, sponsor, and trip-planning pain.
2. Cluster related signals into opportunity candidates.
3. Run the NiceAce agent stack against each cluster.
4. Promote accepted opportunities into PRDs, GitHub issues, Lovable prompts, Claude Code task briefs, and Vibeco playbook appends.

## Split-out builds

### Build A: NiceAce Social Competition

Goal: make the product more than a one-hole jackpot.

V1 scope:

- group challenge card
- trip ledger summary
- closest-to-pin format
- long-drive format
- trophy room entry
- post-round share artifact

Deliberate cut:

- no peer-to-peer settlement in V1
- no wallet
- no odds language

### Build B: Vibeco Opportunity Radar

Goal: proactively discover product demand and route it through the Vibeco build loop.

V1 scope:

- source configuration
- collected signal inbox
- cluster view
- agent review summary
- PRD draft
- GitHub issue draft
- Lovable prompt
- Claude Code task brief

Deliberate cut:

- no autonomous scraping of private or gated communities
- no auto-creating issues without human approval
- no source collection that violates platform terms
