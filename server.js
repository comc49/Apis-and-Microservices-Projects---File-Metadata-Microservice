'use strict';

var express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer();

const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_URI || 'mongodb://localhost/exercise-track' );


// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({extended: false}))


app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});

app.post('/api/fileanalyse',upload.single('upfile'),function(req,res) {
  console.log(req.body);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Node.js listening ...');
});
