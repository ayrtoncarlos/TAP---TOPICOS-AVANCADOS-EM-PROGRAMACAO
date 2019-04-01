const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const booksRepo = require('./repositories/booksRepository');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

var logStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });

app.set('view engine', 'ejs');

app.use(morgan('combined', { stream: logStream }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use('/auth', require('./controllers/autorization'));
app.use('/books', require('./controllers/books'));


app.get('/', (req, res) => {

    res.send('It works!!!');
});

app.listen(PORT, function() {

    console.log("Server running! --> http://localhost:${PORT}");
});