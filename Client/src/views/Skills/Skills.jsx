import SkillCard from "../../components/SkillCards/SkillCard";
import styles from "./Skills.module.css";
import English from "../../components/SkillCards/English/english.jsx";
import { useSelector } from "react-redux";

function Skills() {
  const skills = useSelector((state) => state.skills);
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
