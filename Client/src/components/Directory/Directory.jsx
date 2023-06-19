import styles from "./Directory.module.css";

function Directory() {
  return (
    <div className={styles.container}>
      <div className={styles.opciones}>
        <p>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Contact me</p>
      </div>
    </div>
  );
}

export default Directory;
