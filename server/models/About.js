const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const AboutSchema = new Schema({
  body: {
    type: String,
    required: true
  }
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;
