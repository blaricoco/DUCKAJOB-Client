import React from 'react';
import { ButtonProps } from '../buttonInterface';

import styles from '../Buttons.module.scss';

const SecondaryButton: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={styles.secondaryWrapper}>
      <img src="/icons/arrow-left.svg" />
      <p>{text}</p>
    </div>
  );
};

export default SecondaryButton;
