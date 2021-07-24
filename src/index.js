const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const path = require('path');
const flash = require('connect-flash');

//inicializadores
const app = express();

//configuraciones
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(flash());

//variables globales
app.use((req, res, next) =>{
    next();
});

//rutas
app.use(require('./routes'));
app.use(require('./routes/authentication'));
app.use('/productos', require('./routes/productos'));
app.use('/', require('./routes/index'));
app.use('/usuario', require('./routes/authentication'));

//archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

//empezar el servidor
app.listen(app.get('port'),() => {
    console.log('Server on port', app.get('port'));
})