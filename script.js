const menuToggle=document.getElementById('menuToggle');
const nav=document.getElementById('nav');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();
document.getElementById('shareButton').addEventListener('click',async()=>{
 const hint=document.getElementById('shareHint');
 const url=window.location.protocol==='file:'?'Publish this folder first, then copy your GitHub Pages URL here.':window.location.href.split('#')[0];
 if(window.location.protocol==='file:'){hint.textContent=url;return;}
 try{await navigator.clipboard.writeText(url);hint.textContent='Portfolio link copied. Paste it into WhatsApp or any social app.';}catch(e){hint.textContent=url;}
});
