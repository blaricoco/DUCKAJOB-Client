import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/authContext';
import { getApplicationsByUser } from '../../../../utils/application';

import styles from '../Section.module.scss';
import JobItem from './JobItem';

const Applications = () => {
  const { id } = useParams();

  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    id && getApplicationsByUser(id, (res) => setData(res));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        data?.map((el: any, index: number) => {
          // console.log(el.jobId._id);
          return <JobItem id={el.jobId._id} key={index} />;
        })
      ) : (
        <h3>There is nothing here</h3>
      )}
    </div>
  );
};

export default Applications;
