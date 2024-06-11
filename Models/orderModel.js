const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  cart: [{ type: Object }],
  user: {
    type: Object,
    require: true,
  },
  address: {
    type: Object,
    require: true,
  },
});

const orderModel = mongoose.model("orders", orderSchema);

module.exports = orderModel;
