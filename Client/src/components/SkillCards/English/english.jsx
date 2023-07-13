import styles from "./english.module.css";
import englishData from "./english.js";

function English() {
  return (
    <div className={styles.container}>
      <div className={styles.imagen}>
        <img
          className={styles.cambridge}
          src={englishData.image}
          alt={englishData.title}
        />
        <span className={styles.TituloEnglish}>{englishData.title}</span>
      </div>
      <p className={styles.DescriptionEnglish}>{englishData.description}</p>
    </div>
  );
}

export default English;
