import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./ProjectDetail.module.css";
import { useEffect } from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import useGetProjectDetail from "../../hooks/useGetProjectDetail";
import { uploadProjectDetail } from "../../Redux/actions";
import Loader from "../../components/loader/loader";

function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.projectDetail);

  const ProjectDetail = useGetProjectDetail(id);

  useEffect(() => {
    Object.keys(ProjectDetail).length > 0 &&
      dispatch(uploadProjectDetail(ProjectDetail));
    return () => {
      dispatch(uploadProjectDetail({}));
    };
  }, [ProjectDetail]);

  if (Object.keys(detail).length === 0) {
    return <Loader />;
  }

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
