# NiceAce x Vibeco Integration Roadmap

## Product stance

NiceAce should be a standalone golf entertainment product. Vibeco should not appear as a dashboard inside the player experience. Vibeco is the product-development operating system behind NiceAce: it captures signals, evaluates them, turns accepted ideas into build artifacts, and writes reusable lessons back into playbooks.

NiceAce is the first full proof loop:

1. Idea originated and was pressure-tested in Vibeco.
2. Prototype moved through Lovable and Claude design.
3. Codex turns the best concept into a deployable public prototype.
4. Product feedback should flow back into Vibeco as structured signals.

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

### V1.5: trust layer

- Claim evidence checklist.
- Witness collection.
- Course marshal confirmation.
- Optional video upload.
- Payout approval status.
- Dispute notes.
- Plain-English rules shown before payment.

### V2: social competition

- Group challenge mode.
- Golf trip ledger.
- Closest-to-pin and long-drive formats.
- Trophy room.
- Sponsored milestones.
- Shareable post-round recap.

## Vibeco product changes

### 1. Signal intake becomes a first-class object

Add a `signals` object to Vibeco, separate from ideas.

Required fields:

- source: customer, sponsor, operator, public source, internal observation
- product: NiceAce, Vibeco, Courtana, other
- raw text
- segment
- confidence
- urgency
- compliance sensitivity
- attached URL or artifact
- status: inbox, clustered, agent-reviewed, accepted, rejected, shipped

Why: Vibeco currently helps expand and distill ideas. The next creative layer is turning real-world friction into product direction.

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

### 4. Public-source scanner is a separate product module

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

## Infrastructure recommendation

### Short term

- Keep NiceAce public prototype in GitHub Pages.
- Keep the richer React/Sites version for internal iteration.
- Add GitHub issues for product tasks.
- Use this roadmap as the next build-session handoff.

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
- Add an edge function that turns accepted signals into GitHub issues and prompt artifacts.

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

Then wire the first Vibeco integration:

1. “Submit feedback” on the NiceAce prototype.
2. Feedback creates a Vibeco signal.
3. Signal runs the NiceAce agent stack.
4. Accepted output creates a GitHub issue and implementation prompt.
