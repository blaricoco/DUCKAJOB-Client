import React from 'react';
import { InputProps } from '../inputInterface';

import styles from '../Inputs.module.scss';

const DefaultInput: React.FC<InputProps> = ({ title, desc, placeHolder, required = false }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {required && <span>*</span>}
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}

      <input placeholder={placeHolder} />
    </div>
  );
};

export default DefaultInput;
