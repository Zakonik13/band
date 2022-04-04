const { Schema, model } = require("mongoose")
const mongoose = require("mongoose")

const NewsSchema = new Schema({
  date: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
})

const News = mongoose.model("News", NewsSchema)

module.exports = News
