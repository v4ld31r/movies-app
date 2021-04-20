const express = require("express");
const cors = require("cors");

const db = require("./db");
const movieRouter = require("./routes/movie-router");

const app = express();
const apiPort = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.use("/api", movieRouter);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));
