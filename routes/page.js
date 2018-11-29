const express = require('express');
const User = require('../models/users');

const router = express.Router();

var data = [{
    id: 1,
    name: "Zahrul",
    age: 21
},{
    id: 2,
    name: "Ananda",
    age: 19
}];

router.get('/', function(req, res) {
    res.render('index', {title: "Hello! This is Page"});
});

router.get('/:id', function(req, res) {
    res.send(data[req.params.id - 1]);
});

router.get('/query', function(req, res) {
    res.send(User.all());
});

module.exports = router;