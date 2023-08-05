import axios from "axios";
import { useEffect, useState } from "react";

const useGetTechstack = () => {
  const [data, setData] = useState([]);

  const getTechstack = () => {
    axios.get("http://localhost:3001/techstack").then(({ data }) => {
      setData(data);
    });
  };
  useEffect(() => {
    getTechstack();
  }, []);

  return [data];
};

export default useGetTechstack;
