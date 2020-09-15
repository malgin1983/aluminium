const slides1 = document.getElementsByClassName("patio");
const dots1 = document.getElementsByClassName("slider-dots_item");
const slides2 = document.getElementsByClassName("fasad");
const dots2 = document.getElementsByClassName("dots__fasad");
const slides3 = document.getElementsByClassName("doors");
const dots3 = document.getElementsByClassName("dots__doors");
const slides4 = document.getElementsByClassName("partitions");
const dots4 = document.getElementsByClassName("dots__partitions");
const slides5 = document.getElementsByClassName("garden");
const dots5 = document.getElementsByClassName("dots__garden");
const slides6 = document.getElementsByClassName("decor");
const dots6 = document.getElementsByClassName("dots__decor");





class Slider {
    constructor() {
        this.slideIndex = 1
    }
    showSlides(n, slides, dots) {
        let i;
        if (n === 1) {
            this.slideIndex += 1
        }
        if (n === -1) {
            this.slideIndex -= 1
        }

        if (this.slideIndex > slides.length) {
            this.slideIndex = 1
        }
        if (this.slideIndex < 1) {
            this.slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this.slideIndex - 1].style.display = "block";
        dots[this.slideIndex - 1].className += " active";
    }
}


/* Slider Patio */
const patio = new Slider()

patio.showSlides(0, slides1, dots1);

function plusSlidePatio() {
    patio.showSlides(+1, slides1, dots1);
}
function minusSlidePatio() {
    patio.showSlides(-1, slides1, dots1);
}

/* Slider Fasad */
const fasad = new Slider()

fasad.showSlides(0, slides2, dots2);

function plusSlideFasad() {
    fasad.showSlides(+1, slides2, dots2);
}
function minusSlideFasad() {
    fasad.showSlides(-1, slides2, dots2);
}


/* Slider Doors */
const doors = new Slider()

doors.showSlides(0, slides3, dots3);

function plusSlideDoors() {
    doors.showSlides(+1, slides3, dots3);
}
function minusSlideDoors() {
    doors.showSlides(-1, slides3, dots3);
}

/* Slider Partitions*/
const partitions = new Slider()

partitions.showSlides(0, slides4, dots4);

function plusSlidePartitions() {
    partitions.showSlides(+1, slides4, dots4);
}
function minusSlidePartitions() {
    partitions.showSlides(-1, slides4, dots4);
}

/* Slider Garden*/
const garden = new Slider()

garden.showSlides(0, slides5, dots5);

function plusSlideGarden() {
    garden.showSlides(+1, slides5, dots5);
}
function minusSlideGarden() {
    garden.showSlides(-1, slides5, dots5);
}

/* Slider Decor*/
const decor = new Slider()

decor.showSlides(0, slides6, dots6);

function plusSlideDecor() {
    decor.showSlides(+1, slides6, dots6);
}
function minusSlideDecor() {
    decor.showSlides(-1, slides6, dots6);
}