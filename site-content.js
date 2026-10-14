/* Shared HTML rendering for the live site and its static fallback. */
(() => {
  const d = window.SITE_DATA;
  const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safe = url => { try { return ['http:', 'https:'].includes(new URL(url, 'https://yaqingshen.github.io/').protocol) ? esc(url) : ''; } catch { return ''; } };
  const icon = '<svg class="icon" aria-hidden="true"><use href="#arrow-up-right"/></svg>';
  const external = ' target="_blank" rel="noopener noreferrer"';
  window.SITE_CONTENT = {
    research: d.projects.map((p, i) => `<article class="research-row"><figure class="research-figure"><a href="${safe(p.image)}" class="figure-link" data-figure="${i}" aria-label="Enlarge figure: ${esc(p.title)}"><img src="${safe(p.image)}" alt="${esc(p.imageAlt)}" loading="lazy" decoding="async"><span class="figure-enlarge" aria-hidden="true">View figure ↗</span></a><figcaption><a href="${safe(p.figureUrl)}"${external}>${esc(p.figureCredit)} ↗</a></figcaption></figure><div class="research-copy"><span class="research-number">0${i + 1} / ${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.description)}</p><div class="work-tags">${p.tags.map(t => `<span>${esc(t)}</span>`).join('')}</div><a class="text-link" href="${safe(p.url)}"${external}>${esc(p.linkLabel)} ↗</a></div></article>`).join(''),
    publications: d.publications.map(p => `<article class="publication" data-first-author="${p.firstAuthor}"><span class="publication-year">${esc(p.year)}</span><div class="publication-content"><div class="publication-meta"><span>${esc(p.journal)}</span>${p.firstAuthor ? '<span class="author-badge">First author</span>' : ''}</div><h3><a href="${safe(p.url)}"${external}>${esc(p.title)}</a></h3><p>${esc(p.authors).replace('Y. Shen','<strong>Y. Shen</strong>')}</p></div><a class="publication-arrow" href="${safe(p.url)}"${external} aria-label="Read ${esc(p.title)}">${icon}</a></article>`).join(''),
    timeline: d.education.map(e => `<div class="timeline-row"><span class="timeline-date">${esc(e.years)}</span><div><strong>${esc(e.institution)}</strong><span>${esc(e.degree)}</span></div></div>`).join('') + `<div class="award-note">${d.awards.map(a => `<span>${esc(a.year)} · ${esc(a.title)}<small>${esc(a.organization)}</small></span>`).join('')}</div>`,
    about: d.about.map(p => `<p>${esc(p)}</p>`).join(''),
    interests: d.interests.map(t => `<span>${esc(t)}</span>`).join(''),
    profiles: (cv = false) => [['Google Scholar', d.scholar], ['ORCID', d.orcid], ['LinkedIn', d.linkedin], ['GitHub', d.github], ...(cv ? [] : [['Research CV', d.cv]])].filter(([, url]) => safe(url)).map(([label, url]) => `<a href="${safe(url)}"${url.startsWith('https:') ? external : ''}>${esc(label)} ${icon}</a>`).join('')
  };
})();
