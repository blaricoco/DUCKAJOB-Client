import React from 'react';
import { AuthContext } from '../../../../../contexts/authContext';
import styles from '../States.module.scss';

const Delivered = ({ buyerId, sellerId, setStatus }: any) => {
  const { user } = React.useContext(AuthContext);

  return (
    <div className={styles.wrapper}>
      {user._id === buyerId ? (
        <>
          <div className={styles.row}>
            <div className={styles.primaryBtn} onClick={() => setStatus(3)}>
              Accept
            </div>
          </div>
          <div className={styles.row}>
            <div onClick={() => setStatus(5)} className={styles.secondaryBtn}>
              Dispute
            </div>
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

export default Delivered;
