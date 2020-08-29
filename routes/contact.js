
const{Router} = require('express')
const router = Router()
const Zamer = require('../models/zamer')

router.get('/', (req,res) => {
    res.render('contact', { 
      title : 'Контакты',
      isContact : true })
})


//POST
router.post('/', (req, res) => {
    
  const zamer = new Zamer(
    req.body.name,
    req.body.phone,
  )

  zamer.save()
  res.redirect('/')
})

module.exports = router