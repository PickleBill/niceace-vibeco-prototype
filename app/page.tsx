"use client";

import { useState } from "react";

type Section = "player" | "course" | "sponsor" | "claim" | "roadmap";

const sections: Array<{ id: Section; label: string }> = [
  { id: "player", label: "Player" },
  { id: "course", label: "Course" },
  { id: "sponsor", label: "Sponsor" },
  { id: "claim", label: "Claim" },
  { id: "roadmap", label: "Roadmap" },
];

const roadmap = [
  {
    phase: "V0",
    title: "Playable proof",
    detail: "QR arrival, one-tap entry, live pot, invitation loop, and simulated ace claim.",
  },
  {
    phase: "V1",
    title: "Course pilot",
    detail: "Course event setup, entry payments, sponsor-backed prize pools, admin resolution, and recap links.",
  },
  {
    phase: "V1.5",
    title: "Trust layer",
    detail: "Witness checklist, GPS/time evidence, course marshal confirmation, payout review, and dispute notes.",
  },
  {
    phase: "V2",
    title: "Social competition",
    detail: "Group challenges, trip ledgers, closest-to-pin pots, sponsor milestones, and shareable trophy room.",
  },
];

const vibecoLoop = [
  "Every golfer complaint, sponsor ask, and course-operator workaround becomes a structured product signal.",
  "Vibeco runs perspective passes: customer, skeptic, builder, legal/compliance, growth, and sponsor ROI.",
  "Accepted signals become Lovable prompts, Claude Code tasks, GitHub issues, and reusable playbook appends.",
  "NiceAce is the first full loop: idea in Vibeco, UI in Lovable/Claude design, production iteration in Codex.",
];

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("player");

  return (
    <main className="app-shell niceace-shell">
      <nav className="topbar" aria-label="Primary">
        <div>
          <p className="eyebrow">NiceAce V1 prototype</p>
          <h1>Aces only.</h1>
        </div>
        <div className="tab-row" role="tablist" aria-label="Prototype sections">
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? "tab active" : "tab"}
              onClick={() => setActiveSection(section.id)}
              role="tab"
              aria-selected={activeSection === section.id}
            >
              {section.label}
            </button>
          ))}
        </div>
      </nav>

      <section className="hero-grid niceace-hero">
        <div className="hero-copy">
          <p className="kicker">Hole-in-one entertainment for real courses</p>
          <h2>Turn the par 3 into the loudest moment on the course.</h2>
          <p>
            NiceAce is a mobile-first golf challenge product. A player scans a tee-box QR code,
            joins the live ace pot in seconds, watches the pot move with every entry, and gets a
            clean claim path if the impossible happens. Courses get a new game-day product. Sponsors
            get a moment people actually talk about.
          </p>
          <div className="hero-actions">
            <button className="primary" onClick={() => setActiveSection("player")}>Play the flow</button>
            <button className="secondary" onClick={() => setActiveSection("roadmap")}>See roadmap</button>
          </div>
        </div>
        <AcesPhone />
      </section>

      <section className="section-band">
        {activeSection === "player" && (
          <div className="content-grid command-grid">
            <Panel title="Player promise" label="No app install">
              <p>
                The player experience has to be faster than ordering a drink at the turn: scan, confirm,
                get entered, watch the pot, invite the foursome. No account wall before the dopamine.
              </p>
              <div className="feature-row"><span>01</span><strong>QR tee-box entry</strong><p>Each prize hole has a live URL tied to course, hole, day, prize rules, and pot.</p></div>
              <div className="feature-row"><span>02</span><strong>One-tap payment</strong><p>$10 entry is the default prototype price. The product can support sponsor-paid, player-paid, or hybrid pots.</p></div>
              <div className="feature-row"><span>03</span><strong>Live social proof</strong><p>Players see field growth, recent entries, trophy history, and invite actions immediately after joining.</p></div>
            </Panel>
            <Panel title="What V1 must not do" label="Scope discipline">
              <ul className="tight-list">
                <li>Do not start with a full sportsbook or peer-to-peer wagering product.</li>
                <li>Do not bury prize terms in lawyer text after payment.</li>
                <li>Do not make the course operator manage payouts through spreadsheets.</li>
                <li>Do not make sponsors buy vague impressions; sell named moments and recap artifacts.</li>
              </ul>
            </Panel>
          </div>
        )}

        {activeSection === "course" && (
          <div className="content-grid command-grid">
            <Panel title="Course operator mode" label="Pilot product">
              <p>
                The course version should be boringly operational: create challenge, select holes, set
                price/prize rules, start the day, resolve claims, export recap. The front end can feel like
                Vegas; the back office should feel like a cash drawer.
              </p>
              <div className="ops-grid">
                <Metric value="3" label="pilot formats" />
                <Metric value="7 min" label="event setup target" />
                <Metric value="1" label="claim queue" />
              </div>
            </Panel>
            <Panel title="Pilot formats" label="First sales motion">
              <div className="stack-list">
                <PlanStep number="01" title="Public-course prize hole">Daily ace pot on the most dramatic par 3.</PlanStep>
                <PlanStep number="02" title="Member-guest weekend">Bigger purse, private leaderboard, sponsor recap.</PlanStep>
                <PlanStep number="03" title="Charity scramble">Sponsor funds the pot; participants get the entertainment layer.</PlanStep>
              </div>
            </Panel>
          </div>
        )}

        {activeSection === "sponsor" && (
          <div className="content-grid command-grid">
            <Panel title="Sponsor product" label="Sell the moment">
              <p>
                The sponsor is not buying a banner. They are underwriting the hole everyone talks about,
                then receiving a branded recap with participants, entries, winners, claims, shares, and
                redemption hooks.
              </p>
              <blockquote>
                “Tonight’s $5,000 ace pot is presented by Trophy Room Sports Bar. Scan at Hole 7,
                take your shot, and bring your entry receipt in for the post-round special.”
              </blockquote>
            </Panel>
            <Panel title="Sponsor recap" label="Attribution">
              <ul className="tight-list">
                <li>Entries by event and hole</li>
                <li>Unique players and repeat entrants</li>
                <li>Foursome invites and share clicks</li>
                <li>Coupon/redemption link usage</li>
                <li>Winner or near-miss social assets</li>
              </ul>
            </Panel>
          </div>
        )}

        {activeSection === "claim" && (
          <div className="content-grid command-grid">
            <Panel title="Ace claim path" label="Trust layer">
              <p>
                The claim flow is the product’s credibility engine. It needs to feel celebratory to the
                player and audit-ready to the operator.
              </p>
              <div className="claim-flow">
                <div><span>1</span><strong>Player taps “I aced it”</strong><p>Locks event, ticket, hole, timestamp, and device context.</p></div>
                <div><span>2</span><strong>Evidence checklist</strong><p>Witnesses, scorecard, optional video, course marshal confirmation.</p></div>
                <div><span>3</span><strong>Operator review</strong><p>Admin resolves claim, triggers payout workflow, creates trophy artifact.</p></div>
              </div>
            </Panel>
            <Panel title="Compliance posture" label="Before scale">
              <p>
                V1 should be framed as sponsor-backed skill-contest entertainment and reviewed by counsel
                before expanding into peer-funded wagering, side games, or interstate campaigns.
              </p>
              <div className="risk-box">The trust layer ships before the betting layer.</div>
            </Panel>
          </div>
        )}

        {activeSection === "roadmap" && (
          <div className="roadmap-layout">
            <Panel title="NiceAce product roadmap" label="Build order">
              <div className="timeline">
                {roadmap.map((item) => (
                  <article key={item.phase}>
                    <span>{item.phase}</span>
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </article>
                ))}
              </div>
            </Panel>
            <Panel title="How Vibeco plugs in" label="Behind the scenes">
              <p>
                Vibeco should not be the NiceAce UI. It should be the engine that helps NiceAce learn
                faster than a normal app: capture signals, run agents, create build prompts, and push
                changes through GitHub.
              </p>
              <ul className="tight-list">
                {vibecoLoop.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </Panel>
          </div>
        )}
      </section>
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

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="metric">
      <strong>{value}</strong>
      <span>{label}</span>
    </div>
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
