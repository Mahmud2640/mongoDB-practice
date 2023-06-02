const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// Connect to MongoDB
async function database() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice");
    console.log(`Database connection successful`);
  } catch (err) {
    console.log(`Failed to connect to database`, err);
  }
}
database();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server app listening on port ${port}`);
});
