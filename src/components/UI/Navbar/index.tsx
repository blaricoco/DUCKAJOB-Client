import { TonConnectButton } from '@tonconnect/ui-react';
import React from 'react';
import { Link } from 'react-router-dom';
// @ts-ignore
// const tg = window.Telegram?.WebApp;

import WebApp from '@twa-dev/sdk';

import styles from './Navbar.module.scss';
import AccountButton from './AccountButton';
import { AuthContext } from '../../../contexts/authContext';

const Navbar = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <Link to="/jobs">
            {/* <h3>Duck a job</h3> */}
            <img className={styles.logo} src="/img/logodark.png" />
          </Link>

          <AccountButton />
          {/* <div className={styles.row}>
        <Link to="/jobs">
        <p>jobs</p>
        </Link>
        <Link to="/profile">
        <p>123</p>
        </Link>
        <Link to="/profile">
        
        {/* <p>{WebApp.initDataUnsafe?.user?.photo_url}</p> */}
          {/* </Link> */}
          {/* // </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
