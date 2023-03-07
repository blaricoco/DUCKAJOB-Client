import React from 'react';
import PrimaryButton from '../../../../../components/UI/Forms/Buttons/PrimaryButton';
import BigInput from '../../../../../components/UI/Forms/Inputs/BigInput';
import DefaultInput from '../../../../../components/UI/Forms/Inputs/DefaultInput';

import styles from '../../../Registration.module.scss';

interface FirstStepProps {
  formData: any;
  nextStep: any;
}

const FirstStep: React.FC<FirstStepProps> = ({ nextStep, formData }) => {
  const { username, setUsername, bio, setBio } = formData;

  return (
    <>
      <DefaultInput
        data={username}
        setData={setUsername}
        title="Username"
        placeHolder="Enter username..."
        required
      />
      <BigInput
        data={bio}
        setData={setBio}
        title="Bio"
        desc="At least 100 words"
        placeHolder="Write your bio..."
        required
      />
      <div className={styles.buttonCon}>
        <div />
        <PrimaryButton
          disabled={username.length === 0 || bio.length === 0}
          text="Next"
          onClick={nextStep}
        />
      </div>
    </>
  );
};

export default FirstStep;
