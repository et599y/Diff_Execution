var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  res.render('index', { title: 'post~~~' });
  
});

router.get('/upload', function(req, res) {
  res.write('<html><body><form method="post" enctype="multipart/form-data" action="/fileUpload">'
  +'<input type="file" name="uploadingFile"><br>'
  +'<input type="submit">'
  +'</form></body></html>');
  res.end();
});

router.get('/test', function(req, res, next) {
  res.send('hello world');
});

module.exports = router;
