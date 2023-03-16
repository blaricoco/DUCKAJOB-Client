import { useAsyncInitialize } from "./useAsyncInitialize";
import { useTonClient } from "./useTonClient";
import { useTonConnect } from "./useTonConnect";
import { Address, OpenedContract } from "ton-core";
import JobContract from "../contracts/JobContract";
import { useQuery } from "@tanstack/react-query";
import { toNano, fromNano, Cell, contractAddress, beginCell, storeStateInit } from "ton";
import base64url from 'base64url';
import qs from 'qs';

export function useJobContract(contract:string ) {
    const { wallet, sender } = useTonConnect();
    const { client } = useTonClient();

    const test = () => {
        alert('useJobContract');
    };
    
    // Value needs to be passed down 
    const fundingProject = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          { $$type: 'Fund_Project', amount: 250n },
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    const sellerDelivered = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          "sellerDelivered",
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    const buyerAccept = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          "buyerAccept",
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    const buyerDispute = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          "buyerDispute",
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    // address of winner needs to be passed down
    const disputeResolve = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          {$$type: 'Dispute_Resolve', address: Address.parse("contract")},
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    const sellerNotDelivered = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          "sellerNotDelivered",
        );
        console.log(result);

        return { msg: 'Funded succes' };
    };

    const buyerNotReviewed = async () => {
        const result = await jobContract?.send(
          sender,
          { value: toNano(1) },
          "buyerNotReviewed",
        );
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
        buyerNotReviewed
    }; 
}

// Need to pass seller, buyer and contract price
export function createContract() {
    const { wallet, sender } = useTonConnect();
    const { client } = useTonClient();

    const seller = Address.parse("kQCxPXjtEBNbDeV1EbruV9FIRJsh6FUQ3Z-sE-GqDrzL6kcf");
    const buyer = Address.parse("kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP");
    const dispute_resolver = Address.parse("kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP");
    const contractPrice = 250n;

    let deployAmount = toNano('0.5');

    const test = () => {
        alert('createContract');
    };

    const createJobLink = async () => {
        let init = await JobContract.init(seller, buyer, dispute_resolver, contractPrice);
        let address = contractAddress(0, init);
        let initStr = base64url(beginCell()
            .store(storeStateInit(init))
            .endCell()
            .toBoc({ idx: false }));
        let deployLink = `ton://transfer/` + address.toString({ testOnly: true }) + "?" + qs.stringify({
            text: 'Deploy',
            amount: deployAmount.toString(10),
            init: initStr
        });
        console.log(deployLink);

        return { msg: deployLink  };
    };

    return {
        walletAddress: wallet,
        createJobLink,
    };
}

export function useJobContractGetters(contract:string) {
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
        getMaxTimeToReview
    }; 

};