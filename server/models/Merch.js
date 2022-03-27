const { Schema, model } = require('mongoose')
const mongoose = require("mongoose");

const MerchSchema =  new Schema ({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

const Merch = mongoose.model("Merch", MerchSchema);

module.exports = Merch;