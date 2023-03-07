import React from 'react';
import { InputProps } from '../inputInterface';

import styles from '../Inputs.module.scss';

const BigInput: React.FC<InputProps> = ({ title, desc, placeHolder, required = false }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {required && <span>*</span>}
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}

      <textarea className={styles.bigInput} placeholder={placeHolder} />
    </div>
  );
};

export default BigInput;
