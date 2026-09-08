const links=[...document.querySelectorAll('.chapter-list a')];
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+e.target.id));
    }
  });
},{threshold:.45});
sections.forEach(s=>observer.observe(s));

const video=document.getElementById('referenceVideo');
let userInteracted=false;
window.addEventListener('pointerdown',()=>userInteracted=true,{once:true});
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target) target.scrollIntoView({behavior:'smooth'});
  });
});

// Keep the supplied reference video cinematic and unobtrusive.
video.addEventListener('loadedmetadata',()=>{ video.play().catch(()=>{}); });
