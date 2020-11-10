require('dotenv/config');
const { text } = require('express');
const express = require('express')
const nodeMailer = require('nodemailer')
const app = express ()
const port = 2525
const bodyParser = require('body-parser');

var transport = nodeMailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a58d9932e4f8d2",
    pass: "f6850cb9edd1e6"
  }
});

let email = process.env.MAIL

app.use(bodyParser.json())

app.post("/send-mail",(req,res)=>{
    console.log('rodando')
    const message = {
        from: email,
        to: email,
        subject:"Teste de e-mail",
        text: "Lorem Ipsum Von Patrict Amadus",

    }
    transport.sendMail(message,(error, info)=>{
    if (error){
        return res.status(400).send('fail');
    }
    return res.status(200).send('sucess');
    
})

})
app.listen(2525)




// app.get('/send',(req,res)=>{
    
// })