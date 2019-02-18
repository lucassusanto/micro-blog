const mainDebugger = require('debug')('app:main');
const homeRouter = require('./routes/home');
const userRouter = require('./routes/user');
const movieRouter = require('./routes/movie');

const express = require('express');
const app = express();

mainDebugger('Initializing..');

// Startups
require('./startup/config')(app);
require('./startup/db')();

// Routes
app.use('/', homeRouter);
app.use('/api', userRouter);
app.use('/api/movies', movieRouter);

// Serve
const port = process.env.port || 3000;
app.listen(port, () => mainDebugger(`Listening on port ${port}..`));
