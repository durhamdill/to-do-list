const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const toDoList = ["wash car"];

// Create app
const app = express();

app.engine('mustache', mustacheExpress());
app.engine('js', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static(__dirname + '/public'));

// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());

app.get('/todo/', function (req, res) {
  res.render('to-do', {showList: toDoList});
});

app.post('/todo/', function(req, res){
  toDoList.push(req.body.addTask);
  console.log(toDoList);
  res.redirect('/todo/');
});


app.listen(3000, function () {
  console.log('Successfully started express application!')
});
