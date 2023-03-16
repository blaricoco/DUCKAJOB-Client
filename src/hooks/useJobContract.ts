import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonClient } from './useTonClient';
import { useTonConnect } from './useTonConnect';
import { Address, OpenedContract } from 'ton-core';
import JobContract from '../contracts/JobContract';
import { useQuery } from '@tanstack/react-query';
import { toNano, fromNano, Cell, contractAddress, beginCell, storeStateInit } from 'ton';
import base64url from 'base64url';
import qs from 'qs';

export function useJobContract(contract: string) {
  const { wallet, sender } = useTonConnect();
  const { client } = useTonClient();

  const test = () => {
    alert('useJobContract');
  };

  // Value needs to be passed down
  // Client funds the project
  const fundingProject = async () => {
    const result = await jobContract?.send(
      sender,
      { value: toNano(3) },
      { $$type: 'Fund_Project', amount: 3n },
    );
    console.log(result);

    return { msg: 'Funded succes' };
  };

  // developer ticking project as delivered
  const sellerDelivered = async () => {
    const result = await jobContract?.send(sender, { value: toNano(1) }, 'sellerDelivered');
    console.log(result);

    return { msg: 'Funded succes' };
  };

  // buyer accept project, project finished
  const buyerAccept = async () => {
    const result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerAccept');
    console.log(result);

    return { msg: 'Funded succes' };
  };

  // buyer didnt accept, we r waiting for another guy to review
  const buyerDispute = async () => {
    const result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerDispute');
    console.log(result);

    return { msg: 'Funded succes' };
  };

  // address of winner needs to be passed down
  const disputeResolve = async () => {
    const result = await jobContract?.send(
      sender,
      { value: toNano(1) },
      { $$type: 'Dispute_Resolve', address: Address.parse('contract') },
    );
    console.log(result);

    return { msg: 'Funded succes' };
  };

  const sellerNotDelivered = async () => {
    const result = await jobContract?.send(sender, { value: toNano(1) }, 'sellerNotDelivered');
    console.log(result);

    return { msg: 'Funded succes' };
  };

  const buyerNotReviewed = async () => {
    const result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerNotReviewed');
    console.log(result);

    return { msg: 'Funded succes' };
  };

  const jobContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const jobContract = new JobContract(Address.parse(contract));
    return client.open(jobContract) as OpenedContract<JobContract>;
  }, [client, wallet]);

  return {
    walletAddress: wallet,
    fundingProject,
    sellerDelivered,
    buyerAccept,
    buyerDispute,
    disputeResolve,
    sellerNotDelivered,
    buyerNotReviewed,
  };
}

// Need to pass seller, buyer and contract price
export function createContract(developerWallet: string, clientWallet: string,dispute_resolver: string, contractPrice:bigint) {
    const { wallet, sender } = useTonConnect();
    const { client } = useTonClient();

    const test = () => {
        alert('createContract');
    };

    const jobContract = useAsyncInitialize(async () => {

        if (!client || !wallet) return;

        let jobContract = await JobContract.fromInit(
            Address.parse(developerWallet),
            Address.parse(clientWallet),
            Address.parse(dispute_resolver),
            contractPrice,
            );

        return client.open(jobContract) as OpenedContract<JobContract>;

        }, [client, wallet]
    );
    
    const createJobLink = async () => {

        const result = await jobContract?.send(
            sender,
            { value: toNano(1) },
            { $$type: 'Deploy', queryId: 0n },
        );
    
        return { msg: 'Funded succes', address: jobContract?.address.toString() };
    };


  return {
    walletAddress: wallet,
    createJobLink,
  };
}

export function useJobContractGetters(contract: string) {
  const { wallet, sender } = useTonConnect();
  const { client } = useTonClient();

  const getContractPrice = async () => {
    const message = await jobContract?.getContractPrice();

    console.log(message);

    return { msg: message };
  };

  const getContractStatus = async () => {
    const message = await jobContract?.getContractStatus();
    console.log(message);

    return { msg: message };
  };

  const getDeliveryTime = async () => {
    const message = await jobContract?.getDeliveryTime();
    console.log(message);

    return { msg: message };
  };

  const getDeployedTime = async () => {
    const message = await jobContract?.getDeployedTime();
    console.log(message);

    return { msg: message };
  };

  const getDepositTime = async () => {
    const message = await jobContract?.getDepositTime();
    console.log(message);

    return { msg: message };
  };

  const getFunds = async () => {
    const message = await jobContract?.getFunds();
    console.log(message);

    return { msg: message };
  };

  const getMaxTimeToComplete = async () => {
    const message = await jobContract?.getMaxTimeToComplete();
    console.log(message);

    return { msg: message };
  };

  const getMaxTimeToDeposit = async () => {
    const message = await jobContract?.getMaxTimeToDeposit();
    console.log(message);

    return { msg: message };
  };

  const getMaxTimeToReview = async () => {
    const message = await jobContract?.getMaxTimeToReview();
    console.log(message);

    return { msg: message };
  };

  const jobContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const jobContract = new JobContract(Address.parse(contract));
    return client.open(jobContract) as OpenedContract<JobContract>;
  }, [client, wallet]);

  return {
    walletAddress: wallet,
    getContractPrice,
    getContractStatus,
    getDeliveryTime,
    getDeployedTime,
    getDepositTime,
    getFunds,
    getMaxTimeToComplete,
    getMaxTimeToDeposit,
    getMaxTimeToReview,
  };
}
