let mongoose = require('mongoose');
let db;

module.exports = () => {
    if(!db) {
        db = mongoose.connect('mongodb://localhost/crud')
    }
    return db;
}