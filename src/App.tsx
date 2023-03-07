import './App.css';
import { TonConnectButton, useTonWallet } from '@tonconnect/ui-react';
import { Counter } from './components/Counter';
import { Jetton } from './components/Jetton';
import { TransferTon } from './components/TransferTon';
import styled from 'styled-components';
import { Button, FlexBoxCol, FlexBoxRow } from './components/styled/styled';
import { useTonConnect } from './hooks/useTonConnect';
import { CHAIN } from '@tonconnect/protocol';
import '@twa-dev/sdk';
import { StyledApp } from './main';
import JobLists from './pages/JobLists';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Navigator from './Navigator';
import AuthScreen from './components/UI/AuthScreen';

export const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  const { wallet, connected } = useTonConnect();
  // const wallet = useTonWallet()

  console.log(wallet, connected);
  return (
    <>
      <Navigator />
    </>
  );
}

export default App;
