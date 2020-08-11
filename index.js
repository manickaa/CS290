var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port' , 5000);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',function(req,res) {
  res.render('home.handlebars');
});

app.get('/menu', function(req, res) {
  res.render('menu.handlebars');
});

app.get('/gallery', function(req, res) {
  res.render('gallery.handlebars');
});

app.get('/reserve', function(req, res) {
  res.render('reserve.handlebars');
});

app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' + app.get('port') + ';press CTRL+C to terminate.');
});
