/* =========================================================
 FILE: /assets/site.js
 Common JS: language toggle (KR/EN), i18n apply, helpers
========================================================= */

(function () {
  const STORAGE_KEY = "tikoonz_lang"; // "ko" | "en"
  const DEFAULT_LANG = "ko";

  function getLang() {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.setAttribute("lang", lang === "en" ? "en" : "ko");
    applyLang(lang);
    updateLangButtons(lang);
  }

  function applyLang(lang) {
    const dict = window.__i18n || {};
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const val = (dict[lang] && dict[lang][key]) || "";
      if (!val) return;

      if (el.hasAttribute("data-i18n-attr")) {
        const attr = el.getAttribute("data-i18n-attr");
        el.setAttribute(attr, val);
      } else {
        el.textContent = val;
      }
    });
  }

  function updateLangButtons(lang) {
    document.querySelectorAll("[data-lang-toggle]").forEach((wrap) => {
      const koBtn = wrap.querySelector('button[data-lang="ko"]');
      const enBtn = wrap.querySelector('button[data-lang="en"]');
      if (koBtn) koBtn.setAttribute("aria-pressed", String(lang === "ko"));
      if (enBtn) enBtn.setAttribute("aria-pressed", String(lang === "en"));
    });
  }

  function initLangToggle() {
    document.querySelectorAll("[data-lang-toggle]").forEach((wrap) => {
      wrap.addEventListener("click", (e) => {
        const btn = e.target.closest("button[data-lang]");
        if (!btn) return;
        setLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function escapeHtml(s){
    return String(s ?? "").replace(/[&<>"']/g, c => ({
      "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
    }[c]));
  }

  window.Tikoonz = { getLang, setLang, escapeHtml };

  document.addEventListener("DOMContentLoaded", () => {
    initLangToggle();
    setLang(getLang());
  });
})();
