/* Shared eNamad footer badge for every Vike-routed page. */
(function () {
  "use strict";

  var badgeId = "enamad-footer-badge";
  var styleId = "enamad-footer-style";

  function addStyles() {
    if (document.getElementById(styleId)) return;
    var style = document.createElement("style");
    style.id = styleId;
    style.textContent = [
      ".enamad-logo-badge-group { display: inline-flex; flex: 0 0 auto; align-items: center; gap: 12px; }",
      ".enamad-footer-badge { display: inline-flex; flex: 0 0 auto; align-items: center; justify-content: center; margin: 0; box-sizing: border-box; }",
      ".enamad-footer-badge a { display: inline-flex; align-items: center; justify-content: center; min-width: 76px; min-height: 76px; padding: 5px; border-radius: 10px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14); }",
      ".enamad-footer-badge img { display: block; width: 84px; max-width: 100%; height: auto; }",
      "@media (max-width: 480px) { .enamad-logo-badge-group { gap: 8px; } .enamad-footer-badge a { min-width: 66px; min-height: 66px; } .enamad-footer-badge img { width: 74px; } }"
    ].join("\n");
    document.head.appendChild(style);
  }

  function addBadge() {
    addStyles();
    var footer = document.querySelector("footer");
    if (!footer) return;

    var badge = footer.querySelector("#" + badgeId);
    if (!badge) {
      badge = document.createElement("div");
      badge.id = badgeId;
      badge.className = "enamad-footer-badge";
      badge.innerHTML = "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7660079&Code=4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7660079&Code=4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU' alt='' style='cursor:pointer' code='4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU'></a>";
    }
    var logo = footer.querySelector("img[src*='Layer_0_']");
    var logoLink = logo && logo.closest("a");

    if (logoLink && logoLink.parentElement) {
      var group = logoLink.closest(".enamad-logo-badge-group");
      if (!group) {
        group = document.createElement("div");
        group.className = "enamad-logo-badge-group";
        logoLink.parentElement.insertBefore(group, logoLink);
        group.appendChild(logoLink);
      }
      group.appendChild(badge);
    } else {
      footer.appendChild(badge);
    }
  }

  function scheduleBadge() {
    window.requestAnimationFrame(addBadge);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleBadge, { once: true });
  } else {
    scheduleBadge();
  }

  new MutationObserver(scheduleBadge).observe(document.documentElement, { childList: true, subtree: true });
})();
