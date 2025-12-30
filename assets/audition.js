/* =========================================================
 FILE: /assets/audition.js
 Audition form: validate + insert into Supabase table "auditions"
 Email submission is NOT used. We store links + contact email.
========================================================= */

(function () {
  function cfg() {
    const c = window.TIKOONZ_CONFIG || {};
    if (!c.SUPABASE_URL || !c.SUPABASE_ANON_KEY || c.SUPABASE_URL.includes("YOUR_PROJECT") || c.SUPABASE_ANON_KEY.includes("YOUR_ANON_KEY")) {
      console.warn("TIKOONZ_CONFIG is not set. Update /assets/config.js");
    }
    return c;
  }

  function t(key){
    const lang = window.Tikoonz?.getLang?.() || "ko";
    return window.__i18n?.[lang]?.[key] || "";
  }

  function setStatus(msgKeyOrText){
    const el = document.querySelector("[data-form-status]");
    if (!el) return;
    // allow passing raw text
    el.textContent = t(msgKeyOrText) || msgKeyOrText || "";
  }

  function isValidUrl(value) {
    try {
      const u = new URL(value);
      return u.protocol === "http:" || u.protocol === "https:";
    } catch { return false; }
  }

  function setFieldError(input, msgKey){
    const group = input.closest(".field");
    if (!group) return;
    group.classList.add("has-error");
    const err = group.querySelector(".error");
    if (err) err.textContent = t(msgKey) || msgKey || "";
  }

  function clearFieldError(input){
    const group = input.closest(".field");
    if (!group) return;
    group.classList.remove("has-error");
    const err = group.querySelector(".error");
    if (err) err.textContent = "";
  }

  async function submit(form){
    setStatus("");
    const nameEl = form.querySelector('[name="name"]');
    const fieldEl = form.querySelector('[name="field"]');
    const instagramEl = form.querySelector('[name="instagram"]');
    const facebookEl = form.querySelector('[name="facebook"]');
    const youtubeEl = form.querySelector('[name="youtube"]');
    const contactEmailEl = form.querySelector('[name="contact_email"]');

    const fields = [nameEl, fieldEl, instagramEl, facebookEl, youtubeEl, contactEmailEl];
    fields.forEach(clearFieldError);

    let ok = true;

    if (!nameEl.value.trim()){ setFieldError(nameEl, "err_required"); ok = false; }
    if (!fieldEl.value){ setFieldError(fieldEl, "err_required"); ok = false; }

    const urls = [
      [instagramEl, instagramEl.value.trim()],
      [facebookEl, facebookEl.value.trim()],
      [youtubeEl, youtubeEl.value.trim()],
    ];
    for (const [el, v] of urls){
      if (!v){ setFieldError(el, "err_required"); ok = false; continue; }
      if (!isValidUrl(v)){ setFieldError(el, "err_url"); ok = false; }
    }

    const email = contactEmailEl.value.trim();
    if (!email){ setFieldError(contactEmailEl, "err_required"); ok = false; }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ setFieldError(contactEmailEl, "err_email"); ok = false; }

    if (!ok) return;

    const btn = form.querySelector('button[type="submit"]');
    if (btn) btn.disabled = true;
    setStatus("sending");

    try{
      // supabase-js v2 is required (loaded via CDN on the page)
      const { SUPABASE_URL, SUPABASE_ANON_KEY } = cfg();
      const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

      const payload = {
        name: nameEl.value.trim(),
        field: fieldEl.value,
        instagram: instagramEl.value.trim(),
        facebook: facebookEl.value.trim(),
        youtube: youtubeEl.value.trim(),
        contact_email: email
      };

      const { error } = await supabase.from("auditions").insert([payload]);
      if (error) throw error;

      form.reset();
      setStatus("sent_ok");
    } catch(e){
      console.error(e);
      setStatus("sent_fail");
    } finally{
      if (btn) btn.disabled = false;
    }
  }

  function init(){
    const form = document.querySelector("form[data-audition-form]");
    if (!form) return;
    form.addEventListener("submit", (e) => { e.preventDefault(); submit(form); });

    form.querySelectorAll("input,select").forEach((el) => {
      el.addEventListener("input", () => clearFieldError(el));
      el.addEventListener("change", () => clearFieldError(el));
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
