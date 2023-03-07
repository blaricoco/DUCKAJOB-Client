import React from 'react';
import { getTags } from '../../../../utils/skills';
import DefaultInput from '../Inputs/DefaultInput';

import styles from './Selection.module.scss';
import SelectionItem from './SelectionItem';

// const items = [
//   'Design',
//   'Development',
//   'Project management',
//   'Design',
//   'Mobile dev',
//   'React native',
//   'Flutter',
//   'Java',
//   'Python',
//   'C++',
//   'C#',
//   'Func',
//   'TACT',
//   'WHATEVER',
// ];

interface SelectionProps {
  title: string;
}

type Item = {
  id: any;
  name: string;
};

const Selection: React.FC<SelectionProps> = ({ title }) => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [inputName, setInputName] = React.useState('');

  React.useEffect(() => {
    getTags(inputName, (res: any) => setItems(res.data));
  }, [inputName]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {true && <span>*</span>}
      </div>

      <div className={styles.searchInputCon}>
        <input
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          placeholder="Search skills..."
          className={styles.searchInput}
        />
        <img src="/icons/search.svg" />
      </div>

      <div className={styles.scrollable}>
        {items?.map((item, index) => (
          <SelectionItem item={item?.name} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Selection;
