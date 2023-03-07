import React from 'react';
import Application from './Application';

import styles from './Applications.module.scss';

const Applications = () => {
  return (
    <div className={styles.wrapper}>
      <Application />
      <Application />
      <Application />
    </div>
  );
};

export default Applications;
