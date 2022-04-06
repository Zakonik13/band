const { Schema, model } = require('mongoose')
const mongoose = require("mongoose");

const MusicSchema =  new Schema ({
    title: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    }
})

const Music = mongoose.model("Music", MusicSchema);

module.exports = Music;