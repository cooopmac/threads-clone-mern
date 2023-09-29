import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const mongoURI = process.env.MONGO_DEV_URI;
const connectDB = async () => {
  await mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
    })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
};

export default connectDB;
