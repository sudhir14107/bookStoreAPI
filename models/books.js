var mongoose = require('mongoose');

//Book schema is not for database but for application
var bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    genre : {
        type : String,
        required : true
    },
    dessciption : {
        type : String
    },
    author : {
        type : String,
        required : true
    },
    publisher : {
        type : String
    },
    pages : {
        type : Number
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Book = module.exports = mongoose.model('Book', bookSchema);
//get Books
module.exports.getBooks = (callback, limit) => Book.find(callback).limit(limit)

//get Books by id
module.exports.getBooksById = (id, callback) => Book.findById(id, callback)
//Add book
module.exports.addBook = (book, callback) => Book.create(book,callback)
//Update Book
module.exports.updateBook = function(id,book,options,callback){
    var query = { _id: id };
    var update = {
        title : book.title,
        genre : book.genre,
        dessciption : book.dessciption,
        author : book.author,
        publisher : book.publisher,
        pages : book.pages
    }
    Genre.findOneAndUpdate(query,update,options,callback)
}
