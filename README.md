# Yaqing Shen — Personal academic website

A buildless website for GitHub Pages, combining a wide blue-gray title banner and fixed navigation with a white background and figure-led research cards.

## Pages

- `index.html`: headshot, biography, and three research cards with figures, journal names, dates, short abstract summaries, and paper links.
- `cv.html`: printable research CV, academic history, awards, skills, and selected publications.
- `publications.html`: six selected papers with a first-author filter and a link to the full Google Scholar record.
- `contacts.html`: current professional email and Google Scholar, ORCID, LinkedIn, and GitHub links.

All four pages share the banner, navigation, and footer. The navigation remains fixed while scrolling; the larger title band scrolls with the page. Mobile navigation uses a Menu button. Figures open in a keyboard-accessible viewer.

## Preview and update

Run `python3 -m http.server 4173 --bind 127.0.0.1`, then open http://127.0.0.1:4173/.

Edit `site-data.js` for academic content and research summaries, `site-content.js` for shared rendering, and `styles.css` for presentation. Page-specific content and technical skills live in the HTML files. Run `node scripts/sync-content.mjs` after edits to refresh searchable static HTML on all four pages. No package installation or build step is needed. `app.js` handles the menu, figure viewer, publication filter, and CV print button.

## Publish

The existing repository is [YaqingShen/yaqingshen.github.io](https://github.com/YaqingShen/yaqingshen.github.io). GitHub Pages serves `main` at its root. Upload the four HTML pages, `styles.css`, `site-data.js`, `site-content.js`, `app.js`, `.nojekyll`, `assets/`, and optional `scripts/` and README. Keep `.preview/` private and exclude it from uploads.

Live site: https://yaqingshen.github.io/

The web CV is curated for public use. The original application CV, including private birth details and old contact information, is not included.

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

## Images and figure provenance

The headshot (`assets/yaqing-shen.jpg`) was supplied by Yaqing Shen for this website and is used without retouching. The current design combines the banner and page structure of [Andriy Zakutayev](https://www.andriyzakutayev.com/) with the project-card presentation of [Adrian Chmielewski](https://adrian-chmielewski.com/), as requested by the user.

Research images are sourced from published PDFs or the publisher’s public figure image, with the scientific panels and labels preserved. Research-card abstracts are concise paraphrases, labelled as summaries; original abstracts are available via the paper links. Each image links to its original source and opens in a larger viewer.

- `assets/gate-transistors.png`: Figure 6, Shen et al., *Nature Electronics* (2024), [DOI](https://doi.org/10.1038/s41928-024-01233-w).
- `assets/memristor-defects.png`: Figure 1, Shen et al., *Advanced Materials* (2021), [DOI](https://doi.org/10.1002/adma.202103656).
- `assets/hybrid-cmos.png`: Figure 1, Zhu et al., *Nature* 618, 57–62 (2023), [DOI](https://doi.org/10.1038/s41586-023-05973-1). Downloaded unchanged from the publisher’s public figure image. Licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); displayed at a smaller size without cropping.
- `assets/chip-integration.png`: retained from the previous design; no longer displayed. Figure 5, Shen et al., *Nature Electronics* (2024).

Figures retain their original authors’ and publishers’ rights.
