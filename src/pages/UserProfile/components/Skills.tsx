import React from 'react';

import styles from './Section.module.scss';

const skills = ['Design', 'Development', 'UI/UX', 'Project managment'];

interface SkillProps {
  skill: string;
}
const Skill: React.FC<SkillProps> = ({ skill }) => (
  <div className={styles.itemWrapper}>
    <p>{skill}</p>
  </div>
);

const Skills = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/icons/skills.svg" />
        <p className={styles.title}>Skills</p>
      </div>

      <div className={styles.skillsContent}>
        {skills.map((skill) => (
          <Skill skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
