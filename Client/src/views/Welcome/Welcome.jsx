import Directory from "../../components/Directory/Directory";
import styles from "../Welcome/Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.container}>
      <div className={styles.welcome}>
        <div className={styles.backgroundClip}>
          <span>WELCOME</span>
        </div>
        <p>
          My name is Facundo Vila and this is my portfolio, explore my projects
          and lets create something amazing together!
        </p>
      </div>
      <Directory />
    </div>
  );
}

export default Welcome;
