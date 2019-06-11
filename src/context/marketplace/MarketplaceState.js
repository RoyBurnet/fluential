import React, { useReducer } from 'react';
import MarketplaceContext from './MarketplaceContext';
import MarketplaceReducer from './MarketplaceReducer';

const MarketplaceState = props => {
  const initialState = {
    campaigns: [
      {
        id: 1,
        title: 'This is title 1',
        subtitle: 'This is subtitle 1'
      },
      {
        id: 2,
        title: 'This is title 2',
        subtitle: 'This is subtitle 2'
      },
      {
        id: 3,
        title: 'This is title 3',
        subtitle: 'This is subtitle 3'
      }
    ]
  };

  const [state] = useReducer(MarketplaceReducer, initialState);

  return (
    <MarketplaceContext.Provider
      value={{
        campaigns: state.campaigns
      }}
    >
      {props.children}
    </MarketplaceContext.Provider>
  );
};

export default MarketplaceState;
