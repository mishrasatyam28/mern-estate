import express from "express";
import { helloWorld } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/hello-world", helloWorld);

export default router;
