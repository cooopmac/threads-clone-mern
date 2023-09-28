import express from "express";
import cors from "cors";
import user from "./routes/User.js";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Active"));

app.use("/user", user);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
