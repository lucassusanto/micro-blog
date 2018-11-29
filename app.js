var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var helmet = require('helmet')

// Route Sources
var PageRoute = require('./routes/page');

// App
var app = express();

// Configs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());

// Routes
app.use('/page', PageRoute);

// Start
app.listen(8000, function() {
    console.log('Listening in 8000 ...');
});