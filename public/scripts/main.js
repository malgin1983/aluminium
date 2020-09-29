	/* NavBar start */
	const btn = document.querySelector('.navbar__btn')
	const mobNav = document.querySelector('.mobile__nav')
	!!btn && btn.addEventListener('click', ()=>{
		mobNav.style.display = 'block'
	})

	!!btn && btn.addEventListener('click', ()=>{
		mobNav.style.display = 'block'
	})
	/* NavBar end */

	/* Main-Slider start */
	const s1 = 'img/slider1.jpg'
	const s2 = 'img/slider2.jpg'
	const s3 = 'img/slider3.jpg'
	const s4 = 'img/slider4.jpg'
	const s5 = 'img/slider5.jpg'

	const left = document.querySelector('.left-arrow')
	const right = document.querySelector('.right-arrow ')
	const slide = document.querySelector('.slide')

	const arrSlide = [s1, s2, s3, s4, s5]
	let active = s1

	const handleClickLeft = () => {
		const idx = arrSlide.findIndex((item) => item === active)
		if (idx === 0) {
			const current = arrSlide[arrSlide.length - 1]
			if (!!slide) slide.src = current
			active = current
		} else {
			const current = arrSlide[idx - 1]
			if (!!slide) slide.src = current
			active = current
		}
	}
	const handleClickRight = () => {
		const idx = arrSlide.findIndex((item) => item === active)
		if (idx === arrSlide.length - 1) {
			const current = arrSlide[0]
			if (!!slide) slide.src = current
			active = current
		} else {
			const current = arrSlide[idx + 1]
			if (!!slide) slide.src = current
			active = current
		}
	}

	!!left && left.addEventListener('click', () => {
		handleClickLeft()
		clearInterval(timeOut)
	})

	!!right && right.addEventListener('click', () => {
		handleClickRight()
		clearInterval(timeOut)
	})

	const timeOut = setInterval(() => handleClickRight(), 4000)

	class TouchSlider {
		constructor(left, right) {
			this.xDown = null
			this.yDown = null
			this.handleClickLeft = left
			this.handleClickRight = right
		}
		handleTouchStart = (event) => {
			this.xDown = event.touches[0].clientX
			this.yDown = event.touches[0].clientY
		}
		handleTouchMove = (event) => {
			if ( ! this.xDown || ! this.yDown ) {
				return
			}

			let xUp = event.touches[0].clientX
			let yUp = event.touches[0].clientY

			let xDiff = this.xDown - xUp
			let yDiff = this.yDown - yUp

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
				if ( xDiff > 0 ) {
					this.handleClickLeft()
				} else {
					this.handleClickRight()
				}
			}
			this.xDown = null
			this.yDown = null
		}
	}

	const mainTouchSlider = new TouchSlider(handleClickLeft, handleClickRight)

	// Вешаем на прикосновение функцию handleTouchStart
	!!slide && slide.addEventListener('touchstart', mainTouchSlider.handleTouchStart, false)
	// А на движение пальцем по экрану - handleTouchMove
	!!slide && slide.addEventListener('touchmove', mainTouchSlider.handleTouchMove, false)
	/* Main-Slider end */

	/* Main-Bottom-Slider start */
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
	/* Main-Bottom-Slider end */

	/* Products-Sliders start */
	const slides1 = document.getElementsByClassName('patio')
	const dots1 = document.getElementsByClassName('slider-dots_item')
	const slides2 = document.getElementsByClassName('fasad')
	const dots2 = document.getElementsByClassName('dots__fasad')
	const slides3 = document.getElementsByClassName('doors')
	const dots3 = document.getElementsByClassName('dots__doors')
	const slides4 = document.getElementsByClassName('partitions')
	const dots4 = document.getElementsByClassName('dots__partitions')
	const slides5 = document.getElementsByClassName('garden')
	const dots5 = document.getElementsByClassName('dots__garden')
	const slides6 = document.getElementsByClassName('decor')
	const dots6 = document.getElementsByClassName('dots__decor')

	class Slider {
		constructor() {
			this.slideIndex = 1
		}
		showSlides(n, slides, dots) {
			let i
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
				slides[i].style.display = 'none'
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(' active', '')
			}
			!!slides[this.slideIndex - 1] && (slides[this.slideIndex - 1].style.display = 'block')
			!!dots[this.slideIndex - 1] && (dots[this.slideIndex - 1].className += ' active')
		}
	}
	/* Products-Sliders end */

	/* Slider Fasad start */
	const nextFasad = document.getElementById('fasad-next')
	const prevFasad = document.getElementById('fasad-prev')

	const fasad = new Slider()

	fasad.showSlides(0, slides2, dots2)

	function plusSlideFasad() {
		fasad.showSlides(+1, slides2, dots2)
	}
	function minusSlideFasad() {
		fasad.showSlides(-1, slides2, dots2)
	}

	!!nextFasad && nextFasad.addEventListener('click', plusSlideFasad)
	!!prevFasad && prevFasad.addEventListener('click', minusSlideFasad)
	/* Slider Fasad end */

	/* Slider Patio start*/
	const nextPatio = document.getElementById('patio-next')
	const prevPatio = document.getElementById('patio-prev')

	const patio = new Slider()

	patio.showSlides(0, slides1, dots1)

	function plusSlidePatio() {
		patio.showSlides(+1, slides1, dots1)
	}
	function minusSlidePatio() {
		patio.showSlides(-1, slides1, dots1)
	}

	!!nextPatio && nextPatio.addEventListener('click', plusSlidePatio)
	!!prevPatio && prevPatio.addEventListener('click', minusSlidePatio)
	/* Slider Patio end*/

	/* Slider Doors start*/
	const nextDoors = document.getElementById('doors-next')
	const prevDoors = document.getElementById('doors-prev')

	const doors = new Slider()

	doors.showSlides(0, slides3, dots3)

	function plusSlideDoors() {
		doors.showSlides(+1, slides3, dots3)
	}
	function minusSlideDoors() {
		doors.showSlides(-1, slides3, dots3)
	}

	!!nextDoors && nextDoors.addEventListener('click', plusSlideDoors)
	!!prevDoors && prevDoors.addEventListener('click', minusSlideDoors)
	/* Slider Doors end*/

	/* Slider Partitions start*/
	const nextParti = document.getElementById('partitions-next')
	const prevParti = document.getElementById('partitions-prev')

	const partitions = new Slider()

	partitions.showSlides(0, slides4, dots4)

	function plusSlidePartitions() {
		partitions.showSlides(+1, slides4, dots4)
	}
	function minusSlidePartitions() {
		partitions.showSlides(-1, slides4, dots4)
	}

	!!nextParti && nextParti.addEventListener('click', plusSlidePartitions)
	!!prevParti && prevParti.addEventListener('click', minusSlidePartitions)
	/* Slider Partitions end*/

	/* Slider Garden start*/
	const nextGarden = document.getElementById('garden-next')
	const prevGarden = document.getElementById('garden-prev')

	const garden = new Slider()

	garden.showSlides(0, slides5, dots5)

	function plusSlideGarden() {
		garden.showSlides(+1, slides5, dots5)
	}
	function minusSlideGarden() {
		garden.showSlides(-1, slides5, dots5)
	}

	!!nextGarden && nextGarden.addEventListener('click', plusSlideGarden)
	!!prevGarden && prevGarden.addEventListener('click', minusSlideGarden)
	/* Slider Garden end*/

	/* Slider Decor start*/
	const nextDecor = document.getElementById('decor-next')
	const prevDecor = document.getElementById('decor-prev')
	const decor = new Slider()

	decor.showSlides(0, slides6, dots6)

	function plusSlideDecor() {
		decor.showSlides(+1, slides6, dots6)
	}
	function minusSlideDecor() {
		decor.showSlides(-1, slides6, dots6)
	}

	!!nextDecor && nextDecor.addEventListener('click', plusSlideDecor)
	!!prevDecor && prevDecor.addEventListener('click', minusSlideDecor)
	/* Slider Decor start*/

	/* Gallery start */

	//ЖК Чeмпион парк
	const ch1 = 'img/champion1.jpg'
	const ch2 = 'img/champion2.jpg'
	const ch3 = 'img/champion3.jpg'
	const ch4 = 'img/champion4.jpg'
	const ch5 = 'img/champion5.jpg'
	const ch6 = 'img/champion6.jpg'
	const ch7 = 'img/champion7.jpg'

	const championSlide = [ch1, ch2, ch3, ch4, ch5, ch6, ch7]
	const activeChamp= ch1

	const left1 = document.getElementById('champion__left')
	const right1 = document.getElementById('champion__right')
	const slide1 = document.getElementById('champion__slider-img')
	const close1 = document.getElementById('champion__close')
	const block1 = document.getElementById('champion__slider')
	const img1 = document.getElementById('card__champion')

	!!close1 && close1.addEventListener('click', () => block1.style.display = 'none')
	!!img1 && img1.addEventListener('click', () => block1.style.display = 'block')

	//ЖК Форте пиано

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

	!!closeForte && closeForte.addEventListener('click', () => blockForte.style.display = 'none')
	!!imgForte && imgForte.addEventListener('click', () => blockForte.style.display = 'block')

	//ЖК Зиларт

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

	!!closeZil && closeZil.addEventListener('click', () => blockZil.style.display = 'none')
	!!imgZil && imgZil.addEventListener('click', () => blockZil.style.display = 'block')

	//ЖК Доминион

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

	!!closeDomi && closeDomi.addEventListener('click', () => blockDomi.style.display = 'none')
	!!imgDomi && imgDomi.addEventListener('click', () => blockDomi.style.display = 'block')

	//ЖК Жаворонки

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

	!!closeZha && closeZha.addEventListener('click', () => blockZha.style.display = 'none')
	!!imgZha && imgZha.addEventListener('click', () => blockZha.style.display = 'block')

	//ЖК Донской Олимп

	const ol1 = 'img/zhavoronki1.jpg'
	const ol2 = 'img/zhavoronki2.jpg'
	const ol3 = 'img/zhavoronki3.jpg'
	const ol4 = 'img/zhavoronki4.jpg'
	const ol5 = 'img/zhavoronki5.jpg'

	const olimpSlide = [ol1, ol2, ol3, ol4, ol5]
	const activeOlimp = zha1

	const leftOlimp = document.getElementById('olimp__left')
	const rightOlimp = document.getElementById('olimp__right')
	const slideOlimp = document.getElementById('olimp__slider-img')
	const closeOlimp = document.getElementById('olimp__close')
	const blockOlimp = document.getElementById('olimp__slider')
	const imgOlimp = document.getElementById('card__olimp')

	!!closeOlimp && closeOlimp.addEventListener('click', () => blockOlimp.style.display = 'none')
	!!imgOlimp && imgOlimp.addEventListener('click', () => blockOlimp.style.display = 'block')


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
				if(this.slide) this.slide.src = current
				this.active = current
			} else {
				const current = this.arrSlide[idx - 1]
				if(this.slide) this.slide.src = current
				this.active = current
			}
		}
		handleClickRight = () => {
			const idx = this.arrSlide.findIndex(item => item === this.active)
			if (idx === this.arrSlide.length - 1) {
				const current = this.arrSlide[0]
				if(this.slide) this.slide.src = current
				this.active = current
			} else {
				const current = this.arrSlide[idx + 1]
				if(this.slide) this.slide.src = current
				this.active = current
			}
		}
	}

	const listeners = (left, right, objectSlider) => {
		!!left && left.addEventListener('click', () => {
			objectSlider.handleClickLeft()
		})

		!!left && left.addEventListener('touchenter', () => {
			objectSlider.handleClickLeft()
		})


		!!right && right.addEventListener('click', () => {
			objectSlider.handleClickRight()
		})

		!!right && right.addEventListener('touchenter', () => {
			objectSlider.handleClickRight()
		})
	}


	const slider1 = new CardSlider(championSlide, activeChamp, slide1)
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
	/* Gallery end */

	/* Contacts start */
	const name = document.querySelector('#contacts__form-input-text')
	const phone = document.querySelector('#phone')
	const email = document.querySelector('#email')
	const files = document.querySelector('#file-input')
	const btnForm = document.getElementById('add-form')
	const massage = document.querySelector('#text-form')

	const fromForm = {
		name: 'Анонинмный пользователь.',
		phone: 'Номер телефона не указан.',
		email: 'Адрес почты не указан',
		massage: ''
	}

	!!name && name.addEventListener('change', (event) =>{
		fromForm.name = event.target.value;
	})

	!!phone && phone.addEventListener('change', (event) =>{
		fromForm.phone = event.target.value;
	})

	!!email && email.addEventListener('change', (event) =>{
		fromForm.email = event.target.value;
	})
	!!massage && massage.addEventListener('change', (event) =>{
		fromForm.massage = event.target.value;
	})


	async function submit(data) {
		try{
			const response = await fetch('/contact/add', {
				method: 'POST',
				body: JSON.stringify(data),
				headers: {
					'Content-Type': 'application/json'
				}
			})
			const result = await JSON.parse(response)
			console.log('result fetch', result)

		} catch (e) {
			console.log('submit error', e)
		}
	}


	!!btnForm && btnForm.addEventListener('click', (event)=>{
		submit(fromForm)
	})
	/* Contacts end */
