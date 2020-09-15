
const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport(
    {
        host: 'smtp.mail.ru',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'site.test.2019@bk.ru', // generated ethereal user
            pass: 'malgin1983' // generated ethereal password
        }
    },
    {
        from : 'Mailer test <site.test.2019@bk.ru>',
    }
)
const mailer = message => {
    transporter.sendMail(message, (err, info)=>{
        if(err) return console.log(err)

    })
}
module.exports = mailer;