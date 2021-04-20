const mongoose = require("mongoose");

try {
  mongoose
    .connect("mongodb://localhost:27017/cinema", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((e) => {
      console.error("Connection error", e.message);
    });
} catch (error) {
  handleError(error);
}
const db = mongoose.connection;

module.exports = db;
