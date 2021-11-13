var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "29384aa2f283f0",
        pass: "62263611274fdb"
    }
});

var mailOptions = {
    from: 'dadhaniyaabhi23@gmail.com',
    to: 'abhidadhaniya23@gmail.com',
    subject: 'Sending Email using Node.js',
    html: `<h1>Hello world</h1>`
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});