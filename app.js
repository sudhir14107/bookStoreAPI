var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

app.use(bodyParser.json())

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

//Add genre
app.post('/api/genres',function(req,res){
    var genre = req.body;
    Genre.addGenre(genre, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});

//Update genre
app.put('/api/genres/:_id',function(req,res){
    var id = req.param._id;
    var genre = req.body;
    Genre.updateGenre(id,genre,{}, function(err, genre){
        if(err){
            throw err;
        }
        res.json(genre);
    });
});


//get books using API HTTP get method
app.get('/api/books',function(req,res){
    Book.getBooks(function(err, books){
        if(err){
            throw err;
        }
        res.json(books);
    });
});

//get book by id
app.get('/api/books/:_id',function(req,res){
    Book.getBooksById(req.params._id, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

//Add book
app.post('/api/books',function(req,res){
    var book = req.body;
    Book.addBook(book, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});

app.put('/api/books/:_id',function(req,res){
    var id = req.param._id;
    var book = req.body;
    Book.updateBook(id,book,{}, function(err, book){
        if(err){
            throw err;
        }
        res.json(book);
    });
});



app.listen(3000);
console.log('Running on port 3000');