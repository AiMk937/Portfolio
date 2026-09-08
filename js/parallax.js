export function initHeroParallax() {
  const hero = document.getElementById("hero");
  const decor = document.querySelector(".hero-decor");
  const inner = document.querySelector(".hero-inner");
  if (!hero || !inner) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let ticking = false;

  function update() {
    const heroHeight = hero.offsetHeight;
    const scrolledPast = Math.min(Math.max(-hero.getBoundingClientRect().top, 0), heroHeight);
    const progress = heroHeight ? scrolledPast / heroHeight : 0;

    inner.style.opacity = String(1 - progress);
    inner.style.transform = `translateY(${progress * -40}px)`;
    if (decor) decor.style.transform = `translateY(${scrolledPast * 0.4}px)`;

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }, { passive: true });

  update();
}
