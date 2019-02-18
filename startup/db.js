const dbDebugger = require('debug')('app:db');
const mongoose = require('mongoose');
const config = require('config');

module.exports = function() {
    const db = 'mongodb://' + config.get('db.host') + '/' + config.get('db.name');
    dbDebugger('Connecting to DB at', db, '..');

    mongoose.connect(db)
        .then(() => dbDebugger('Connected to DB'))
        .catch(err => dbDebugger('Error connecting to DB!', err));
}