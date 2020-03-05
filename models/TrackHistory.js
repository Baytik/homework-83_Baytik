const mongoose = require('mongoose');

const TrackHistorySchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    trackId: {
        type: String,
        required: true
    },
    datetime: String,
});


const TrackHistory = mongoose.model('TrackHistory', TrackHistorySchema);

module.exports = TrackHistory;