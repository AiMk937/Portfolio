export function renderContact(contact) {
  return `
    <div class="contact-panel reveal">
      <p class="contact-blurb">${contact.blurb}</p>
      <div class="contact-cards">
        ${contact.links.map(l => `
          <a href="${l.href}" class="contact-card" target="_blank" rel="noopener">
            <span class="contact-icon"><i class="${l.icon}"></i></span>
            <span class="contact-text">
              <span class="contact-label">${l.label}</span>
              <span class="contact-handle">${l.handle}</span>
            </span>
          </a>`).join("")}
      </div>
    </div>`;
}
