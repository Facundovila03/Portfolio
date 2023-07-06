import { Router } from "express";
import getAllSkills from "../controllers/skills.js";
import { getAllProjects, getProjectDetail } from "../controllers/projects.js";
const router = Router();

router.get("/skills", getAllSkills); //? me manda un array con un objeto por cada skill
router.get("/projects", getAllProjects); //? me manda un array con un objeto por cada proyecto
router.get("/projects/:id", getProjectDetail); //? me manda un array con un objeto por cada proyecto

export default router;
