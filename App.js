import React from 'react';
import {StateProvider} from './src/provider';
import {AppNavigation} from './src/navigation/AppNavigation';

const App = () => {
  // [Initial state]
  const initialState = {
    globalData: undefined,
  };
  // [Reducer]
  const reducer = (state, action) => {
    switch (action.type) {
      case 'changeData':
        return {
          ...state,
          globalData: action.newGlobalData,
        };
      default:
        return state;
    }
  };

  // ******* [RENDER] *******
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <AppNavigation />
    </StateProvider>
  );
};

export default App;
