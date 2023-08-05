// import { useEffect, useState } from "react";
import styles from "./ProjectsList.module.css";
// import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard";
import { useSelector } from "react-redux";

function ProjectsList() {
  const projects = useSelector((state) => state.projects);

  return (
    <div className={styles.container}>
      {projects.length &&
        projects.map((project) => {
          return (
            <ProjectCard
              key={project._id}
              title={project.title}
              image={project.image}
              _id={project._id}
              link={project.link}
            />
          );
        })}
    </div>
  );
}
export default ProjectsList;
