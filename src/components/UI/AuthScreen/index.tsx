import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';

import styles from './AuthScreen.module.scss';

const AuthScreen = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Welcome to crypto work thing</h1>
      <p>bluh bluh whateva</p>
      <TonConnectButton />
    </div>
  );
};

export default AuthScreen;
