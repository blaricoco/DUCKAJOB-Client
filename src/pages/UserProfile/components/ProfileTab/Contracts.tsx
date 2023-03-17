import React from 'react';
import { AuthContext } from '../../../../contexts/authContext';
import { getContractByUser } from '../../../../utils/contract';

import styles from '../Section.module.scss';
import ContractItem from './ContractItem';

const Contracts = () => {
  const { user } = React.useContext(AuthContext);
  const [data, setData] = React.useState<any>([]);
  React.useEffect(() => {
    getContractByUser(user._id, (res) => setData(res));
  }, []);

  return (
    <div className={styles.wrapper}>
      {data?.map((el: any, index: number) => {
        // console.log(el);
        return <ContractItem contract={el} jobId={el.job._id} key={index} />;
      })}
    </div>
  );
};

export default Contracts;
