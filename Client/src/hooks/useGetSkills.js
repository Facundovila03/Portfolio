import { useEffect, useState } from "react";
import axios from "axios";

const useGetSkills = () => {
  const [data, setData] = useState([]);

  const getSkills = () => {
    axios.get("http://localhost:3001/skills").then(({ data }) => {
      setData(data);
    });
  };

  useEffect(() => {
    getSkills();
  }, []);

  return [data];
};
export default useGetSkills;
