import React from 'react';
import IntroCanvas from '../IntroCanvas';

import styles from './Intro.module.scss';

const Intro = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (event: any) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  return (
    <main onMouseMove={handleMouseMove} className={styles.intro}>
      <div className="container">
        <div className={styles.introInner}>
          <div className={styles.left}>
            <h1 className={styles.title}>Don't duck out on your dream job.</h1>
            <p className={styles.desc}>
              Revolutionary freelancing app with TON blockchain smart contracts for secure
              transactions.
            </p>
          </div>
          <div className={styles.right}>
            <IntroCanvas mousePosition={mousePosition} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Intro;
