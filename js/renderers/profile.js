export function renderProfile(S) {
  const stats = [
    { n: S.experience.length, label: "internships" },
    { n: S.projects.length, label: "projects" },
    { n: S.publications.length, label: "publications" },
    { n: S.certificates.length, label: "certificates" }
  ];

  return `
    <div class="profile-card reveal">
      <div class="profile-avatar-ring">
        <img class="profile-avatar avatar-img" data-fallback-class="profile-avatar profile-avatar-fallback"
             src="assets/profile.png" alt="Portrait of ${S.name}" />
      </div>
      <p class="profile-location">${S.location}</p>
      <div class="badges">${S.badges.map(b => `<span class="badge">${b}</span>`).join("")}</div>
      <div class="profile-cta">
        <a href="${S.ctaPrimary.link}" class="btn btn-primary">${S.ctaPrimary.text}</a>
        <a href="${S.ctaSecondary.link}" class="btn btn-ghost">${S.ctaSecondary.text}</a>
      </div>
      <div class="stat-grid">
        ${stats.map(s => `
          <div class="stat">
            <span class="stat-n">${s.n}</span>
            <span class="stat-label">${s.label}</span>
          </div>`).join("")}
      </div>
    </div>`;
}
