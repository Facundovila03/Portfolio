/* eslint-disable react/no-unescaped-entities */
import styles from "./About.module.css";
import pfp from "../../assets/Pfp.png";

function About() {
  return (
    <div className={styles.container}>
      <img src={pfp} className={styles.imagen} />
      <div className={styles.about}>
        <span>
          I've always been interested in technology and making it fit into every
          aspect of my life. I took my first steps "coding" little programs on
          scratch at high school which spiked my interest and then moved on to
          small arduino projects that made me fall in love with logical
          problems.
        </span>
      </div>
      <span className={styles.blurAbout}>cc</span>
    </div>
  );
}

export default About;
