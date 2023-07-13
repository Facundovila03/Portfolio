import createHttpError from "http-errors";
import TechModel from "../models/tech.js";

export default async function getTechStack(req, res, next) {
  try {
    const techStack = await TechModel.find().exec();
    res.status(200).json(techStack);
  } catch (error) {
    next(createHttpError(error));
  }
}
