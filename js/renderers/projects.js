export function renderProjects(projects) {
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));

  const controls = `
    <div class="projects-controls" id="projectControls" aria-label="Filter projects by tag">
      <button class="filter-chip active" data-filter="*">All</button>
      ${allTags.map(t => `<button class="filter-chip" data-filter="${t}">${t}</button>`).join("")}
    </div>`;

  const grid = `
    <div class="projects-grid">
      ${projects.map((p, i) => `
        <div class="project-card reveal" style="--delay:${i * 0.06}s" data-tags="${p.tags.join(",")}">
          <h3>${p.name}</h3>
          <p>${p.blurb}</p>
          <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          <a href="${p.link}" target="_blank" rel="noopener" class="project-btn">View project ↗</a>
        </div>`).join("")}
    </div>`;

  return controls + grid;
}
