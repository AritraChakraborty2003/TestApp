const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json({ name: "Aritra", age: 23, marks: 56 });
});
app.get("/books", (req, res) => {
  res.json({ name: "maths", topic: "calculus", price: 8000 });
});

app.get("/teachers", (req, res) => {
  res.json({ name: "Aritra", age: 27, subject: "MERN", exp: 10 });
});
app.listen(8000);
