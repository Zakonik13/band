const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const MerchSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Merch = mongoose.model("Merch", MerchSchema);

module.exports = Merch;
