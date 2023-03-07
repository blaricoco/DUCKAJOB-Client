import React from 'react';
import PrimaryButton from '../../../../../components/UI/Forms/Buttons/PrimaryButton';
import SecondaryButton from '../../../../../components/UI/Forms/Buttons/SecondaryButton';
import Selection from '../../../../../components/UI/Forms/Selection';

import styles from '../../../Registration.module.scss';

interface SecondStepProps {
  nextStep: any;
  prevStep: any;
}

const SecondStep: React.FC<SecondStepProps> = ({ nextStep, prevStep }) => {
  return (
    <div>
      <Selection title="Skills" />
      <div className={styles.buttonCon}>
        <SecondaryButton text="Back" onClick={prevStep} />
        <PrimaryButton text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
