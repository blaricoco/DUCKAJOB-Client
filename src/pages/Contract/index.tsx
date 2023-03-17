import React from 'react';
import { useParams } from 'react-router-dom';
import { Job, CreateJob, JobGetters } from '../../components/Job';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';
import { getContractById } from '../../utils/contract';

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

  React.useEffect(() => {
    id &&
      getContractById(id, (res) => {
        const { buyer, seller, job, ...rest } = res;
        console.log('Buyer', buyer);
        setBuyer(buyer);
        console.log(' ');
        // console.log('Seller', seller);
        setSeller(seller);
        console.log(' ');
        // console.log('Job', job);
        setJob(job);
        console.log(' ');
        // console.log('Rest', rest);
        console.log(' ');
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
                    <p className={styles.statTitle}>Budget</p>
                    <p className={styles.statValue}>$300</p>
                  </div>
                  <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Status</p>
                    <p className={styles.statValue}>Ongoing</p>
                  </div>
                  <div className={styles.statsEl}>
                    <p className={styles.statTitle}>Deadline</p>
                    <p className={styles.statValue}>12 Mar</p>
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
          <ContractController />

          <h2 style={{ marginTop: 30 }}>Developing:</h2>
          {/* <CreateJob /> */}
          {/* <JobGetters /> */}
          <Job contract="EQBODpOBGqdJEIN0wmZnKYxG_dx855ynKhCyy6twXX5ODzYH" />
        </>
      )}
    </>
  );
};

export default Contract;
