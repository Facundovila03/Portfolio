import { useEffect, useState } from "react";
import axios from "axios";

const useGetProjects = () => {
  const [data, setData] = useState([]);

  const getProjects = () => {
    axios.get("http://localhost:3001/projects").then(({ data }) => {
      setData(data);
    });
  };

  useEffect(() => {
    getProjects();
  }, []);

  return [data];
};

export default useGetProjects;
