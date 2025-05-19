import express from "express";
import HttpError from "../middleware/httpError.js";
import sampleMiddleware from "../middleware/sampleMiddleware.js";

const router = express.Router();

router.get("/", sampleMiddleware, (req, res) => {
  res.json({ message: "Welcome to the Express backend!" });
});

router.get("/error", (req, res, next) => {
  next(new HttpError(400, "This is a sample error"));
});

export default router;
