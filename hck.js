var Btn = document.querySelector('.BTN')
var vdHacking = document.querySelector('.VD-HCK')
const audio = new Audio();
audio.src = ('hacking.mp3');


Btn.addEventListener('click', () => {
   vdHacking.classList.toggle('VD-active')
})