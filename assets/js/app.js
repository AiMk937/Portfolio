/* Shared rendering for every page. Each HTML page sets <body data-page="..."> and this file draws it from DATA. */
(function () {
  const D = window.DATA;
  const P = D.person;
  const $ = (sel, root = document) => root.querySelector(sel);
  const params = new URLSearchParams(location.search);

  // Escapes text before it goes into HTML
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  // Storage wrapped in try/catch - private windows can throw
  const store = {
    get: (k) => { try { return localStorage.getItem(k); } catch { return null; } },
    set: (k, v) => { try { localStorage.setItem(k, v); } catch { /* ignore */ } }
  };

  /* ---------- Icons (inline SVG, stroke = currentColor) ---------- */
  const paths = {
    smile: '<circle cx="12" cy="12" r="9"/><path d="M8.5 14.5s1.3 2 3.5 2 3.5-2 3.5-2"/><path d="M9 9.5h.01M15 9.5h.01"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18"/>',
    cap: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.5-3.5 3.2-5.5 6.5-5.5s6 2 6.5 5.5"/><circle cx="17" cy="9" r="2.5"/><path d="M16.5 14.6c2.6.3 4.4 2 4.9 4.9"/>',
    megaphone: '<path d="M3 11v2a1 1 0 0 0 1 1h3l8 5V5L7 10H4a1 1 0 0 0-1 1z"/><path d="M18.5 9a4 4 0 0 1 0 6"/>',
    compass: '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5l-2 5-5 2 2-5z"/>',
    pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    book: '<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5"/>',
    doc: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="M19 12H5M11 18l-6-6 6-6"/>',
    ext: '<path d="M14 4h6v6M20 4l-9 9"/><path d="M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="M8 12.5l2.5 2.5L16 9.5"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
    moon: '<path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z"/>',
    brain: '<path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 6 1V5a2 2 0 0 0-3-1z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-6 1"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M9 12l2 2 4-4"/>',
    chip: '<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
    cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/>',
    camera: '<path d="M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13.5" r="3.5"/>',
    sparkle: '<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',
    github: '<path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>',
    linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7M8 7v.01M12 17v-4a2 2 0 0 1 4 0v4M12 10v7"/>',
    kaggle: '<path d="M7 3v18M7 13l9-9M10 11l7 10"/>',
    table: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M3 15h18M9 4v16"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/>',
    youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z"/>',
    twitch: '<path d="M4 3h16v11l-4 4h-4l-3 3v-3H5V7z"/><path d="M11 8v4M15 8v4"/>',
    phone: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    leetcode: '<path d="M14 4L6.5 11.5a3 3 0 0 0 0 4.2l2 2a3 3 0 0 0 4.2 0L15 15.5"/><path d="M9 13h10"/>'
  };
  const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || ""}</svg>`;

  /* ---------- Theme ---------- */
  function applyTheme(t) { document.documentElement.setAttribute("data-theme", t); }
  applyTheme(store.get("theme") || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"));
  function toggleTheme() {
    const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
    applyTheme(next); store.set("theme", next); paintThemeBtn();
  }
  function paintThemeBtn() {
    const b = $("#theme-btn"); if (!b) return;
    const light = document.documentElement.getAttribute("data-theme") === "light";
    b.innerHTML = icon(light ? "moon" : "sun");
    b.setAttribute("aria-label", light ? "Switch to dark mode" : "Switch to light mode");
  }

  /* ---------- Avatar: photo if it exists, initials otherwise ---------- */
  // The photo sits on top of the initials and removes itself if the file is missing
  function avatar(cls = "avatar") {
    return `<span class="${cls}"><span aria-hidden="true">${P.initials}</span><img src="${P.photo}" alt="${esc(P.name)}" onerror="this.remove()"></span>`;
  }

  /* ---------- Header & footer ---------- */
  function header() {
    const el = document.createElement("header");
    el.className = "site-header";
    el.innerHTML = `<div class="wrap">
      <a class="brand" href="index.html">${avatar()}<span>${esc(P.name)}</span></a>
      <nav class="header-nav" aria-label="Main">
        <a href="index.html" class="hide-sm">Change view</a>
        <a href="skills.html">Skills</a>
        <a href="${P.resume}" target="_blank" rel="noopener" class="hide-sm">Resume</a>
        <button class="icon-btn" id="theme-btn" type="button"></button>
      </nav></div>`;
    document.body.prepend(el);
    const glow = document.createElement("div"); glow.className = "glow"; document.body.prepend(glow);
    $("#theme-btn").addEventListener("click", toggleTheme);
    paintThemeBtn();
  }
  function socials() {
    const L = P.links;
    return `<div class="socials">
      <a href="${L.github}" target="_blank" rel="noopener" aria-label="GitHub">${icon("github")}</a>
      <a href="${L.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icon("linkedin")}</a>
      <a href="${L.kaggle}" target="_blank" rel="noopener" aria-label="Kaggle">${icon("kaggle")}</a>
      <a href="${L.leetcode}" target="_blank" rel="noopener" aria-label="LeetCode">${icon("leetcode")}</a>
      <a href="mailto:${P.email}" aria-label="Email">${icon("mail")}</a>
      ${P.creator.map((c) => `<a href="${c.url}" target="_blank" rel="noopener" aria-label="${esc(c.label)} ${esc(c.handle)}">${icon(c.icon)}</a>`).join("")}</div>`;
  }
  function footer() {
    const el = document.createElement("footer");
    el.className = "site-footer";
    el.innerHTML = `<div class="wrap"><span>© ${new Date().getFullYear()} ${esc(P.name)} · ${esc(P.location)}</span>${socials()}</div>`;
    document.body.appendChild(el);
  }

  /* ---------- Reusable blocks ---------- */
  const projById = Object.fromEntries(D.projects.map((p) => [p.id, p]));
  const jobById = Object.fromEntries(D.experience.map((j) => [j.id, j]));

  function projectCard(p, extra = "") {
    const link = p.link ? `<a class="link" href="${p.link}" target="_blank" rel="noopener">View code ${icon("ext")}</a>` : `<span class="link" style="color:var(--faint)">Code is private</span>`;
    return `<article class="card lift reveal">
      <h3>${esc(p.name)}</h3>
      <div class="metric">${esc(p.metric)}</div>
      <p class="muted">${esc(extra || p.oneLiner)}</p>
      ${extra ? "" : `<p class="muted" style="margin-top:8px;font-size:14px">${esc(p.detail)}</p>`}
      <div class="chips" style="margin-top:14px">${p.stack.map((s) => `<span class="chip">${esc(s)}</span>`).join("")}</div>
      ${link}</article>`;
  }
  function jobBlock(j) {
    return `<article class="card job reveal">
      <div class="when">${esc(j.dates)}</div>
      <div><h3>${esc(j.title)}</h3><div class="org">${esc(j.org)}${j.where ? " · " + esc(j.where) : ""}</div>
      <ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
      <div class="chips">${j.tags.map((t) => `<span class="chip">${esc(t)}</span>`).join("")}</div></div></article>`;
  }
  function pubBlock(p) {
    return `<article class="card pub reveal"><span class="role">${esc(p.role)}</span><h3>${esc(p.title)}</h3>
      <div class="meta">${esc(p.authors)}</div><div class="meta">${esc(p.venue)} · ${esc(p.issue)}</div>
      <a class="link" href="${p.link}" target="_blank" rel="noopener">Read paper ${icon("ext")}</a></article>`;
  }
  function eduBlock(e) {
    return `<article class="card reveal"><h3>${esc(e.school)}</h3><div class="metric">${esc(e.degree)}</div>
      <p class="muted">${esc(e.dates)} · ${esc(e.note)}</p></article>`;
  }
  // "name" means name.webp; "name.jpg" (any extension) is used as-is
  const certSrc = (img) => `assets/img/certs/${img.includes(".") ? img : img + ".webp"}`;
  function certGrid(list = D.certificates) {
    return `<div class="grid three">${list.map((c, i) => c.img
      ? `<button class="card cert lift reveal" type="button" data-cert="${i}"><img loading="lazy" src="${certSrc(c.img)}" alt="${esc(c.title)} certificate"><div class="cert-body"><strong>${esc(c.title)}</strong><span>${esc(c.issuer)}</span></div></button>`
      : `<a class="card cert lift reveal" href="${c.link}" target="_blank" rel="noopener"><div class="cert-body"><strong>${esc(c.title)}</strong><span>${esc(c.issuer)} · verified on Credly</span></div></a>`).join("")}</div>
      <dialog class="viewer" id="viewer"><div class="bar"><strong id="viewer-title"></strong><button class="icon-btn" type="button" id="viewer-close" aria-label="Close">✕</button></div><img id="viewer-img" alt=""></dialog>`;
  }
  // Opens a certificate in a full-size dialog
  function wireCerts() {
    const dlg = $("#viewer"); if (!dlg) return;
    document.querySelectorAll("[data-cert]").forEach((b) => b.addEventListener("click", () => {
      const c = D.certificates[b.dataset.cert];
      $("#viewer-img").src = certSrc(c.img); $("#viewer-img").alt = c.title;
      $("#viewer-title").textContent = c.title; dlg.showModal();
    }));
    $("#viewer-close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  }
  const section = (eyebrow, title, body, id = "") =>
    `<section${id ? ` id="${id}"` : ""}><div class="wrap"><div class="section-head"><span class="eyebrow">${eyebrow}</span><h2>${title}</h2></div>${body}</div></section>`;
  const moreSkills = (hash = "", label = "I have other skills too") => `<section><div class="wrap"><div class="more reveal">
      <div><h3>${label}</h3><p class="muted">Data, security, IoT, creative work and more - grouped by role.</p></div>
      <a class="btn primary" href="skills.html${hash}">See all my skills ${icon("arrow")}</a></div></div></section>`;
  const creatorLinks = () => `<div class="btn-row">${P.creator.map((c) => `<a class="btn" href="${c.url}" target="_blank" rel="noopener">${icon(c.icon)} ${esc(c.label)} <span class="muted" style="font-weight:500">${esc(c.handle)}</span></a>`).join("")}</div>`;
  const contactCta = (subject, line, resume = P.resume) => section("Contact", line,
    `<div class="btn-row"><a class="btn primary" href="mailto:${P.email}?subject=${encodeURIComponent(subject)}">${icon("mail")} ${esc(P.email)}</a>
     <a class="btn" href="${resume}" target="_blank" rel="noopener">${icon("doc")} Resume</a>
     <a class="btn" href="${P.links.linkedin}" target="_blank" rel="noopener">${icon("linkedin")} LinkedIn</a></div>`);

  /* ---------- Pages ---------- */
  const pages = {
    landing() {
      $("#hello-avatar").outerHTML = avatar("avatar");
      $("#picker-grid").innerHTML = D.visitors.map((v) =>
        `<a class="pick" href="${v.href}" data-visitor="${v.id}"><span class="ico">${icon(v.icon)}</span><strong>${esc(v.label)}</strong><span>${esc(v.note)}</span></a>`).join("");
      document.querySelectorAll("[data-visitor]").forEach((a) => a.addEventListener("click", () => store.set("visitor", a.dataset.visitor)));
      const last = D.visitors.find((v) => v.id === store.get("visitor"));
      if (last) $("#remembered").innerHTML = `Welcome back - <a href="${last.href}">continue as ${esc(last.label.toLowerCase())}</a>?`;
    },

    friend() {
      const F = D.friend;
      $("#main").innerHTML = `
        <div class="page-hero wrap"><a class="crumb" href="index.html">${icon("back")} Not a friend? Pick again</a>
          <h1>${esc(F.hello)} <span class="wave">👋</span></h1><p class="lede">${esc(F.sub)}</p></div>
        ${section("By the numbers", "📊 Very scientific stats", `<div class="stat-grid">${F.stats.map((s) => `<div class="card stat tilt reveal"><span class="emoji" aria-hidden="true">${s.e || ""}</span><b>${esc(s.n)}</b><span>${esc(s.l)}</span></div>`).join("")}</div>`)}
        ${section("The lore", "📜 Things you should know", `<div class="grid three">${F.facts.map((f) => `<div class="card tilt reveal"><span class="emoji" aria-hidden="true">${f.e || ""}</span><h3>${esc(f.t)}</h3><p class="muted">${esc(f.d)}</p></div>`).join("")}</div>`)}
        ${section("Side quests", "🛠️ " + esc(F.projectsIntro), `<div class="grid two">${F.projects.map((x) => projectCard(projById[x.id], x.joke)).join("")}</div>`)}
        ${moreSkills("", "Yes, I can also edit your photos 📸")}
        ${section("Hit me up", esc(F.outro), (() => {
          // Instagram is the main way to reach me; YouTube and Twitch get a follow/subscribe nudge
          const ig = P.creator.find((c) => c.icon === "instagram");
          const rest = P.creator.filter((c) => c.icon !== "instagram");
          return `<div class="btn-row"><a class="btn primary" href="${ig.url}" target="_blank" rel="noopener">${icon("instagram")} DM me on Instagram <span style="opacity:.85;font-weight:500">${esc(ig.handle)}</span></a>
            <a class="btn" href="hire.html">${icon("briefcase")} Okay fine, the serious version</a></div>
            <div class="nudge reveal"><p><strong>Don't forget to subscribe and follow!</strong> 🔔 Riding videos, Valorant clips and live streams.</p>
            <div class="btn-row">${rest.map((c) => `<a class="btn" href="${c.url}" target="_blank" rel="noopener">${icon(c.icon)} ${c.icon === "youtube" ? "Subscribe" : "Follow"} · ${esc(c.handle)}</a>`).join("")}</div></div>`;
        })())}`;
    },

    academic() {
      const who = ["professor", "colleague", "visitor"].includes(params.get("for")) ? params.get("for") : "visitor";
      document.body.classList.toggle("academic", who === "professor");
      const intro = {
        professor: ["Research & academics", "Applied machine learning, with a focus on security", "I'm an M.S. Applied Data Intelligence student at San José State University with a B.E. in Computer Engineering (Honors in Cyber Security). My work centres on applied ML for security and on NLP, and I've published two papers. I'm always glad to discuss research, coursework, or research and teaching assistant opportunities."],
        colleague: ["Let's work together", "Good to meet you - here's what I bring to a team", "I'm in the M.S. Applied Data Intelligence program at SJSU. I enjoy group projects where we build something real - an ML model, a database, an app - and I'm happy to take the data, modeling or backend side."],
        visitor: ["Quick tour", "Hi, I'm Aimaan", P.intro]
      }[who];
      const researchIds = ["cyber", "toxic", "timetable", "smarttracker"];
      const pubs = section("Publications", "Peer-reviewed work", `<div class="grid two">${D.publications.map(pubBlock).join("")}</div>`, "publications");
      const research = section(who === "professor" ? "Research projects" : "Projects", who === "professor" ? "Methods and results" : "Things I've built",
        `<div class="grid two">${(who === "professor" ? researchIds : D.projects.slice(0, 6).map((p) => p.id)).map((id) => projectCard(projById[id])).join("")}</div>`, "projects");
      const edu = section("Education", "Where I study", `<div class="grid two">${D.education.map(eduBlock).join("")}</div>`, "education");
      const exp = section("Experience", "Industry work", `<div class="timeline">${D.experience.map(jobBlock).join("")}</div>`, "experience");
      const certs = section("Certificates", "Courses and credentials", certGrid(), "certificates");
      const teamUp = section("Team up", "Good things to ask me about", `<ul class="why card reveal">${[
        "Machine learning and model evaluation - especially spotting data leakage",
        "SQL and database design - normalization, schemas, queries",
        "Python backends (Flask, FastAPI) and Node.js/Express apps",
        "Getting hardware (Raspberry Pi, ESP32) to talk to software",
        "Making slides and visuals that don't look like defaults"].map((t) => `<li>${icon("check")}<span>${esc(t)}</span></li>`).join("")}</ul>`);
      const order = {
        professor: [pubs, research, edu, exp, certs],
        colleague: [teamUp, research, exp, edu],
        visitor: [research, exp, pubs, edu]
      }[who];
      const other = who === "visitor" ? `<a class="btn" href="hire.html">${icon("briefcase")} I'm hiring</a><a class="btn" href="friend.html">${icon("smile")} We're friends</a>` : "";
      $("#main").innerHTML = `
        <div class="page-hero wrap"><a class="crumb" href="index.html">${icon("back")} Change view</a>
          <span class="eyebrow" style="display:block;margin-top:18px">${intro[0]}</span><h1>${esc(intro[1])}</h1><p class="lede">${esc(intro[2])}</p>
          <div class="btn-row"><a class="btn primary" href="mailto:${P.email}?subject=${encodeURIComponent(who === "professor" ? "Research / academic enquiry" : "Hello from SJSU")}">${icon("mail")} Email me</a>
          <a class="btn" href="${P.resume}" target="_blank" rel="noopener">${icon("doc")} Resume</a>${other}</div></div>
        ${order.join("")}
        ${moreSkills()}
        ${who === "visitor" ? "" : contactCta(who === "professor" ? "Research / academic enquiry" : "Hello from SJSU", who === "professor" ? "I'd be glad to hear from you" : "Say hi")}`;
      wireCerts();
    },

    hire() {
      const R = D.roles;
      const roleIcons = { "software": "code", "data-science": "chart", "data-analyst": "table", "ml": "brain", "security": "shield", "ambassador": "megaphone", "campus": "users" };
      $("#main").innerHTML = `
        <div class="page-hero wrap"><a class="crumb" href="index.html">${icon("back")} Change view</a>
          <h1>What role are you hiring for?</h1>
          <p class="lede">Pick one and I'll show you only what matters for it - relevant projects, experience and skills.</p></div>
        <section style="padding-top:12px"><div class="wrap"><div class="role-grid">${Object.entries(R).map(([id, r]) =>
          `<a class="pick" href="role.html?r=${id}"><span class="ico">${icon(roleIcons[id] || "sparkle")}</span><strong>${esc(r.title)}</strong><span>${esc(r.pitch)}</span></a>`).join("")}
          <a class="pick" href="mailto:${P.email}?subject=${encodeURIComponent("A role not listed on your site")}"><span class="ico">${icon("mail")}</span><strong>Something else</strong><span>Tell me about it - I'm open to related roles.</span></a>
        </div></div></section>
        ${section("At a glance", "The short version", `<div class="stat-grid">
          <div class="card stat reveal"><b>3</b><span>internships - ML/security, web, IoT</span></div>
          <div class="card stat reveal"><b>2</b><span>published papers (one as first author)</span></div>
          <div class="card stat reveal"><b>97.6%</b><span>accuracy on my intrusion-detection model, leakage-free</span></div>
          <div class="card stat reveal"><b>M.S.</b><span>Applied Data Intelligence, San José State University</span></div></div>`)}
        ${contactCta("Opportunity for Aimaan", "Prefer to talk directly?")}`;
    },

    role() {
      const id = params.get("r");
      const r = D.roles[id];
      if (!r) { location.replace("hire.html"); return; }
      document.title = `${r.title} - ${P.name}`;
      const projects = D.projects.filter((p) => p.roles.includes(id));
      const jobs = r.experience.map((j) => jobById[j]).filter(Boolean);
      const skillToCluster = { "software": "#software-engineering", "data-science": "#data", "data-analyst": "#data", "ml": "#machine-learning-ai", "security": "#security", "ambassador": "#creative", "campus": "#people" };
      $("#main").innerHTML = `
        <div class="page-hero wrap"><a class="crumb" href="hire.html">${icon("back")} Pick a different role</a>
          <span class="eyebrow" style="display:block;margin-top:18px">For: ${esc(r.title)}</span>
          <h1>${esc(r.pitch)}</h1>
          <p class="lede">${esc(P.school)} · ${esc(P.location)}</p>
          <div class="btn-row"><a class="btn primary" href="mailto:${P.email}?subject=${encodeURIComponent(r.title + " opportunity")}">${icon("mail")} Contact me about this role</a>
          <a class="btn" href="${r.resume || P.resume}" target="_blank" rel="noopener">${icon("doc")} ${esc(r.title)} resume</a></div></div>
        ${section("Why me", `Why I fit ${/^[AEIOU]/i.test(r.title) ? "an" : "a"} ${esc(r.title)} role`, `<ul class="why card reveal">${r.why.map((w) => `<li>${icon("check")}<span>${esc(w)}</span></li>`).join("")}</ul>`)}
        ${section("Core skills", "What I'd use day to day", `<div class="chips">${r.skills.map((s) => `<span class="chip hot">${esc(s)}</span>`).join("")}</div>`)}
        ${r.extra ? section("Roles", "Relevant experience", `<div class="grid two">${r.extra.map((x) => `<article class="card reveal"><h3>${esc(x.title)}</h3><div class="metric">${esc(x.org)} · ${esc(x.dates)}</div><p class="muted">${esc(x.text)}</p></article>`).join("")}</div>`) : ""}
        ${id === "ambassador" ? section("Channels", "Where I create", creatorLinks()) : ""}
        ${projects.length ? section("Projects", "Most relevant work", `<div class="grid two">${projects.map((p) => projectCard(p)).join("")}</div>`) : ""}
        ${jobs.length ? section("Experience", r.extra ? "Work experience" : "Where I've done this", `<div class="timeline">${jobs.map(jobBlock).join("")}</div>`) : ""}
        ${["ml", "data-science", "security"].includes(id) ? section("Research", "Publications", `<div class="grid two">${D.publications.map(pubBlock).join("")}</div>`) : ""}
        ${moreSkills(skillToCluster[id] || "")}
        ${contactCta(r.title + " opportunity", "Let's talk", r.resume || P.resume)}`;
    },

    skills() {
      const slug = (t) => t.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      $("#main").innerHTML = `
        <div class="page-hero wrap"><a class="crumb" href="javascript:history.back()">${icon("back")} Back</a>
          <h1>Everything I can do</h1><p class="lede">Grouped by the kind of role it's useful for - plus the creative and people skills that don't fit on a resume.</p>
          <div class="chips" style="margin-top:20px">${D.skillClusters.map((c) => `<a class="chip" style="text-decoration:none" href="#${slug(c.title)}">${esc(c.title)}</a>`).join("")}</div></div>
        <section style="padding-top:24px"><div class="wrap grid two">${D.skillClusters.map((c) =>
          `<article class="card cluster reveal" id="${slug(c.title)}"><h3>${icon(c.icon)} ${esc(c.title)}</h3><div class="chips">${c.items.map((i) => `<span class="chip">${esc(i)}</span>`).join("")}</div></article>`).join("")}</div></section>
        ${contactCta("Hello from your portfolio", "See something you need?")}`;
    }
  };

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    header();
    const page = document.body.dataset.page;
    (pages[page] || (() => {}))();
    footer();
    // Fades sections in as they scroll into view
    const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .08 }) : null;
    document.querySelectorAll(".reveal").forEach((el) => io ? io.observe(el) : el.classList.add("in"));
    if (location.hash) { const t = document.getElementById(location.hash.slice(1)); if (t) t.scrollIntoView(); }
  });
})();
