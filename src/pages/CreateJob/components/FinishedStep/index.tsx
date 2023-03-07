import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';

import styles from './FinishedStep.module.scss';

const FinishedStep = () => {
  const navigation = useNavigate();
  return (
    <div className={styles.wrapper}>
      <img src="/icons/success.svg" />
      <h5 className={styles.title}>Job posted!</h5>
      <p className={styles.desc}>Your job application was posted successfully.</p>
      <PrimaryButton text="Visit job page" onClick={() => navigation('/jobs/123')} />
    </div>
  );
};

export default FinishedStep;
