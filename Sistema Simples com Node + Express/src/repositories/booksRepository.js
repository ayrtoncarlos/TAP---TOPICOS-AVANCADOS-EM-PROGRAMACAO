const logger = require('../config/logger');
const books = [];

let nextId = 0;

const getBookId = id => {
    
    logger.info('Looking for book index with id ' + id);
    let index = books.map(l => l.id).indexOf(id);

    if(index < 0)
    {
        logger.error('The book with id '+ id +' was not found.');
    }

    return index;
}

const booksRepository = {

    add: (book) => {

        book.push({

            id: nextId++,
            title: book.title,
            author: book.author
        })
    },

    recover: (id) => {

        return books[getBookId(id)];
    },

    change: (id, neww) => {

        return books[getBookId(id)] = neww;
    },

    remove: (id) => {

        return books.splice(getBookId, 1)
    },

    all: () => {
        
        return books;
    }
}

module.exports = booksRepository;