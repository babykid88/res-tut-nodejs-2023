const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    name: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Post_Models', PostSchema);