import React from 'react';
import { AuthContext } from '../../../../contexts/authContext';
import { getContractByUser } from '../../../../utils/contract';

const Contracts = () => {
  const { user } = React.useContext(AuthContext);
  React.useEffect(() => {
    getContractByUser(user._id);
  }, []);

  return <div>Contracts</div>;
};

export default Contracts;
