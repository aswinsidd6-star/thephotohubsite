(()=>{const $=(s)=>[...document.querySelectorAll(s)],rm=matchMedia('(prefers-reduced-motion:reduce)').matches,fine=matchMedia('(hover:hover) and (pointer:fine)').matches,B=document.body;
addEventListener('pageshow',e=>{if(e.persisted){const m=document.getElementById('mn2');if(m&&m.classList.contains('open'))document.getElementById('mb2').click()}});
$('[data-gr]').forEach(h=>{if(getComputedStyle(h).position==='static')h.style.position='relative';h.insertAdjacentHTML('beforeend','<i class="gr"></i>')});
$('.reel-t,.mqs-t').forEach(t=>t.innerHTML+=t.innerHTML);
$('.fq button').forEach(b=>b.onclick=()=>{const f=b.parentNode,o=f.classList.contains('open');$('.fq').forEach(x=>x.classList.remove('open'));if(!o)f.classList.add('open');b.setAttribute('aria-expanded',!o)});
let cta=null;if(!/reserve/.test(location.pathname)){B.insertAdjacentHTML('beforeend','<a id="fcta" href="reserve.html"><b></b>Reserve a date</a>');cta=document.getElementById('fcta')}
B.insertAdjacentHTML('beforeend','<canvas id="dust2"></canvas>');const cv=document.getElementById('dust2'),x=cv.getContext('2d');let W,H,ps=[],ly=scrollY;const rs=()=>{W=cv.width=innerWidth;H=cv.height=innerHeight};rs();addEventListener('resize',rs);
if(!rm)for(let i=0;i<(innerWidth<700?20:48);i++)ps.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.7+.5,v:Math.random()*.4+.15,a:Math.random()*.5+.2,p:Math.random()*6});
const hp=$('.hp img');
(function f(){const y=scrollY;x.clearRect(0,0,W,H);const sv=(y-ly)*.35;ly=y;ps.forEach(p=>{p.y-=p.v+sv*p.r*.4;p.x+=Math.sin(p.p+=.01)*.3;if(p.y<-5)p.y=H+5;if(p.y>H+5)p.y=-5;x.beginPath();x.arc(p.x,p.y,p.r,0,7);x.fillStyle='rgba(183,154,104,'+p.a*.55+')';x.shadowBlur=8;x.shadowColor='#B79A68';x.fill()});
if(cta)cta.classList.toggle('show',y>innerHeight*.6);if(!rm)hp.forEach(i=>{if(y<innerHeight*1.3)i.style.translate='0 '+(-y*.12)+'px'});requestAnimationFrame(f)})();
if(fine&&!rm)$('[data-tilt]').forEach(g=>{g.style.transition='transform .6s cubic-bezier(.16,1,.3,1)';g.addEventListener('pointermove',e=>{const r=g.getBoundingClientRect(),px=(e.clientX-r.left)/r.width-.5,py=(e.clientY-r.top)/r.height-.5;g.style.transition='transform .1s linear';g.style.transform='perspective(900px) rotateY('+px*8+'deg) rotateX('+-py*8+'deg) translateZ(10px)'});g.addEventListener('pointerleave',()=>{g.style.transition='transform .6s cubic-bezier(.16,1,.3,1)';g.style.transform=''})});
})();