import React from 'react';

import styles from './Stepper.module.scss';

interface StepperProps {
  totalSteps: number;
  step: number;
  lineWidth?: number;
}

const Stepper: React.FC<StepperProps> = ({ totalSteps = 2, step = 0, lineWidth = 50 }) => {
  return (
    <div className={styles.stepper}>
      {new Array(totalSteps).fill(0).map((_, index) => (
        <div className={styles.row} key={index}>
          <div className={step >= index ? styles.activeCircle : styles.circle} />
          {index + 1 < totalSteps && (
            <div
              className={step - 1 >= index ? styles.activeLine : styles.line}
              style={{ width: lineWidth }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
