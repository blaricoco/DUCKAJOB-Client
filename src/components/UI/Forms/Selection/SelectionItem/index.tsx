import { Checkbox } from '@mantine/core';
import React from 'react';

import styles from './SelectionItem.module.scss';

interface SelectionItemProps {
  item: string;
}

const SelectionItem: React.FC<SelectionItemProps> = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <Checkbox size="xs" className={styles.checkbox} />
      <p>{item}</p>
    </div>
  );
};

export default SelectionItem;
