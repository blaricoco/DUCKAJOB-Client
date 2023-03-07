import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Applications from './Applications';

import styles from './Job.module.scss';

const tags = ['Func', 'Very fun c', 'React', 'Nest.js', 'Typescript', 'Java'];

interface TagItemProps {
  tag: string;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag}</p>
  </div>
);

const Job = () => {
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
            <div className={styles.appliedCon}>
              <img src="/icons/user-check.svg" />
              <p>14 Applied</p>
            </div>
          </div>
          <div className={styles.tagsCon}>
            {tags.map((tag, index) => (
              <TagItem tag={tag} key={index} />
            ))}
          </div>

          <Applications />

          {/* <div className={styles.applyButton}>
            <p>Apply</p>
            <img src="/icons/user-check-white.svg" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Job;
