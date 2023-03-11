import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import Navbar from '../../components/UI/Navbar';
import Filters from './components/Filters';
import JobItem from './components/JobItem';

import styles from './JobLists.module.scss';
import React from 'react';
import { getJobs } from '../../utils/jobs';

type Job = {
  _id: string;
  title: string;
  description: string;
  budget: number;
  tags?: any[];
};

const test: Job[] = [
  {
    _id: '123',
    title: 'Make a logo',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus a mauris lacinia bibendum.',
    budget: 300,
  },
  {
    _id: '123',
    title: 'Make a website on wordpress',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus a mauris lacinia bibendum.',
    budget: 300,
  },
  {
    _id: '125',
    title: 'Can you teach me tact',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus a mauris lacinia bibendum.',
    budget: 300,
  },
  {
    _id: '130',
    title: 'Func developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae risus a mauris lacinia bibendum.',
    budget: 300,
  },
];

const JobLists = () => {
  const [jobs, setJobs] = React.useState<Job[]>(test);

  React.useEffect(() => {
    // getJobs((res: any) => {
    //   setJobs(res);
    // });
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          <Filters />
          <div className={styles.list}>
            {/* <JobItem title="Kill me" _id={'123'} description="qewfrvsdbghnjm" budget={228} /> */}
            {jobs.map((job) => {
              return <JobItem {...job} key={job._id} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default JobLists;
