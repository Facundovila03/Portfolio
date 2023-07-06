import createHttpError from "http-errors";
import projectModel from "../models/project.js";
import { isValidObjectId } from "mongoose";

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectModel.find().exec();
    if (!projects.length) {
      throw createHttpError("No projects found");
    }
    res.status(200).json(projects);
  } catch (error) {
    next(createHttpError(error));
  }
};

export const getProjectDetail = async (req, res, next) => {
  const { id } = req.params;
  if (isValidObjectId(id)) {
    try {
      const project = await projectModel.findById(id).exec();
      if (!project) {
        throw createHttpError("Project not found");
      }
      res.status(200).json(project);
    } catch (error) {
      next(createHttpError(error));
    }
  } else {
    next(createHttpError("Invalid project id"));
  }
};
