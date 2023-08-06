import axios from "axios";
import { useState, useEffect } from "react";

const useGetProjectDetail = (arg) => {
  const [data, setData] = useState({});
  const getProjectDetail = () => {
    axios
      .get(`http://localhost:3001/projects/${arg}`)
      .then(({ data }) => setData(data));
  };
  useEffect(() => {
    getProjectDetail();
  }, []);
  console.log(data);
  return data;
};

export default useGetProjectDetail;
