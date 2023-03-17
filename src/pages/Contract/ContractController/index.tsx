import React from 'react';

import styles from './ContractController.module.scss';
import Funded from './States/Funded';
import Unfunded from './States/Unfunded';

const ContractController = ({ statusCode, setStatus, buyerId, sellerId }: any) => {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        {statusCode === 0 ? (
          <Unfunded buyerId={buyerId} sellerId={sellerId} setStatus={setStatus} />
        ) : statusCode === 1 ? (
          <Funded buyerId={buyerId} sellerId={sellerId} setStatus={setStatus} />
        ) : (
          <h1>123</h1>
        )}
      </div>
    </div>
  );
};

export default ContractController;
