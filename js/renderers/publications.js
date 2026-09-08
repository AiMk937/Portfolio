export function renderPublications(publications) {
  return `
    <div class="entry-list">
      ${publications.map((p, i) => `
        <article class="entry reveal" style="--delay:${i * 0.08}s">
          <div class="entry-period">Paper</div>
          <div class="entry-body">
            <h3>${p.title}</h3>
            <p class="entry-detail">${p.outlet}</p>
            <a href="${p.link}" target="_blank" rel="noopener" class="link-arrow">Read paper ↗</a>
          </div>
        </article>`).join("")}
    </div>`;
}
