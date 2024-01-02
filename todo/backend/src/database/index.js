const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ttahm3d:LYHDMrcmytwjXc5I@100xtahircluster.wszpqnn.mongodb.net/?retryWrites=true&w=majority"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
