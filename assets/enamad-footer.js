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
      ".enamad-footer-badge { display: flex; align-items: center; justify-content: center; padding: 16px 12px; margin: 0 auto; width: 100%; box-sizing: border-box; }",
      ".enamad-footer-badge a { display: inline-flex; align-items: center; justify-content: center; min-width: 96px; min-height: 96px; padding: 6px; border-radius: 12px; background: rgba(255, 255, 255, 0.96); box-shadow: 0 4px 16px rgba(0, 0, 0, 0.14); }",
      ".enamad-footer-badge img { display: block; width: 110px; max-width: 100%; height: auto; }",
      "@media (max-width: 480px) { .enamad-footer-badge { padding: 14px 8px; } .enamad-footer-badge a { min-width: 88px; min-height: 88px; } .enamad-footer-badge img { width: 96px; } }"
    ].join("\n");
    document.head.appendChild(style);
  }

  function addBadge() {
    addStyles();
    var footer = document.querySelector("footer");
    if (!footer || footer.querySelector("#" + badgeId)) return;

    var badge = document.createElement("div");
    badge.id = badgeId;
    badge.className = "enamad-footer-badge";
    badge.innerHTML = "<a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/?id=7660079&Code=4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=7660079&Code=4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU' alt='' style='cursor:pointer' code='4IXhqn15ERsZtL5TKetkEb1ggQTnmRjU'></a>";
    footer.appendChild(badge);
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
