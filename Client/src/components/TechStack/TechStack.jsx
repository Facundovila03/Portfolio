import { useEffect, useState } from "react";
import styles from "./TechStack.module.css";
import axios from "axios";

function TechStack() {
  const [techs, setTechs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/techstack")
      .then(({ data }) => setTechs(data));
  }, []);

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
