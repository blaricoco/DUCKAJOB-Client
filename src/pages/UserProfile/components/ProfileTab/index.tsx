import { Tabs } from '@mantine/core';
import React from 'react';
import Links from '../Links';
import Reviews from '../Reviews';
import Skills from '../Skills';

import styles from './ProfileTab.module.scss';

const tabs = [
  {
    img: '/icons/tabs/user.svg',
    text: 'Bio',
  },
  {
    img: '/icons/tabs/star.svg',
    text: 'Reviews',
  },
  {
    img: '/icons/tabs/check-square.svg',
    text: 'Applications',
  },
  {
    img: '/icons/tabs/job.svg',
    text: 'Jobs',
  },
];

const ProfileTab = () => {
  const [active, setActive] = React.useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.tabs}>
        {tabs.map((tab, index) => (
          <div
            className={active === index ? styles.activeEl : styles.el}
            key={index}
            onClick={() => setActive(index)}>
            <img src={tab.img} alt="" />
            <p>{tab.text}</p>
          </div>
        ))}
      </div>
      <div className={styles.body}>
        {active === 0 ? (
          <>
            <Skills />
            <Links />
          </>
        ) : active === 1 ? (
          <Reviews />
        ) : (
          <h1>123</h1>
        )}
      </div>
    </div>
  );
};

export default ProfileTab;
