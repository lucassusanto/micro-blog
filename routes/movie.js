const { Movie, validate } = require('../models/movie');
const _ = require('lodash');
const express = require('express');
const router = express.Router();

// Routes
router.get('/', async (req, res) => {
    const movies = await Movie.find().sort('name');
    res.send(movies);
});

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let movie = new Movie(_.pick(req.body, ['name']));
    movie = await movie.save();
    
    res.send(movie);
});

router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if(!movie) throw new Error();

        res.send(movie);
    }
    catch(e) {
        res.status(404).send('Movie was not found!');
    }
});

router.put('/:id', async (req, res) => {
    const { error } = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    try {
        const result = await Movie.update({ _id: req.params.id }, { $set: {
            name: req.body.name
        }});

        res.send(result);
    }
    catch(e) {
        res.status(400).send('Failed to update document');
    }
});

// BUG
router.delete('/:id', async (req, res) => {
    const result = Movie.deleteOne({ _id: req.params.id });
    res.send(result);
});

module.exports = router;