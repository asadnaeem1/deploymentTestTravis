const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Yahoo, Application Running!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Application Running at -> ", PORT);
});
