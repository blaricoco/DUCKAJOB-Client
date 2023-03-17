import React from 'react';
import Navbar from '../../components/UI/Navbar';
import Duck from './components/IntroCanvas';
import Intro from './components/Intro';

import styles from './Landing.module.scss';
import HowToStart from './components/HowToStart';
import Stats from './components/Stats';

const Landing = () => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Intro />
      <Stats />
      <HowToStart />
    </div>
  );
};

export default Landing;
