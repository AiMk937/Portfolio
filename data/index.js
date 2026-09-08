// This file just wires the section files together — you shouldn't need to
// edit it. To change content, edit the individual file for that section.
import { site, nav } from "./site.js";
import { about } from "./about.js";
import { experience } from "./experience.js";
import { projects } from "./projects.js";
import { tech } from "./tech.js";
import { education } from "./education.js";
import { certificates } from "./certificates.js";
import { publications } from "./publications.js";
import { contact } from "./contact.js";

export const SITE = {
  ...site,
  nav,
  about,
  experience,
  projects,
  tech,
  education,
  certificates,
  publications,
  contact
};
