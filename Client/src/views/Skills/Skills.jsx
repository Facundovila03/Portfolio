import styles from './Skills.module.css'
import skills from '../../assets/dummyTitles';
import React from 'react';
import SkillsCard from '../../components/SkillsCards/SkillsCard';

function Skills(props) {
    
    return (
        <div className={styles.container}>
            {skills.map(el=>{
                console.log(el.title)
                return(
                    <SkillsCard title={el.title} description={el.description}/>
                )
            })}
        </div>
    );
}

export default Skills;