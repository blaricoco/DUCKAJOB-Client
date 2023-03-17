import { Loader } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../../../../../utils/dateFormat';
import { getJobDetails } from '../../../../../utils/jobs';

import styles from './JobItem.module.scss';

interface TagItemProps {
  tag: any;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag.name}</p>
  </div>
);

const JobItem = ({ id }: any) => {
  const navigation = useNavigate();

  const [data, setData] = React.useState<any>({});
  const [applications, setApplications] = React.useState<any>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    id &&
      getJobDetails(id, (res: any) => {
        setIsLoading(false);
        setData(res.job);
        setApplications(res.applications);
      });
  }, [id]);

  if (isLoading)
    return (
      <div className={styles.loadingWrapper}>
        <Loader color={'gray'} />
      </div>
    );

  return (
    <div onClick={() => navigation(`/jobs/${data._id}`)} className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.company}>
          <span>{data.owner?.username}</span>
          <img src="/icons/circle.svg" /> {data.createdAt && formatDate(new Date(data.createdAt))}
        </p>
        <div className={styles.priceCon}>
          <p className={styles.priceTxt}>${data.budget}</p>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.description}>{data.description}</p>

        <div className={styles.appliedCon}>
          <img src="/icons/user-check.svg" />
          <p>{applications ? applications?.length : 0} Applied</p>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.tagsCon}>
        {data?.tags?.map((tag: any, index: number) => (
          <TagItem tag={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default JobItem;
