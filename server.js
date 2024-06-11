const express = require("express");
const mongoose = require("mongoose");
const orderModel = require('./Models/orderModel');

const app = express();
app.use(express.json());

// connect the database here

connectDatabase();

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017/cartservice");
  console.log("database connected");
}


app.

app.listen("5000", () => {
  console.log("the server started at port 5000");
});
