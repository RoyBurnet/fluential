import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Marketplace from './components/pages/Marketplace';

import MarketplaceState from './context/marketplace/MarketplaceState';

import './stylesheets/main.scss';

const App = () => {
  return (
    <MarketplaceState>
      <Router>
        <Navbar />
        <Marketplace />
      </Router>
    </MarketplaceState>
  );
};

export default App;
