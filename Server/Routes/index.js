import { Router } from "express";
import getAllSkills from "../controllers/skills.js";
const router = Router();

router.get("/skills", getAllSkills);

export default router;
