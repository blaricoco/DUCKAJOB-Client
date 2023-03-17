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

  const changeStatus = async (status:number) => {
    let result
    switch (status) {
      case 1:
        // Status: Delivered 
        result = await jobContract?.send(sender, { value: toNano(1) }, 'sellerDelivered');
        break;
      case 2:
        // Status: Accepted
        result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerAccept');
        break;
      case 3:
        // Status: NotDelivered
        result = await jobContract?.send(sender, { value: toNano(1) }, 'sellerNotDelivered');
      case 4:
        // Status: NotReviewed
        result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerNotReviewed');
      case 5:
        // Status: Dispute
        result = await jobContract?.send(sender, { value: toNano(1) }, 'buyerDispute');
      case 6:
        // Status: Resolved
        result = await jobContract?.send(sender, { value: toNano(1) }, { $$type: 'Dispute_Resolve', address: Address.parse('contract') } );
      default:
          break;
    }
    // const result = await jobContract?.send(sender, { value: toNano(1) }, 'sellerDelivered');
    // console.log(result);

    // return { msg: 'Funded succes' };
  };

  // Value needs to be passed down
  // Client funds the project
  const fundingProject = async (amount:number) => {
    const result = await jobContract?.send(
      sender,
      { value: toNano(amount) },
      { $$type: 'Fund_Project', amount:  toNano(amount)},
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
    const result = await jobContract?.send(sender, { value: toNano(1) },
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

    const jobContract = useAsyncInitialize(async () => {

        if (!client || !wallet) return;

        let contract = await JobContract.fromInit(
            Address.parse(developerWallet),
            Address.parse(clientWallet),
            Address.parse(dispute_resolver),
            contractPrice,
            );

     
        return client.open(contract) as OpenedContract<JobContract>;

        }, [client, wallet]
    );
    
    const deployContract = async () => {
      
      let deployAmount = toNano('0.5');

      let init = await JobContract.init(
        Address.parse(developerWallet),
        Address.parse(clientWallet),
        Address.parse(dispute_resolver),
        deployAmount,);

      let initStr = base64url(beginCell()
      .store(storeStateInit(init))
      .endCell()
      .toBoc({ idx: false }));
 
      
    
      let address = contractAddress(0, init);

      await jobContract?.send(
          sender,
          { value: deployAmount },
          { $$type: 'Deploy', queryId: 0n },
      );

      return { link: `ton://transfer/` + address.toString({ testOnly: true }) + "?" + qs.stringify({
        text: 'Deploy',
        amount: deployAmount.toString(10) ,
        init: initStr }), address: jobContract?.address.toString() };
  };

    const createJobLink  = (async () => {
      // Forming an init package

          let init = await JobContract.init(
                    Address.parse(developerWallet),
                    Address.parse(clientWallet),
                    Address.parse(dispute_resolver),
                    contractPrice,);
          let testnet = true;
          
          // Contract address
          let address = contractAddress(0, init);
          
          // Amount of TONs to attach to a deploy message
          let deployAmount = toNano('0.5');
          
          // Create string representation of an init package
          let initStr = base64url(beginCell()
                  .store(storeStateInit(init))
                  .endCell()
                  .toBoc({ idx: false })
                  );
     
          // Create a deploy link
          return {
            link: `ton://transfer/` + address.toString({ testOnly: testnet }) + "?" + qs.stringify({
              text: 'Deploy',
              amount: deployAmount.toString(10),
              init: initStr }), 
            contractAddress: address.toString() };

      });


  return {
    walletAddress: wallet,
    createJobLink,
    deployContract,
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
