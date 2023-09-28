import express from "express";

const router = express.Router();

router.get("/profile", FetchProfile);

export default router;
