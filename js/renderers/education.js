export function renderEducation(education) {
  return `
    <div class="entry-list">
      ${education.map((e, i) => `
        <article class="entry reveal" style="--delay:${i * 0.08}s">
          <div class="entry-period">${e.period}</div>
          <div class="entry-body">
            <h3>${e.school}</h3>
            <p class="entry-detail">${e.detail}</p>
          </div>
        </article>`).join("")}
    </div>`;
}
