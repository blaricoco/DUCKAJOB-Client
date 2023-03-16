import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { Address } from 'ton-core';
import PopUpContainer from '../../../../components/UI/PopUpContainer';
import Rating from '../../../../components/UI/Rating';
import { createContract } from '../../../../hooks/useJobContract';
import { createContractDB } from '../../../../utils/contract';

import styles from './Application.module.scss';

const Application = ({ application, owner }: any) => {
  // console.log(application);
  const navigation = useNavigate();

  const { createJobLink } = createContract();

  const handleAcceptButtonClick = async () => {
    // alert('FUCK');
    // await smartContractHandle();

    const reqBody = {
      jobId: application.jobId,
      buyerId: owner._id,
      sellerId: application.userId._id,
      // userId:
      applicationId: application._id,
      seller_wallet: application.userId.wallet,
      buyer_wallet: owner.wallet,
      disputeResolver_wallet: 'kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP',
      contract_price: 250,
    };
    createContractDB(reqBody, (res: any) => {
      console.log(res);
      navigation(`/contract/${res._id}`);
    });
  };

  const smartContractHandle = async () => {
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
    return data;
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
        <div className={styles.body}>
          <div
            // onClick={() => navigation(`/user/${application.userId._id}`)}
            className={styles.header}>
            <h5>{application.userId.username}</h5>
            <Rating />
          </div>
          <p className={styles.desc}>{application.userId.bio}</p>
        </div>

        <div className={styles.footer}>
          <div
            // onClick={() => navigation(`/contract/${application.userId._id}`)}
            className={styles.offerCon}>
            <p>Offer: $1200</p>
          </div>
          <p className={styles.date}>2 hours ago</p>
        </div>
        {/* <div className={styles.arrNextCon}>
          <img src="/icons/nextBtn.svg" />
        </div> */}
      </div>
    </>
  );
};

export default Application;
