//list tasks... /data
//add tasks... /data/add
//complete tasks.. /data/complete/:id

//variables
var express = require('express');
var bodyParser = require('body-parser');
var mustache = require('mustache-express');
var todoDal = require('./dal');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var app = express();
const list = require('./list');


//register mustache-express
app.engine('mustache', mustache());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

//setup bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//serve static file
app.use(express.static('public'))

//routes
app.get('/', function(req, res){
  console.log(list);
  res.render('index', { list: list })
});

app.post('/list', function(req, res){
  console.log(req.body.add)
  todoDal.addTask(req.body.add);
  res.redirect('/');
});

app.post('/list', function(req, res){
  todoDal.removeTask(req.params);
  res.redirect('/complete')
});

app.set('port', 3000)

app.listen(app.get('port'), function () {
  console.log('Port 3000 is running')
});
