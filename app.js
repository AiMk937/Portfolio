document.addEventListener("DOMContentLoaded", () => {
  const S = window.SITE;

  // ====== Branding & Year ======
  document.getElementById("brand-name").textContent = S.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  // ====== THEME (persisted) ======
  const root = document.documentElement;
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme") || "dark";
  root.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  themeToggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });

  function updateThemeIcon(mode) {
    themeToggle.innerHTML = mode === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
    themeToggle.setAttribute("aria-label", `Switch to ${mode === "dark" ? "light" : "dark"} theme`);
  }

  // ====== Navigation ======
  const navList = document.getElementById("navList");
  navList.innerHTML = S.nav.map(n => `<li><a href="#${n.id}" data-id="${n.id}">${n.label}</a></li>`).join("");

  // Mobile nav
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav   = document.getElementById("mobileNav");
  const mobileNavList = document.getElementById("mobileNavList");
  mobileNavList.innerHTML = S.nav.map(n => `<li><a href="#${n.id}" data-id="${n.id}">${n.label}</a></li>`).join("");

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // ====== Hero ======
  const hero = document.getElementById("hero");
  hero.innerHTML = `
    <div class="wrap center reveal">
      <h1 class="hero-title">${S.name}</h1>
      <p class="hero-role">${S.role}</p>
      <p class="hero-tagline">${S.tagline}</p>
      <div class="badges">${S.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
      <div class="hero-cta">
        <a href="${S.ctaPrimary.link}" class="btn btn-primary"> ${S.ctaPrimary.text}</a>
        <a href="${S.ctaSecondary.link}" class="btn btn-ghost">${S.ctaSecondary.text}</a>
      </div>
    </div>`;

  // ====== Section Builder ======
  const app = document.getElementById("app");
  const section = (id, title, content, extraClass = "") => `
    <section id="${id}" class="section ${extraClass}">
      <div class="wrap">
        <h2 class="section-title">${title}</h2>
        ${content}
      </div>
    </section>`;

  // About
  const about = `
    <div class="card reveal">
      <p>${S.about.intro}</p>
      <ul>${S.about.bullets.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`;

  // Experience
  const exp = `
    <div class="grid">
      ${S.experience.map(e => `
        <div class="card reveal">
          <h3>${e.title} — ${e.org}</h3>
          <small>${e.period}</small>
          <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
          <div class="tag-row">${e.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;

  // Projects (filters + grid)
  const allTags = Array.from(new Set(S.projects.flatMap(p => p.tags)));
  const projectsGrid = () => `
    <div class="projects-grid">
      ${S.projects.map(p => `
        <div class="project-card reveal" data-tags="${p.tags.join(",")}">
          <h3>${p.name}</h3>
          <p>${p.blurb}</p>
          <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
          <a href="${p.link}" target="_blank" rel="noopener" class="project-btn">View</a>
        </div>`).join("")}
    </div>`;

  const projectControls = `
    <div class="projects-controls" id="projectControls" aria-label="Project filters">
      <button class="filter-chip active" data-filter="*">All</button>
      ${allTags.map(t => `<button class="filter-chip" data-filter="${t}">${t}</button>`).join("")}
    </div>`;

  const projects = `
    ${projectControls}
    ${projectsGrid()}
  `;

  // Tech Stack
  const tech = `
    <div class="grid">
      ${S.tech.map(g => `
        <div class="card reveal">
          <h3>${g.group}</h3>
          <div class="tag-row">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;

  // Education
  const edu = `
    <div class="grid">
      ${S.education.map(e => `
        <div class="card reveal">
          <h3>${e.school}</h3>
          <p>${e.degree || ""}</p>
          <small>${e.period}</small>
          <p>${e.detail}</p>
        </div>`).join("")}
    </div>`;

  // Certificates (now with "View Certificate" button)
  const certs = `
    <div class="grid">
      ${(S.certs || []).map(c => `
        <div class="card reveal">
          <h3>${c.title}</h3>
          <p><small>${c.by || ""}</small></p>
          <button class="btn btn-primary view-cert" data-img="${c.link}" aria-label="View certificate for ${c.title}">
            View Certificate
          </button>
        </div>`).join("")}
    </div>
    <div id="certModal" class="cert-modal" role="dialog" aria-modal="true">
      <div class="cert-modal-content">
        <span class="close-btn" id="closeCert">&times;</span>
        <img id="certImage" alt="Certificate Image" />
      </div>
    </div>`;

  // Publications
  const pubs = `
    <div class="grid">
      ${S.pubs.map(p => `
        <div class="card reveal">
          <h3>${p.title}</h3>
          <small>${p.outlet}</small>
          <p><a href="${p.link}" target="_blank" rel="noopener" class="btn btn-ghost">View</a></p>
        </div>`).join("")}
    </div>`;

  // Contact
  const contact = `
    <div class="contact-panel center reveal">
      <p>${S.contact.blurb}</p>
      <div class="contact-links">
        ${S.contact.links.map(l => `<a href="${l.href}" class="contact-link" target="_blank" rel="noopener">${l.label}</a>`).join("")}
      </div>
    </div>`;

  // Inject all sections
  app.innerHTML = [
    section("about", "About", about),
    section("experience", "Experience", exp),
    section("projects", "Projects", projects),
    section("tech", "Tech Stack", tech),
    section("education", "Education", edu),
    section("certs", "Certificates", certs),
    section("pubs", "Publications", pubs),
    section("contact", "Contact", contact)
  ].join("");

  // ====== Project Filter Logic ======
  const controls = document.getElementById("projectControls");
  const projectCards = Array.from(document.querySelectorAll(".project-card"));
  if (controls) {
    controls.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-filter]");
      if (!btn) return;
      controls.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      projectCards.forEach(card => {
        if (filter === "*") card.style.display = "";
        else {
          const tags = card.getAttribute("data-tags").split(",");
          card.style.display = tags.includes(filter) ? "" : "none";
        }
      });
    });
  }

  // ====== IntersectionObserver: reveal + active nav ======
  const sections = S.nav.map(n => document.getElementById(n.id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll('#site-nav a, #mobileNav a'));

  // Reveal animations
  const revealEls = document.querySelectorAll(".reveal");
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  revealEls.forEach(el => revealObs.observe(el));

  // Active nav highlight
  const activeObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.id;
      if (entry.isIntersecting) {
        navLinks.forEach(a => {
          const match = a.getAttribute("data-id") === id;
          a.classList.toggle("active", match);
          if (match) a.setAttribute("aria-current", "page");
          else a.removeAttribute("aria-current");
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  sections.forEach(sec => activeObs.observe(sec));

  // ====== CERTIFICATE MODAL LOGIC ======
  const modal = document.getElementById("certModal");
  const modalImg = document.getElementById("certImage");
  const closeBtn = document.getElementById("closeCert");

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-cert");
    if (btn) {
      const src = btn.getAttribute("data-img");
      modalImg.src = src;
      modal.classList.add("open");
    }
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
});