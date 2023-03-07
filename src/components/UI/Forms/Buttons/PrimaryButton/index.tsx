import React from 'react';
import { ButtonProps } from '../buttonInterface';

import styles from '../Buttons.module.scss';

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <p>{text}</p>
      <img src="/icons/arrow-right.svg" />
    </div>
  );
};

export default PrimaryButton;
