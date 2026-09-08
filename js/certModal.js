export function initCertModal() {
  const modal = document.getElementById("certModal");
  const img = document.getElementById("certImage");
  const caption = document.getElementById("certCaption");
  const closeBtn = document.getElementById("closeCert");
  if (!modal) return;

  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".view-cert");
    if (!btn) return;
    img.src = btn.getAttribute("data-img");
    img.alt = btn.getAttribute("data-title") || "Certificate";
    caption.textContent = btn.getAttribute("data-title") || "";
    modal.classList.add("open");
  });

  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("open");
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.classList.remove("open");
  });
}
