const router = require("./src/router/router");
const mongoose = require("mongoose");

const express = require("express");
const app = express();
mongoose.connect(
  "mongodb+srv://camile:UbP7kU2LDdGEglVg@cluster0.wn2bw.mongodb.net/flashcardSystem"
);

mongoose.connection.once("open", () => {
  console.log("connect to MongoDB ");
});

mongoose.connection?.on("error", (err) => {
  console.error(`error to connect - MongoDB: Error: ${err.message}`);
});

app.use(express.json());
const PORT = 3000;

app.use(function (err, req, res, next) {
  console.error(err.stack);
  read.status(500).send("Something broke!");
});

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Serve is running on port ${PORT}`);
});
