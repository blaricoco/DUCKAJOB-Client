import React from 'react';
import Navbar from '../../components/UI/Navbar';

import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <main className={styles.intro}>
        <div className="container">
          <div className={styles.introInner}>
            <div className={styles.left}>
              <h1 className={styles.title}>Duck a job</h1>
              <p className={styles.desc}>
                Revolutionary freelancing app with TON blockchain smart contracts for secure
                transactions.
              </p>
            </div>
            <div className={styles.right}>
              <div className={styles.circle}></div>
            </div>
          </div>
        </div>
      </main>

      <section className={styles.numbers}>
        <div className="container">
          <div className={styles.numberInner}>
            <div className={styles.numberEl}>
              <h3>50k</h3>
              <p>vacations</p>
            </div>
            <div className={styles.numberEl}>
              <h3>50k</h3>
              <p>vacations</p>
            </div>
            <div className={styles.numberEl}>
              <h3>50k</h3>
              <p>vacations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
