(function () {
  var pot = 48750;
  var field = 137;

  var agentOutputs = {
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

  var requests = [
    {
      title: "Add group challenge mode",
      source: "Golfer feedback",
      status: "agent pass",
      signal: "Foursomes want side-action without splitting across Venmo, texts, and scorecards.",
    },
    {
      title: "Sponsor-facing recap page",
      source: "Sales call",
      status: "lovable prompt",
      signal: "Local bar sponsor asked what they get after funding a par-3 prize.",
    },
    {
      title: "Claim verification checklist",
      source: "Operator risk",
      status: "ready",
      signal: "Aces, witnesses, GPS/time data, course confirmation, and video proof need one audit path.",
    },
  ];

  var painSignals = [
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

  var selectedSignal = painSignals[0];

  function money(value) {
    return "$" + value.toLocaleString("en-US");
  }

  function setPhoneView(view) {
    document.querySelectorAll("[data-view]").forEach(function (node) {
      node.classList.toggle("active", node.dataset.view === view);
    });
  }

  function syncMoney() {
    document.querySelectorAll("[data-pot]").forEach(function (node) {
      node.textContent = money(pot);
    });
    document.querySelectorAll("[data-field]").forEach(function (node) {
      node.textContent = String(field);
    });
  }

  function openTab(tab) {
    document.querySelectorAll("[data-tab]").forEach(function (node) {
      node.classList.toggle("active", node.dataset.tab === tab);
    });
    document.querySelectorAll("[data-panel]").forEach(function (node) {
      node.classList.toggle("active", node.dataset.panel === tab);
    });
  }

  function nextStatus(status) {
    if (status === "triage") return "agent pass";
    if (status === "agent pass") return "lovable prompt";
    if (status === "lovable prompt") return "ready";
    return "ready";
  }

  function renderRequests() {
    var host = document.getElementById("requestList");
    host.innerHTML = "";
    requests.forEach(function (request, index) {
      var row = document.createElement("article");
      row.className = "request";
      row.innerHTML =
        "<div><p class='request-source'>" +
        request.source +
        "</p><h3>" +
        request.title +
        "</h3><p>" +
        request.signal +
        "</p></div><button data-request='" +
        index +
        "'>" +
        request.status +
        "</button>";
      host.appendChild(row);
    });
  }

  function renderSignals() {
    var host = document.getElementById("signalList");
    host.innerHTML = "";
    painSignals.forEach(function (signal, index) {
      var button = document.createElement("button");
      button.className = "signal" + (signal.feature === selectedSignal.feature ? " active" : "");
      button.dataset.signal = String(index);
      button.innerHTML =
        "<span>" +
        signal.source +
        "</span><strong>" +
        signal.feature +
        "</strong><small>" +
        signal.score +
        " signal score</small>";
      host.appendChild(button);
    });
  }

  function syncPrd() {
    document.getElementById("signalSegment").textContent = selectedSignal.segment;
    document.getElementById("signalQuote").textContent = selectedSignal.quote;
    document.getElementById("signalFeature").textContent = selectedSignal.feature;
    document.getElementById("prdTitle").textContent = selectedSignal.feature + " PRD";
    document.getElementById("prdProblem").textContent = selectedSignal.quote;
    document.getElementById("prdAudience").textContent = selectedSignal.segment;
    document.getElementById("handoffText").textContent =
      "Build: " +
      selectedSignal.feature +
      " PRD\n" +
      "User: " +
      selectedSignal.segment +
      "\n" +
      'Core job: turn "' +
      selectedSignal.quote +
      '" into a scoped feature.\n' +
      "Acceptance:\n" +
      "- source signal is captured with URL, segment, and score\n" +
      "- five agent perspectives are stored\n" +
      "- accepted output generates a Lovable-ready prompt\n" +
      "- GitHub issue links back to the original signal\n" +
      "- NiceAce roadmap receives a visible status update";
  }

  document.querySelectorAll("[data-tab]").forEach(function (button) {
    button.addEventListener("click", function () {
      openTab(button.dataset.tab);
    });
  });

  document.querySelectorAll("[data-open-tab]").forEach(function (button) {
    button.addEventListener("click", function () {
      openTab(button.dataset.openTab);
    });
  });

  document.querySelectorAll("[data-theme]").forEach(function (button) {
    button.addEventListener("click", function () {
      var shell = document.getElementById("phoneShell");
      shell.classList.remove("jackpot", "broadcast");
      shell.classList.add(button.dataset.theme);
      document.querySelectorAll("[data-theme]").forEach(function (node) {
        node.classList.toggle("on", node === button);
      });
    });
  });

  document.getElementById("enterPot").addEventListener("click", function () {
    setPhoneView("pay");
    window.setTimeout(function () {
      pot += 10;
      field += 1;
      syncMoney();
      setPhoneView("celebrate");
    }, 950);
  });

  document.getElementById("seeLivePot").addEventListener("click", function () {
    setPhoneView("live");
  });

  function showAce() {
    document.getElementById("aceOverlay").classList.add("show");
  }

  document.getElementById("simulateAce").addEventListener("click", function () {
    setPhoneView("live");
    showAce();
  });
  document.getElementById("aceButton").addEventListener("click", showAce);
  document.getElementById("claimAce").addEventListener("click", function () {
    document.getElementById("aceOverlay").classList.remove("show");
  });
  document.getElementById("inviteFoursome").addEventListener("click", function () {
    pot += 10;
    field += 1;
    syncMoney();
    this.textContent = "Link copied";
    var button = this;
    window.setTimeout(function () {
      button.textContent = "Invite foursome";
    }, 1400);
  });
  document.getElementById("restartPhone").addEventListener("click", function () {
    pot = 48750;
    field = 137;
    syncMoney();
    document.getElementById("aceOverlay").classList.remove("show");
    setPhoneView("arrive");
  });

  document.querySelectorAll("[data-agent]").forEach(function (button) {
    button.addEventListener("click", function () {
      document.querySelectorAll("[data-agent]").forEach(function (node) {
        node.classList.toggle("active", node === button);
      });
      document.getElementById("agentOutput").textContent = agentOutputs[button.dataset.agent];
    });
  });

  document.getElementById("captureRequest").addEventListener("click", function () {
    requests.unshift({
      title: "AI-generated change request",
      source: "Prototype intake",
      status: "triage",
      signal: "Pressure test: NiceAce should convert every customer or sponsor complaint into a build artifact.",
    });
    renderRequests();
    openTab("vibeco");
  });

  document.addEventListener("click", function (event) {
    var requestButton = event.target.closest("[data-request]");
    if (requestButton) {
      var index = Number(requestButton.dataset.request);
      requests[index].status = nextStatus(requests[index].status);
      renderRequests();
    }

    var signalButton = event.target.closest("[data-signal]");
    if (signalButton) {
      selectedSignal = painSignals[Number(signalButton.dataset.signal)];
      renderSignals();
      syncPrd();
    }
  });

  renderRequests();
  renderSignals();
  syncPrd();
  syncMoney();
})();
