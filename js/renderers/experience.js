export function renderExperience(experience) {
  return `
    <div class="entry-list">
      ${experience.map((e, i) => `
        <article class="entry reveal" style="--delay:${i * 0.08}s">
          <div class="entry-period">${e.period}</div>
          <div class="entry-body">
            <h3>${e.title} <span class="entry-org">— ${e.org}</span></h3>
            <ul class="plain-list">${e.points.map(p => `<li>${p}</li>`).join("")}</ul>
            <div class="tag-row">${e.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
          </div>
        </article>`).join("")}
    </div>`;
}
