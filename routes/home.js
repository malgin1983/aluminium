
const{Router} = require('express')
const router = Router()

const arrayImg = [
    {img:"img/s1.jpg"},
    {img:"img/s2.jpg"},
    {img:"img/s3.jpg"},
    {img:"img/s4.jpg"},
    {img:"img/s5.jpg"},
    {img:"img/s6.jpg"},
    {img:"img/s7.jpg"},
    ]

router.get('/', (req,res) => {
    res.render('index', {
      title : 'Главная',
      isMain : true,
      arrayImg,
    })
})


module.exports = router