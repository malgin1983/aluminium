
const{Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.render('product', { 
      title : 'Продукт',
      isProduct : true })
})


module.exports = router