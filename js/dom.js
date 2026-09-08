export function section(id, title, contentHtml, extraClass = "") {
  return `
    <section id="${id}" class="section ${extraClass}">
      <div class="wrap">
        <h2 class="section-title">${title}</h2>
        ${contentHtml}
      </div>
    </section>`;
}
