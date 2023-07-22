import Directory from "../../components/Directory/Directory";
import styles from "../Welcome/Welcome.module.css";

// eslint-disable-next-line react/prop-types
function Welcome({ references, scrollToSection }) {
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
      <Directory
        references={references}
        scrollToSection={scrollToSection}
      />
    </div>
  );
}

export default Welcome;
