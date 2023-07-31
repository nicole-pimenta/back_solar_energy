import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to database..");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => {
      console.log(`Error connecting to MongoDB Atlas ${error}`);
    });
};

export default connectDatabase;
