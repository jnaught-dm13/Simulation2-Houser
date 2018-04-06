require("dotenv").config();
const controller = require("./controller");

const express = require("express");
const { json } = require("body-parser");
const app = express();
const massive = require("massive");
const port = process.env.PORT || 3001;

massive(process.env.CONNECTION_STRING)
  .then(dbInstance => {
    // console.log(dbInstance);
    app.set("db", dbInstance);
  })
  .catch(err => console.log(err));

app.use(json());

app.get("/api/getData", controller.getData);
app.post("/api/addProperty", controller.addProperty);
app.delete("/api/removeProperty/:id", controller.removeProperty);

app.listen(port, () => {
  console.log(`I'm listening on port: ${port}`);
});
