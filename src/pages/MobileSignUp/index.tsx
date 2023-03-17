import { Button } from '@mantine/core';
import { useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';

import styles from './MobileSignUp.module.scss';

import WebApp from '@twa-dev/sdk';
import { useNavigate, useNavigation } from 'react-router-dom';
import { authUser } from '../../utils/auth';

const MobileSignUp = () => {
  const router = useNavigate();

  const [tonConnectUI] = useTonConnectUI();

  React.useEffect(() => {
    if (tonConnectUI.connected && tonConnectUI.wallet) {
      handleAuth(tonConnectUI.wallet.account.address);
    }
  }, [tonConnectUI.connected]);

  const handleAuth = (wallet: string) => {
    authUser(wallet, (res) => router(res.redirectUrl));
  };

  return (
    <div className={styles.wrapper}>
      <h2>Welcome.</h2>
      <p>Connect wallet to start using the app {'(some text here)'}</p>
      <Button onClick={() => tonConnectUI.connectWallet()}>Connect wallet</Button>
      {tonConnectUI.wallet && tonConnectUI.wallet.account.address}
    </div>
  );
};

export default MobileSignUp;
