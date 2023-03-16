import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import Navbar from '../../components/UI/Navbar';
import Filters from './components/Filters';
import JobItem from './components/JobItem';

import styles from './JobLists.module.scss';
import React from 'react';
import { getJobs } from '../../utils/jobs';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

type Job = {
  _id: string;
  title: string;
  description: string;
  budget: number;
  tags?: any[];
  applications?: any[];
  owner: any;
  createdAt: Date;
};

const JobLists = () => {
  const [jobs, setJobs] = React.useState<Job[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getJobs((res: any) => {
      // console.log(res);
      setJobs(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          <Filters />
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className={styles.list}>
              {jobs?.map((job) => {
                return <JobItem {...job} key={job._id} />;
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default JobLists;
