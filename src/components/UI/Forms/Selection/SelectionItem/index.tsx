import { Checkbox } from '@mantine/core';
import React from 'react';

import styles from './SelectionItem.module.scss';

interface SelectionItemProps {
  item: string;
}

const SelectionItem: React.FC<SelectionItemProps> = ({ item }) => {
  const [checked, setChecked] = React.useState(false);
  return (
    <div className={styles.wrapper} onClick={() => setChecked((prev) => !prev)}>
      <input type="checkbox" onChange={() => null} checked={checked} className={styles.checkbox} />
      <p>{item}</p>
    </div>
  );
};

export default SelectionItem;
