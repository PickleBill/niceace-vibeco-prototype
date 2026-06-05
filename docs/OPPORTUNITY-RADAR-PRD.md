# Vibeco Opportunity Radar PRD

## Summary

Opportunity Radar is a proactive product-discovery system. It scans public sources for customer pain, workarounds, sponsor demand, competitor gaps, and emerging product opportunities, then routes high-signal clusters through Vibeco agents and into build artifacts.

NiceAce is the first use case. The scanner looks for friction in golf trips, par-3 contests, scrambles, sponsorship attribution, betting-adjacent entertainment, course operations, and tournament prize workflows.

## Why this matters

Passive feedback is too slow. Most people with useful product insight will never click "submit feedback." They will complain on Reddit, ask for hacks in forums, mention weird workarounds on X/Twitter, leave app reviews, or expose gaps through competitor conversations.

Vibeco's advantage should be finding that demand early, evaluating it, and turning it into scoped builds.

## Users

- Product operator: wants a ranked feed of real opportunities.
- Builder: wants accepted opportunities translated into implementation briefs.
- Designer/Lovable operator: wants prompt-ready product changes.
- Founder/product lead: wants a clear reason to build or ignore a feature.

## V1 Workflow

1. Configure sources.
2. Collect public signals.
3. Normalize each signal into a structured object.
4. Cluster similar signals.
5. Score each cluster.
6. Run the agent stack.
7. Produce a recommendation.
8. Generate artifacts for accepted clusters.
9. Human approves before anything hits GitHub or Lovable.

## Source Types

- Reddit posts and comments
- X/Twitter public posts
- public forums
- app store reviews
- competitor changelogs
- YouTube comments and transcripts
- customer interview transcripts
- support inbox exports

V1 should start with sources that are legally and technically straightforward. Avoid scraping private, gated, or login-only communities.

## Data Model

### opportunity_signals

- id
- source_type
- source_url
- source_author_handle, nullable
- collected_at
- raw_text
- normalized_text
- product_area
- segment
- opportunity_type
- confidence
- urgency
- compliance_sensitivity
- cluster_id
- status

### opportunity_clusters

- id
- title
- summary
- product_area
- segment
- opportunity_type
- signal_count
- source_mix
- pain_score
- revenue_score
- build_score
- compliance_risk
- total_score
- recommendation
- status

### opportunity_reviews

- id
- cluster_id
- agent
- headline
- analysis
- risks
- recommended_scope
- cut_list
- created_at

### opportunity_artifacts

- id
- cluster_id
- type: PRD, GitHub issue, Lovable prompt, Claude Code task brief, playbook append
- body
- status
- external_url

## NiceAce Agent Stack

- Customer: would a golfer actually care?
- Course operator: does this add revenue without operational drag?
- Sponsor: is the attribution clear enough to buy?
- Builder: can the first version ship without fake complexity?
- Skeptic: what breaks trust or makes the product feel scammy?
- Compliance: does this drift toward regulated wagering?
- Growth: does it create a repeatable social loop?

## Scoring

Each cluster gets a 0-100 score.

- Pain intensity: how sharp and repeated is the complaint?
- Frequency: how many independent signals exist?
- Buyer proximity: is the speaker a user, operator, sponsor, or observer?
- Revenue path: does it imply spend, retention, or sponsor dollars?
- Buildability: can it become a V1 or V1.1 feature?
- Strategic fit: does it strengthen the NiceAce loop?
- Compliance risk: does it create legal or trust complexity?

## NiceAce Example Clusters

### Golf trip settlement chaos

Signal pattern: golfers struggle to track side games and who owes what after a trip.

Possible build: trip ledger summary, no payments.

Recommendation: pull into Social Competition module.

### Unofficial closest-to-pin pots

Signal pattern: groups already run closest-to-pin contests informally.

Possible build: course-certified par-3 challenge format.

Recommendation: strong NiceAce fit.

### Sponsor attribution gap

Signal pattern: local sponsors do not know what tournament spend generated.

Possible build: sponsor recap page with entries, shares, redemptions, and media.

Recommendation: V1 sponsor product requirement.

## Human Approval Gates

V1 should not autonomously create public posts, contact users, scrape gated sources, or open GitHub issues without approval.

Approval points:

- source list approval
- cluster promotion approval
- PRD approval
- GitHub issue creation approval
- Lovable prompt approval

## First Build Scope

Build a prototype inside NiceAce that shows:

- source queue
- opportunity clusters
- agent review
- generated PRD
- generated GitHub issue
- generated Lovable prompt
- generated Claude Code brief

This can use seeded signals first. The real scanner can be connected after source and API decisions are made.

## Recommended Next Implementation

1. Add Opportunity Radar page/section to the public prototype.
2. Add this PRD and data model to the repo.
3. Create first GitHub issues manually from seeded NiceAce clusters.
4. Build a small collector script for one low-risk source.
5. Add Supabase tables once the workflow is validated.
