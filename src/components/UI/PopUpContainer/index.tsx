import React from 'react';

import styles from './PopUpContainer.module.scss';

const PopUpContainer = ({ children, isActive = false, setIsActive }: any) => {
  const contentRef = React.useRef<any>(null);

  React.useEffect(() => {
    function handleClickOutside(event: any) {
      if (contentRef.current && !contentRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [contentRef]);

  return (
    <>
      {isActive && (
        <div className={styles.wrapper}>
          <div className={styles.content} ref={contentRef}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default PopUpContainer;
