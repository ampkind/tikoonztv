/* =========================================================
 FILE: /assets/admin.js
 Admin: login -> list -> delete (protected by RLS + admin_users mapping)
========================================================= */

(function () {
  function cfg() {
    const c = window.TIKOONZ_CONFIG || {};
    if (!c.SUPABASE_URL || !c.SUPABASE_ANON_KEY || c.SUPABASE_URL.includes("YOUR_PROJECT") || c.SUPABASE_ANON_KEY.includes("YOUR_ANON_KEY")) {
      console.warn("TIKOONZ_CONFIG is not set. Update /assets/config.js");
    }
    return c;
  }

  function $(id){ return document.getElementById(id); }

  function escapeHtml(s){
    return window.Tikoonz?.escapeHtml ? window.Tikoonz.escapeHtml(s) : String(s ?? "");
  }

  let supabase;

  async function boot(){
    const { SUPABASE_URL, SUPABASE_ANON_KEY } = cfg();
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    $("btnLogin").addEventListener("click", login);
    $("btnLogout").addEventListener("click", logout);
    $("btnRefresh").addEventListener("click", loadList);

    supabase.auth.onAuthStateChange(() => showApp());
    await showApp();
  }

  async function showApp(){
    const { data: { session } } = await supabase.auth.getSession();
    const loggedIn = !!session;

    $("loginCard").style.display = loggedIn ? "none" : "block";
    $("dataCard").style.display = loggedIn ? "block" : "none";
    $("btnLogout").style.display = loggedIn ? "inline-flex" : "none";

    if (loggedIn) loadList();
  }

  async function login(){
    $("loginMsg").textContent = "";
    const email = $("email").value.trim();
    const password = $("password").value;

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error){ $("loginMsg").textContent = "Login failed: " + error.message; return; }
    await showApp();
  }

  async function logout(){
    await supabase.auth.signOut();
    await showApp();
  }

  async function loadList(){
    $("dataMsg").textContent = "Loading…";
    $("tbody").innerHTML = "";

    const { data, error } = await supabase
      .from("auditions")
      .select("*")
      .order("created_at", { ascending: false });

    if (error){
      $("dataMsg").textContent = "Load failed (권한 확인 필요): " + error.message;
      return;
    }

    $("count").textContent = `${data.length} item(s)`;

    for (const row of data){
      const tr = document.createElement("tr");

      const timeTd = document.createElement("td");
      timeTd.textContent = new Date(row.created_at).toLocaleString();

      const nameTd = document.createElement("td");
      nameTd.innerHTML = `<div><strong>${escapeHtml(row.name)}</strong></div><div class="muted">${escapeHtml(row.field)}</div>`;

      const linksTd = document.createElement("td");
      linksTd.innerHTML = `
        <div><a href="${escapeHtml(row.instagram)}" target="_blank" rel="noopener">Instagram</a></div>
        <div><a href="${escapeHtml(row.facebook)}" target="_blank" rel="noopener">Facebook</a></div>
        <div><a href="${escapeHtml(row.youtube)}" target="_blank" rel="noopener">YouTube</a></div>
      `;

      const emailTd = document.createElement("td");
      emailTd.textContent = row.contact_email;

      const actionTd = document.createElement("td");
      const del = document.createElement("button");
      del.className = "btn danger";
      del.textContent = "Delete";
      del.addEventListener("click", async () => {
        if (!confirm("Delete this submission?")) return;
        const { error } = await supabase.from("auditions").delete().eq("id", row.id);
        if (error){ alert("Delete failed: " + error.message); return; }
        tr.remove();
        $("count").textContent = `${document.querySelectorAll("#tbody tr").length} item(s)`;
      });
      actionTd.appendChild(del);

      tr.appendChild(timeTd);
      tr.appendChild(nameTd);
      tr.appendChild(linksTd);
      tr.appendChild(emailTd);
      tr.appendChild(actionTd);

      $("tbody").appendChild(tr);
    }

    $("dataMsg").textContent = "";
  }

  document.addEventListener("DOMContentLoaded", boot);
})();
