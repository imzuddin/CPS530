const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: false
    },
    date: {
        type: String,
        required: false
    },
    website: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('Books', booksSchema)