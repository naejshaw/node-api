// Uso do nodemailer
var nodemailer = require('nodemailer');

// Definição do serviço de transmissão
var transporter = nodemailer.createTransport({
  service: process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_EMAIL,
    pass: process.env.MAIL_PASSWORD
  }
});

// Configuração do email
var mailOptions = {
  from: process.env.MAIL_EMAIL,
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
  html: '<h1>Teste</h1>'
};

// Envio do email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});