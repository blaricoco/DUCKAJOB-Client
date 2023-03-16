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

  // console.log(wallet);
  // console.log(sender);

  const test = () => {
    alert('test');
  };

  const fundingProject = async () => {
    const test = await jobContract?.send(
      sender,
      { value: toNano(1) },
      { $$type: 'Fund_Project', amount: 250n },
    );
    return { msg: 'Funded succes' };
  };

  const jobContract = useAsyncInitialize(async () => {
    if (!client || !wallet) return;
    const jobContract = new JobContract(Address.parse(contract));
    return client.open(jobContract) as OpenedContract<JobContract>;
  }, [client, wallet]);

  const jwContract = useAsyncInitialize(async () => {
    if (!jobContract || !client) return;
    //const jettonWalletAddress = await jobContract!.getDeployedTime();
    return client!.open(new JobContract(Address.parse(wallet!))) as OpenedContract<JobContract>;
  }, [jobContract, client]);

  const { data, isFetching } = useQuery(
    ['jetton'],
    async () => {
      console.log(await jobContract?.getContractStatus());
      // console.log(await jobContract?.getDeliveryTime());
      // console.log(await jobContract?.getDeployedTime());
      // console.log(await jobContract?.getDepositTime());
      // console.log(await jobContract?.getFunds());
      // console.log(await jobContract?.getMaxTimeToComplete());
      // console.log(await jobContract?.getMaxTimeToDeposit());
      //console.log(await jobContract?.getMaxTimeToReview());

      // const test = await jobContract?.send(
      //   sender,
      //   { value: toNano(1) },
      //   { $$type: 'Fund_Project', amount: 250n },
      // );
      // console.log(test);
      // console.log(await jobContract?.getContractStatus());
      return 'Load';
      // return await jobContract?.getDeliveryTime();
    },
    { refetchInterval: 30000 },
  );

  return {
    walletAddress: jwContract?.address.toString(),
    contractDeliveryTime: isFetching ? null : data,
    fundingProject,
  };
}

export function createJobContract() {
  const { wallet, sender } = useTonConnect();
  const { client } = useTonClient();

  const seller = Address.parse('kQCxPXjtEBNbDeV1EbruV9FIRJsh6FUQ3Z-sE-GqDrzL6kcf');
  const buyer = Address.parse('kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP');
  const dispute_resolver = Address.parse('kQAguT6dSS1u3cciZlCsG5Cn1aVnTT9tVWx-iH2uMnsRy-AP');
  const contractPrice = 250n;

  let deployAmount = toNano('0.5');

  // const jobContract = useAsyncInitialize(async () => {
  //     if (!client || !wallet) return;
  //     const jobContract = new JobContract(
  //       Address.parse(contract)
  //     );
  //     return client.open(jobContract) as OpenedContract<JobContract>;
  //   }, [client, wallet]);

  const link = useQuery(['jetton'], async () => {
    let init = await JobContract.init(seller, buyer, dispute_resolver, contractPrice);
    let address = contractAddress(0, init);
    let initStr = base64url(
      beginCell().store(storeStateInit(init)).endCell().toBoc({ idx: false }),
    );
    let deployLink =
      `ton://transfer/` +
      address.toString({ testOnly: true }) +
      '?' +
      qs.stringify({
        text: 'Deploy',
        amount: deployAmount.toString(10),
        init: initStr,
      });
    return deployLink;
  });

  console.log(link.data);

  return {
    walletAddress: wallet,
    link: link.data,
  };
}
