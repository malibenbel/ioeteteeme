
const b=document.getElementById('gift');
b.onclick=()=>{
 document.getElementById('hero').style.display='none';
 document.getElementById('bouquet').classList.remove('hidden');
 if(navigator.vibrate) navigator.vibrate(30);
 setTimeout(()=>window.scrollTo({top:0,behavior:'smooth'}),100);
};
