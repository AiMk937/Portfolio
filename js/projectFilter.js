export function initProjectFilter() {
  const controls = document.getElementById("projectControls");
  if (!controls) return;

  const cards = Array.from(document.querySelectorAll(".project-card"));

  controls.addEventListener("click", (e) => {
    const btn = e.target.closest("button[data-filter]");
    if (!btn) return;

    controls.querySelectorAll(".filter-chip").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.getAttribute("data-filter");
    cards.forEach(card => {
      const show = filter === "*" || card.getAttribute("data-tags").split(",").includes(filter);
      card.style.display = show ? "" : "none";
    });
  });
}
