import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';

import styles from './FinishedStep.module.scss';

const FinishedStep: React.FC<any> = ({ jobUrl, handleCreateJob }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    handleCreateJob(setIsLoading);
  }, []);

  const navigation = useNavigate();
  return (
    <div className={styles.wrapper}>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <>
          <img src="/icons/success.svg" />
          <h5 className={styles.title}>Job posted!</h5>
          <p className={styles.desc}>Your job application was posted successfully.</p>
          <PrimaryButton text="Visit job page" onClick={() => navigation(jobUrl)} />
        </>
      )}
    </div>
  );
};

export default FinishedStep;
