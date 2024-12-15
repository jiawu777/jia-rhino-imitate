import { HashRouter } from 'react-router-dom';
import RouterAuth from '@/router/RouterAuth';
import { StatusProvider, GlobalProvider } from '@/store';
import ErrorBoundary from '@/components/ErrorBoundary';

const App = () => {
  return (
    <StatusProvider>
      <ErrorBoundary>
        <GlobalProvider>
          <HashRouter>
            <RouterAuth></RouterAuth>
          </HashRouter>
        </GlobalProvider>
      </ErrorBoundary>
    </StatusProvider>
  );
};

export default App;
