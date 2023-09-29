import express from "express";
import cors from "cors";
import user from "./routes/User.js";
import auth from "./routes/Auth.js";
import connectDB from "./db/ConnectDB.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => res.send("Active"));

app.use("/user", user);
app.use("/auth", auth);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
