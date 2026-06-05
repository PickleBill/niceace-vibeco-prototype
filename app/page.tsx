"use client";

import { useMemo, useState } from "react";

type Tab = "command" | "niceace" | "vibeco" | "scanner" | "prd";
type Agent = "Skeptic" | "Customer" | "Builder" | "Sportsbook" | "Growth";
type RequestStatus = "triage" | "agent pass" | "lovable prompt" | "ready";

const tabs: Array<{ id: Tab; label: string }> = [
  { id: "command", label: "Command" },
  { id: "niceace", label: "NiceAce V1" },
  { id: "vibeco", label: "Vibeco Loop" },
  { id: "scanner", label: "Pain Scanner" },
  { id: "prd", label: "PRD" },
];

const agents: Agent[] = ["Skeptic", "Customer", "Builder", "Sportsbook", "Growth"];

const launchTracks = [
  {
    name: "Hole-in-one core",
    owner: "NiceAce",
    stage: "V1 build",
    detail: "Course event setup, player buy-in, round confirmation, prize rules, and claim workflow.",
    risk: "Prize trust and compliance copy must be boringly clear before any social layer.",
  },
  {
    name: "Sponsor inventory",
    owner: "Aces only",
    stage: "Pilot package",
    detail: "Local sponsors fund prize pools, own branded holes, and get recap assets after each event.",
    risk: "Avoid selling vague impressions. Sell named golfer reach, recap clips, and attributed redemptions.",
  },
  {
    name: "Operator console",
    owner: "Bill",
    stage: "Prototype",
    detail: "A single view for events, payouts, feedback, requests, AI analysis, and build handoff.",
    risk: "If this feels like admin software, it loses the sports-entertainment energy.",
  },
];

const agentOutputs: Record<Agent, string> = {
  Skeptic:
    "The killer risk is trust. Users will forgive a rough leaderboard before they forgive unclear odds, prize eligibility, or a payout dispute.",
  Customer:
    "I want to know if my $20 actually creates a real shot at a meaningful prize, who verifies it, and whether my foursome can talk trash in-app.",
  Builder:
    "V1 should fake sportsbook complexity and build the hard workflow: event creation, score attestation, claim evidence, and admin resolution.",
  Sportsbook:
    "Treat odds language carefully. Position it as skill-contest entertainment and sponsor-funded prize events, with jurisdiction review before scale.",
  Growth:
    "The viral loop is not a generic referral link. It is the post-round brag artifact: near-miss clips, sponsored hole recaps, and group challenges.",
};

const seedRequests = [
  {
    title: "Add group challenge mode",
    source: "Golfer feedback",
    status: "agent pass" as RequestStatus,
    signal: "Foursomes want side-action without splitting across Venmo, texts, and scorecards.",
  },
  {
    title: "Sponsor-facing recap page",
    source: "Sales call",
    status: "lovable prompt" as RequestStatus,
    signal: "Local bar sponsor asked what they get after funding a par-3 prize.",
  },
  {
    title: "Claim verification checklist",
    source: "Operator risk",
    status: "ready" as RequestStatus,
    signal: "Aces, witnesses, GPS/time data, course confirmation, and video proof need one audit path.",
  },
];

const painSignals = [
  {
    source: "Reddit",
    quote: "Golf trip bets are fun until nobody remembers who owes what after the round.",
    segment: "Golf trip organizer",
    feature: "Trip ledger with auto-settlement summary",
    score: 91,
  },
  {
    source: "X",
    quote: "Closest-to-the-pin pots would be way better if the course made them official.",
    segment: "Weekend golfer",
    feature: "Course-certified par-3 challenge",
    score: 86,
  },
  {
    source: "Reddit",
    quote: "I would play more scrambles if the prize rules were clear before I paid.",
    segment: "Tournament player",
    feature: "Plain-English prize rules preview",
    score: 83,
  },
  {
    source: "Forum",
    quote: "Sponsors never know whether their tournament spend turned into foot traffic.",
    segment: "Local sponsor",
    feature: "Sponsor attribution recap",
    score: 79,
  },
];

const roadmap = [
  "Lock V1 flow: create event, join event, verify score, file claim, resolve payout.",
  "Ship three pilot packages: public course, member-guest, local sponsor night.",
  "Export every feedback item into Vibeco as a reusable idea-lab artifact.",
  "Connect Claude Code and Lovable handoff so accepted requests become scoped prompts.",
  "Add public-source scanner once compliance and source permissions are explicit.",
];

function nextStatus(status: RequestStatus): RequestStatus {
  if (status === "triage") return "agent pass";
  if (status === "agent pass") return "lovable prompt";
  if (status === "lovable prompt") return "ready";
  return "ready";
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("command");
  const [selectedAgent, setSelectedAgent] = useState<Agent>("Skeptic");
  const [requests, setRequests] = useState(seedRequests);
  const [selectedPain, setSelectedPain] = useState(painSignals[0]);
  const [idea, setIdea] = useState(
    "NiceAce is a hole-in-one and golf challenge platform where courses, sponsors, and foursomes create official prize-backed moments."
  );
  const [customer, setCustomer] = useState("Weekend golfers, tournament organizers, course operators, and local sponsors");
  const [wagerMode, setWagerMode] = useState("Sponsor-funded prizes first; peer wagers later after compliance review");

  const launchReadiness = useMemo(() => {
    const ready = requests.filter((request) => request.status === "ready").length;
    return Math.round(((ready + 2) / (requests.length + 5)) * 100);
  }, [requests]);

  const addRequest = () => {
    const next = {
      title: "AI-generated change request",
      source: "Prototype intake",
      status: "triage" as RequestStatus,
      signal: `Pressure test: ${idea.slice(0, 96)}`,
    };
    setRequests((current) => [next, ...current]);
    setActiveTab("vibeco");
  };

  const advanceRequest = (index: number) => {
    setRequests((current) =>
      current.map((request, itemIndex) =>
        itemIndex === index ? { ...request, status: nextStatus(request.status) } : request
      )
    );
  };

  const prd = useMemo(
    () => ({
      title: `${selectedPain.feature} PRD`,
      problem: selectedPain.quote,
      audience: selectedPain.segment,
      v1: [
        "Capture pain signal with source, segment, confidence, and raw context.",
        "Run Skeptic, Customer, Builder, Sportsbook, and Growth perspectives.",
        "Create a scoped Lovable prompt with acceptance criteria and risk notes.",
        "Push accepted work into the NiceAce roadmap and Vibeco playbook ledger.",
      ],
      metrics: [
        "Signals promoted to roadmap per week",
        "Accepted feature rate after agent review",
        "Pilot event conversion lift",
        "Sponsor renewal or upsell rate",
      ],
    }),
    [selectedPain]
  );

  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Primary">
        <div>
          <p className="eyebrow">NiceAce operating prototype</p>
          <h1>Aces only, wired into Vibeco.</h1>
        </div>
        <div className="tab-row" role="tablist" aria-label="Prototype sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={activeTab === tab.id ? "tab active" : "tab"}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              aria-selected={activeTab === tab.id}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero-grid">
        <div className="hero-copy">
          <p className="kicker">Golf entertainment plus product intelligence</p>
          <h2>Make every ace attempt a product loop.</h2>
          <p>
            NiceAce starts as the cleanest hole-in-one prize workflow: events, sponsor-backed payouts,
            claim verification, and recap artifacts. The strategic move is piping every change request,
            complaint, sponsor ask, and public pain signal into Vibeco so Claude Code, Lovable, and agent
            reviews turn demand into shippable work.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={addRequest}>Capture change request</button>
            <button className="secondary" onClick={() => setActiveTab("prd")}>Open PRD</button>
          </div>
        </div>
        <AcesPhone />
      </section>

      {activeTab === "command" && (
        <section className="content-grid command-grid">
          <Panel title="Launch posture" label={`${launchReadiness}% prototype ready`}>
            <div className="meter" aria-label={`Launch readiness ${launchReadiness}%`}>
              <span style={{ width: `${launchReadiness}%` }} />
            </div>
            <div className="field-stack">
              <label>
                Product thesis
                <textarea value={idea} onChange={(event) => setIdea(event.target.value)} />
              </label>
              <label>
                First customer set
                <input value={customer} onChange={(event) => setCustomer(event.target.value)} />
              </label>
              <label>
                Wager/compliance posture
                <input value={wagerMode} onChange={(event) => setWagerMode(event.target.value)} />
              </label>
            </div>
          </Panel>
          <Panel title="Two-pronged plan" label="NiceAce plus Vibeco">
            <div className="stack-list">
              <PlanStep number="01" title="Get NiceAce out">
                Ship sponsor-funded hole-in-one and par-3 challenge pilots with claim verification, event
                setup, recap pages, and a hard compliance review before peer wagering.
              </PlanStep>
              <PlanStep number="02" title="Bring it back to Vibeco">
                Treat NiceAce as the proving ground for Vibeco's build-on-demand engine: accept requests,
                run agents, generate Lovable prompts, and commit Claude Code work through GitHub.
              </PlanStep>
              <PlanStep number="03" title="Mine the market">
                Scan public golf, tournament, and sponsor conversations for pain points, cluster them, and
                promote only high-signal themes into PRDs.
              </PlanStep>
            </div>
          </Panel>
        </section>
      )}

      {activeTab === "niceace" && (
        <section className="content-grid">
          {launchTracks.map((track) => (
            <Panel key={track.name} title={track.name} label={track.stage}>
              <p className="muted">Owner: {track.owner}</p>
              <p>{track.detail}</p>
              <div className="risk-box">{track.risk}</div>
            </Panel>
          ))}
          <Panel title="V1 release sequence" label="30/60/90">
            <ol className="roadmap">
              {roadmap.map((item) => <li key={item}>{item}</li>)}
            </ol>
          </Panel>
        </section>
      )}

      {activeTab === "vibeco" && (
        <section className="content-grid vibeco-grid">
          <Panel title="Agent router" label="Perspective pass">
            <div className="agent-buttons" role="list" aria-label="Perspective agents">
              {agents.map((agent) => (
                <button
                  key={agent}
                  className={selectedAgent === agent ? "agent active" : "agent"}
                  onClick={() => setSelectedAgent(agent)}
                >
                  {agent}
                </button>
              ))}
            </div>
            <blockquote>{agentOutputs[selectedAgent]}</blockquote>
            <p className="muted">
              Integration pattern: Vibeco owns the idea analysis and handoff artifact. Claude Code owns repo
              changes. Lovable owns quick UI iteration. GitHub is the audit trail.
            </p>
          </Panel>
          <Panel title="Change request queue" label={`${requests.length} active`}>
            <div className="request-list">
              {requests.map((request, index) => (
                <article className="request" key={`${request.title}-${index}`}>
                  <div>
                    <p className="request-source">{request.source}</p>
                    <h3>{request.title}</h3>
                    <p>{request.signal}</p>
                  </div>
                  <button onClick={() => advanceRequest(index)}>{request.status}</button>
                </article>
              ))}
            </div>
          </Panel>
        </section>
      )}

      {activeTab === "scanner" && (
        <section className="content-grid scanner-grid">
          <Panel title="Public pain-point scanner" label="Prototype source inbox">
            <div className="signal-list">
              {painSignals.map((signal) => (
                <button
                  key={signal.feature}
                  className={selectedPain.feature === signal.feature ? "signal active" : "signal"}
                  onClick={() => setSelectedPain(signal)}
                >
                  <span>{signal.source}</span>
                  <strong>{signal.feature}</strong>
                  <small>{signal.score} signal score</small>
                </button>
              ))}
            </div>
          </Panel>
          <Panel title="Selected signal" label={selectedPain.segment}>
            <blockquote>{selectedPain.quote}</blockquote>
            <dl className="definition-grid">
              <div>
                <dt>Feature candidate</dt>
                <dd>{selectedPain.feature}</dd>
              </div>
              <div>
                <dt>Next pass</dt>
                <dd>Cluster duplicates, run agents, create PRD, then route to NiceAce or Vibeco playbook.</dd>
              </div>
            </dl>
            <button className="primary" onClick={() => setActiveTab("prd")}>Generate PRD</button>
          </Panel>
        </section>
      )}

      {activeTab === "prd" && (
        <section className="prd-layout">
          <Panel title={prd.title} label="Product requirements">
            <div className="prd-document">
              <h3>Problem</h3>
              <p>{prd.problem}</p>
              <h3>Audience</h3>
              <p>{prd.audience}</p>
              <h3>V1 scope</h3>
              <ul>{prd.v1.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Success metrics</h3>
              <ul>{prd.metrics.map((item) => <li key={item}>{item}</li>)}</ul>
              <h3>Recommended build path</h3>
              <p>
                Start in NiceAce for event-specific proof. Sync accepted learnings into Vibeco as a reusable
                public-source-to-feature pipeline. Keep source permissions, moderation, and compliance notes
                attached to every promoted feature.
              </p>
            </div>
          </Panel>
          <Panel title="Handoff artifact" label="Lovable plus Claude Code">
            <pre>{`Build: ${prd.title}
User: ${prd.audience}
Core job: turn "${selectedPain.quote}" into a scoped feature.
Acceptance:
- source signal is captured with URL, segment, and score
- five agent perspectives are stored
- accepted output generates a Lovable-ready prompt
- GitHub issue links back to the original signal
- NiceAce roadmap receives a visible status update`}</pre>
          </Panel>
        </section>
      )}
    </main>
  );
}

function AcesPhone() {
  const [view, setView] = useState<"arrive" | "pay" | "celebrate" | "live">("arrive");
  const [theme, setTheme] = useState<"jackpot" | "broadcast">("jackpot");
  const [pot, setPot] = useState(48750);
  const [field, setField] = useState(137);
  const [aceOverlay, setAceOverlay] = useState(false);

  const money = (value: number) => `$${value.toLocaleString("en-US")}`;

  const enterPot = () => {
    setView("pay");
    window.setTimeout(() => {
      setPot((current) => current + 10);
      setField((current) => current + 1);
      setView("celebrate");
    }, 950);
  };

  const restart = () => {
    setPot(48750);
    setField(137);
    setAceOverlay(false);
    setView("arrive");
  };

  return (
    <div className={`phone-shell ${theme}`} aria-label="Playable Aces mobile prototype">
      <div className="phone-tools">
        <button className={theme === "jackpot" ? "on" : ""} onClick={() => setTheme("jackpot")}>Jackpot</button>
        <button className={theme === "broadcast" ? "on" : ""} onClick={() => setTheme("broadcast")}>Broadcast</button>
        <button onClick={restart}>Restart</button>
      </div>
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-status"><span>9:41</span><span>LIVE</span></div>

        {view === "arrive" && (
          <div className="phone-view arrive-view">
            <div className="course-row">
              <div><strong>Pebble Beach</strong><small>Golf Links</small></div>
              <span>Hole 7</span>
            </div>
            <p className="scan-pill">QR scanned. You are on the tee.</p>
            <div className="hole-card">
              <span>The Seventh</span>
              <strong>HOLE 7 · PAR 3</strong>
              <small>106 YDS · WIND 8MPH SW</small>
            </div>
            <div className="pot-card">
              <span>Today's ace pot</span>
              <strong>{money(pot)}</strong>
              <small>{field} in today · grows $10 every entry</small>
            </div>
            <h3>$10 in. Ace the hole. Win it all.</h3>
            <button className="phone-cta" onClick={enterPot}>I am in · $10</button>
            <small className="pay-note">Apple Pay style entry · no app install</small>
          </div>
        )}

        {view === "pay" && (
          <div className="phone-view pay-view">
            <div className="pay-sheet">
              <div className="grabber" />
              <div className="pay-main">
                <div className="pay-logo">A</div>
                <div><strong>Aces · Hole 7 Pot</strong><small>Pebble Beach Golf Links</small></div>
                <b>$10</b>
              </div>
              <dl>
                <div><dt>Pay with</dt><dd>Apple Pay · 4029</dd></div>
                <div><dt>Entry</dt><dd>1 hole-in-one ticket</dd></div>
                <div><dt>If you ace it</dt><dd>You win the full pot</dd></div>
              </dl>
              <div className="face-check"><span />Confirming</div>
            </div>
          </div>
        )}

        {view === "celebrate" && (
          <div className="phone-view celebrate-view">
            <div className="big-check">A</div>
            <h3>You are in.</h3>
            <p>Entry #{field} · Hole 7 · Pebble Beach</p>
            <div className="pot-card mini">
              <span>The pot is now</span>
              <strong>{money(pot)}</strong>
              <small>You pushed it up $10</small>
            </div>
            <button className="phone-cta" onClick={() => setView("live")}>See the live pot</button>
            <button className="phone-link" onClick={() => { setView("live"); setAceOverlay(true); }}>Simulate an ace</button>
          </div>
        )}

        {view === "live" && (
          <div className="phone-view live-view">
            <div className="live-top">
              <strong>ACES.</strong>
              <span>Live · Hole 7</span>
            </div>
            <div className="live-hero">
              <span>Ace pot · winner takes all</span>
              <strong>{money(pot)}</strong>
              <small>+120 in the last hour · {field} in</small>
            </div>
            <div className="you-chip">
              <b>IN</b>
              <div><strong>You are entered</strong><small>Ticket #{field} · good all day on Hole 7</small></div>
            </div>
            <div className="phone-feed">
              <p><b>Maria K.</b> just entered the pot <span>+$10</span></p>
              <p><b>Dev R.</b> is on the tee <span>+$10</span></p>
              <p><b>Sam W.</b> won $920 last week <span>Trophy</span></p>
            </div>
            <div className="phone-actions">
              <button onClick={() => setPot((current) => current + 10)}>Invite foursome</button>
              <button onClick={() => setAceOverlay(true)}>I aced it</button>
            </div>
          </div>
        )}

        {aceOverlay && (
          <div className="ace-overlay">
            <h3>Hole in one.</h3>
            <strong>{money(pot)}</strong>
            <p>Verified by Aces. Claim workflow starts here, with witnesses, course confirmation, and payout review.</p>
            <button className="phone-cta" onClick={() => setAceOverlay(false)}>Claim it</button>
          </div>
        )}

        <div className="phone-home" />
      </div>
    </div>
  );
}

function CourseMap({ readiness }: { readiness: number }) {
  return (
    <div className="course-map" aria-label="NiceAce flow map">
      <div className="map-header">
        <span>Live event map</span>
        <strong>{readiness}%</strong>
      </div>
      <div className="fairway">
        <div className="tee">Tee</div>
        <div className="arc arc-one" />
        <div className="arc arc-two" />
        <div className="green">
          <span>Prize hole</span>
          <i />
        </div>
        <div className="node payout">Payout</div>
        <div className="node sponsor">Sponsor</div>
        <div className="node vibeco">Vibeco</div>
      </div>
      <div className="map-footer">
        <span>Event</span>
        <span>Verification</span>
        <span>Feedback</span>
        <span>Build loop</span>
      </div>
    </div>
  );
}

function Panel({
  title,
  label,
  children,
}: {
  title: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <article className="panel">
      <div className="panel-head">
        <h2>{title}</h2>
        <span>{label}</span>
      </div>
      {children}
    </article>
  );
}

function PlanStep({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="plan-step">
      <span>{number}</span>
      <div>
        <h3>{title}</h3>
        <p>{children}</p>
      </div>
    </article>
  );
}
