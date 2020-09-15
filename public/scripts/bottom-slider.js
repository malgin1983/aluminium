
    const slides = document.querySelectorAll('.section5__slider-img')
    Array.from(slides)
    slides.forEach(slide => slide.style.display = 'none')

    let i = 0;
    slides.forEach(slide => slide.style.display = 'none')
    if (!!slides[i]) {
        slides[i].style.display = 'block'
    }

    setInterval(()=>{

        if (i< slides.length-1) {
            if (!!slides){
                slides[i].style.display = 'block'
                ++i
                slides[i-1].style.display ='none'
                slides[i].style.display = 'block'
            } else {
                slides[slides.length -1].style.display ='none'
                i = 0
                slides[i].style.display = 'block'
            }            }

    },4000)


