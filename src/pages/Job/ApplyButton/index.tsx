import { Loader } from '@mantine/core';
import React from 'react';
import { applyForJob, getApplicationByJobAndUser } from '../../../utils/application';

import styles from './ApplyButton.module.scss';

const ApplyButton = ({ data }: any) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [applied, setApplied] = React.useState(false);
  //   console.log(data);
  const handleApply = () => {
    applyForJob(data, (res) => getButtonStatus());
  };

  React.useEffect(() => {
    getButtonStatus();
  }, [data]);

  const getButtonStatus = () => {
    console.log('S');
    data &&
      getApplicationByJobAndUser(data, (res) => {
        setApplied(!!res);
        setIsLoading(false);
      });
  };

  return (
    <>
      {isLoading ? (
        <div className={styles.appliedText}>
          <Loader size={'sm'} />
        </div>
      ) : !applied ? (
        <div onClick={() => handleApply()} className={styles.applyButton}>
          <p>Apply</p>
          <img src="/icons/user-check-white.svg" />
        </div>
      ) : (
        <div className={styles.appliedText}>
          <p>Already applied</p>
        </div>
      )}
    </>
  );
};

export default ApplyButton;
