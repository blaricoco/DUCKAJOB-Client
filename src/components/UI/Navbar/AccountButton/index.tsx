import { Menu, Button, Text } from '@mantine/core';
import React from 'react';
import { useTonConnectUI } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';
import { Link, useNavigate } from 'react-router-dom';
import { useTonConnect } from '../../../../hooks/useTonConnect';

import { toUserFriendlyAddress } from '@tonconnect/sdk';
import { AuthContext } from '../../../../contexts/authContext';
import { authUser } from '../../../../utils/auth';

function AccountButton() {
  const router = useNavigate();

  const { user } = React.useContext(AuthContext);

  const [tonConnectUI] = useTonConnectUI();
  const { wallet, connected } = useTonConnect();
  const [normalWallet, setNormalWallet] = React.useState('');

  React.useEffect(() => {
    if (wallet) {
      setNormalWallet(toUserFriendlyAddress(wallet));
      // handleAuth(wallet);
    }
  }, [wallet]);

  const handleAuth = (wallet: string) => {
    authUser(wallet, (res: any) => res.code === 1 && router(res.redirectUrl));
    // res.code === 1 && router(res.redirectUrl)
  };

  return (
    <>
      {tonConnectUI.connected ? (
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Button>
              {normalWallet.slice(0, 4)}...{normalWallet.slice(-4)}
            </Button>
          </Menu.Target>

          <Menu.Dropdown>
            <Link to="/jobs">
              <Menu.Item>job search</Menu.Item>
            </Link>

            <Link to={`/user/${user?._id}`}>
              <Menu.Item>profile</Menu.Item>
            </Link>

            <Link to="/create-job">
              <Menu.Item>create a job</Menu.Item>
            </Link>

            {/* <Menu.Item>archive</Menu.Item> */}

            <Menu.Divider />
            <Menu.Item onClick={() => tonConnectUI.disconnect()} color="red">
              Sign out
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <Button onClick={() => tonConnectUI.connectWallet()}>Connect wallet</Button>
      )}
    </>
  );
}

export default AccountButton;
