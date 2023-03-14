import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';
import Links from './components/Links';
import Reviews from './components/Reviews';
import Skills from './components/Skills';

import styles from './UserProfile.module.scss';

import WebApp from '@twa-dev/sdk';
import { Tabs } from '@mantine/core';
import ProfileTab from './components/ProfileTab';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../utils/user';

const profile = () => {
  const { id } = useParams();
  const data = WebApp.initDataUnsafe?.user;
  const [userData, setUserData] = React.useState<any>({});

  React.useEffect(() => {
    if (id) getUserDetails(id, (res) => setUserData(res.user));
  }, [id]);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          {/* <h2>{JSON.stringify(data)}</h2> */}
          <div className={styles.header}>
            <div className={styles.row}>
              <h2 className={styles.name}>{userData.username}</h2>
              <Rating />
            </div>
            <p className={styles.desc}>
              {/* UI/UX Designer, Entrepreneur I help companies build great products. */}
              {userData.bio}
            </p>
          </div>

          <div className={styles.msgButton}>
            <p>Message</p>
            <img src="/icons/msg.svg" />
          </div>

          <ProfileTab />
        </div>
      </div>
    </>
  );
};

export default profile;
