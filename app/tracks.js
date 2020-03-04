const express = require('express');
const Track = require('../models/Track');

const router = express.Router();

router.get('/', async (req, res) => {
    if (req.query.album) {
        const tracks = await Track.find({album: req.query.album});
        res.send(tracks)
    } else {
        const tracks = await Track.find();
        res.send(tracks);
    }
});

module.exports = router;