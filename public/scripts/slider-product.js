const slides1 = document.getElementsByClassName("item");
const dots1 = document.getElementsByClassName("slider-dots_item");
const slides2 = document.getElementsByClassName("fasad");
const dots2 = document.getElementsByClassName("dots__fasad");
const slides3 = document.getElementsByClassName("doors");
const dots3 = document.getElementsByClassName("dots__doors");


let slideIndex = 1;
/* Основная функция слайдера */
function showSlides(n, slides, dots) {
    let i;

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

/* Slider Sliders */

showSlides(slideIndex, slides1, dots1);

function plusSlide() {
    showSlides(slideIndex += 1, slides1, dots1);
}

function minusSlide() {
    showSlides(slideIndex -= 1, slides1, dots1);
}

/* Slider Fasad */
showSlides(slideIndex, slides2, dots2);

function plusSlide() {
    showSlides(slideIndex += 1, slides2, dots2);
}

function minusSlide() {
    showSlides(slideIndex -= 1, slides2, dots2);
}

/* Slider Doors */
showSlides(slideIndex, slides3, dots3);

function plusSlide() {
    showSlides(slideIndex += 1, slides3, dots3);
}

function minusSlide() {
    showSlides(slideIndex -= 1, slides3, dots3);
}

