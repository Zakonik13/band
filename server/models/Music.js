const { Schema, model } = require('mongoose')
const mongoose = require("mongoose");

const MusicSchema =  new Schema ({
    title: {
        type: String,
        required: true,
    }

    // Album Name
    // Source
})

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music;