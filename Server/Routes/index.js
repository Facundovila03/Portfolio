import { Router } from "express";
import getAllSkills from "../controllers/skills.js";
import { getAllProjects, getProjectDetail } from "../controllers/projects.js";
import getTechStack from "../controllers/techstack.js";
import sendMail from "../controllers/contact.js";
const router = Router();

router.get("/skills", getAllSkills); //? me manda un array con un objeto por cada skill
router.get("/projects", getAllProjects); //? me manda un array con un objeto por cada proyecto
router.get("/projects/:id", getProjectDetail); //? me manda un array con un objeto por cada proyecto
router.get("/techstack", getTechStack);
router.post("/contactmail", sendMail);

export default router;
