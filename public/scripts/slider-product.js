const slides1 = document.getElementsByClassName("item");
const dots1 = document.getElementsByClassName("slider-dots_item");

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

/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex, slides1, dots1);

function plusSlide() {
    showSlides(slideIndex += 1, slides1, dots1);
}

function minusSlide() {
    showSlides(slideIndex -= 1, slides1, dots1);
}



