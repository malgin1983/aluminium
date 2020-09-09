const express = require('express')
const config = require('config')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()
const mongoose = require('mongoose')


//Подключаем роуты
const homeRoute = require('./routes/home')
const homeProduct = require('./routes/product') 
const homeGallery = require('./routes/gallery')
const homeContact = require('./routes/contact')


// Подключаем handlebars
app.engine(
  'hbs',
  expressHbs({
    layoutsDir: 'views/layouts',
    defaultLayout: 'main',
    extname: 'hbs'
  })
)
app.set('view engine', 'hbs')
app.set('views', 'views')
// hbs.registerPartials(__dirname + '/views/partials')



//Подключаем статическую папку к express
app.use(express.static('public'))
app.use(express.urlencoded({extended : true }))


//Подключаем роуты
app.use('/', homeRoute)
app.use('/product', homeProduct)
app.use('/gallery', homeGallery)
app.use('/contact', homeContact)


const PORT = config.get('port') || 80
async function start() {
  try {
    // await mongoose.connect(config.get('mongoUri'), {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true
    // })
    app.listen(PORT, () => console.log(`База MONOGO подключена, сервер запущен по http://localhost:${PORT}`))
  } catch (e) {
    console.log('Ошибка  с сервера - ', e.message)
    process.exit(1)
  }
  
}
//Запустим сервер и базу MongoDB
start()

