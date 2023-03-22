import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import FaucetJetton from "../contracts/faucetJetton";
import { Address, OpenedContract, toNano } from "ton-core";
import FaucetJettonWallet from "../contracts/faucetJettonWallet";
import { useQuery } from "@tanstack/react-query";
import JobContract from "../contracts/JobContract";
import { beginCell, contractAddress, storeStateInit } from "ton";
import base64url from 'base64url';
import qs from 'qs';

export function useDuckAJob(contractAddressString: string) {
  const { wallet, sender } = useTonConnect();
  const { client } = useTonClient();

  // 1) Creates a new JobContract object using constructor
  //    Returning client with opened contract
  const jobContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new JobContract(
      Address.parse(contractAddressString)
    );

    return client.open(contract) as OpenedContract<JobContract>;
  }, [client]);

  // 2) Get JobContract status
  const { data, isFetching } = useQuery(
    ["status"],
    async () => {
      if (!jobContract) return null;
      const contractStatus = (await jobContract!.getContractStatus()).toString();
      const contractPrice = (await jobContract!.getContractPrice()).toString();
      const contractDeployedTime = new Date(Number((await jobContract!.getDeployedTime()).toString()) * 1000).toString();
      // Add deployed time + max time to deposit ---- because data stored in unix timestamp - seconds
      const contractMaxTimeToDeposit = new Date((
        Number((await jobContract!.getDeployedTime()).toString()) + 
        Number((await jobContract!.getMaxTimeToDeposit()).toString())
        ) * 1000 ).toString();
      const contractMaxTimeToComplete = new Date((
        Number((await jobContract!.getDeployedTime()).toString()) + 
        Number((await jobContract!.getMaxTimeToComplete()).toString())
        ) * 1000 ).toString();
      const contractMaxTimeToReview = new Date((
        Number((await jobContract!.getDeployedTime()).toString()) + 
        Number((await jobContract!.getMaxTimeToReview()).toString())
        ) * 1000 ).toString();
      const contractSeller = (await jobContract!.getSeller()).toString();
      const contractBuyer = (await jobContract!.getBuyer()).toString();

      const contractfunds= (await jobContract!.getFunds()).toString();
 
      return {
        status: contractStatus, 
        price: contractPrice, 
        deployedTime: contractDeployedTime,
        maxTimeToDeposit: contractMaxTimeToDeposit,
        maxTimeToComplete: contractMaxTimeToComplete,
        maxTimeToReview: contractMaxTimeToReview,
        seller: contractSeller,
        buyer: contractBuyer,
        funds: contractfunds
    };
    },
    { refetchInterval: 3000 }
  );

  



  console.log("THIS IS THE DUCK A JOB CONTRACT HOOK!");

  // Value being sent to contract (gas fees) needs to be greater than 0.02 else fails 
  return {
    contractDetails: isFetching ? null : data,
    address: jobContract?.address.toString(),
    sendDeployMessage: () => {
      return jobContract?.send(sender, { value: toNano("0.02") }, "deploy");
    },
    updateStatus: (status: bigint) => {
      return jobContract?.send(
        sender,
        { value: toNano("0.02") },
        { $$type: "Update_Status", statusID: status }
      );
    },
    fundProject: (funds: bigint) => {
      return jobContract?.send(
        sender,
        { value: toNano("0.02") },
        { $$type: "Fund_Project", amount: funds }
      );
    },

    sellerDelivered: () => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, "sellerDelivered");
    },
    buyerAccept: () => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, "buyerAccept");
    },
    buyerDispute: () => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, "buyerDispute");
    },
    disputeResolve: (winnerAddress: string) => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, {$$type:"Dispute_Resolve", address:  Address.parse(winnerAddress)});
    },
    sellerNotDelivered: () => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, "sellerNotDelivered");
    },
    buyerNotReviewed: () => {
        return jobContract?.send(
          sender,
          { value: toNano("0.02") }, "buyerNotReviewed");
    },
    deploy: async (seller: string, amount: bigint) => {
      let init = await JobContract.init(Address.parse(seller), Address.parse(seller), Address.parse(seller), amount);
        // let packed = beginCell().store(storeAdd({ $$type: 'Add', amount: 10n })).endCell(); // Replace if you want another message used
      let address = contractAddress(0, init);
      let deployAmount = toNano("0.2");
      let testnet = true;

      let initStr = base64url(beginCell()
            .store(storeStateInit(init))
            .endCell()
            .toBoc({ idx: false }));

      let link = `ton://transfer/` + address.toString({ testOnly: testnet }) + "?" + qs.stringify({
        text: 'Deploy',
        amount: deployAmount.toString(10),
        init: initStr
      });

      return {link: link, address: address};
    }
  };
}
