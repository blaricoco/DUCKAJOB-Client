import { beginCell, toNano, Address, Cell, fromNano } from "ton";
import { useTonConnect } from "../hooks/useTonConnect";
import { useJobContract, createJobContract } from "../hooks/useJobContract";
import {
  Card,
  FlexBoxCol,
  FlexBoxRow,
  Button,
  Ellipsis,
} from "./styled/styled";



export function Job({contract}: any) {
    const { connected } = useTonConnect();
    const { walletAddress, contractDeliveryTime } = useJobContract(contract);
  
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
            <div>{contractDeliveryTime?.toString() ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            onClick={async () => {
              //mint();
            }}
          >
            Job Contract
          </Button>
        </FlexBoxCol>
      </Card>
    );
  }


  export function CreateJob() {
    const { connected } = useTonConnect();
    const { walletAddress, link } = createJobContract();
  
    return (
      <Card title="Job">
        <FlexBoxCol>
          <h3>CREATE Job</h3>
          <FlexBoxRow>
            
            <Ellipsis>{walletAddress}</Ellipsis>
          </FlexBoxRow>
          <FlexBoxRow>
            Job Link!
            <div>{link?.toString() ?? "Loading..."}</div>
          </FlexBoxRow>
          <Button
            disabled={!connected}
            onClick={async () => {
              //mint();
            }}
          >
            Job Contract
          </Button>
        </FlexBoxCol>
      </Card>
    );
  }