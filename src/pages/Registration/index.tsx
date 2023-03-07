import { useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import FirstStep from './components/Steps/FirstStep';
import SecondStep from './components/Steps/SecondStep';
import ThirdStep from './components/Steps/ThirdStep';

import styles from './Registration.module.scss';
import WebApp from '@twa-dev/sdk';
import { apiUrl } from '../../utils/api';

const Registration = () => {
  const navigation = useNavigate();
  const [tonConnectUI] = useTonConnectUI();
  const data = WebApp.initDataUnsafe?.user;

  const [active, setActive] = React.useState<number>(0);
  const totalSteps: number = 3;
  const nextStep = () => setActive((current: number) => current + 1);
  const prevStep = () => setActive((current: number) => current - 1);

  const [username, setUsername] = React.useState('');
  const [bio, setBio] = React.useState('');
  const [skills, setSkills] = React.useState([]);
  const [links, setLinks] = React.useState([]);

  const handleRegister = () => {
    if (!tonConnectUI.wallet) return;
    const wallet = tonConnectUI.wallet.account.address;
    const telegramId = data?.id || 'TestId';
    console.log(`Handle register request with ${username},${bio} and so on`);
    console.log(`WALLET: ${wallet}`);
    console.log(`TELEGRAMID: ${telegramId}`);

    // return;
    const reqBody = {
      wallet: wallet,
      userId: telegramId,
      username,
      bio,
      skills,
      links,
    };

    fetch(`${apiUrl}users/register`, {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
    // navigation('/jobs');
  };

  return (
    <div className={styles.wrapper}>
      <Navbar totalSteps={totalSteps} currentStep={active} />
      <div className="container">
        <div className={styles.body}>
          {active === 0 ? (
            <FirstStep formData={{ username, setUsername, bio, setBio }} nextStep={nextStep} />
          ) : active === 1 ? (
            <SecondStep prevStep={prevStep} nextStep={nextStep} />
          ) : (
            <ThirdStep prevStep={prevStep} nextStep={handleRegister} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Registration;
