import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import Navbar from '../../components/UI/Navbar';
import Filters from './components/Filters';
import JobItem from './components/JobItem';

import styles from './JobLists.module.scss';

const JobLists = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          <Filters />
          <div className={styles.list}>
            <JobItem />
            <JobItem />
            <JobItem />
          </div>
        </div>
      </div>
    </>
  );
};

export default JobLists;
