let closeBtn=document.getElementById('close');
let menuBtn=document.getElementById('menu');
function closeBtnClick(){
    document.getElementById('nav-contents').classList.remove("active");
    closeBtn.classList.remove("active");
}
function menuBtnClick(){
    console.log("working");
    document.getElementById('nav-contents').classList.add("active");
    closeBtn.classList.add("active");
}

window.onload=function(){
    closeBtn.addEventListener("click",closeBtnClick);
    menuBtn.addEventListener("click",menuBtnClick);
}