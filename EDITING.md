# How to update the site

Everything you'd ever change is in **one file: `assets/js/data.js`**. Each category is one list in that file. Change an entry once and every page that uses it updates automatically.

You can edit it right on GitHub: open the file, click the pencil icon, make the change, click **Commit changes**. The live site updates in about a minute.

---

## Where each category lives

| I want to change... | Find this in `data.js` | Shows up on |
| --- | --- | --- |
| Name, intro, email, links | `person:` | Every page |
| Landing-page buttons | `visitors:` | Landing page |
| A job | `experience:` | Professor, colleague, quick tour, role pages |
| A project | `projects:` | All pages (role pages use its `roles` list) |
| A paper | `publications:` | Professor, quick tour, ML / data / security role pages |
| Education | `education:` | Professor, colleague, quick tour |
| A certificate | `certificates:` | Professor page |
| A recruiter role page | `roles:` | Recruiter picker + that role's page |
| Volunteer / ambassador entries | `extra:` inside a role | That role's page |
| Skills page | `skillClusters:` | Skills page |
| Friend page jokes and stats | `friend:` | Friend page |

---

## Copy-paste templates

Paste a new entry inside the right list, right after another entry's closing `},`.

**New project**

```js
{
  id: "my-new-project",
  name: "Project Name",
  oneLiner: "One sentence on what it does.",
  metric: "Headline result, e.g. 92% accuracy",
  detail: "Two sentences on how you built it.",
  stack: ["Python", "pandas"],
  link: "https://github.com/AiMk937/my-new-project",
  roles: ["data-science", "ml"]
},
```

`roles` decides which recruiter pages show it. Options: `software`, `data-science`, `data-analyst`, `ml`, `security`, `ambassador`, `campus`.

**New certificate**

```js
{ title: "Certificate Name", issuer: "Who issued it", img: "my-cert" },
```

Save the image in `assets/img/certs/`. Write `img: "my-cert"` for `my-cert.webp`, or include the extension for other formats, e.g. `img: "my-cert.jpg"`. Keep images under ~300KB. No image? Use `img: null, link: "https://..."` to link to it instead.

**New job**

```js
{
  id: "company",
  title: "Job Title",
  org: "Company Name",
  where: "City",
  dates: "Jan 2027 - May 2027",
  summary: "One line.",
  bullets: ["What you did", "Another thing you did"],
  tags: ["Python", "SQL"]
},
```

To show it on a role page, add its `id` to that role's `experience: [...]` list.

**New volunteer / ambassador entry** (inside `roles: { ambassador: { extra: [...] } }`)

```js
{ title: "Event Volunteer", org: "Event name", dates: "Month Year", text: "One line about what you did." },
```

---

## Rules that prevent a broken page

1. Keep the commas: every entry ends with `},` and every item in `[...]` is separated by `,`.
2. Text goes inside double quotes. If your text contains a `"`, write it as `\"`.
3. If the page goes blank after an edit, the last change has a typo. Undo it in GitHub's history, or open the browser console (Cmd+Option+J) to see the line number.

## Other files you might replace

- `assets/docs/Resume_Aimaan_Khan.pdf` - general resume, used by the header and non-recruiter pages (keep the name)
- `assets/docs/resumes/` - one resume per recruiter role; each role in `data.js` points to its file with `resume:`
- `assets/img/profile.jpg` - optional photo; replaces the AK initials
