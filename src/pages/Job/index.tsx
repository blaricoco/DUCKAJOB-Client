import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/UI/Navbar';
import { AuthContext } from '../../contexts/authContext';
import { applyForJob } from '../../utils/application';
import { getJobDetails } from '../../utils/jobs';
import Applications from './Applications';
import ApplyButton from './ApplyButton';

import styles from './Job.module.scss';

const tags = ['Func', 'Very fun c', 'React', 'Nest.js', 'Typescript', 'Java'];

interface TagItemProps {
  tag: any;
}

const TagItem: React.FC<TagItemProps> = ({ tag }) => (
  <div className={styles.tagWrapper}>
    <p>{tag.name}</p>
  </div>
);

const Job = () => {
  const { id } = useParams();
  const { user } = React.useContext(AuthContext);

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
              <Link to={`/user/${data.owner?._id}`}>
                <span>{data.owner?.username}</span>
              </Link>
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
            {data?.tags?.map((tag: any, index: number) => (
              <TagItem tag={tag} key={index} />
            ))}
          </div>
          {/* check if its my job */}
          {data.owner ? (
            data.owner._id === user._id ? (
              <Applications applications={applications} />
            ) : (
              <ApplyButton data={{ jobId: id, userId: user._id }} />
            )
          ) : (
            <h2>Loading</h2>
          )}
        </div>
      </div>
    </>
  );
};

export default Job;
