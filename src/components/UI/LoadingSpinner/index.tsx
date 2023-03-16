import { Loader } from '@mantine/core';
import React from 'react';

import styles from './LoadingSpinner.module.scss';

const LoadingSpinner = () => {
  return (
    <div className={styles.wrapper}>
      <Loader size="lg"/>
    </div>
  );
};

export default LoadingSpinner;
