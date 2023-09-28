import express from "express";
import FetchProfile from "../functions/UserFunctions.js";

const router = express.Router();

router.get("/profile", FetchProfile);

export default router;
