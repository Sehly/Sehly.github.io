'use strict';
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
const caseStudies = {
  rehlat: {
    title: 'Rehlat.me', intro: 'A multi-tenant SaaS platform supporting travel operations across distinct business customers.',
    problem: 'Travel workflows combine reservations, trip operations, personnel administration, and notifications. A multi-company platform must also keep each customer’s data properly separated.',
    approach: ['Laravel-based SaaS application with tenant-isolated databases.', 'Core operational areas include trip management, reservations, and HR features.', 'API-based notifications integrate communications into travel workflows.'],
    focus: 'Tenant isolation, separation of concerns, travel operations, and API integration.', technologies: ['Laravel', 'MySQL', 'Multi-tenancy', 'APIs'], url: 'https://rehlat.me/'
  },
  elite: {
    title: 'Elite Medical Center', intro: 'An appointment-booking platform designed around patient scheduling and administrative workflows.',
    problem: 'Appointment processes need an organized way to coordinate schedules and administrative tasks.',
    approach: ['Modular Laravel backend structure.', 'Patient appointment scheduling capabilities.', 'Administrative booking management.'],
    focus: 'Modular organization and booking workflow design.', technologies: ['Laravel', 'Modules', 'Booking systems']
  },
  master: {
    title: 'Master Solutions', intro: 'An e-commerce system supporting everyday store management and operational visibility.',
    problem: 'Commerce teams need consistent ways to manage products, orders, and their administrative workflows.',
    approach: ['Laravel application organized into backend modules.', 'Product and order management features.', 'Administrative dashboard capabilities.'],
    focus: 'Separation of modules and maintenance of business-oriented workflows.', technologies: ['Laravel', 'E-commerce', 'Modules']
  },
  alwaseet: {
    title: 'Alwaseet Line', intro: 'An on-demand services platform for government and corporate service workflows.',
    problem: 'Service requests often involve multiple steps and require clear workflow coordination.',
    approach: ['Modular Laravel architecture.', 'Structured service request flows.', 'Workflow automation for service delivery operations.'],
    focus: 'Maintainable modules and structured workflow automation.', technologies: ['Laravel', 'Workflow automation', 'Modules']
  }
};
const dialog = document.querySelector('#case-dialog');
const detail = document.querySelector('#case-content');
const node = (tag, text, cls) => {const el=document.createElement(tag); if(text)el.textContent=text;if(cls)el.className=cls;return el;};
document.querySelectorAll('[data-case]').forEach(button => button.addEventListener('click', () => {
  const c = caseStudies[button.dataset.case]; if(!c)return;
  detail.replaceChildren();detail.append(node('h2',c.title),node('p',c.intro));
  detail.append(node('h3','THE CONTEXT'),node('p',c.problem),node('h3','SOLUTION & CAPABILITIES'));
  const ul = node('ul');c.approach.forEach(item=>ul.append(node('li',item)));detail.append(ul);
  detail.append(node('h3','ENGINEERING FOCUS'),node('p',c.focus));
  const chips = node('div',null,'chips');c.technologies.forEach(t=>chips.append(node('span',t)));detail.append(chips);
  if(c.url){const link=node('a','Visit the live platform ↗','btn btn-primary');link.href=c.url;link.target='_blank';link.rel='noopener noreferrer';detail.append(link);}
  detail.append(node('p','Project details are limited to the information documented in my CV. Internal implementation, metrics, and source code have not been disclosed.','case-caveat'));
  dialog.showModal();document.body.classList.add('modal-open');
}));
document.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('close',()=>document.body.classList.remove('modal-open'));
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});

// The public GitHub API is queried by visitors' browsers, so this section always reflects
// the actual public repositories without building/publishing the site again.
async function loadRepos(){
  const grid=document.querySelector('#repo-grid'), status=document.querySelector('#repo-status');
  try{
    const response=await fetch('https://api.github.com/users/Sehly/repos?per_page=100&sort=updated',{headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok)throw new Error(`GitHub API returned ${response.status}`);
    const all=await response.json();
    const repos=all.filter(r=>!r.fork&&!r.archived).sort((a,b)=>(b.stargazers_count-a.stargazers_count)||new Date(b.pushed_at)-new Date(a.pushed_at)).slice(0,6);
    grid.replaceChildren();
    if(!repos.length){grid.append(node('p','Explore all repositories on my GitHub profile.','repo-loading'));return;}
    repos.forEach(r=>{
      const card=node('a',null,'repo-card');card.href=r.html_url;card.target='_blank';card.rel='noopener noreferrer';
      card.append(node('span','⌘','repo-icon'),node('strong',r.name),node('p',r.description||'Public source code repository.'));
      const footer=node('div',null,'repo-footer');footer.append(node('span',r.language||'Repository'),node('span',`★ ${r.stargazers_count||0}`),node('span','VIEW ↗'));card.append(footer);grid.append(card);
    });
    status.textContent='Live data from GitHub public API · Repositories shown by stars and recent activity.';
  }catch(err){
    grid.replaceChildren(); const fallback=node('a','View my public repositories on GitHub ↗','btn btn-ghost');fallback.href='https://github.com/Sehly?tab=repositories';fallback.target='_blank';fallback.rel='noopener noreferrer';grid.append(fallback);
    status.textContent='Live repository feed temporarily unavailable (GitHub API rate limit or network issue).';
  }
}
loadRepos();
