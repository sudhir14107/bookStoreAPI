var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

Genre = require('./models/genres')
Book = require('./models/books')

//connnect to mongoose
mongoose.connect("mongodb://localhost:27017/bookstore", { useNewUrlParser: true });
var db = mongoose.connection

//set up routes to landing page

app.get('/', function(req,res){
    res.send('Please  api/book or api/genre')
});

//get genres using api http get method
app.get('/api/genres',function(req,res){
    Genre.getGenres(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});
//get boos using API HTTP get method
app.get('/api/books',function(req,res){
    Book.getBooks(function(err, genres){
        if(err){
            throw err;
        }
        res.json(genres);
    });
});



app.listen(3000);
console.log('Running on port 3000');