const express = require('express');
const router = express.Router();

const passport = require('passport');

const pool = require('../database');


router.get('/registro',(req, res) => {
    res.render('usuario/registro');
});

router.post('/registro', passport.authenticate('local.registro', {
    successRedirect: '/login',
    failureRedirect: '/registro',
    failureFlash: true
}));

router.get('/login',(req, res) => {
    res.render('usuario/login');
});

router.post('/login', (req, res, next)=>{
    passport.authenticate('local.login', {
        successRedirect : '/login',
        failureRedirect: '/registro',
        failureFlash: true
    })(req, res, next)
});

router.get('/perfilVende',(req, res) => {
    res.render('usuario/perfilVende');
});

module.exports = router;