import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Rating from '../../components/UI/Rating';
import Links from './components/Links';
import Reviews from './components/Reviews';
import Skills from './components/Skills';

import styles from './UserProfile.module.scss';

import WebApp from '@twa-dev/sdk';
import ProfileTab from './components/ProfileTab';
import { useParams } from 'react-router-dom';
import { getUserDetails } from '../../utils/user';
import LoadingSpinner from '../../components/UI/LoadingSpinner';

const profile = () => {
  const { id } = useParams();
  // const data = WebApp.initDataUnsafe?.user;
  const [userData, setUserData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (id)
      getUserDetails(id, (res) => {
        setUserData(res.user);
        setIsLoading(false);
      });
  }, [id]);

  React.useEffect(() => {
    console.log(userData);
  }, [userData]);

  return (
    <>
      <Navbar />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          {userData ? (
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
          ) : (
            <h3>No such a user</h3>
          )}
        </div>
      )}
    </>
  );
};

export default profile;
