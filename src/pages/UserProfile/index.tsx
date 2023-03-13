import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';
import Links from './components/Links';
import Reviews from './components/Reviews';
import Skills from './components/Skills';

import styles from './UserProfile.module.scss';

import WebApp from '@twa-dev/sdk';

const profile = () => {
  const data = WebApp.initDataUnsafe?.user;
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          {/* <h2>{JSON.stringify(data)}</h2> */}
          <div className={styles.header}>
            <div className={styles.row}>
              <h2 className={styles.name}>Jennifer Vazquez</h2>
              <Rating />
            </div>
            <p className={styles.desc}>
              UI/UX Designer, Entrepreneur I help companies build great products.
            </p>
          </div>

          <div className={styles.msgButton}>
            <p>Message</p>
            <img src="/icons/msg.svg" />
          </div>
          <Skills />
          <Links />
          <Reviews />
        </div>
      </div>
    </>
  );
};

export default profile;
