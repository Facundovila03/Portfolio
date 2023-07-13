import styles from "./SkillCard.module.css";
import { CircularProgress } from "@mui/material/";

// eslint-disable-next-line react/prop-types
function SkillCard({ title, description, image, proficiency, color }) {
  return (
    <div className={styles.container}>
      {/* <div className={styles.imgandtext}> */}
      <div className={styles.imagen}>
        <CircularProgress
          className={styles.circle}
          size={90}
          thickness={3.6}
          value={proficiency}
          variant="determinate"
          sx={{
            color: color,
          }}
        />
        <img
          src={image}
          alt={title}
        />
        {/* </div> */}
      </div>
      <span className={styles.skillTitulo}>{title}</span>
      <div className={styles.imgandtext} />
      <p className={styles.skillDescription}>{description}</p>
    </div>
  );
}

export default SkillCard;
