export function renderCertificates(certificates) {
  return `
    <div class="cert-grid">
      ${certificates.map((c, i) => `
        <button class="cert-card reveal view-cert" style="--delay:${i * 0.05}s" data-img="${c.link}" data-title="${c.title}"
                aria-label="View certificate: ${c.title}">
          <span class="cert-thumb">
            <img src="${c.link}" alt="" loading="lazy" />
          </span>
          <span class="cert-info">
            <span class="cert-title">${c.title}</span>
            <span class="cert-by">${c.by || ""}</span>
          </span>
        </button>`).join("")}
    </div>
    <div id="certModal" class="cert-modal" role="dialog" aria-modal="true" aria-label="Certificate preview">
      <div class="cert-modal-content">
        <button class="close-btn" id="closeCert" aria-label="Close certificate preview">&times;</button>
        <img id="certImage" alt="" />
        <p id="certCaption" class="cert-caption"></p>
      </div>
    </div>`;
}
