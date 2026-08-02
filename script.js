
document.getElementById('gift').onclick=()=>{
 document.getElementById('hero').style.display='none';
 document.getElementById('surprise').classList.remove('hidden');
 if(navigator.vibrate){navigator.vibrate(40);}
 window.scrollTo({top:0,behavior:'smooth'});
};

