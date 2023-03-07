import { Button } from '@mantine/core';
import { useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';

import styles from './MobileSignUp.module.scss';

import WebApp from '@twa-dev/sdk';
import { useNavigate, useNavigation } from 'react-router-dom';

const MobileSignUp = () => {
  const router = useNavigate();
  const data = WebApp.initDataUnsafe?.user;

  const [tonConnectUI] = useTonConnectUI();

  const [tmp, setTmp] = React.useState<any>();

  React.useEffect(() => {
    if (tonConnectUI.connected && tonConnectUI.wallet) {
      handleAuth(tonConnectUI.wallet.account.address, data?.id);
    }
  }, [tonConnectUI.connected]);

  const handleAuth = (wallet: string, id: any) => {
    setTmp({ wallet, user: id || 'test' });
    fetch('http://localhost:3001/users/auth', {
      method: 'POST',

      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ wallet, userId: id || 'test' }),
    })
      .then((res) => res.json())
      .then((res) => router(res.redirectUrl));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Welcome.</h2>
      <p>Connect wallet to start using the app {'(some text here)'}</p>
      <Button onClick={() => tonConnectUI.connectWallet()}>Connect wallet</Button>
      {JSON.stringify(tmp)}
    </div>
  );
};

export default MobileSignUp;
