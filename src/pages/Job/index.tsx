import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/UI/Navbar';
import { getJobDetails } from '../../utils/jobs';
import Applications from './Applications';

import styles from './Job.module.scss';

const tags = ['Func', 'Very fun c', 'React', 'Nest.js', 'Typescript', 'Java'];

interface TagItemProps {
  tag: string;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag}</p>
  </div>
);

const Job = () => {
  const { id } = useParams();

  const [data, setData] = React.useState<any>({});
  const [applications, setApplications] = React.useState<any[]>();

  React.useEffect(() => {
    if (id) {
      getJobDetails(id, (res: any) => {
        // console.log(res.applications);
        setApplications(res.applications);
        setData(res.job);
      });
    }
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.header}>
            <p className={styles.company}>
              <span>Microsoft</span>
              <img src="/icons/circle.svg" /> 2hr ago
            </p>
            <div className={styles.priceCon}>
              <p className={styles.priceTxt}>${data?.budget}</p>
            </div>
          </div>
          <div className={styles.body}>
            <h3 className={styles.title}>{data?.title}</h3>
            <p className={styles.description}>{data?.description}</p>
            <div className={styles.appliedCon}>
              <img src="/icons/user-check.svg" />
              <p>{applications?.length} Applied</p>
            </div>
          </div>
          <div className={styles.tagsCon}>
            {tags?.map((tag, index) => (
              <TagItem tag={tag} key={index} />
            ))}
          </div>

          <Applications applications={applications} />

          {/* <div className={styles.applyButton}>
            <p>Apply</p>
            <img src="/icons/user-check-white.svg" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Job;
