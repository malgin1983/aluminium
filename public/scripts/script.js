
  const s1 = 'img/slider1.jpg'
  const s2 = 'img/slider2.jpg'
  const s3 = 'img/slider3.jpg'
  const s4 = 'img/slider4.jpg'
  const s5 = 'img/slider5.jpg'

  const left = document.querySelector('.left-arrow')
  const right = document.querySelector('.right-arrow ')
  const slide = document.querySelector('.slide')

  const arrSlide = [s1, s2, s3, s4, s5 ]
  let active = s1


  const handleClickLeft = () => {
    const idx = arrSlide.findIndex(item=> item === active )
    if( idx === 0){
      const current = arrSlide[arrSlide.length -1]
      slide.src = current
      active = current
    } else {
      const current = arrSlide[idx-1]
      slide.src = current
      active = current
    }
  }
  const handleClickRight = () => {
    const idx = arrSlide.findIndex(item=> item === active )
    if( idx === arrSlide.length -1){
      const current = arrSlide[0]
      slide.src = current
      active = current
    } else {
      const current = arrSlide[idx+1]
      slide.src = current
      active = current
    }
  }


  !!left && left.addEventListener('click', () => {
    handleClickLeft()
  })

  !!left && left.addEventListener('touchenter', () => {
    handleClickLeft()
  })


  !!right && right.addEventListener('click', ()=> {
    handleClickRight()
  })

  !!right && right.addEventListener('touchenter', ()=> {
    handleClickRight()
  })

  const timeOut = setInterval(()=> handleClickRight(),4000)


