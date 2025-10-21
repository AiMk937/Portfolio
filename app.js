document.addEventListener("DOMContentLoaded", () => {
  const S = window.SITE;

  // Branding
  document.getElementById("brand-name").textContent = S.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  // Navigation
  const navList = document.getElementById("navList");
  navList.innerHTML = S.nav.map(n => `<li><a href="#${n.id}">${n.label}</a></li>`).join("");

  // Hero
  const hero = document.getElementById("hero");
  hero.innerHTML = `
    <div class="wrap center">
      <h1 class="hero-title">${S.name}</h1>
      <p class="hero-role">${S.role}</p>
      <p class="hero-tagline">${S.tagline}</p>
      <div class="badges">${S.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
      <div class="hero-cta">
        <a href="${S.ctaPrimary.link}" class="btn btn-primary">${S.ctaPrimary.text}</a>
        <a href="${S.ctaSecondary.link}" class="btn btn-ghost">${S.ctaSecondary.text}</a>
      </div>
    </div>`;

  // Build sections dynamically
  const app = document.getElementById("app");

  const section = (id, title, content) => `
    <section id="${id}" class="section">
      <div class="wrap">
        <h2 class="section-title">${title}</h2>
        ${content}
      </div>
    </section>`;

  // About
  const about = `
    <div class="card">
      <p>${S.about.intro}</p>
      <ul>${S.about.bullets.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`;

  // Experience
  const exp = S.experience.map(e => `
    <div class="card">
      <h3>${e.title} — ${e.org}</h3>
      <small>${e.period}</small>
      <ul>${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
      <div class="tag-row">${e.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>`).join("");

  // Projects
  const projects = S.projects.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <p>${p.blurb}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="project-tag">${t}</span>`).join("")}</div>
      <a href="${p.link}" target="_blank" class="project-btn">View</a>
    </div>`).join("");

  // Tech Stack
  const tech = S.tech.map(g => `
    <div class="card">
      <h3>${g.group}</h3>
      <div class="tag-row">${g.items.map(i => `<span class="tag">${i}</span>`).join("")}</div>
    </div>`).join("");

  // Education
  const edu = S.education.map(e => `
    <div class="card">
      <h3>${e.school}</h3>
      <p>${e.degree || ""}</p>
      <small>${e.period}</small>
      <p>${e.detail}</p>
    </div>`).join("");

  // Publications
  const pubs = S.pubs.map(p => `
    <div class="card">
      <h3>${p.title}</h3>
      <small>${p.outlet}</small>
      <p><a href="${p.link}" target="_blank" class="btn btn-ghost">View</a></p>
    </div>`).join("");

  // Contact
  const contact = `
    <div class="contact-panel center">
      <p>${S.contact.blurb}</p>
      <div class="contact-links">
        ${S.contact.links.map(l => `<a href="${l.href}" class="contact-link" target="_blank">${l.label}</a>`).join("")}
      </div>
    </div>`;

  app.innerHTML = [
    section("about", "About", about),
    section("experience", "Experience", exp),
    section("projects", "Projects", projects),
    section("tech", "Tech Stack", tech),
    section("education", "Education", edu),
    section("pubs", "Publications", pubs),
    section("contact", "Contact", contact)
  ].join("");
});