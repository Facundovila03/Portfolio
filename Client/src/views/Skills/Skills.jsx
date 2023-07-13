import { useEffect, useState } from "react";
import SkillCard from "../../components/SkillCards/SkillCard";
import styles from "./Skills.module.css";
import axios from "axios";
import English from "../../components/SkillCards/English/english.jsx";

function Skills() {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/skills").then(({ data }) => {
      setSkills(data);
    });
  }, []);

  return (
    <div className={styles.container}>
      <English />
      {skills &&
        skills.map((skill) => {
          return (
            <SkillCard
              key={skill._id}
              title={skill.title}
              description={skill.description}
              image={skill.image}
              proficiency={skill.proficiency}
              color={skill.color}
            />
          );
        })}
    </div>
  );
}

export default Skills;
