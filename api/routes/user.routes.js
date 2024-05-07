import express from "express";
import { helloWorld, updateUser } from "../controllers/user.controller.js";
import { verifyToken } from "../utils/verifyUser.js";

const router = express.Router();

router.get("/hello-world", helloWorld);
router.post("/update/:id", verifyToken, updateUser);

export default router;
