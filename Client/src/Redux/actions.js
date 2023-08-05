import axios from "axios";

export const GET_PROJECTS = "GET_PROJECTS";
export const GET_TECHSTACK = "GET_TECHSTACK";
export const GET_PROJECT_DETAIL = "GET_PROJECT_DETAIL";
export const GET_SKILLS = "GET_SKILLS";

export const uploadProjects = (arg) => {
  return {
    type: GET_PROJECTS,
    payload: arg,
  };
};

export const uploadTechStack = (arg) => {
  return {
    type: GET_TECHSTACK,
    payload: arg,
  };
};

export const getProjectDetail = (id) => {
  let payload = {};
  if (id) {
    axios.get(`http://localhost:3001/projects/${id}`).then(({ data }) => {
      payload = data;
    });

    return {
      type: GET_PROJECT_DETAIL,
      payload: payload,
    };
  } else {
    return {
      type: GET_PROJECT_DETAIL,
      payload: payload,
    };
  }
};

export const uploadSkills = (arg) => {
  return {
    type: GET_SKILLS,
    payload: arg,
  };
};
