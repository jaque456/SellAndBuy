const express = require('express');
const router = express.Router();
const pool = require('../database');

router.get('/registro',(req, res) => {
    res.render('usuario/registro');
});

router.get('/login',(req, res) => {
    res.render('usuario/login');
});

router.get('/perfilVende',(req, res) => {
    res.render('usuario/perfilVende');
});

module.exports = router;