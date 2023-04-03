import React from 'react';
import { useParams } from 'react-router-dom';
import { toNano } from 'ton-core';
import { Job, CreateJob, JobGetters } from '../../components/Job';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';
import { useDuckAJob } from "../../hooks/useJobContract";
import { getContractById, getContractStatus, setContractStatus } from '../../utils/contract';
import StatusParser from '../../utils/contract/statusParser';

const statuses = [
  'Unfunded',
  'Ongoing',
  'Delivered',
  'Accepted',
  'Cancelled',
  'Dispute',
  'Resolved',
];

import styles from './Contract.module.scss';
import ContractController from './ContractController';
//import Job from '';
const Contract = () => {
  const { id } = useParams();
  const [data, setData] = React.useState<any>({});
  const [job, setJob] = React.useState<any>({});
  const [buyer, setBuyer] = React.useState<any>({});
  const [seller, setSeller] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);

 const { 
    contractDetails, 
    address, 
    sendDeployMessage, 
    updateStatus, 
    fundProject, 
    sellerDelivered, 
    buyerAccept,
    disputeResolve,
    sellerNotDelivered,
    buyerNotReviewed } = useDuckAJob(data.contract_address);


  const [statusCode, setStatusCode] = React.useState(0);

  // var test = Number(contractDetails?.status!);
  // console.log(test);

  React.useEffect( () => {
    data.contract_address 
    

  }, [data.contract_address])



  const setStatus = (status: string) => {
    // SUCCESS
    
    // TODO: UPDATE TO ONLY TRIGER WHEN FUNDING 
    fundProject(toNano("0.2"));

    id && setContractStatus(id, status, (res) => setStatusCode(res.status));
    
  };

  React.useEffect(() => {
    id &&
      getContractById(id, (res) => {
        const { buyer, seller, job, ...rest } = res;
        // console.log('Buyer', buyer);
        setBuyer(buyer);
        // console.log(' ');
        // console.log('Seller', seller);
        setSeller(seller);
        // console.log(' ');
        // console.log('Job', job);
        setJob(job);
        // console.log(' ');
        setData(rest);
        // console.log('Rest', rest.contract_status);
        setStatusCode(rest.contract_status);
        console.log("CONTROLLER");
        console.log(rest.contract_status);
        console.log(contractDetails?.status!);
        //contractDetails?.status!

        // console.log(' ');
        setIsLoading(false);
      });
  }, [id]);

  // TODO: DISPLAY CONTRACT
  // TODO: CREATE BUTTONS WITH CONTRACT FUNCTIONALITY
  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="container">
            <div className={styles.wrapper}>
              <div className={styles.header}>
                <p className={styles.company}>
                  <span>{buyer?.username}</span>
                  <img src="/icons/circle.svg" /> 2hr ago
                </p>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{job?.title}</h3>
                <p className={styles.description}>{job?.description}</p>
                <div className={styles.stats}>
                <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Cost</p>
                    <p className={styles.statValue}>{contractDetails?.price}</p>
                  </div>
                  <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Budget</p>
                    <p className={styles.statValue}>{contractDetails?.funds}</p>
                  </div>
                  <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Status</p>
                    <p className={styles.statValue}>{contractDetails?.status!}</p>
                    {/* <p className={styles.statValue}>{StatusParser(contractDetails?.status!)}</p> */}
                  </div>
                  <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Deadline</p>
                    <p className={styles.statValue}>{contractDetails?.maxTimeToComplete}</p>
                  </div>
                </div>
              </div>
              <div className={styles.line} />

              <p className={styles.freelancerTitle}>Freelancer</p>

              <div className={styles.freelancerCard}>
                <div className={styles.header}>
                  <div className={styles.row}>
                    <h2 className={styles.name}>{seller?.username}</h2>
                    <Rating />
                  </div>
                  <p className={styles.desc}>{seller?.bio}</p>
                </div>
                <div className={styles.msgButton}>
                  <p>Message</p>
                </div>
              </div>
            </div>
          </div>
          <ContractController
            setStatus={setStatus}
            buyerId={buyer._id}
            sellerId={seller._id}
            statusCode={statusCode}
          />
        </>
      )}
    </>
  );
};

export default Contract;
