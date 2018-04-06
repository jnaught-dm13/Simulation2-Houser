require("dotenv").config();

const express = require("express");
const { json } = require("body-parser");
const app = express();
const massive = require("massive");
const port = process.env.PORT || 3001;

console.log(process.env.CONNECTION_STRING);

app.use(json());

app.listen(process.env.PORT, () => {
  console.log(`I'm listening on port: ${process.env.PORT || 3001}`);
});
