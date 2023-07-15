import ProjectsList from "../../components/Projects list/ProjectsList";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.container}>
      <span className={styles.texto}>
        Tap the image for a description or click the name to visit the project
      </span>
      <ProjectsList />
    </div>
  );
}

export default Projects;
