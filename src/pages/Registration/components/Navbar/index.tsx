import React from 'react';
import Stepper from '../../../../components/UI/Stepper';

import styles from './Navbar.module.scss';

const titles = ['Personal info', 'Skills', 'Links'];

interface NavbarProps {
  totalSteps: number;
  currentStep: number;
}

const Navbar: React.FC<NavbarProps> = ({ totalSteps, currentStep }) => {
  return (
    <div className={styles.navbar}>
      <div className="container">
        <div className={styles.navbarContent}>
          <div className={styles.row}>
            <p className={styles.title}>Create job</p>
            <img src="/icons/circle.svg" />
            <p className={styles.title}>{titles[currentStep]}</p>
          </div>

          <Stepper lineWidth={24} totalSteps={totalSteps} step={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
