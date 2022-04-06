const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const VideoSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
})

const Video = mongoose.model("Video", VideoSchema)

module.exports = Video