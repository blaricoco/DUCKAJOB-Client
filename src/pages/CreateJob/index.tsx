import { Stepper } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/authContext';
import { createJob } from '../../utils/jobs';
import FinishedStep from './components/FinishedStep';

import FirstStep from './components/FirstStep';
import Navbar from './components/Navbar';
import SecondStep from './components/SecondStep';

import styles from './CreateJob.module.scss';

const CreateJob = () => {
  const { user } = React.useContext(AuthContext);

  const [active, setActive] = React.useState(0);
  const totalSteps = 2;
  const nextStep = () => setActive((current: number) => current + 1);
  const prevStep = () => setActive((current: number) => current - 1);

  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [budget, setBudget] = React.useState('');
  const [tags, setTags] = React.useState<any[]>([]);

  const [jobUrl, setJobUrl] = React.useState('');

  const handleCreateJob = (setIsLoading: any) => {
    const reqBody = {
      owner: user._id,
      title,
      description,
      budget,
      tags,
    };
    createJob(reqBody, (res) => {
      setIsLoading(false);
      res.success && setJobUrl(res.redirectUrl);
    });
  };

  return (
    <div className={styles.wrapper}>
      <Navbar totalSteps={totalSteps} currentStep={active} />
      <div className="container">
        <div className={styles.body}>
          {active === 0 ? (
            <FirstStep
              formData={{ title, setTitle, description, setDescription, budget, setBudget }}
              nextStep={nextStep}
            />
          ) : active === 1 ? (
            <SecondStep nextStep={nextStep} prevStep={prevStep} />
          ) : (
            <FinishedStep jobUrl={jobUrl} handleCreateJob={handleCreateJob} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
