const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderModel = require("./Models/orderModel");

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// connect the database here

connectDatabase();

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017/cartservice");
  console.log("database connected");
}

// create new order

app.post("/orders", (req, res) => {
  const orderData = req.body;

  orderModel
    .create(orderData)
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen("5000", () => {
  console.log("the server started at port 5000");
});
