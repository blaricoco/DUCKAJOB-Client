import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '../../../../components/UI/Rating';

import styles from './Application.module.scss';

const Application = () => {
  const navigation = useNavigate();
  return (
    <div onClick={() => navigation('/profile')} className={styles.wrapper}>
      <div className={styles.header}>
        <h5>Jennifer Vazquez</h5>
        <Rating />
      </div>
      <p className={styles.desc}>
        UI/UX Designer, Entrepreneur I help companies build great products.
      </p>
      <div className={styles.footer}>
        <div className={styles.offerCon}>
          <p>Offer: $1200</p>
        </div>
        <p className={styles.date}>2 hours ago</p>
      </div>
      <div className={styles.arrNextCon}>
        <img src="/icons/nextBtn.svg" />
      </div>
    </div>
  );
};

export default Application;
