import { Schema, model } from "mongoose";

const TechModel = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export default model("Tech", TechModel);
