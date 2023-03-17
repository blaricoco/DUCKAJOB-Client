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
      case 0:
        // Status: onGoing 
        result = await jobContract?.send( sender, { value: await jobContract?.getContractPrice() }, { $$type: 'Fund_Project', amount:  await jobContract?.getContractPrice() });
        break;
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
        // Status: Resolved buyer
        result = await jobContract?.send(sender, { value: toNano(1) }, { $$type: 'Dispute_Resolve', address: await jobContract?.getBuyer()} );
      case 7:
        // Status: Resolved seller
        result = await jobContract?.send(sender, { value: toNano(1) }, { $$type: 'Dispute_Resolve', address: await jobContract?.getSeller()} );
      default:
          break;
    }

    return result;
  };

  const jobContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const jobContract = new JobContract(Address.parse(contract));
    return client.open(jobContract) as OpenedContract<JobContract>;
  }, [client, wallet]);

  return {
    walletAddress: wallet,
    changeStatus
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

  const contractStatus = async (status:string) => {
    let result
    switch (status) {
      case "getContractPrice":
        result = await jobContract?.getContractPrice();
      case "getContractStatus":
        result = await jobContract?.getContractStatus();
      case "getContractStatus":
        result = await jobContract?.getDeliveryTime();
      case "getContractStatus":
        result = await jobContract?.getDepositTime();
      case "getContractStatus":
        result = await jobContract?.getFunds();
      case "getContractStatus":
        result = await jobContract?.getMaxTimeToComplete();
      case "getContractStatus":
        result = await jobContract?.getMaxTimeToDeposit();
      case "getContractStatus":
        result = await jobContract?.getMaxTimeToReview();
      default:
          break;
    }

    return result;
  }

  const jobContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const jobContract = new JobContract(Address.parse(contract));
    return client.open(jobContract) as OpenedContract<JobContract>;
  }, [client, wallet]);

  return {
    walletAddress: wallet,
    contractStatus
  };
}
