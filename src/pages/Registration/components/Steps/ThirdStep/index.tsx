import React from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../../../../components/UI/Forms/Buttons/PrimaryButton';
import SecondaryButton from '../../../../../components/UI/Forms/Buttons/SecondaryButton';
import DefaultInput from '../../../../../components/UI/Forms/Inputs/DefaultInput';

import styles from '../../../Registration.module.scss';

interface ThirdStepProps {
  nextStep: any;
  prevStep: any;
}

const links = ['Github', 'Telegram', 'LinkedIn', 'Personal website', 'Behance', 'Instagram'];

const ThirdStep: React.FC<ThirdStepProps> = ({ nextStep, prevStep }) => {
  const navigation = useNavigate();
  return (
    <div>
      {links.map((link, index) => (
        <DefaultInput title={link} key={index} />
      ))}
      <div className={styles.buttonCon}>
        <SecondaryButton text="Back" onClick={prevStep} />
        <PrimaryButton text="Finish" onClick={() => navigation('/jobs')} />
      </div>
    </div>
  );
};

export default ThirdStep;
