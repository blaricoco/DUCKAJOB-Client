import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Duck from './components/IntroCanvas';
import Intro from './components/Intro';

import styles from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Intro />

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
