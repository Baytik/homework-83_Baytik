const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const artist = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');
const users = require('./app/users');
const TrackHistories = require('./app/trackHistories');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost/artists', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    app.use('/artists', artist);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.use('/users', users);
    app.use('/track_history', TrackHistories);
    app.listen(port)
};

run().catch(e => {
    console.error(e)
});