const express = require('express');
const router = express.Router();
const booksRepo = require('../repositories/booksRepository');
const security = require('../util/security');
 
router.get('/', (req, res) => {

  res.json(booksRepo.all());
});

router.get('/:id', (req, res) => {

  res.json(booksRepo.recover(parseInt(req.params.id)));
});

router.post('/', security.authorizeJWT, (req, res) => {

    res.json(booksRepo.add(req.body));
});

router.put('/:id', security.authorizeJWT, (req, res) => {

    res.json(booksRepo.change(parseInt(req.params.id), req.body));
});

router.delete('/:id', security.authorizeJWT, (req, res) => {

    booksRepo.remove(parseInt(req.params.id));
    res.sendStatus(200);
});

module.exports = router;