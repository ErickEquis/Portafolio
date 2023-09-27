function openMenu() {
    document.getElementById("btn-menu").style.display = "none"
    document.getElementById("head").style.height = "50vh"
    document.getElementById("menu-items").style.display = "block"
    document.getElementById("btn-close").style.display = "block"
    document.getElementById("head").style.animation = "show-nav .3s linear"
}

function closeMenu() {
    document.getElementById("btn-menu").style.display = "block"
    document.getElementById("head").style.height = "8vh"
    document.getElementById("head").style.animation = "hide-nav .3s linear"
    document.getElementById("menu-items").style.display = "none"
    document.getElementById("btn-close").style.display = "none"
}

function showSkill(skill) {

    let nodos = document.getElementById("lenguaje")

    for (let i = 0; i < nodos.children.length; i++) {
        nodos.children[i].style.display = "none"
    }

    switch (skill) {
        case 1:
            document.getElementById("back-p").style.display = "block"
            break;
        case 2:
            document.getElementById("front-p").style.display = "block"
            break;
        case 3:
            document.getElementById("others-p").style.display = "block"
            break;
        default:
            break;
    }
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    
    let i;
    let slides = document.getElementsByClassName("slide-object")
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    
    if (n < 1) { slideIndex = slides.length }
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    
    dots[slideIndex - 1].className += " active";
}