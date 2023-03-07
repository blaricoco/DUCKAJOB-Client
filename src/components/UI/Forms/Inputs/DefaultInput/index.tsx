import React from 'react';
import { InputProps } from '../inputInterface';

import styles from '../Inputs.module.scss';

const DefaultInput: React.FC<InputProps> = ({
  title,
  desc,
  placeHolder,
  required = false,
  data,
  setData,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleCon}>
        <h5>{title}</h5>
        {required && <span>*</span>}
      </div>
      {desc && <p className={styles.desc}>{desc}</p>}

      <input value={data} onChange={(e) => setData(e.target.value)} placeholder={placeHolder} />
    </div>
  );
};

export default DefaultInput;
