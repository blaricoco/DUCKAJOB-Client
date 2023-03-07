import { Stepper } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import FinishedStep from './components/FinishedStep';

import FirstStep from './components/FirstStep';
import Navbar from './components/Navbar';
import SecondStep from './components/SecondStep';

import styles from './CreateJob.module.scss';

const CreateJob = () => {
  const [active, setActive] = React.useState(0);
  const totalSteps = 2;
  const nextStep = () => setActive((current: number) => current + 1);
  const prevStep = () => setActive((current: number) => current - 1);
  return (
    <div className={styles.wrapper}>
      <Navbar totalSteps={totalSteps} currentStep={active} />
      <div className="container">
        <div className={styles.body}>
          {active === 0 ? (
            <FirstStep nextStep={nextStep} />
          ) : active === 1 ? (
            <SecondStep nextStep={nextStep} prevStep={prevStep} />
          ) : (
            <FinishedStep />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
