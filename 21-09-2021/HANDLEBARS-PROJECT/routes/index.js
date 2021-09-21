var express = require('express');
const fileUpload = require('express-fileupload');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function (req, res, next) {
  res.render('about');
});

router.get('/form', function (req, res, next) {
  res.render('form');
});

router.post('/form', function (req, res, next) {
  var fileobject = req.files.s
  var filename = req.files.s.name;
  var filetype = req.files.s.mimetype;
  var filesize = req.files.s.size < 2 * 1024 * 1024

  // fileobject.mv("public/uploads/"+filename,function(err){
  //   if(err)
  //   return res.status(500).send(err);
  //   res.send("File Uploaded")
  // })



  //   fileobject.mv("/public/uploads/" + filename, function (check) {
  //     if (filetype == "images/gif") {
  //       res.send("Congratulations Your File is uploaded")
  //     }
  //     else {
  //       res.send("Sorry You cannot Upload this file please try only images or gif file");
  //     }
  //   })
  //   console.log(req.files.s)
  // });




  if (filetype == "image/jpeg") {
    if (filesize) {
      fileobject.mv('public/uploads/' + filename, function (err) {
        if (err)
          return res.status(500).send(err);
        res.send("Congratulations Your File is uploaded")
      });
    }
    else {
      res.send("file should not be greater than 2 mb");
    }
  }
  else {
    res.send("Sorry You cannot Upload this file please try only images or gif file");
  }
});
module.exports = router;
