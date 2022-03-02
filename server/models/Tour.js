const { Schema, model } = require('mongoose')
const mongoose = require("mongoose");

const TourSchema =  new Schema ({
    // date
    // city
    // venue
    // link
})


const Tour = mongoose.model("Tour", TourSchema);

module.exports = Tour