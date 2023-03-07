import React from 'react';

import styles from '../../CreateJob.module.scss';

import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';
import SecondaryButton from '../../../../components/UI/Forms/Buttons/SecondaryButton';
import Selection from '../../../../components/UI/Forms/Selection';

interface SecondStepProps {
  nextStep: any;
  prevStep: any;
}

const SecondStep: React.FC<SecondStepProps> = ({ nextStep, prevStep }) => {
  return (
    <div>
      <Selection title="Tags" />
      <div className={styles.buttonCon}>
        <SecondaryButton text="Back" onClick={prevStep} />
        <PrimaryButton text="Submit" onClick={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
