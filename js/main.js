//burger icon menu
let megaMenu = document.querySelector(".toggle-btn");
let nav = document.querySelector("header .list");

megaMenu.onclick = function () {
    nav.classList.toggle("active");
}


//landingimg-slider
sliderImages = Array.from(document.querySelectorAll(".landing .landimg"));
sliderCount = sliderImages.length;
currentSlide = 1;
nextBtn = document.getElementById("next");
prevBtn = document.getElementById("prev");
liBullets = document.querySelectorAll(".landing .bullets li");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;


theChecker();

function nextSlide() {
    if (nextBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide++;
        theChecker();
    }
};

function prevSlide() {
    if (prevBtn.classList.contains("disabled")) {
        return false;
    }else {
        currentSlide--;
        theChecker();
    }
};

function theChecker() {
    removeAllActive();
    sliderImages[currentSlide - 1].classList.add("active");
    if (currentSlide == 1) {
        prevBtn.classList.add("disabled");
    }else{
        prevBtn.classList.remove("disabled");
    }
    if (currentSlide == sliderCount) {
        nextBtn.classList.add("disabled");
    }else {
        nextBtn.classList.remove("disabled");
    }
};

function removeAllActive() {
    sliderImages.forEach( function (img) {
        img.classList.remove("active");
    });
};



//projects img filter
let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".gallery img"));

switcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageImgs);
});
// Remove Active Class From All Lis And Add To Current
function removeActive() {
    switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
        });
}
// Manage Imgs
function manageImgs() {
    imgs.forEach((img) => {
    img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
    el.style.display = "block";
    });
}