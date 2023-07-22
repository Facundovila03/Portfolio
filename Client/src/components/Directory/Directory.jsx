/* eslint-disable react/prop-types */
import styles from "./Directory.module.css";

function Directory({ references, scrollToSection }) {
  console.log(references);
  return (
    <div className={styles.container}>
      <div className={styles.opciones}>
        <p
          className={styles.opcion}
          onClick={() => scrollToSection(references.about)}>
          About
        </p>
        <p
          className={styles.opcion}
          onClick={() => scrollToSection(references.skills)}>
          Skills
        </p>
        <p
          className={styles.opcion}
          onClick={() => scrollToSection(references.projects)}>
          Projects
        </p>
        <p
          className={styles.opcion}
          onClick={() => scrollToSection(references.contactMe)}>
          Contact me
        </p>
      </div>
    </div>
  );
}

export default Directory;
