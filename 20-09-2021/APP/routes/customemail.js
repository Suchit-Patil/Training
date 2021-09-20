var express = require('express');
var fs = require('fs');
const { getMaxListeners } = require('process');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('customemail');
});

router.post('/form1', function (req, res, next) {

  var a = req.body.txt1;
  var b = req.body.txt2;
  var c = req.body.txt3;
  var d = req.body.txt4;
  "use strict";
  const nodemailer = require("nodemailer");

  // async..await is not allowed in global scope, must use a wrapper
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "demo830870@gmail.com", // generated ethereal user
        pass: "Demo@123", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: "demo830870@gmail.com", // sender address
      to: a, // list of receivers
      subject: b, // Subject line
      text: c, // plain text body

      //   attachments: [
      //     {
      //         filename: 4,
      //         path:

      //     }

      // ]
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);

  res.send("Data Submitted ! ")
});




module.exports = router;
