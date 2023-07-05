import React from 'react';
import styles from './SkillsCard.module.css'

function SkillsCard({title,description}) {
    console.log('holaaa esta es tu card ')
    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            <p className={styles.description}>{description}</p>
        </div>
    );
} 

export default SkillsCard;