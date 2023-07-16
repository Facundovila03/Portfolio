import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

function ProjectDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/projects/${id}`)
      .then(({ data }) => setDetail(data))
      .then(() => console.log("hola"));
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.arrow}>
        <ArrowBackIosNewIcon
          sx={{ fontSize: 50, color: "#95C6A8" }}
          onClick={() => window.history.back()}
        />
        <p className={styles.name}>{detail?.title}</p>
      </div>
      <div className={styles.data}>
        <div className={styles.imageAndVisit}>
          <img
            className={styles.image}
            src={detail?.image}
            alt={detail?.title}
          />
          <a
            className={styles.link}
            href="https://main--transcendent-puffpuff-9a3f80.netlify.app/#/"
            target="_blank"
            rel="noopener noreferrer">
            Visit
          </a>
        </div>
        <span className={styles.description}>{detail?.description}</span>
      </div>
    </div>
  );
}

export default ProjectDetail;
