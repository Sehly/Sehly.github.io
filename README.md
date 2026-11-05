# Omar Sehly — Backend Developer Portfolio

A complete, responsive, no-build portfolio for Omar Mostafa Sehly. Designed for free hosting on GitHub Pages.

## Publish to GitHub Pages (the only account step)

1. Log in to GitHub as `Sehly` and create a **Public** repository named **`Sehly.github.io`** (if one doesn't already exist).
2. Upload **all files and folders from this archive** to the repository's root (not the zip itself, and not the enclosing `omar-sehly-portfolio` directory). Commit changes.
3. Open repository **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/(root)**, then Save.
4. Once GitHub completes deployment, visit **https://sehly.github.io/** and share that URL anywhere.

No npm, dependencies, paid domain, or backend hosting required.

## Included

- Responsive portfolio with Hero, 4 commercial projects, case study dialogs, skills, experience, education, GitHub repositories and contact section.
- Browser-side GitHub API integration that displays public repositories automatically; falls back to GitHub link on API errors.
- SEO metadata, structured data, mobile navigation, accessibility focus, and social metadata.
- `assets/Omar-Sehly-CV.pdf` download linked from the website.

## Content notes

- Project descriptions and employment facts were drawn from the attached CV.
- The project artwork is original **conceptual interface illustration**, *not* purported website screenshots.
- The Rehlat.me website is linked because that URL was identified; URLs for other projects were not verified and are intentionally omitted.
- The website's GitHub integration will list genuine public repos at runtime, rather than inventing repo names or details.
- Live GitHub/API fetch requires internet access; local/offline tests will show a fallback link.
- Google Fonts are loaded from Google; local system fonts render if unavailable.

## Files

- `index.html` — content, structure, metadata.
- `css/style.css` — all visual styling and responsive layout.
- `js/main.js` — navigation, case study dialogs, and GitHub API feed.
- `assets/favicon.svg` — icon.
- `assets/Omar-Sehly-CV.pdf` — the provided CV.

## Customize later

Open `index.html` to update page copy, links, and project sections. To add verified project websites, edit `index.html` or the `caseStudies` object in `js/main.js`. Replace concept illustrations only with approved genuine screenshots. Do not publish confidential client source code or user data.
