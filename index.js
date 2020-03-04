const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const artist = require('./app/artists');
const albums = require('./app/albums');
const tracks = require('./app/tracks');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    await mongoose.connect('mongodb://localhost/artists', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    app.use('/artists', artist);
    app.use('/albums', albums);
    app.use('/tracks', tracks);
    app.listen(port)
};

run().catch(e => {
    console.error(e)
});