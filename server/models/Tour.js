const { Schema, model } = require('mongoose')
const mongoose = require("mongoose");

const TourSchema =  new Schema ({
    date: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    venue: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})


const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour