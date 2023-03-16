import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PopUpContainer from '../../../../components/UI/PopUpContainer';
import Rating from '../../../../components/UI/Rating';
import { createContract } from '../../../../hooks/useJobContract';

import styles from './Application.module.scss';

const Application = ({ application, owner }: any) => {
  // console.log(application);
  const navigation = useNavigate();

  const { createJobLink } = createContract();

  const handleAcceptButtonClick = async () => {
    // alert('FUCK');
    console.log('=====Creating contract======');
    console.log('Developer:');
    console.log(application.userId.wallet);
    console.log(' ');
    console.log('Client:');
    console.log(owner.wallet);
    console.log(' ');
    console.log(' ');

    const data = await createJobLink(application.userId.wallet, owner.wallet);
    console.log('Data: ');
    console.log(data);
  };

  const [isPopup, setIsPopup] = React.useState(false);
  return (
    <>
      <PopUpContainer isActive={isPopup} setIsActive={setIsPopup}>
        <div className={styles.popup}>
          <div className={styles.row}>
            <div
              className={styles.header}
              onClick={() => navigation(`/user/${application.userId._id}`)}>
              <h5>{application.userId.username}</h5>
              <Rating />
            </div>
            <div
              // onClick={() => navigation(`/contract/${application.userId._id}`)}
              className={styles.offerCon}>
              <p>$1200</p>
            </div>
          </div>

          <div className={styles.btnsCon}>
            <div onClick={() => handleAcceptButtonClick()} className={styles.acceptOfferCon}>
              <p>Accept</p>
            </div>

            <Link to="https://t.me/IvanSeagull" style={{ flex: 1 }}>
              <div className={styles.messageCon}>
                <p>Message</p>
              </div>
            </Link>
          </div>
        </div>
      </PopUpContainer>
      <div className={styles.wrapper} onClick={() => setIsPopup(true)}>
        <div
          // onClick={() => navigation(`/user/${application.userId._id}`)}
          className={styles.header}>
          <h5>{application.userId.username}</h5>
          <Rating />
        </div>
        <p className={styles.desc}>{application.userId.bio}</p>
        <div className={styles.footer}>
          <div
            // onClick={() => navigation(`/contract/${application.userId._id}`)}
            className={styles.offerCon}>
            <p>Offer: $1200</p>
          </div>
          <p className={styles.date}>2 hours ago</p>
        </div>
        <div className={styles.arrNextCon}>
          <img src="/icons/nextBtn.svg" />
        </div>
      </div>
    </>
  );
};

export default Application;
