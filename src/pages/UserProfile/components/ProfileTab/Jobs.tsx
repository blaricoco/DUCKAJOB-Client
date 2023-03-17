import React from 'react';
import { AuthContext } from '../../../../contexts/authContext';
import { getJobsByUser } from '../../../../utils/jobs';
import JobItem from '../../../JobLists/components/JobItem';

import styles from '../Section.module.scss';

const Jobs = () => {
  const [data, setData] = React.useState<any>([]);
  const { user } = React.useContext(AuthContext);

  React.useEffect(() => {
    getJobsByUser(user._id, (res: any) => {
      setData(res.jobs);
    });
  }, []);

  return (
    <div className={styles.wrapper}>
      {data?.map((el: any, index: number) => {
        return <JobItem key={index} {...el} />;
      })}
    </div>
  );
};

export default Jobs;
