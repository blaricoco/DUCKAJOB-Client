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
  desc?: string;
  data: any;
  setData: any;
}

type Item = {
  _id: any;
  name: string;
};

const Selection: React.FC<SelectionProps> = ({ title, data, setData, desc }) => {
  const [items, setItems] = React.useState<Item[]>([]);
  const [inputName, setInputName] = React.useState('');

  React.useEffect(() => {
    getTags(inputName, (res: any) => setItems(res.data));
  }, [inputName]);

  const handleClicking = (item: string) => {
    if (data.includes(item)) {
      // Remove item from target array
      // targetArray = targetArray.filter(i => i !== item);
      setData((prev: any) => prev.filter((i: string) => i !== item));
    } else {
      // Add item to target array
      // targetArray.push(item);
      setData((prev: any) => [...prev, item]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {true && <span>*</span>}
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}

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
          <div key={index} onClick={() => handleClicking(item._id)}>
            <SelectionItem item={item?.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selection;
