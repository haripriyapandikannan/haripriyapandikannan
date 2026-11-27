const lb=document.getElementById('lb'),img=lb.querySelector('img');
document.querySelectorAll('.cert').forEach(b=>b.onclick=()=>{img.src=b.dataset.img;lb.classList.add('open')});
lb.onclick=e=>{if(e.target!==img)lb.classList.remove('open')};
addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});
