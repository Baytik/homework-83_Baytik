const express = require('express');
const TrackHistory = require('../models/TrackHistory');
const User = require('../models/User');

const router = express.Router();

router.post('/', async (req, res) => {
    const authorization = req.get('Authorization');
    if (!authorization) {
        return res.status(401).send({error: 'Unauthorized'})
    }
    const user = await User.find({token: authorization});
    const date = new Date();
    const messageDate = date.toISOString();
    const object = {
        trackId: req.body.trackId,
        datetime: messageDate,
        userId: user[0]._id
    };
    const trackHistory = new TrackHistory(object);

    try {
        await trackHistory.save();
        return res.send({message: 'Track history was saved'});
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;