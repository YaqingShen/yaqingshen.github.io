# Yaqing Shen — Personal academic website

A lightweight academic portfolio built for GitHub Pages. Dark and light themes, original animated artwork, three research directions, six selected papers with a first-author filter, academic background, profile links, and a printable research CV.

## Preview locally

From this directory, run:

```sh
python3 -m http.server 4173 --bind 127.0.0.1
```

Open [http://127.0.0.1:4173](http://127.0.0.1:4173). No installation or framework build is required.

## Publish on GitHub Pages

1. Create a public repository named **yaqingshen.github.io** under the **YaqingShen** account, or use the existing repository if it already exists.
2. Put `index.html`, `cv.html`, `styles.css`, `site-data.js`, `app.js`, `assets/`, and `.nojekyll` in the root of the `main` branch. The README and optional `scripts/` can be included too. Keep `.preview/` out of Git.
3. In **Settings → Pages**, choose **Deploy from a branch**, select **main** and **/ (root)**, and save.
4. Once GitHub finishes publishing, use **Visit site** in Pages settings. The intended address is `https://yaqingshen.github.io/`.

[Official GitHub Pages instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

The relative asset URLs also work if the site is published inside a project repository.

## Update your content

Edit **site-data.js**. It contains the biography, academic background, email, profile links, research descriptions, awards, and publication records. Add publications to the `publications` array; set `firstAuthor: true` when appropriate. Use an empty string to hide an optional profile link.

`cv.html` is a curated public research CV, with a **Print / Save as PDF** button. It shares biography, academic, award, and publication data with the homepage. Its technical skills section is in `cv.html`.

The original application CV has not been copied into the website. The web CV uses the current CMU email and affiliation and excludes birth details, an old postal address, and the old telephone number.

Core academic content is also pre-rendered into HTML for search engines and browsers without JavaScript. After content edits, optionally run `node scripts/sync-content.mjs` to update that static fallback. Normal browser content updates directly from `site-data.js`.

Colors, typography, spacing, and responsive breakpoints are in **styles.css**. The original SVG research illustrations and canvas animation are in **app.js**. These are illustrative artwork, not experimental data or atomic models. Motion can be paused and respects the reduced-motion setting. Animation stops while outside the viewport or in a background tab. Font loading uses Google Fonts, with local system fallbacks.

## Content provenance

The user-supplied application CV provides academic history, technical skills, awards, and publication records. Current role, advisor, and completed doctorate were checked against [Yaqing Shen’s public LinkedIn profile](https://www.linkedin.com/in/yaqing-shen-553298152/). Profile links and the current CMU email were supplied directly by the user. The public ORCID link is `https://orcid.org/0000-0002-2325-5618`, rather than the signed-in `/my-orcid` address.

Selected paper links and metadata:

- [Nature, 2026 — Reconfigurable mmWave microchips co-integrating hBN switches on GaN](https://doi.org/10.1038/s41586-026-10761-8)
- [ACS Nano, 2025 — MoS₂ Transistors with 4 nm hBN Gate Dielectric and 0.46 V Threshold Voltage](https://doi.org/10.1021/acsnano.5c02341)
- [Nature Electronics, 2024 — Two-dimensional-materials-based transistors using hexagonal boron nitride dielectrics and metal gate electrodes with high cohesive energy](https://doi.org/10.1038/s41928-024-01233-w)
- [Nature Electronics, 2024 — Memristive circuits based on multilayer hexagonal boron nitride for millimetre-wave radiofrequency applications](https://doi.org/10.1038/s41928-024-01192-2)
- [Nature, 2023 — Hybrid 2D–CMOS microchips for memristive applications](https://doi.org/10.1038/s41586-023-05973-1)
- [Advanced Materials, 2021 — Variability and Yield in h-BN-Based Memristive Circuits: The Role of Each Type of Defect](https://doi.org/10.1002/adma.202103656)

Checked in October 2026. Publisher metadata resolves differences in the older CV: the ACS Nano paper uses **4 nm**, and the radiofrequency paper title follows the publisher’s wording. This is a selected portfolio, not an exhaustive publication list. Google Scholar is linked for the complete record.
