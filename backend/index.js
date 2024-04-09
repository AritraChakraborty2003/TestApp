const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.json({ name: "Aritra", age: 23, marks: 56 });
});

app.listen(8000);
