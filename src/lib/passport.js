const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('../database');
const helper = require('../lib/helper');

passport.use('local.registro', new LocalStrategy({
    usernameField: 'correo',
    passwordField: 'password',
    passReqToCallback: true
}, async(req, correo, password, done) => {
    const {NomUsuario} = req.body;
    const newUser = {
        correo,
        password,
        NomUsuario
    };
    newUser.password = await helper.encryptPassword(password);
    const result = await pool.query('INSERT INTO usuario SET ?', [newUser]);
    newUser.id = result.insertId;
    return done(null, newUser);
    //console.log(result);
}));

passport.serializeUser((user, done) =>{
    done(null, user.id);
});

passport.deserializeUser(async(id, done) => {
    const rows = await pool.query('SELECT * FROM usuario Where IdUsuario = ?' [id]);
    done(null, rows[0]);
})