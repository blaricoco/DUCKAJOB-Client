import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react';
import { DuckModel } from '../../../../models/duck/Duck';
import { DuckModel2 } from '../../../../models/duck2/Duck2';

import styles from './IntroCanvas.module.scss';

const IntroCanvas = ({ mousePosition }: any) => {
  return (
    <div className={styles.wrapper}>
      <Canvas>
        <OrbitControls enableZoom={false} enableRotate={false} />
        {/* <OrbitControls /> */}

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <React.Suspense fallback={null}>
          {/* <DuckModel mousePosition={mousePosition} /> */}
          <DuckModel2 mousePosition={mousePosition} />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default IntroCanvas;
