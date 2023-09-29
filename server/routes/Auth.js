import express from "express";
import { Signup, Login } from "../functions/AuthFunctions.js";

const router = express.Router();

router.post("/signup", Signup);
router.get("/login", Login);

export default router;
