import React from 'react';

import styles from './HowToStart.module.scss';

const HowToStart = () => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h2>How to start</h2>
        <div className={styles.row}>
          <div className={styles.el}>
            <div className={styles.circle}>
              <img src="/img/ton.svg" />
            </div>
            <h3>1{')'} Connect wallet</h3>
          </div>
          <div className={styles.el}>
            <div className={styles.circle}>
              <img src="/img/fillup.svg" />
            </div>
            <h3>2{')'} Fill out profile</h3>
          </div>
          <div className={styles.el}>
            <div className={styles.circle}>
              <img src="/img/job.svg" />
            </div>
            <h3>3{')'} Start freelancing</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToStart;
