const express = require("express"); // npm i express
const app = express();
const cors = require("cors"); // npm i cors
const dbConnect = require("./dbConnect");
const port = process.env.PORT || 3000;

dbConnect(); // connect to the database

app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
