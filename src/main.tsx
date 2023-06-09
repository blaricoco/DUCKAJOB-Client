import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TonConnectUIProvider } from '@tonconnect/ui-react';
import ReactDOM from 'react-dom/client';
import App, { AppContainer } from './App';
import './index.css';
import JobLists from './pages/JobLists';
import styled from 'styled-components';
import { AuthContextProvider } from './contexts/authContext';

// this manifest is used temporarily for development purposes
const manifestUrl = 'https://duckajob.com/tonconnect-manifest.json';
// const manifestUrl = 'https://duckajob.com/tonconnect-manifest.json';

const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
});

export const StyledApp = styled.div`
  background-color: #fff;
  min-height: 100vh;
  width: 100%;
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TonConnectUIProvider manifestUrl={manifestUrl}>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <StyledApp>
          {/* <JobLists /> */}
          <App />
        </StyledApp>
      </AuthContextProvider>
    </QueryClientProvider>
  </TonConnectUIProvider>,
);
