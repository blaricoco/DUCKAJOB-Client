import React from 'react';

import styles from './Stats.module.scss';

const Stats = () => {
  return (
    <section className={styles.numbers}>
      <div className="container">
        <div className={styles.numberInner}>
          <div className={styles.numberEl}>
            <h3>24</h3>
            <p>users</p>
          </div>
          <div className={styles.numberEl}>
            <h3>34</h3>
            <p>jobs</p>
          </div>
          <div className={styles.numberEl}>
            <h3>10</h3>
            <p>contracts</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
