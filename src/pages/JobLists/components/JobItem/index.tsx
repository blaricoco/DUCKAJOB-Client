import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getJobDetails } from '../../../../utils/jobs';

import styles from './JobItem.module.scss';

const tags = ['Func', 'Very fun c', 'React', 'Nest.js', 'Typescript'];

interface TagItemProps {
  tag: string;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag}</p>
  </div>
);

interface JobItemProps {
  _id: string;
  title: string;
  description: string;
  budget: number;
}

const JobItem: React.FC<JobItemProps> = ({ _id, title, description, budget }) => {
  const navigation = useNavigate();

  return (
    <div onClick={() => navigation(`/jobs/${_id}`)} className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.company}>
          <span>Microsoft</span>
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
          <p>14 Applied</p>
        </div>
        <div className={styles.line} />
      </div>
      <div className={styles.tagsCon}>
        {tags.map((tag, index) => (
          <TagItem tag={tag} key={index} />
        ))}
      </div>
    </div>
  );
};

export default JobItem;
