import React from 'react';
import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';
import BigInput from '../../../../components/UI/Forms/Inputs/BigInput';
import DefaultInput from '../../../../components/UI/Forms/Inputs/DefaultInput';

import styles from '../../CreateJob.module.scss';

interface FirstStepProps {
  nextStep: any;
}

const FirstStep: React.FC<FirstStepProps> = ({ nextStep }) => {
  return (
    <>
      <DefaultInput title="Job title" placeHolder="Enter job title..." required />
      <BigInput
        title="Description"
        desc="At least 100 words"
        placeHolder="Describe your job..."
        required
      />
      <DefaultInput title="Budget" placeHolder="Enter budget..." required />
      <div className={styles.buttonCon}>
        <div />
        <PrimaryButton text="Next" onClick={nextStep} />
      </div>
    </>
  );
};

export default FirstStep;
