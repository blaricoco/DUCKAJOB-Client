import React from 'react';
import { Link, useNavigate, useNavigation } from 'react-router-dom';
import { Address } from 'ton-core';
import PopUpContainer from '../../../../components/UI/PopUpContainer';
import Rating from '../../../../components/UI/Rating';
import { createContract,useJobContract, useJobContractGetters  } from '../../../../hooks/useJobContract';
import { createContractDB } from '../../../../utils/contract';

import styles from './Application.module.scss';

const Application = ({ application, owner }: any) => {
  // console.log(application);
  const navigation = useNavigate();

  const { createJobLink, deployContract } = createContract(application.userId.wallet, owner.wallet, application.userId.wallet,3n);
  
  const {fundingProject,
    sellerDelivered,
    buyerAccept,
    buyerDispute,
    disputeResolve,
    sellerNotDelivered,
    buyerNotReviewed,} = useJobContract("EQB3t5dB-DBpP6pFhhKm4jg8Fk3Ru7bqQ38kE9cCQZpvDjSV");
  const {getContractPrice,
    getContractStatus,
    getDeliveryTime,
    getDeployedTime,
    getDepositTime,
    getFunds,
    getMaxTimeToComplete,
    getMaxTimeToDeposit,
    getMaxTimeToReview,} = useJobContractGetters("kQAq_yMMnSvml8HVgxWyRgilkg6okm_YkTEO1HPL74Oe5qSl");

  const handleAcceptButtonClick = async () => {
    // alert('FUCK');
    // smart contract generated

    const {contractAddress, contractLink} = await smartContractHandle();

    // const test = await getDepositTime();
    // console.log(test.msg);
    
    const reqBody = {
      jobId: application.jobId,
      buyerId: owner._id,
      sellerId: application.userId._id,
      contractAddress: contractAddress,
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

    const data = await deployContract();

    console.log(data.address);
    console.log(data.link);
    return {contractAddress: data.address, contractLink: data.link};
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
