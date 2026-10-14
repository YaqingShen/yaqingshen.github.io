(() => {
  'use strict';
  const data = window.SITE_DATA, content = window.SITE_CONTENT;
  if (!data || !content) return;
  const regions = {'work-grid':'research','publication-list':'publications','academic-timeline':'timeline','awards-list':'awards','about-paragraphs':'about','interest-list':'interests'};
  Object.entries(regions).forEach(([id, key]) => { const el = document.getElementById(id); if(el) el.innerHTML = content[key]; });
  const profiles = document.getElementById('profile-links');
  if(profiles) profiles.innerHTML = content.profiles(document.body.dataset.page === 'cv');
  const year = document.getElementById('copyright-year');
  if(year) year.textContent = new Date().getFullYear();
  const menu = document.querySelector('.menu-toggle'), nav = document.getElementById('main-nav');
  document.querySelector('.print-button')?.addEventListener('click', () => window.print());
  const closeMenu = () => { menu?.setAttribute('aria-expanded','false'); nav?.classList.remove('is-open'); };
  menu?.addEventListener('click', () => { const open = menu.getAttribute('aria-expanded') !== 'true'; menu.setAttribute('aria-expanded',String(open)); nav.classList.toggle('is-open',open); });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
  document.addEventListener('keydown', e => { if(e.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true'){closeMenu();menu.focus();} });
  document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    const first = button.dataset.filter === 'first';
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed',String(b === button)));
    let count=0;
    document.querySelectorAll('.publication').forEach(p => { p.hidden = first && p.dataset.firstAuthor !== 'true'; if(!p.hidden) count++; });
    document.getElementById('publication-count').textContent = `${count} ${first ? 'first-author' : 'selected'} papers`;
  }));
  const dialog = document.getElementById('figure-dialog');
  let trigger;
  document.querySelectorAll('[data-figure]').forEach(link => link.addEventListener('click', e => {
    if(!dialog?.showModal) return;
    e.preventDefault(); trigger=link;
    const p=data.projects[Number(link.dataset.figure)];
    document.getElementById('figure-dialog-title').textContent=p.title;
    const img=document.getElementById('figure-dialog-image'); img.src=p.image; img.alt=p.imageAlt;
    const source=document.getElementById('figure-dialog-source'); source.href=p.figureUrl; source.textContent=p.figureCredit+' ↗';
    dialog.showModal(); document.body.classList.add('dialog-open');
  }));
  dialog?.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
  dialog?.addEventListener('close',()=>{document.body.classList.remove('dialog-open');trigger?.focus();});
})();
