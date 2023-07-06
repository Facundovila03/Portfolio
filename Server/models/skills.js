const { Schema, model } = require("mongoose");

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
});

module.exports = model("Skill", skillModel);
