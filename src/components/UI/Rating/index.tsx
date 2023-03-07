import React from 'react';

import styles from './Rating.module.scss';

const Rating = () => (
  <div className={styles.ratingCon}>
    <img src="/icons/star.svg" />
    <p>8/10</p>
  </div>
);

export default Rating;
