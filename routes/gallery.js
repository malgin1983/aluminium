
const{Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.render('gallery', { 
      title : 'Галерея',
      isGallery : true })
})

module.exports = router