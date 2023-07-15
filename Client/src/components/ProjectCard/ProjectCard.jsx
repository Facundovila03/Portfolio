import { useNavigate } from "react-router-dom";
import styles from "./ProjectCard.module.css";

// eslint-disable-next-line react/prop-types
function ProjectCard({ title, image, _id }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.container}
      onClick={() => navigate(`/projects/${_id}`)}>
      <div className={styles.imgAndOverlay}>
        <span className={styles.overlay}>.</span>
        <img
          className={styles.image}
          src={image}
          alt={title}
        />
      </div>
      <p className={styles.titulo}>{title}</p>
    </div>
  );
}

export default ProjectCard;
