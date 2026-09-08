export function buildPageDots(navItems) {
  const container = document.getElementById("pageDots");
  if (!container) return;

  container.innerHTML = navItems.map(n => `
    <a href="#${n.id}" data-id="${n.id}" aria-label="Jump to ${n.label}">
      <span class="dot"></span>
    </a>`).join("");
}
