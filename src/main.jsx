import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import BidContextProvider from './context/BidContext.jsx';
import { BrowserRouter as Router} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BidContextProvider>
        <Router>
          <App />
        </Router>
      </BidContextProvider>
    
  </StrictMode>,
);
