// using moongose libabry for database connectivity

const mongoose = require("mongoose");

// mongoose.connect("mongodb:// database url", pass a valuse { useNewUrlParser: true })

mongoose.connect("mongodb://localhost/angular-mean-stack", {
  useNewUrlParser: true,
});

mongoose.connection
  .once("open", () => console.log("Connected"))
  .on("error", (error) => {
    console.log("Your Error", error);
  });

// creating schema

const TestSchema = mongoose.Schema({
  _id: mongoose.Types.ObjectId,
  name: String,
  price: Number,
});
