document.addEventListener("DOMContentLoaded", () => {

    /*ЖК Чeмпион парк*/

    const s1 = 'img/champion1.jpg'
    const s2 = 'img/champion2.jpg'
    const s3 = 'img/champion3.jpg'
    const s4 = 'img/champion4.jpg'
    const s5 = 'img/champion5.jpg'
    const s6 = 'img/champion6.jpg'
    const s7 = 'img/champion7.jpg'

    const championSlide = [s1, s2, s3, s4, s5, s6, s7]
    const active = s1

    const left1 = document.getElementById('champion__left')
    const right1 = document.getElementById('champion__right')
    const slide1 = document.getElementById('champion__slider-img')
    const close1 = document.getElementById('champion__close')
    const block1 = document.getElementById('champion__slider')
    const img1 = document.getElementById('card__champion')

    close1.addEventListener('click', () => block1.style.display = 'none' )
    img1.addEventListener('click', ()=> block1.style.display = 'block' )

    /*ЖК Форте пиано*/

    const f1 = 'img/forte_piano1.jpg'
    const f2 = 'img/forte_piano2.jpg'
    const f3 = 'img/forte_piano3.jpg'
    const f4 = 'img/forte_piano4.jpg'
    const f5 = 'img/forte_piano5.jpg'
    const f6 = 'img/forte_piano6.jpg'

    const forteSlide = [f1, f2, f3, f4, f5, f6]
    const activeForte = f1

    const leftForte = document.getElementById('forte__left')
    const rightForte = document.getElementById('forte__right')
    const slideForte = document.getElementById('forte__slider-img')
    const closeForte = document.getElementById('forte__close')
    const blockForte = document.getElementById('forte__slider')
    const imgForte = document.getElementById('card__forte')

    closeForte.addEventListener('click', () => blockForte.style.display = 'none' )
    imgForte.addEventListener('click', ()=> blockForte.style.display = 'block' )

    /*ЖК Зиларт*/

    const z1 = 'img/zilart1.jpg'
    const z2 = 'img/zilart2.jpg'
    const z3 = 'img/zilart3.jpg'
    const z4 = 'img/zilart4.jpg'
    const z5 = 'img/zilart5.jpg'
    const z6 = 'img/zilart6.jpg'
    const z7 = 'img/zilart7.jpg'

    const zilSlide = [z1, z2, z3, z4, z5, z6, z7]
    const activeZil = z1

    const leftZil = document.getElementById('zil__left')
    const rightZil = document.getElementById('zil__right')
    const slideZil = document.getElementById('zil__slider-img')
    const closeZil = document.getElementById('zil__close')
    const blockZil = document.getElementById('zil__slider')
    const imgZil = document.getElementById('card__zil')

    closeZil.addEventListener('click', () => blockZil.style.display = 'none' )
    imgZil.addEventListener('click', ()=> blockZil.style.display = 'block' )

    /*ЖК Доминион*/

    const d1 = 'img/dominion1.jpg'
    const d2 = 'img/dominion2.jpg'
    const d3 = 'img/dominion3.jpg'
    const d4 = 'img/dominion4.jpg'
    const d5 = 'img/dominion5.jpg'

    const domiSlide = [d1, d2, d3, d4, d5]
    const activeDomi = d1

    const leftDomi = document.getElementById('dominion__left')
    const rightDomi = document.getElementById('dominion__right')
    const slideDomi = document.getElementById('dominion__slider-img')
    const closeDomi = document.getElementById('dominion__close')
    const blockDomi = document.getElementById('dominion__slider')
    const imgDomi = document.getElementById('card__dominion')

    closeDomi.addEventListener('click', () => blockDomi.style.display = 'none' )
    imgDomi.addEventListener('click', ()=> blockDomi.style.display = 'block' )

    /*ЖК Жаворонки*/

    const zha1 = 'img/zhavoronki1.jpg'
    const zha2 = 'img/zhavoronki2.jpg'
    const zha3 = 'img/zhavoronki3.jpg'
    const zha4 = 'img/zhavoronki4.jpg'
    const zha5 = 'img/zhavoronki5.jpg'

    const zhaSlide = [zha1, zha2, zha3, zha4, zha5]
    const activeZha = zha1

    const leftZha = document.getElementById('zha__left')
    const rightZha = document.getElementById('zha__right')
    const slideZha = document.getElementById('zha__slider-img')
    const closeZha = document.getElementById('zha__close')
    const blockZha = document.getElementById('zha__slider')
    const imgZha = document.getElementById('card__zha')

    closeZha.addEventListener('click', () => blockZha.style.display = 'none' )
    imgZha.addEventListener('click', ()=> blockZha.style.display = 'block' )

    /*ЖК Донской Олимп*/

    const ol1 = 'img/zhavoronki1.jpg'
    const ol2 = 'img/zhavoronki2.jpg'
    const ol3 = 'img/zhavoronki3.jpg'
    const ol4 = 'img/zhavoronki4.jpg'
    const ol5 = 'img/zhavoronki5.jpg'

    const olimpSlide = [zha1, zha2, zha3, zha4, zha5]
    const activeOlimp = zha1

    const leftOlimp = document.getElementById('olimp__left')
    const rightOlimp = document.getElementById('olimp__right')
    const slideOlimp = document.getElementById('olimp__slider-img')
    const closeOlimp = document.getElementById('olimp__close')
    const blockOlimp = document.getElementById('olimp__slider')
    const imgOlimp = document.getElementById('card__olimp')

    closeOlimp.addEventListener('click', () => blockOlimp.style.display = 'none' )
    imgOlimp.addEventListener('click', ()=> blockOlimp.style.display = 'block' )


    /*body*/

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

    const listeners = (left, right, objectSlider) => {
        left.addEventListener('click', () => {
            objectSlider.handleClickLeft()
        })

        left.addEventListener('touchenter', () => {
            objectSlider.handleClickLeft()
        })


        right.addEventListener('click', () => {
            objectSlider.handleClickRight()
        })

        right.addEventListener('touchenter', () => {
            objectSlider.handleClickRight()
        })
    }


    const slider1 = new CardSlider(championSlide, active, slide1)
    listeners(left1, right1, slider1)

    const slider2 = new CardSlider(forteSlide, activeForte, slideForte)
    listeners(leftForte, rightForte, slider2)

    const slider3 = new CardSlider(zilSlide, activeZil, slideZil)
    listeners(leftZil, rightZil, slider3)

    const slider4 = new CardSlider(domiSlide, activeDomi, slideDomi)
    listeners(leftDomi, rightDomi, slider4)

    const slider5 = new CardSlider(zhaSlide, activeZha, slideZha)
    listeners(leftZha, rightZha, slider5)

    const slider6 = new CardSlider(olimpSlide, activeOlimp, slideOlimp)
    listeners(leftOlimp, rightOlimp, slider6)

})