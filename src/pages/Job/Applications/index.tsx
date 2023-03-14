import React from 'react';
import Application from './Application';

import styles from './Applications.module.scss';

interface ApplicationsProps {}

const Applications: React.FC<any> = ({ applications }) => {
  console.log(applications);
  return (
    <div className={styles.wrapper}>
      {applications?.map((el: any, index: number) => (
        <Application key={index} />
      ))}
      {/* <Application />
      <Application />
      <Application /> */}
    </div>
  );
};

export default Applications;
