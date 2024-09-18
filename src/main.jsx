import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BidContextProvider from './context/BidContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BidContextProvider>
        <App />
      </BidContextProvider>
  </StrictMode>,
);
