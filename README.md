# Portfolio

Aimaan Khan's personal portfolio site. Plain HTML/CSS/JS, no build step, deployed on GitHub Pages.

**Live site:** https://aimk937.github.io/Portfolio/ *(update this once Pages is enabled — see below)*

## Updating content

You should almost never need to touch `index.html`, `css/`, or `js/`. Content lives in
small files under `data/`, one per section:

| File | What it controls |
|---|---|
| `data/site.js` | Name, role, tagline, hero buttons, nav order |
| `data/about.js` | About section text |
| `data/experience.js` | Work history — copy an entry to add a new job |
| `data/projects.js` | Project cards — copy an entry to add a new project |
| `data/tech.js` | Tech stack groups |
| `data/education.js` | Schools |
| `data/certificates.js` | Certificate list (images live in `assets/certificates/`) |
| `data/publications.js` | Papers |
| `data/contact.js` | Contact blurb + links |

Add a new job, project, or certificate by copying an existing object in the relevant
file and editing the values — the page renders automatically, no other file needs to
change.

## Structure

```
data/        content — what the site says (edit here)
js/          behavior — how the site works
  renderers/   turns each data file into HTML
  main.js      entry point, wires everything together
css/         look — one file per concern (variables.css holds all colors/fonts)
assets/      images, resume PDF, certificate scans
```

To reskin the whole site (colors, fonts, spacing), edit `css/variables.css` — every
other CSS file reads from those tokens.

## Running locally

Because `js/main.js` uses ES modules, opening `index.html` directly (`file://`) won't
work — browsers block module imports over `file://`. Serve it locally instead:

```
python3 -m http.server 8000
# then open http://localhost:8000
```

or use the VS Code "Live Server" extension.

## Deploying

Settings → Pages → Deploy from branch → `main` → `/ (root)`. No build step needed.

## To do

- Add `assets/profile.png` (a square photo works best) — until then the header shows
  your initials as a fallback instead of a broken image icon.
