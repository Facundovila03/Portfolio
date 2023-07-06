const createHttpError = require("http-errors");
const skillModel = require("../models/skills");

const getAllSkills = async (req, res, next) => {
  try {
    const skills = await skillModel.find().exec();
    if (!skills.length) throw Error("no skills found");
    res.status(200).json(skills);
  } catch (error) {
    next(createHttpError(error));
  }
};

module.exports = {
  getAllSkills,
};
