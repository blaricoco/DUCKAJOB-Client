import React from 'react';
import { Job, CreateJob, JobGetters } from '../../components/Job';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';

import styles from './Contract.module.scss';
//import Job from '';
const Contract = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.company}>
              <span>Microsoft</span>
              <img src="/icons/circle.svg" /> 2hr ago
            </p>
            <div className={styles.priceCon}>
              <p className={styles.priceTxt}>$1000</p>
            </div>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>Make a logo for Microsoft.</h3>
            <p className={styles.description}>
              Fusce quam leo, congue in libero sit amet, tincidunt pretium neque. Nullam hendrerit
              orci at ornare dignissim fusce quam leo, congue in libero sit amet, tincidunt pretium
              neque. Nullam hendrerit orci at ornare dignissim
            </p>
            <div className={styles.stats}>
              <div className={styles.statsEl}>
                <p className={styles.statTitle}>Budget</p>
                <p className={styles.statValue}>$300</p>
              </div>
              <div className={styles.statsEl}>
                <p className={styles.statTitle}>Status</p>
                <p className={styles.statValue}>Ongoing</p>
              </div>
              <div className={styles.statsEl}>
                <p className={styles.statTitle}>Deadline</p>
                <p className={styles.statValue}>12 Mar</p>
              </div>
            </div>
          </div>
          <div className={styles.line} />

          <p className={styles.freelancerTitle}>Freelancer</p>

          <div className={styles.freelancerCard}>
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
            </div>
          </div>
        </div>
      </div>
      {/* <CreateJob /> */}
      {/* <JobGetters /> */}
      <Job contract="EQBODpOBGqdJEIN0wmZnKYxG_dx855ynKhCyy6twXX5ODzYH" />
    </>
  );
};

export default Contract;
