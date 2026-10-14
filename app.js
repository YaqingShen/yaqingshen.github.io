(() => {
  'use strict';
  const data = window.SITE_DATA;
  if (!data) return;
  const $ = (selector) => document.querySelector(selector);
  const escape = (value) => String(value ?? '').replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const icon = '<svg class="icon" aria-hidden="true"><use href="#arrow-up-right"/></svg>';
  const safeUrl = (value) => {
    if (!value) return '';
    try { const url = new URL(value, location.href); return ['http:', 'https:'].includes(url.protocol) ? url.href : ''; } catch { return ''; }
  };
  const link = (label, url, className = '') => {
    const href = safeUrl(url);
    return href ? `<a class="${escape(className)}" href="${escape(href)}"${new URL(href).origin !== location.origin ? ' target="_blank" rel="noopener noreferrer"' : ''}>${escape(label)} ${icon}</a>` : '';
  };
  const text = (selector, value) => { const node = $(selector); if (node && value !== undefined) node.textContent = value; };
  document.title = document.body.dataset.page === 'cv' ? `Research CV — ${data.name}` : data.title;
  for (const id of ['brand-name','about-name','footer-name','copyright-name']) text(`#${id}`, data.name);
  text('#hero-eyebrow', data.eyebrow);
  if ($('#hero-title')) $('#hero-title').innerHTML = `${escape(data.hero.firstLine)}<br>${escape(data.hero.secondLine)} <em>${escape(data.hero.accent)}</em>`;
  text('#hero-description', data.introduction);
  text('#hero-footnote', data.footnote);
  text('#hero-domains', data.domains.map((d) => d.toUpperCase()).join('  /  '));
  document.querySelector('meta[name="description"]')?.setAttribute('content', data.description);
  document.querySelector('meta[property="og:title"]')?.setAttribute('content', data.title);
  document.querySelector('meta[property="og:description"]')?.setAttribute('content', data.description);
  if ($('#about-paragraphs')) $('#about-paragraphs').innerHTML = data.about.map((p) => `<p>${escape(p)}</p>`).join('');
  if ($('#interest-list')) $('#interest-list').innerHTML = data.interests.map((p) => `<span>${escape(p)}</span>`).join('');
  if ($('#preview-note')) $('#preview-note').hidden = !data.previewContent;
  const profileLinks = [['Google Scholar', data.scholar], ['ORCID', data.orcid], ['LinkedIn', data.linkedin], ['GitHub', data.github], ['Research CV', document.body.dataset.page === 'cv' ? '' : data.cv]];
  if ($('#profile-links')) $('#profile-links').innerHTML = profileLinks.map(([label, url]) => link(label, url)).join('');
  if ($('#contact-actions') && data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    $('#contact-actions').innerHTML = `<a class="email-link" href="mailto:${escape(data.email)}">${escape(data.email)} ${icon}</a>${link('LinkedIn',data.linkedin,'text-link')}`;
  }
  if ($('#academic-timeline')) $('#academic-timeline').innerHTML = (data.education || []).map((e) => `<div class="timeline-row"><span class="timeline-date">${escape(e.years)}</span><div><strong>${escape(e.institution)}</strong><span>${escape(e.degree)}</span></div></div>`).join('') + `<div class="award-note">${(data.awards || []).map((a) => `<span>${escape(a.year)} · ${escape(a.title)}<small>${escape(a.organization)}</small></span>`).join('')}</div>`;

  function artwork(type) {
    const start = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 260" fill="none" aria-hidden="true"><g stroke="currentColor" stroke-width=".6" opacity=".06">';
    let grid = '';
    for (let x = 20; x < 400; x += 25) grid += `<path d="M${x} 0v260"/>`;
    for (let y = 5; y < 260; y += 25) grid += `<path d="M0 ${y}h400"/>`;
    let drawing = '';
    if (type === 'layers') {
      for (let i=3; i>=0; i--) {
        const y=75+i*31;
        drawing += `<path d="M93 ${y}l107-53 107 53-107 54Z" fill="var(--accent)" fill-opacity="${i===1?'.11':'.025'}" stroke="var(--accent)" stroke-opacity="${i===1?'.65':'.22'}"/><path d="M93 ${y}v5l107 54 107-54v-5M200 ${y+54}v5" stroke="var(--accent)" stroke-opacity=".16"/>`;
        for(let r=0;r<5;r++) for(let c=0;c<5;c++) {
          const x=200+(c-r)*17, py=y-33+(c+r)*8.5;
          drawing += `<circle cx="${x}" cy="${py}" r="1.2" fill="var(--accent)" opacity="${i===1?'.7':'.27'}"/>`;
        }
      }
      drawing += '<path d="M317 74v103m-4-103h8m-8 103h8" stroke="var(--accent)" opacity=".35"/><text x="331" y="129" fill="var(--muted)" font-family="monospace" font-size="8">hBN</text>';
    } else if (type === 'lattice') {
      for(let row=0;row<6;row++) for(let col=0;col<8;col++) {
        const x=70+col*35+(row%2)*17.5, y=47+row*31;
        if (row===2&&col===4) continue;
        for (const [dx,dy] of [[35,0],[17.5,31],[-17.5,31]]) {
          const tx=x+dx,ty=y+dy;
          if(tx>=65&&tx<=334&&ty<=205&&!(tx===210&&ty===109)) drawing+=`<path d="M${x} ${y} ${tx} ${ty}" stroke="var(--accent)" stroke-opacity=".18"/>`;
        }
        drawing+=`<circle cx="${x}" cy="${y}" r="${(row+col)%2?2.8:2}" fill="var(--accent)" opacity="${.28+(row+col)%3*.18}"/>`;
      }
      drawing+='<circle cx="210" cy="109" r="13" stroke="var(--accent)" stroke-dasharray="2 4" opacity=".6"/><circle cx="210" cy="109" r="25" stroke="var(--accent)" opacity=".09"/><path d="m223 98 40-29h43" stroke="var(--accent)" opacity=".5"/><text x="275" y="61" fill="var(--muted)" font-family="monospace" font-size="7">LOCAL DEFECT</text>';
    } else {
      drawing+='<rect x="144" y="76" width="112" height="112" rx="3" fill="var(--accent)" fill-opacity=".035" stroke="var(--accent)" stroke-opacity=".5"/><rect x="159" y="91" width="82" height="82" stroke="var(--accent)" stroke-opacity=".14"/>';
      for(let i=0;i<6;i++){
        const p=155+i*18, y=87+i*18;
        drawing+=`<path d="M${p} 76V${36+(i%3)*9}h${i%2?28:-28}M${p} 188v${20+(i%3)*7}h${i%2?-20:20}M144 ${y}H${90-(i%3)*9}v${i%2?16:-16}M256 ${y}h${30+(i%3)*9}v${i%2?-16:16}" stroke="var(--accent)" stroke-opacity=".28"/><circle cx="${90-(i%3)*9}" cy="${y+(i%2?16:-16)}" r="2" fill="var(--accent)" opacity=".4"/>`;
      }
      for(let r=0;r<3;r++) for(let c=0;c<3;c++) drawing+=`<rect x="${172+c*20}" y="${104+r*20}" width="12" height="12" rx="1" fill="var(--accent)" fill-opacity="${(r+c)%2?'.18':'.07'}" stroke="var(--accent)" stroke-opacity=".3"/>`;
    }
    return start + grid + '</g>' + drawing + '</svg>';
  }
  const projectGrid = $('#work-grid');
  if (projectGrid) projectGrid.innerHTML = data.projects.map((p,i) => `<article class="work-card"><button class="work-button" data-project="${escape(p.id)}" aria-label="Explore ${escape(p.title)}"><div class="work-art">${artwork(p.artwork)}<span class="art-number">${escape(p.year)}</span><span class="art-open">${icon}</span></div><div class="work-meta"><span class="work-category">${escape(p.category)}</span><span>0${i+1}</span></div><h3>${escape(p.title)}</h3><p>${escape(p.summary)}</p><div class="work-tags">${p.tags.map((t) => `<span>${escape(t)}</span>`).join('')}</div></button></article>`).join('');

  const publicationList = $('#publication-list');
  if (publicationList) {
    publicationList.innerHTML = (data.publications || []).map((p) => `<article class="publication" data-first-author="${p.firstAuthor}"><span class="publication-year">${escape(p.year)}</span><div class="publication-content"><div class="publication-meta"><span>${escape(p.journal)}</span>${p.firstAuthor?'<span class="author-badge">FIRST AUTHOR</span>':''}</div><h3>${link(p.title,p.url)}</h3><p>${escape(p.authors)}</p></div><a class="publication-arrow" href="${escape(safeUrl(p.url))}" target="_blank" rel="noopener noreferrer" aria-label="Read ${escape(p.title)}">${icon}</a></article>`).join('');
    document.querySelectorAll('[data-publication-filter]').forEach((button) => button.addEventListener('click', () => {
      const first = button.dataset.publicationFilter === 'first';
      document.querySelectorAll('[data-publication-filter]').forEach((b) => {b.classList.toggle('active',b===button); b.setAttribute('aria-pressed',String(b===button));});
      document.querySelectorAll('.publication').forEach((row) => row.hidden = first && row.dataset.firstAuthor !== 'true');
    }));
  }

  const dialog = $('#project-dialog');
  if (dialog && projectGrid) {
    projectGrid.addEventListener('click', (event) => {
      const button=event.target.closest('[data-project]');
      if (!button) return;
      const project=data.projects.find((p)=>p.id===button.dataset.project);
      if (!project) return;
      $('#dialog-art').innerHTML=artwork(project.artwork);
      text('#dialog-title',project.title);text('#dialog-category',project.category);text('#dialog-description',project.description);
      $('#dialog-tags').innerHTML=project.tags.map((tag)=>`<span>${escape(tag)}</span>`).join('');
      $('#dialog-link').innerHTML=link(project.linkLabel,project.url,'button button-primary');
      dialog.showModal();
      document.body.style.overflow='hidden';
    });
    $('.dialog-close').addEventListener('click',()=>dialog.close());
    dialog.addEventListener('click',(event)=>{
      const r=dialog.getBoundingClientRect();
      if(event.target===dialog && (event.clientX<r.left || event.clientX>r.right || event.clientY<r.top || event.clientY>r.bottom)) dialog.close();
    });
    dialog.addEventListener('close',()=>document.body.style.overflow='');
  }
  const menuButton=$('.menu-toggle'), mobileNav=$('#mobile-nav');
  const closeMenu=()=>{if(menuButton){menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');mobileNav.hidden=true;}};
  menuButton?.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');mobileNav.hidden=!open;});
  mobileNav?.addEventListener('click',(event)=>{if(event.target.closest('a'))closeMenu();});
  document.addEventListener('keydown',(event)=>{if(event.key==='Escape')closeMenu();});
  matchMedia('(min-width:601px)').addEventListener('change',(event)=>{if(event.matches)closeMenu();});

  const themeButton=$('.theme-toggle');
  function applyTheme(theme) {
    document.documentElement.dataset.theme=theme;
    themeButton?.setAttribute('aria-label',`Switch to ${theme==='dark'?'light':'dark'} theme`);
    themeButton?.querySelector('use')?.setAttribute('href',`#${theme==='dark'?'sun':'moon'}`);
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#101311':'#f4f5ee');
  }
  try{const stored=localStorage.getItem('yaqing-site-theme');if(['dark','light'].includes(stored))applyTheme(stored);}catch{}
  themeButton?.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';applyTheme(theme);try{localStorage.setItem('yaqing-site-theme',theme);}catch{}});

  if ('IntersectionObserver' in window) {
    const observer=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.06});
    document.querySelectorAll('.work-card,.about-layout,.contact-main').forEach((el)=>{el.classList.add('reveal');observer.observe(el);});
    const navObserver=new IntersectionObserver((entries)=>entries.forEach((entry)=>{if(entry.isIntersecting){document.querySelectorAll('.desktop-nav a').forEach((a)=>{if(a.hash===`#${entry.target.id}`)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}}),{rootMargin:'-15% 0px -60% 0px'});
    document.querySelectorAll('main section[id]').forEach((section)=>navObserver.observe(section));
  }

  const canvas=$('#network-canvas');
  if (!canvas) return;
  const ctx=canvas.getContext('2d');
  if(!ctx)return;
  const points=[], edges=[], count=460, goldenAngle=Math.PI*(3-Math.sqrt(5));
  for(let i=0;i<count;i++) {
    const y=1-(i/(count-1))*2, r=Math.sqrt(1-y*y), a=goldenAngle*i;
    points.push({x:Math.cos(a)*r,y,z:Math.sin(a)*r});
  }
  for(let i=0;i<count;i++){
    const neighbors=[];
    for(let j=i+1;j<count;j++){const p=points[i],q=points[j],dist=(p.x-q.x)**2+(p.y-q.y)**2+(p.z-q.z)**2;if(dist<.063)neighbors.push([j,dist]);}
    neighbors.sort((a,b)=>a[1]-b[1]);neighbors.slice(0,4).forEach(([j])=>edges.push([i,j]));
  }
  const reduceMotion=matchMedia('(prefers-reduced-motion:reduce)');
  let width=0,height=0,angle=.5,raf=0,previous=0,paused=reduceMotion.matches,visible=true;
  function resize(){const r=canvas.getBoundingClientRect();width=r.width;height=r.height;const dpr=Math.min(devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);draw();}
  function draw(){
    if(!width||!height)return;
    ctx.clearRect(0,0,width,height);
    const dark=document.documentElement.dataset.theme!=='light', rgb=dark?'198,237,152':'72,107,45';
    const radius=Math.min(width*.38,height*.36),cx=width*.51,cy=height*.49,cos=Math.cos(angle),sin=Math.sin(angle);
    const rotated=points.map((p)=>{const x=p.x*cos+p.z*sin,z=-p.x*sin+p.z*cos,y=p.y*.94+z*.24,zz=z*.94-p.y*.24,perspective=3.8/(3.8-zz);return{x:cx+x*radius*perspective,y:cy+y*radius*perspective,z:zz,s:perspective};});
    const glow=ctx.createRadialGradient(cx,cy,0,cx,cy,radius*1.4);glow.addColorStop(0,`rgba(${rgb},${dark?.025:.04})`);glow.addColorStop(1,`rgba(${rgb},0)`);ctx.fillStyle=glow;ctx.fillRect(0,0,width,height);
    ctx.save();ctx.translate(cx,cy);ctx.rotate(-.33);ctx.beginPath();ctx.ellipse(0,0,radius*1.36,radius*.37,0,0,Math.PI*2);ctx.strokeStyle=`rgba(${rgb},.12)`;ctx.lineWidth=.6;ctx.stroke();ctx.restore();
    edges.forEach(([a,b])=>{const p=rotated[a],q=rotated[b],depth=(p.z+q.z)/2,alpha=.035+(depth+1)*.052;ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(${rgb},${alpha})`;ctx.lineWidth=.55;ctx.stroke();});
    rotated.sort((a,b)=>a.z-b.z).forEach((p)=>{const alpha=.16+(p.z+1)*.36;ctx.beginPath();ctx.arc(p.x,p.y,(p.z>.55?1.65:1.05)*p.s,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},${Math.min(alpha,.93)})`;ctx.fill();if(p.z>.82){ctx.beginPath();ctx.arc(p.x,p.y,3.5*p.s,0,Math.PI*2);ctx.fillStyle=`rgba(${rgb},.06)`;ctx.fill();}});
  }
  function frame(now){raf=0;if(paused||!visible||document.hidden)return;const elapsed=previous?Math.min(now-previous,50):16;previous=now;angle+=elapsed*.000065;draw();raf=requestAnimationFrame(frame);}
  function start(){previous=0;if(!raf&&!paused&&visible&&!document.hidden)raf=requestAnimationFrame(frame);}
  function stop(){if(raf)cancelAnimationFrame(raf);raf=0;previous=0;}
  const motionButton=$('#motion-toggle');
  function updateMotionButton(){motionButton.setAttribute('aria-pressed',String(paused));motionButton.setAttribute('aria-label',paused?'Play animation':'Pause animation');motionButton.querySelector('.motion-label').textContent=paused?'Play motion':'Pause motion';motionButton.firstElementChild.textContent=paused?'▷':'Ⅱ';}
  motionButton.addEventListener('click',()=>{paused=!paused;updateMotionButton();if(paused)stop();else start();});
  reduceMotion.addEventListener('change',(event)=>{paused=event.matches;updateMotionButton();if(paused)stop();else start();});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop();else start();});
  if('IntersectionObserver'in window)new IntersectionObserver((entries)=>{visible=entries[0].isIntersecting;if(visible)start();else stop();}).observe(canvas);
  new ResizeObserver(resize).observe(canvas);
  new MutationObserver(draw).observe(document.documentElement,{attributes:true,attributeFilter:['data-theme']});
  updateMotionButton();resize();start();
})();
