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

export const uploadTechStack = () => {
  let payload;
  axios
    .get("http://localhost:3001/techstack")
    .then(({ data }) => (payload = data))
    .then(() => console.log(payload));
  return {
    type: GET_TECHSTACK,
    payload: payload,
  };
};

export const getProjectDetail = (id) => {
  let payload = {};
  if (id) {
    axios
      .get(`http://localhost:3001/projects/${id}`)
      .then(({ data }) => {
        payload = data;
      })
      .then(() => console.log(payload))
      .then(() => console.log(payload));

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
  console.log(arg);
  return {
    type: GET_SKILLS,
    payload: arg,
  };
};
