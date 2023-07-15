import { useEffect, useState } from "react";
import styles from "./ProjectsList.module.css";
import axios from "axios";
import ProjectCard from "../ProjectCard/ProjectCard";

function ProjectsList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then(({ data }) => {
      setProjects(data);
    });
  }, []);
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
