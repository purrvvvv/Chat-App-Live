import express from "express";
import {getMessage, sendMessage } from "../controllers/message.controllers.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

//protect route is a middlware used coz jwt token signed and secured hota hai so usko unsign kark looged in user ki id milegi
//used to fetch user._id in wevery controller
router.post("/send/:id",protectRoute, sendMessage);
router.get("/:id",protectRoute, getMessage);

export default router;