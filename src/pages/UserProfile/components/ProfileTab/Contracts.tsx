import React from 'react';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/authContext';
import { getContractByUser } from '../../../../utils/contract';

import styles from '../Section.module.scss';
import ContractItem from './ContractItem';

const Contracts = () => {
  const { id } = useParams();

  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    id && getContractByUser(id, (res) => setData(res));
  }, [id]);

  return (
    <div className={styles.wrapper}>
      {data.length > 0 ? (
        data?.map((el: any, index: number) => {
          // console.log(el);
          return <ContractItem contract={el} jobId={el.job._id} key={index} />;
        })
      ) : (
        <h3>There is nothing here</h3>
      )}
    </div>
  );
};

export default Contracts;
