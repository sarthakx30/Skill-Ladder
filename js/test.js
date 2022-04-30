let marketing_brand = 0;
operation_management = 0;
marketing_research = 0;
hospitality = 0;
event_management = 0;
fashion = 0;
mechanical = 0;
civil = 0;
electrical = 0;
app = 0;
web = 0;
ml = 0;
hacking = 0;
security = 0;
banking = 0;
investment = 0;
music = 0;
arts = 0;

let closeBtn = document.getElementById('close');
let menuBtn = document.getElementById('menu');
function closeBtnClick() {
    document.getElementById('nav-contents').classList.remove("active");
    closeBtn.classList.remove("active");
}
function menuBtnClick() {
    console.log("working");
    document.getElementById('nav-contents').classList.add("active");
    closeBtn.classList.add("active");
}

window.onload = function () {
    document.getElementById('testSubmitBtn').addEventListener('click', function () {
        if (document.getElementsByName('marketing_brand')[0].checked) {
            marketing_brand++;
        }
        else {
            operation_management++;
        }
        if (document.getElementsByName('marketing_research')[0].checked) {
            marketing_brand++;
            marketing_research++;
        }
        if (document.getElementsByName('hospitality')[0].checked) {
            hospitality++;
        }
        else if (document.getElementsByName('hospitality')[1].checked) {
            hospitality++;
        }
        else if (document.getElementsByName('hospitality')[2].checked) {
            event_management++;
        }
        if (document.getElementsByName('fashion')[0].checked) {
            fashion++;
            app++;
            web++;
        }
        if (document.getElementsByName('Mechanical')[0].checked) {
            mechanical++;
        }
        else {
            civil++;
        }
        if (document.getElementsByName('Electrical')[0].checked) {
            electrical++;
        }
        if (document.getElementsByName('App')[0].checked) {
            app++;
        }
        if (document.getElementsByName('Web')[0].checked) {
            web++;
        }
        if (document.getElementsByName('ML')[0].checked) {
            ml++;
        }
        if (document.getElementsByName('Hacking')[0].checked) {
            hacking++;
        }
        if (document.getElementsByName('Security')[0].checked) {
            security++;
        }
        if (document.getElementsByName('Banking')[0].checked) {
            banking++;
        }
        if (document.getElementsByName('Investment')[0].checked) {
            investment++;
        }
        if (document.getElementsByName('Music')[0].checked) {
            music++;
        }
        if (document.getElementsByName('Fine Arts')[0].checked) {
            arts++;
        }
        let arr = [operation_management, marketing_research, hospitality, event_management, fashion, mechanical, civil, electrical, app, web, ml, hacking, security, banking, investment, music, arts];
        let maxScore = 0;
        maxScore = Math.max(...arr);
        console.log(maxScore);
        if (operation_management < maxScore) {
            console.log(document.getElementsByClassName('business'));
            for (element of document.getElementsByClassName('business')) {
                element.classList.add('hidden');
            }
        }
        if (marketing_brand < maxScore) {
            for (element of document.getElementsByClassName('brand')) {
                element.classList.add('hidden');
            }
        }
        if (marketing_research < maxScore) {
            for (element of document.getElementsByClassName('market')) {
                element.classList.add('hidden');
            }
        }
        if (hospitality < maxScore) {
            for (element of document.getElementsByClassName('hospitality')) {
                element.classList.add('hidden');
            }
        }
        if (event_management < maxScore) {
            for (element of document.getElementsByClassName('event')) {
                element.classList.add('hidden');
            }
        }
        if (fashion < maxScore) {
            for (element of document.getElementsByClassName('fashion')) {
                element.classList.add('hidden');
            }
        }
        if (mechanical < maxScore) {
            for (element of document.getElementsByClassName('mechanical')) {
                element.classList.add('hidden');
            }
        }
        if (civil < maxScore) {
            for (element of document.getElementsByClassName('civil')) {
                element.classList.add('hidden');
            }
        }
        if (electrical < maxScore) {
            for (element of document.getElementsByClassName('electrical')) {
                element.classList.add('hidden');
            }
        }
        if (app < maxScore) {
            for (element of document.getElementsByClassName('app')) {
                element.classList.add('hidden');
            }
        }
        if (web < maxScore) {
            for (element of document.getElementsByClassName('web')) {
                element.classList.add('hidden');
            }
        }
        if (ml < maxScore) {
            for (element of document.getElementsByClassName('ml')) {
                element.classList.add('hidden');
            }
        }
        if (hacking < maxScore) {
            for (element of document.getElementsByClassName('hacking')) {
                element.classList.add('hidden');
            }
        }
        if (security < maxScore) {
            for (element of document.getElementsByClassName('security')) {
                element.classList.add('hidden');
            }
        }
        if (banking < maxScore) {
            for (element of document.getElementsByClassName('banking')) {
                element.classList.add('hidden');
            }
        }
        if (investment < maxScore) {
            for (element of document.getElementsByClassName('investment')) {
                element.classList.add('hidden');
            }
        }
        if (music < maxScore) {
            for (element of document.getElementsByClassName('music')) {
                element.classList.add('hidden');
            }
        }
        if (arts < maxScore) {
            for (element of document.getElementsByClassName('arts')) {
                element.classList.add('hidden');
            }
        }
    });
    closeBtn.addEventListener("click", closeBtnClick);
    menuBtn.addEventListener("click", menuBtnClick);
}

