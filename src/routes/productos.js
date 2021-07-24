const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/publicarProd',(req, res) => {
    res.render('productos/publicarProd');
});

router.get('/consultProdu',(req, res) => {
    res.render('productos/consultProdu');
});

module.exports = router;
