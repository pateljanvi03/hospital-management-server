const express = require("express");
const router = require("./routes/main");
require("dotenv").config();
const connect = require("./config/db");
const app = express();
const cors = require('cors')
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
connect();

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});

// app.get("/", function(req, res) {
//     res.send("Hello World! Janvi port 5001");
// });

app.use("/", router);
