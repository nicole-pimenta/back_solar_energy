const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Wait connecting to database");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.lmamrfm.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    )
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
