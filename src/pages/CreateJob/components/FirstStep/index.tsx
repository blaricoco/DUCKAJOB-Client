import React from 'react';
import PrimaryButton from '../../../../components/UI/Forms/Buttons/PrimaryButton';
import BigInput from '../../../../components/UI/Forms/Inputs/BigInput';
import DefaultInput from '../../../../components/UI/Forms/Inputs/DefaultInput';

import styles from '../../CreateJob.module.scss';

interface FirstStepProps {
  nextStep: any;
  formData: any;
}

const FirstStep: React.FC<FirstStepProps> = ({ nextStep, formData }) => {
  // console.log(formData);
  const { title, setTitle, description, setDescription, budget, setBudget } = formData;
  return (
    <>
      <DefaultInput
        data={title}
        setData={setTitle}
        title="Job title"
        placeHolder="Enter job title..."
        required
      />
      <BigInput
        data={description}
        setData={setDescription}
        title="Description"
        desc="At least 100 words"
        placeHolder="Describe your job..."
        required
      />
      <DefaultInput
        data={budget}
        setData={setBudget}
        title="Budget"
        placeHolder="Enter budget..."
        required
      />
      <div className={styles.buttonCon}>
        <div />
        <PrimaryButton
          disabled={title.length === 0 || description.length === 0 || budget.length === 0}
          text="Next"
          onClick={nextStep}
        />
      </div>
    </>
  );
};

export default FirstStep;
