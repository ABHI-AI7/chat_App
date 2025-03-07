import express from "express";
import { protectRoute } from "../middlelware/auth.middleware.js";
import { getMessages, getUsersForSidebar, sendMessages } from "../controllers/msessage.controller.js";

const router = express.Router()

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages)

router.post("/send", protectRoute, sendMessages)




export default router