const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const { json } = require("body-parser");
const { router } = require("./router.js");

const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);

const startApp = () => {
  try {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
