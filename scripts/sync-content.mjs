// Optional: refresh static HTML after editing site-data.js.
// Core academic content also works without JavaScript.
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = { window: {} };
vm.runInNewContext(await readFile(path.join(root, 'site-data.js'), 'utf8'), context);
const data = context.window.SITE_DATA;
const esc = (s) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const icon = '<svg class="icon" aria-hidden="true"><use href="#arrow-up-right"/></svg>';
function safe(url) {
  if (!url) return '';
  const parsed = new URL(url, 'https://yaqingshen.github.io/');
  return ['http:', 'https:'].includes(parsed.protocol) ? esc(url) : '';
}
const profiles = (cv) => [['Google Scholar', data.scholar], ['ORCID', data.orcid], ['LinkedIn', data.linkedin], ['GitHub', data.github], ...(cv ? [] : [['Research CV', data.cv]])].filter(([,url])=>safe(url)).map(([label,url])=>`<a href="${safe(url)}"${url.startsWith('https:') ? ' target="_blank" rel="noopener noreferrer"' : ''}>${esc(label)} ${icon}</a>`).join('');
const pubs = data.publications.map(p=>`<article class="publication" data-first-author="${p.firstAuthor}"><span class="publication-year">${esc(p.year)}</span><div class="publication-content"><div class="publication-meta"><span>${esc(p.journal)}</span>${p.firstAuthor ? '<span class="author-badge">FIRST AUTHOR</span>' : ''}</div><h3><a href="${safe(p.url)}" target="_blank" rel="noopener noreferrer">${esc(p.title)}</a></h3><p>${esc(p.authors)}</p></div><a class="publication-arrow" href="${safe(p.url)}" target="_blank" rel="noopener noreferrer" aria-label="Read ${esc(p.title)}">${icon}</a></article>`).join('');
const timeline = data.education.map(e=>`<div class="timeline-row"><span class="timeline-date">${esc(e.years)}</span><div><strong>${esc(e.institution)}</strong><span>${esc(e.degree)}</span></div></div>`).join('') + `<div class="award-note">${data.awards.map(a=>`<span>${esc(a.year)} · ${esc(a.title)}<small>${esc(a.organization)}</small></span>`).join('')}</div>`;
const research = data.projects.map((p,i)=>`<article class="work-card"><a class="work-button" href="${safe(p.url)}" target="_blank" rel="noopener noreferrer"><div class="work-art fallback-art"><span class="art-number">${esc(p.year)}</span><span class="fallback-symbol" aria-hidden="true">${['◇','⬡','▦'][i%3]}</span><span class="art-open">${icon}</span></div><div class="work-meta"><span class="work-category">${esc(p.category)}</span><span>0${i+1}</span></div><h3>${esc(p.title)}</h3><p>${esc(p.summary)}</p><div class="work-tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div></a></article>`).join('');

function region(html, name, markup) {
  const start = `<!-- STATIC:${name}:START -->`;
  const end = `<!-- STATIC:${name}:END -->`;
  const from = html.indexOf(start), to = html.indexOf(end, from);
  if (from === -1 || to === -1) throw new Error(`Missing static region: ${name}`);
  return html.slice(0,from+start.length) + markup + html.slice(to);
}
for (const filename of ['index.html', 'cv.html']) {
  const isCV = filename === 'cv.html';
  let html = await readFile(path.join(root,filename),'utf8');
  html = region(html,'PUBLICATIONS',pubs);
  html = region(html,'TIMELINE',timeline);
  html = region(html,'PROFILES',profiles(isCV));
  html = region(html,'ABOUT',data.about.map(p=>`<p>${esc(p)}</p>`).join(''));
  if (!isCV) {
    html = region(html,'RESEARCH',research);
    html = region(html,'INTERESTS',data.interests.map(t=>`<span>${esc(t)}</span>`).join(''));
  }
  await writeFile(path.join(root,filename),html);
}
console.log('Updated static academic content in index.html and cv.html.');
