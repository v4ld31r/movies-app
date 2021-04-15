const mongoose = require("mongoose");

try {
  mongoose
    .connect("mongodb://127.0.0.1:27017/cinema", { useNewUrlParser: true })
    .catch((e) => {
      console.error("Connection error", e.message);
    });
} catch (error) {
  handleError(error);
}
const db = mongoose.connection;

module.exports = db;
