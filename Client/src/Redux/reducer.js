import {
  GET_PROJECTS,
  GET_PROJECT_DETAIL,
  GET_TECHSTACK,
  GET_SKILLS,
} from "./actions.js";

const initialState = {
  projects: [],
  projectDetail: {},
  techStack: [],
  skills: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      console.log(action.payload);
      return {
        ...state,
        projects: action.payload,
      };
    case GET_PROJECT_DETAIL:
      console.log(action.payload);

      return {
        ...state,
        projectDetail: action.payload,
      };
    case GET_TECHSTACK:
      console.log(action.payload);

      return {
        ...state,
        techStack: action.payload,
      };
    case GET_SKILLS:
      console.log(action.payload);

      return {
        ...state,
        skills: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
