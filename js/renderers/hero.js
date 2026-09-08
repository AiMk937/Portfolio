// Minimal splash: just the name and one line. Everything else (photo,
// badges, CTAs, stats) lives in the profile card at the top of About —
// intentionally out of sight until the person scrolls.
export function renderHero(S) {
  return `
    <div class="hero-decor" aria-hidden="true"></div>
    <div class="wrap hero-inner">
      <h1 class="hero-title">${S.name}</h1>
      <p class="hero-role">${S.role}</p>
    </div>
    <a href="#about" class="scroll-cue" aria-label="Scroll to About section">
      <i class="fa-solid fa-chevron-down"></i>
    </a>`;
}
