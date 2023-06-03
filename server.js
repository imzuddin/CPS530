var express = require('express');
const cors = require('cors');
const path = require('path');

var app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.json() );       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
  extended: false
})); 

var books = [
    {
      "title": "Catch-22",
      "author": "Joseph Heller",
      "publisher": "Simon & Schuster",
      "date": "10/10/1961",
      "website": null
    },
    {
      "title": "Fahrenheit 451",
      "author": "Ray Bradbury",
      "publisher": "Ballantine Books",
      "date": "19/10/1953",
      "website": null
    }
  ]

app.use(express.static(__dirname + '/'));


app.get('/bookinventory/list', function(req, res){
   res.send(books);
});

app.post('/bookinventory/add', function(req, res){
  let new_json = {
    'title': req.body.title,
    'author': req.body.author,
    'publisher': req.body.publisher,
    'date': req.body.date,
    'website': req.body.website
  }

  books.push(new_json);
}

);

app.listen(3000);