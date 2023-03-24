import React from 'react';
import { AuthContext } from '../../../../../contexts/authContext';

import styles from '../States.module.scss';

const Unfunded = ({ buyerId, sellerId, setStatus }: any) => {
  const { user } = React.useContext(AuthContext);
  return (
    <div className={styles.wrapper}>
      {/* if user is client */}
      {user._id === buyerId ? (
        <>
          <div className={styles.row}>
            {/* TODO: UPDATE TO CALL - fundProject */}
            <div className={styles.primaryBtn} onClick={() => setStatus(1) }>
              Fund
            </div>
          </div>
          <div className={styles.row}>
            <div onClick={() => setStatus(4)} className={styles.secondaryBtn}>
              Cancel
            </div>
          </div>
        </>
      ) : // if user is developer
      user._id === sellerId ? (
        <div className={styles.row}>
          <div onClick={() => setStatus(4)} className={styles.secondaryBtn}>
            Cancel
          </div>
        </div>
      ) : (
        // if no user
        <></>
      )}
    </div>
  );
};

export default Unfunded;
