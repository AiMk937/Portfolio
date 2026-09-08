export function buildNav(navItems) {
  const items = navItems.map(n => `<li><a href="#${n.id}" data-id="${n.id}">${n.label}</a></li>`).join("");
  document.getElementById("navList").innerHTML = items;
  document.getElementById("mobileNavList").innerHTML = items;
}

export function initMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");

  menuToggle.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileNav.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      mobileNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Highlights the nav link for whichever section is currently in view.
export function initScrollSpy(navItems) {
  const sections = navItems.map(n => document.getElementById(n.id)).filter(Boolean);
  const navLinks = Array.from(document.querySelectorAll("#site-nav a, #mobileNav a, #pageDots a"));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;
      navLinks.forEach(a => {
        const match = a.getAttribute("data-id") === id;
        a.classList.toggle("active", match);
        if (match) a.setAttribute("aria-current", "page");
        else a.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(sec => observer.observe(sec));
}
