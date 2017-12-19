module.exports = () => {
    let db = require('../libs/connect_db')();
    let Schema = require('mongoose').Schema;

    let task = Schema({
        title: String,
        description: String,
        status: Boolean
    });

    return db.model('tasks', task)
}