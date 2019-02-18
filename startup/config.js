const configDebugger = require('debug')('app:config');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

module.exports = function (app) {
   configDebugger('Bootstrapping..');

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));

    app.use(helmet());
    app.use(compression());

    // set NODE_ENV=<config_file_name> first before proceeding
    // if(app.get('env') === 'develop') {
        app.use(morgan('tiny'));
        // console.log('Morgan enabled!');
    // }

    configDebugger('Bootstrap OK');
}