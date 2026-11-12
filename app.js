const projectData={
 cityhall:{title:"Arba Minch City Hall",category:"CIVIC ARCHITECTURE · ACADEMIC / INDIVIDUAL",description:"A civic building proposal in Gimash, Arba Minch. The portfolio describes a concept inspired by the mountain and lake landscape, with a tower and public podium. Explore the original project sheets below.",pages:[4,5,6,7,8]},
 eco:{title:"Dorze-Inspired Eco-Lodge",category:"HOSPITALITY · BACHELOR'S THESIS",description:"A thesis project in Dorze, Arba Minch, exploring cultural identity, local building traditions and nature-based hospitality. The original sheets document research, planning, architectural development and visualizations.",pages:[9,10,11,12,13,14]},
 arts:{title:"Performing Arts Center",category:"CULTURAL ARCHITECTURE · ACADEMIC",description:"A performing arts center proposal in Secha, Arba Minch. Its concept draws on traditional dance and music, translating movement and rhythm into architectural form and spatial organization.",pages:[15,16,17,18]},
 villa:{title:"Low-Cost Resort Villa",category:"HOSPITALITY · ACADEMIC",description:"A cost-conscious resort and villa design proposal in Arba Minch, with site planning, landscape strategies and architectural visualization. The portfolio identifies a villa design lead role and site-planning contribution.",pages:[19,20,21,22]},
 mixed:{title:"Mixed-Use Building",category:"MIXED-USE ARCHITECTURE · ACADEMIC",description:"A mixed-use building design documented through concept development, building organization, plans, diagrams and architectural visualizations.",pages:[23,24,25,26]},
 oadus:{title:"OADUS Architecture & Engineering PLC",category:"PROFESSIONAL EXPERIENCE · FOUR-MONTH INTERNSHIP",description:"The portfolio describes experience preparing detailed working drawings, designing a residential apartment and restaurant interiors, and participating in site visits.",pages:[27,28]},
 church:{title:"Mekane Eyesus Church",category:"ARCHITECTURAL PROJECT",description:"Church project documentation including location studies, architectural drawings and visualizations, as presented in the original portfolio.",pages:[29]},
 lodge:{title:"Inclusive Lodge",category:"HOSPITALITY ARCHITECTURE",description:"An inclusive lodge project presented with architectural design material and visualizations in the original portfolio.",pages:[30]},
 competition:{title:"Architectural Design Competition",category:"DESIGN COMPETITION",description:"Competition project presentation and supporting architectural design documentation.",pages:[31,32]}
};
const modal=document.getElementById('projectModal'),gallery=document.getElementById('modalGallery');
function openProject(key){const p=projectData[key];if(!p)return;document.getElementById('modalTitle').textContent=p.title;document.getElementById('modalCategory').textContent=p.category;document.getElementById('modalDescription').textContent=p.description;gallery.innerHTML='';p.pages.forEach((n,i)=>{const img=document.createElement('img');img.src=`assets/portfolio-pages/page-${String(n).padStart(2,'0')}.webp`;img.alt=`${p.title}, original portfolio sheet ${n}`;img.loading='lazy';img.addEventListener('click',()=>showLightbox(img.src,img.alt));gallery.appendChild(img)});document.getElementById('modalCounter').textContent=`${String(p.pages.length).padStart(2,'0')} ORIGINAL SHEETS`;modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeProject(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
function showLightbox(src,alt){const box=document.createElement('div');box.className='image-lightbox';const img=document.createElement('img');img.src=src;img.alt=alt;box.appendChild(img);box.addEventListener('click',()=>box.remove());document.body.appendChild(box)}
document.querySelectorAll('[data-project]').forEach(el=>el.addEventListener('click',()=>openProject(el.dataset.project)));
document.querySelectorAll('[data-close]').forEach(el=>el.addEventListener('click',closeProject));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeProject();document.querySelector('.image-lightbox')?.remove()}});
const menu=document.getElementById('menuToggle'),nav=document.getElementById('mainNav');menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
const progress=document.getElementById('progressBar');function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?scrollY/max*100:0)+'%'}addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
if(window.gsap&&window.ScrollTrigger&&!matchMedia('(prefers-reduced-motion: reduce)').matches){gsap.registerPlugin(ScrollTrigger);gsap.from('.hero-copy .eyebrow',{opacity:0,y:15,duration:.8,delay:.2});gsap.from('.hero-copy h1',{opacity:0,y:35,duration:1,delay:.35,ease:'power3.out'});gsap.from('.hero-visual',{opacity:0,x:35,duration:1.2,delay:.5,ease:'power2.out'});gsap.to('.hero-sun',{y:18,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}});gsap.to('.tower-front',{y:-28,scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:true}})}
const tiltPortrait=document.querySelector('[data-tilt]');
if(tiltPortrait&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&matchMedia('(hover: hover) and (pointer: fine)').matches){
  tiltPortrait.addEventListener('pointermove',event=>{
    const bounds=tiltPortrait.getBoundingClientRect();
    const x=(event.clientX-bounds.left)/bounds.width-.5;
    const y=(event.clientY-bounds.top)/bounds.height-.5;
    tiltPortrait.style.setProperty('--tilt-x',`${-y*4}deg`);
    tiltPortrait.style.setProperty('--tilt-y',`${x*5}deg`);
    tiltPortrait.style.setProperty('--pointer-x',`${(x+.5)*100}%`);
    tiltPortrait.style.setProperty('--pointer-y',`${(y+.5)*100}%`);
  });
  tiltPortrait.addEventListener('pointerleave',()=>{
    tiltPortrait.style.setProperty('--tilt-x','0deg');
    tiltPortrait.style.setProperty('--tilt-y','0deg');
    tiltPortrait.style.setProperty('--pointer-x','50%');
    tiltPortrait.style.setProperty('--pointer-y','50%');
  });
}
