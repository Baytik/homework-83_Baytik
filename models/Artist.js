const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArtistSchema = new Schema ({
    artist: {
        type: String,
        required: true
    },
    information: {
        type: String,
        required: true
    },
    image: String,
});

const Artist = mongoose.model('Artist', ArtistSchema);

module.exports = Artist;