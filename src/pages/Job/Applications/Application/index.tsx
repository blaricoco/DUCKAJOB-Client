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

  const [link, setLink] = React.useState('')

  const { createJobLink, deployContract } = createContract(application.userId.wallet, owner.wallet, application.userId.wallet,1n);
  
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
    getMaxTimeToReview,} = useJobContractGetters();

  const handleAcceptButtonClick = async () => {
    // alert('FUCK');
    // smart contract generated

    //const {contractAddress, contractLink} = await smartContractHandle();

    // const test = await getDepositTime();
    // console.log(test.msg);
    
    // const reqBody = {
    //   jobId: application.jobId,
    //   buyerId: owner._id,
    //   sellerId: application.userId._id,
    //   contractAddress: contractAddress,
    //   contractLink: contractLink,
    //   // userId:
    //   applicationId: application._id,
    //   seller_wallet: application.userId.wallet,
    //   buyer_wallet: owner.wallet,
    //   disputeResolver_wallet: 'kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP',
    //   contract_price: 250,
    // };
    // createContractDB(reqBody, (res: any) => {
    //   console.log(res);
    //   navigation(`/contract/${res._id}`);
    // });
    await smartContractHandle();
    console.log("handle accept!");
  };

  const smartContractHandle = async () => {

    const {link, address} = await deployContract();

    console.log("CONTRACT ADD", address);
    console.log("CONTRACT LINK", link);
    setLink(link)
    setIsPopup(false)

    setIsPopup2(true)
    // return {contractAddress: data.address, contractLink: data.link};
  };

  const [isPopup, setIsPopup] = React.useState(false);
  const [isPopup2, setIsPopup2] = React.useState(false);

  return (
    <>
      <PopUpContainer isActive={isPopup2} setIsActive={setIsPopup2}>
        <a href={link} style={{backgroundColor: 'red', fontSize: 20, color: "#fff"}}>Link</a>
    </PopUpContainer>
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
