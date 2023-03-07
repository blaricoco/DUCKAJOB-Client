import React from 'react';
import { ButtonProps } from '../buttonInterface';

import styles from '../Buttons.module.scss';

const PrimaryButton: React.FC<ButtonProps> = ({ text, onClick, disabled = false }) => {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.wrapper}>
      <p>{text}</p>
      <img src="/icons/arrow-right.svg" />
    </button>
  );
};

export default PrimaryButton;
