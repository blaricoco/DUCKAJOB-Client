import React from 'react';
import { ButtonProps } from '../buttonInterface';

import styles from '../Buttons.module.scss';

const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick, disabled }) => {
  return (
    <button onClick={onClick} className={styles.secondaryWrapper} disabled={disabled}>
      <img src="/icons/arrow-left.svg" />
      <p>{text}</p>
    </button>
  );
};

export default SecondaryButton;
