import { Button } from '@mantine/core';
import { useTonConnectUI } from '@tonconnect/ui-react';
import React from 'react';

import styles from './MobileSignUp.module.scss';

import WebApp from '@twa-dev/sdk';

const MobileSignUp = () => {
  const data = WebApp.initDataUnsafe?.user;

  const [tonConnectUI] = useTonConnectUI();

  const [tmp, setTmp] = React.useState<any>();

  React.useEffect(() => {
    if (tonConnectUI.connected) {
      console.log(tonConnectUI.wallet.account.address, data?.id);
      setTmp({ wallet: tonConnectUI.wallet.account.address, user: data?.id });
    }
  }, [tonConnectUI.connected]);

  const handleAuth = () => {};

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
