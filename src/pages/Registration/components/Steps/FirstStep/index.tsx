import React from 'react';
import PrimaryButton from '../../../../../components/UI/Forms/Buttons/PrimaryButton';
import BigInput from '../../../../../components/UI/Forms/Inputs/BigInput';
import DefaultInput from '../../../../../components/UI/Forms/Inputs/DefaultInput';

import styles from '../../../Registration.module.scss';

interface FirstStepProps {
  nextStep: any;
}

const FirstStep: React.FC<FirstStepProps> = ({ nextStep }) => {
  return (
    <>
      <DefaultInput title="Username" placeHolder="Enter username..." required />
      <BigInput title="Bio" desc="At least 100 words" placeHolder="Write your bio..." required />
      <div className={styles.buttonCon}>
        <div />
        <PrimaryButton text="Next" onClick={nextStep} />
      </div>
    </>
  );
};

export default FirstStep;
