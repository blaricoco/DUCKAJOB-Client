import { Loader } from '@mantine/core';
import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/authContext';
import { getJobsByUser } from '../../../../utils/jobs';
import JobItem from '../../../JobLists/components/JobItem';

import styles from '../Section.module.scss';

const Jobs = () => {
  const [data, setData] = React.useState<any>([]);
  const { id } = useParams();

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    id &&
      getJobsByUser(id, (res: any) => {
        setData(res.jobs);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className={styles.loadingWrapper}>
        <Loader color={'gray'} />
      </div>
    );

  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        data?.map((el: any, index: number) => {
          return <JobItem key={index} {...el} />;
        })
      ) : (
        <h3>There is nothing here</h3>
      )}
    </div>
  );
};

export default Jobs;
