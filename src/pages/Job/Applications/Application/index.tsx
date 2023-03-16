import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from '../../../../components/UI/Rating';

import styles from './Application.module.scss';

const Application = ({ application }: any) => {
  console.log(application);
  const navigation = useNavigate();
  return (
    <>
    <div className={styles.wrapper}>
      <div onClick={() => navigation(`/user/${application.userId._id}`)} className={styles.header}>
        <h5>{application.userId.username}</h5>
        <Rating />
      </div>
      <p className={styles.desc}>{application.userId.bio}</p>
      <div className={styles.footer}>
        <div  onClick={() => navigation(`/contract/${application.userId._id}`)} className={styles.offerCon}>
          <p>Offer: $1200</p>
        </div>
        <p className={styles.date}>2 hours ago</p>
      </div>
      <div className={styles.arrNextCon}>
        <img src="/icons/nextBtn.svg" />
      </div>
    </div>
    
    </>
    
  );
};

export default Application;
