// If assets/profile.png hasn't been added yet, show initials instead of a
// broken image icon. Once you drop in a real photo at that path, it's used
// automatically — no code change needed.
//
// Handles both avatar spots (header + hero). Checks img.complete first
// because by the time this module runs, a missing image may have already
// finished failing to load — an error listener added after the fact would
// never fire.
export function initAvatar(name) {
  const initials = name.split(" ").map(w => w[0]).join("").slice(0, 2).toUpperCase();

  document.querySelectorAll(".avatar-img").forEach(img => {
    const showFallback = () => {
      const span = document.createElement("span");
      span.className = img.dataset.fallbackClass || "avatar-fallback";
      span.textContent = initials;
      img.replaceWith(span);
    };

    if (img.complete) {
      if (img.naturalWidth === 0) showFallback();
    } else {
      img.addEventListener("error", showFallback, { once: true });
    }
  });
}
