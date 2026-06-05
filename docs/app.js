(function () {
  var pot = 48750;
  var field = 137;

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

  syncMoney();
})();
