import { beginCell, toNano, Address, Cell, fromNano } from 'ton';
import { useTonConnect } from '../hooks/useTonConnect';
import { useJobContract, useJobContractGetters, createContract } from '../hooks/useJobContract';
import { Card, FlexBoxCol, FlexBoxRow, Button, Ellipsis } from './styled/styled';

export function Job({ contract }: any) {
  const { connected } = useTonConnect();
  const { walletAddress, fundingProject } = useJobContract(contract);

  return (
    <Card title="Job">
      <FlexBoxCol>
        <h3>Job</h3>
        <FlexBoxRow>
          Wallet
          <Ellipsis>{walletAddress}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>
          Contract Delivery time
          <div>'Loading...'</div>
        </FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            fundingProject();
          }}>
          Job Contract
        </Button>
      </FlexBoxCol>
    </Card>
  );
}

export function CreateJob() {
  const { connected } = useTonConnect();
  const { walletAddress, createJobLink } = createContract();

  return (
    <Card title="Job">
      <FlexBoxCol>
        <h3>Job Getters</h3>
        <FlexBoxRow>
          <Ellipsis>{walletAddress}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>Job Link!</FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            createJobLink(
              '0:20b93e9d492d6eddc7226650ac1b90a7d5a5674d3f6d556c7e887dae327b11cb',
              '0:b13d78ed10135b0de57511baee57d148449b21e85510dd9fac13e1aa0ebccbea',
            );
          }}>
          Job Contract
        </Button>
      </FlexBoxCol>
    </Card>
  );
}

export function JobGetters() {
  const { connected } = useTonConnect();
  const { walletAddress, getContractStatus, getDeliveryTime, getDeployedTime } =
    useJobContractGetters('EQBODpOBGqdJEIN0wmZnKYxG_dx855ynKhCyy6twXX5ODzYH');

  return (
    <Card title="Job">
      <FlexBoxCol>
        <h3>Job Getters</h3>
        <FlexBoxRow>
          <Ellipsis>{walletAddress}</Ellipsis>
        </FlexBoxRow>
        <FlexBoxRow>Job Link!</FlexBoxRow>
        <Button
          disabled={!connected}
          onClick={async () => {
            getContractStatus();
            getDeliveryTime();
            getDeployedTime();
          }}>
          Job Contract
        </Button>
      </FlexBoxCol>
    </Card>
  );
}
