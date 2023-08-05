import styles from "./TechStack.module.css";
import { useSelector } from "react-redux";

function TechStack() {
  const techs = useSelector((state) => state.techStack);

  return (
    <div className={styles.container}>
      <span className={styles.text}>Tech Stack</span>
      <div className={styles.techStack}>
        {techs.length &&
          techs.map((tech) => {
            return (
              <img
                className={styles.image}
                src={tech.image}
                alt={tech.name}
                key={tech._id}
              />
            );
          })}
      </div>
    </div>
  );
}

export default TechStack;
