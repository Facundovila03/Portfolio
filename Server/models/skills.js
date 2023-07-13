import { Schema, model } from "mongoose";

const skillModel = new Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  proficiency: {
    type: Number,
    max: 100,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
});

export default model("Skill", skillModel);
