var mongoose = require('mongoose');

//Genre schema is not for database but for application
var genreSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

var Genre = module.exports = mongoose.model('Genre', genreSchema);

//get Genres
module.exports.getGenres = function(callback, limit){
    Genre.find(callback).limit(limit);
}