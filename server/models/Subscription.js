const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const SubscriptionSchema = new Schema({
  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"]
  }
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;
