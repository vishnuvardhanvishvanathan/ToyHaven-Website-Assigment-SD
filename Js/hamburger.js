const hamburger = document.querySelector('.hamburger');
const hamlinks = document.querySelector('.ham-menu');
const closebtn = document.querySelector('.close-btn')

if (hamburger){
    hamburger.addEventListener('click',()=>{
    hamlinks.classList.toggle('open');
    
});
}
if (closebtn){
    closebtn.addEventListener('click',()=>{
    hamlinks.classList.toggle('open');
    
});
}


