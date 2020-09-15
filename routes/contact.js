const mailer  =require('../nodemailer')
const{Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
    res.render('contact', { 
      title : 'Контакты',
      isContact : true })
})

//POST
router.post('/add', (req, res) => {
    if(!req.body) return res.sendStatus(400);
    const message = {
        to: 'malghin@yandex.ru',
        subject: 'Обращение с сайта oknapremiumclass.ru',
        html:`
          <h3>Сообщение с формы регистрации сайта</h3>
              <ol>
                  <li>${req.body.name}</li>
                  <li>${req.body.phone}</li>
                  <li>${req.body.email}</li>
                  <li>${req.body.massage}</li>
              </ol>    
        `
    }
    mailer(message)
    res.redirect('/send')
})

module.exports = router
