const express = require('express');
const router = express.Router();
const {isLoggedIn, isNotLoggedIn} = require('../lib/auth');
const pool = require('../database');

router.get('/publicarProd', isLoggedIn, (req, res) => {
    req.flash('success', 'Producto publicado correctamente');
    res.render('productos/publicarProd');
});

router.get('/consultProdu', isLoggedIn, (req, res) => {
    res.render('productos/consultProdu');
});

module.exports = router;
