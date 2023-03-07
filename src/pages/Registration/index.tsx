import React from 'react';

import Navbar from './components/Navbar';
import FirstStep from './components/Steps/FirstStep';
import SecondStep from './components/Steps/SecondStep';
import ThirdStep from './components/Steps/ThirdStep';

import styles from './Registration.module.scss';

const Registration = () => {
  const [active, setActive] = React.useState<number>(0);
  const totalSteps: number = 3;
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
            <SecondStep prevStep={prevStep} nextStep={nextStep} />
          ) : (
            <ThirdStep prevStep={prevStep} nextStep={nextStep} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
