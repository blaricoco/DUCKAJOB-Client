import React from 'react';
import { AuthContext } from '../../../../contexts/authContext';
import { getApplicationsByUser } from '../../../../utils/application';

import styles from '../Section.module.scss';
import JobItem from './JobItem';

const Applications = () => {
  const { user } = React.useContext(AuthContext);
  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    getApplicationsByUser(user._id, (res) => setData(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      {data.map((el: any, index: number) => {
        // console.log(el.jobId._id);
        return <JobItem id={el.jobId._id} key={index} />;
      })}
    </div>
  );
};

export default Applications;
