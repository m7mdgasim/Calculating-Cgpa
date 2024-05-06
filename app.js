const path = require('path');

const express = require('express');

const app = express();


app.set('views', path.join(__dirname));
app.set('view engine', 'ejs');

app.use(express.static('public'));


app.get('/', function(req,res){
    res.render('index');
})
app.get('/gpa', function(req , res){
    res.render('gpa');
})
app.get('/cgpa', function(req , res){
    res.render('cgpa')
})

app.listen(3000);