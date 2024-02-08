const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  billNumber: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  organizationFrom: {
    type: String,
    required: true,
  },
  ulrToPdf: {
    type: String,
    required: true,
  },
});

const Bill = mongoose.model("Bill", billSchema);

module.exports = Bill;
