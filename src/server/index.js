const express = require("express");
const os = require("os");
const connectDB = require("../config/db");
const app = express();

app.use(express.static("dist"));
app.get("/api/getUsername", (req, res) =>
  res.send({ username: os.userInfo().username })
);
// Connect Database
connectDB();
app.listen(4000, () => console.log(`Listening on port 4000!`));
