import React from 'react';
import Application from './Application';

import styles from './Applications.module.scss';

interface ApplicationsProps {}

const Applications: React.FC<any> = ({ applications, owner }) => {
  // console.log('123', applications);
  // console.log(owner);
  return (
    <div className={styles.wrapper}>
      {applications?.map((el: any, index: number) => (
        <Application key={index} application={el} owner={owner} />
      ))}
    </div>
  );
};

export default Applications;
