const mongoose = require('mongoose')
const Books = require('./model/booksSchema')
const uri = "mongodb+srv://imran:1mr4n@books.lip7msb.mongodb.net/booksDB?retryWrites=true&w=majority";

const connect = async () => {
    try{
        await mongoose.connect(uri)
        console.log('Hello')
    } catch (error) {
        console.error(error)
    }
}


const handleNewBook = async () => {
    const result = await Books.create({
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "publisher": "Chatto & Windus",
        "date": "01/01/1932",
        "website": null
    })

    console.log(result)
}

connect()

handleNewBook()



