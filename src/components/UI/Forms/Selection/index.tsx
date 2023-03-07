import React from 'react';
import DefaultInput from '../Inputs/DefaultInput';

import styles from './Selection.module.scss';
import SelectionItem from './SelectionItem';

const items = [
  'Design',
  'Development',
  'Project management',
  'Design',
  'Mobile dev',
  'React native',
  'Flutter',
  'Java',
  'Python',
  'C++',
  'C#',
  'Func',
  'TACT',
  'WHATEVER',
];

interface SelectionProps {
  title: string;
}

const Selection: React.FC<SelectionProps> = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {true && <span>*</span>}
      </div>

      <div className={styles.searchInputCon}>
        <input placeholder="Search skills..." className={styles.searchInput} />
        <img src="/icons/search.svg" />
      </div>

      <div className={styles.scrollable}>
        {items.map((item, index) => (
          <SelectionItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Selection;
