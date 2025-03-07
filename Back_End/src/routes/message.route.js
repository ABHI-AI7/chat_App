import express from "express";
import { protectRoute } from "../middlelware/auth.middleware";
import { getUsersForSidebar } from "../controllers/msessage.controller";

const router = express.Router()

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/:id", protectRoute, getMessages)


export default router