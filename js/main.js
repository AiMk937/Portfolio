import { SITE } from "../data/index.js";
import { section } from "./dom.js";

import { renderHero } from "./renderers/hero.js";
import { renderProfile } from "./renderers/profile.js";
import { renderAbout } from "./renderers/about.js";
import { renderExperience } from "./renderers/experience.js";
import { renderProjects } from "./renderers/projects.js";
import { renderTech } from "./renderers/tech.js";
import { renderEducation } from "./renderers/education.js";
import { renderCertificates } from "./renderers/certificates.js";
import { renderPublications } from "./renderers/publications.js";
import { renderContact } from "./renderers/contact.js";

import { initTheme } from "./theme.js";
import { buildNav, initMobileMenu, initScrollSpy } from "./nav.js";
import { buildPageDots } from "./pageDots.js";
import { initReveal } from "./reveal.js";
import { initProjectFilter } from "./projectFilter.js";
import { initCertModal } from "./certModal.js";
import { initAvatar } from "./avatar.js";
import { initHeroParallax } from "./parallax.js";

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("brand-name").textContent = SITE.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  buildNav(SITE.nav);
  buildPageDots(SITE.nav);
  document.getElementById("hero").innerHTML = renderHero(SITE);

  document.getElementById("app").innerHTML = [
    section("about", "About", `<div class="about-grid">${renderProfile(SITE)}${renderAbout(SITE.about)}</div>`),
    section("experience", "Experience", renderExperience(SITE.experience)),
    section("projects", "Projects", renderProjects(SITE.projects)),
    section("tech", "Tech stack", renderTech(SITE.tech)),
    section("education", "Education", renderEducation(SITE.education)),
    section("certificates", "Certificates", renderCertificates(SITE.certificates)),
    section("publications", "Publications", renderPublications(SITE.publications)),
    section("contact", "Contact", renderContact(SITE.contact))
  ].join("");

  initAvatar(SITE.name);
  initTheme();
  initMobileMenu();
  initScrollSpy(SITE.nav);
  initReveal();
  initProjectFilter();
  initCertModal();
  initHeroParallax();
});
