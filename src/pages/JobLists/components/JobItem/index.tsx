import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getJobDetails } from '../../../../utils/jobs';

import styles from './JobItem.module.scss';

// const tags = ['Func', 'Very fun c', 'React', 'Nest.js', 'Typescript'];

interface TagItemProps {
  tag: any;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag.name}</p>
  </div>
);

interface JobItemProps {
  _id: string;
  title: string;
  description: string;
  budget: number;
  applications?: any[];
  owner: any;
  tags?: any;
}

const JobItem: React.FC<JobItemProps> = ({
  _id,
  title,
  description,
  budget,
  applications,
  owner,
  tags,
}) => {
  const navigation = useNavigate();
  // console.log(applications);

  return (
    <div onClick={() => navigation(`/jobs/${_id}`)} className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.company}>
          <span>{owner?.username}</span>
          <img src="/icons/circle.svg" /> 2hr ago
        </p>
        <div className={styles.priceCon}>
          <p className={styles.priceTxt}>${budget}</p>
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        <div className={styles.appliedCon}>
          <img src="/icons/user-check.svg" />
          <p>{applications ? applications?.length : 0} Applied</p>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.tagsCon}>
        {tags.map((tag: any, index: number) => (
          <TagItem tag={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default JobItem;
