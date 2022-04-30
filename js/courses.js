let submitBtn = document.getElementById("submitBtn");
function search() {
    let searchTerm = document.getElementById("searchInput").value.toLowerCase();
    console.log(searchTerm);
    let courses = document.getElementsByClassName("course");
    if (searchTerm == "") {
        for (let i = 0; i < courses.length; i++) {
            courses[i].classList.add("show");
            courses[i].classList.remove("hidden");
        }
    }
    else{
        for(let i = 0; i < courses.length; i++){
            courses[i].classList.remove("show");
            courses[i].classList.remove("hidden");
            let classNames=courses[i].classList;
            for(let j = 0; j < classNames.length; j++){
                if(classNames[j].includes(searchTerm)){
                    courses[i].classList.add("show");
                }
                else{
                    courses[i].classList.add("hidden");
                }
            }
        }
    }
}

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
window.onload = function () {
    submitBtn.addEventListener("click", search);
    closeBtn.addEventListener("click",closeBtnClick);
    menuBtn.addEventListener("click",menuBtnClick);
};


