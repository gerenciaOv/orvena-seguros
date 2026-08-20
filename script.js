const menu=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menu?.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const f=document.getElementById('leadForm');
f?.addEventListener('submit',e=>{
 e.preventDefault();
 const d=new FormData(f);
 const msg=['Olá, Orvena Seguros! Gostaria de falar com um especialista.','',`Nome: ${d.get('nome')}`,`WhatsApp: ${d.get('whatsapp')}`,`Interesse: ${d.get('interesse')}`,`Mensagem: ${d.get('mensagem')||'Não informada'}`].join('\n');
 window.open('https://wa.me/551120888000?text='+encodeURIComponent(msg),'_blank');
});
