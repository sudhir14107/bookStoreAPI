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
module.exports.getBooksById = (id, callback) => Book.findById(id)