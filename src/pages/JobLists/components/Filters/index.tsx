import React from 'react';

import styles from './Filters.module.scss';

const filters = ['Date', 'Tags', 'Applicants', 'Price'];

interface FilterProps {
  filter: string;
}

const Filter: React.FC<FilterProps> = ({ filter }) => (
  <div className={styles.filterItem}>
    <p>{filter}</p>
  </div>
);

const Filters = () => {
  return (
    <div className={styles.wrapper}>
      {filters.map((filter, index) => (
        <Filter filter={filter} key={index} />
      ))}
    </div>
  );
};

export default Filters;
