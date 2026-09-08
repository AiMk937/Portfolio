export function renderTech(tech) {
  return `
    <div class="tech-grid">
      ${tech.map((g, i) => `
        <div class="tech-card reveal" style="--delay:${i * 0.06}s">
          <div class="tech-card-head">
            <span class="tech-icon"><i class="${g.icon}"></i></span>
            <h3>${g.group}</h3>
          </div>
          <div class="tag-row">${g.items.map(it => `<span class="tag">${it}</span>`).join("")}</div>
        </div>`).join("")}
    </div>`;
}
