import createHttpError from "http-errors";
import skillModel from "../models/skills.js";

const getAllSkills = async (req, res, next) => {
  try {
    const skills = await skillModel.find().exec();
    if (!skills.length) throw Error("no skills found");
    res.status(200).json(skills);
  } catch (error) {
    next(createHttpError(error));
  }
};

export default getAllSkills;
