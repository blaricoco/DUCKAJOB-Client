import { Loader } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../contexts/authContext';
import { getUserSkills } from '../../../utils/user';

import styles from './Section.module.scss';

interface SkillProps {
  skill: any;
}
const Skill: React.FC<SkillProps> = ({ skill }) => (
  <div className={styles.itemWrapper}>
    <p>{skill.name}</p>
  </div>
);

const Skills = () => {
  const { id } = useParams();

  const { user } = React.useContext(AuthContext);
  const [skills, setSkills] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // console.log('Uer', user);
    id &&
      getUserSkills(id, (res) => {
        setSkills(res.data);
        setIsLoading(false);
      });
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <img src="/icons/skills.svg" />
        <p className={styles.title}>Skills</p>
      </div>
      <div className={styles.skillsContent}>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader color="gray" size={'sm'} />
          </div>
        ) : (
          <>
            {skills?.map((skill, index) => (
              <Skill skill={skill} key={index} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Skills;
