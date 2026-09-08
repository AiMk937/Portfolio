export function renderAbout(about) {
  return `
    <div class="prose reveal">
      <p>${about.intro}</p>
      <ul class="plain-list">${about.bullets.map(x => `<li>${x}</li>`).join("")}</ul>
    </div>`;
}
