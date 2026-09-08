export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("theme") || "dark";

  apply(saved);

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    localStorage.setItem("theme", next);
  });

  function apply(mode) {
    root.setAttribute("data-theme", mode);
    toggle.innerHTML = mode === "dark"
      ? '<i class="fa-solid fa-moon"></i>'
      : '<i class="fa-solid fa-sun"></i>';
    toggle.setAttribute("aria-label", `Switch to ${mode === "dark" ? "light" : "dark"} theme`);
  }
}
