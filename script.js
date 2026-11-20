
const $=id=>document.getElementById(id);
$('openBtn').onclick=()=>{const a=$('song');a.volume=.8;a.play().catch(()=>{});$('mute').style.display='block';$('curtain').classList.add('open');document.body.classList.remove('lock');setTimeout(()=>document.querySelectorAll('.hero .rv').forEach((e,i)=>setTimeout(()=>e.classList.add('in'),i*250)),500)};
$('mute').onclick=function(){const a=$('song');if(a.paused){a.play();this.textContent='♪';this.style.opacity=1}else{a.pause();this.textContent='✕';this.style.opacity=.7}};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('section .rv').forEach(e=>io.observe(e));
const P=$('petals'),em=['❀','✿','✦','❁'],co=['#c24a6a','#d8b865','#e08aa0'];
for(let i=0;i<22;i++){const s=document.createElement('span');s.className='pt';s.textContent=em[i%4];s.style.cssText=`left:${Math.random()*100}%;color:${co[i%3]};animation-duration:${7+Math.random()*8}s;animation-delay:${-Math.random()*12}s;font-size:${9+Math.random()*9}px`;P.appendChild(s)}
const T=new Date('2026-12-06T09:30:00+05:30');
function tick(){let t=Math.max(0,T-Date.now())/1000;$('d').textContent=Math.floor(t/86400);$('h').textContent=Math.floor(t%86400/3600);$('m').textContent=Math.floor(t%3600/60);$('s').textContent=Math.floor(t%60)}
tick();setInterval(tick,1000);

document.querySelectorAll('.gal figure').forEach(f=>f.onclick=()=>{const l=$('lb');l.querySelector('img').src=f.dataset.src;l.classList.add('on')});
$('lb').onclick=()=>$('lb').classList.remove('on');
