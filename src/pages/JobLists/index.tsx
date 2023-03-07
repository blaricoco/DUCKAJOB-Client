import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import Navbar from '../../components/UI/Navbar';
import Filters from './components/Filters';
import JobItem from './components/JobItem';

import styles from './JobLists.module.scss';

import WebApp from '@twa-dev/sdk';

const JobLists = () => {
  const data = WebApp.initDataUnsafe?.user;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          <h2>{JSON.stringify(data)}</h2>
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
