window.onload = () => {

    const s1 = 'img/champion1.jpg'
    const s2 = 'img/champion2.jpg'
    const s3 = 'img/champion3.jpg'
    const s4 = 'img/champion4.jpg'
    const s5 = 'img/champion5.jpg'
    const s6 = 'img/champion6.jpg'
    const s7 = 'img/champion7.jpg'

    const left1 = document.getElementById('champion__left')
    const right1 = document.getElementById('champion__right')
    const slide1 = document.getElementById('champion__slider-img')
    const close1 = document.getElementById('champion__close')
    const block1 = document.getElementById('champion__slider')
    const img1 = document.getElementById('card__champion')

    close1.addEventListener('click', () => block1.style.display = 'none' )
    img1.addEventListener('click', ()=> block1.style.display = 'block' )



    class CardSlider {
        constructor(arr, active, slide) {
            this.arrSlide = arr
            this.active = active
            this.slide = slide
        }

        handleClickLeft = () => {
            const idx = this.arrSlide.findIndex(item => item === this.active)
            if (idx === 0) {
                const current = this.arrSlide[this.arrSlide.length - 1]
                this.slide.src = current
                this.active = current
            } else {
                const current = this.arrSlide[idx - 1]
                this.slide.src = current
                this.active = current
            }
        }
        handleClickRight = () => {
            const idx = this.arrSlide.findIndex(item => item === this.active)
            if (idx === this.arrSlide.length - 1) {
                const current = this.arrSlide[0]
                this.slide.src = current
                this.active = current
            } else {
                const current = this.arrSlide[idx + 1]
                this.slide.src = current
                this.active = current
            }
        }
    }

    const championSlide = [s1, s2, s3, s4, s5, s6, s7]
    const active = s1

    const slider1 = new CardSlider(championSlide, active, slide1)


    // const handleClickLeft = () => {
    //     const idx = arrSlide.findIndex(item => item === active)
    //     if (idx === 0) {
    //         const current = arrSlide[arrSlide.length - 1]
    //         slide.src = current
    //         active = current
    //     } else {
    //         const current = arrSlide[idx - 1]
    //         slide.src = current
    //         active = current
    //     }
    // }
    // const handleClickRight = () => {
    //     const idx = arrSlide.findIndex(item => item === active)
    //     if (idx === arrSlide.length - 1) {
    //         const current = arrSlide[0]
    //         slide.src = current
    //         active = current
    //     } else {
    //         const current = arrSlide[idx + 1]
    //         slide.src = current
    //         active = current
    //     }
    // }


    left1.addEventListener('click', () => {
        slider1.handleClickLeft()
    })

    left1.addEventListener('touchenter', () => {
        slider1.handleClickLeft()
    })


    right1.addEventListener('click', () => {
        slider1.handleClickRight()
    })

    right1.addEventListener('touchenter', () => {
        slider1.handleClickRight()
    })


}