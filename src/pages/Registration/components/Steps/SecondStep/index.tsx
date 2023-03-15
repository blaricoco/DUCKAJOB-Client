import React from 'react';
import PrimaryButton from '../../../../../components/UI/Forms/Buttons/PrimaryButton';
import SecondaryButton from '../../../../../components/UI/Forms/Buttons/SecondaryButton';
import Selection from '../../../../../components/UI/Forms/Selection';

import styles from '../../../Registration.module.scss';

interface SecondStepProps {
  nextStep: any;
  prevStep: any;
  formData: any;
}

const SecondStep: React.FC<SecondStepProps> = ({ nextStep, prevStep, formData }) => {
  return (
    <div>
      <Selection
        desc="Select minimum 3"
        data={formData.skills}
        setData={formData.setSkills}
        title="Skills"
      />
      <div className={styles.buttonCon}>
        <SecondaryButton text="Back" onClick={prevStep} />
        <PrimaryButton disabled={formData.skills.length < 3} text="Next" onClick={nextStep} />
      </div>
    </div>
  );
};

export default SecondStep;
