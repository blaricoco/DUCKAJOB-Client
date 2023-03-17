import React from 'react';
import { AuthContext } from '../../../../../contexts/authContext';

import styles from '../States.module.scss';

const Funded = ({ buyerId, sellerId, setStatus }: any) => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className={styles.wrapper}>
      {user._id === buyerId ? (
        <div className={styles.row}>
          <div onClick={() => setStatus(4)} className={styles.secondaryBtn}>
            Cancel
          </div>
        </div>
      ) : user._id === sellerId ? (
        <>
          <div className={styles.row}>
            <div className={styles.primaryBtn} onClick={() => setStatus(2)}>
              Upload work
            </div>
            {/* <div className={styles.primaryBtn}>Fund</div> */}
          </div>
          <div onClick={() => setStatus(4)} className={styles.secondaryBtn}>
            Cancel
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Funded;
