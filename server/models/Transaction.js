const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");

const TransactionSchema = new Schema({
  date: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Transaction = mongoose.model("Transaction", TransactionSchema);

module.exports = Transaction;
