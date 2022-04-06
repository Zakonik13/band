const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const ImageSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Image = mongoose.model("Image", ImageSchema)

module.exports = Image
