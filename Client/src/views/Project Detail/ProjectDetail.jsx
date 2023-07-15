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
      .then(({ data }) => setDetail(data));
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
      <img
        className={styles.image}
        src={detail?.image}
        alt={detail?.title}
      />
    </div>
  );
}

export default ProjectDetail;
