const express = require("express");
const { getAllSkills } = require("../controllers/skills");
const router = express.Router();

router.get("/skills", getAllSkills);

module.exports = router;
