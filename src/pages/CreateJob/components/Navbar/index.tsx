import React from 'react';
import { Link } from 'react-router-dom';
import Stepper from '../../../../components/UI/Stepper';

import styles from '../../CreateJob.module.scss';

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
            <Link to="/jobs">
              <img className={styles.backImg} src="/icons/smallLeft.svg" />
            </Link>
            <h3 className={styles.title}>Create job</h3>
          </div>
          <Stepper totalSteps={totalSteps} step={currentStep} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
