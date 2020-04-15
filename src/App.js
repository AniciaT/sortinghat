import React from 'react';
import './App.css';
import { Provider } from  'react-redux';
import { createStore } from  'redux';
import Result from './containers/Result'

function App() {

  const houses = [
    'Serpentard',
    'Griffondor',
    'Serdaigle',
    'Pouffsoufle',
  ];

  const reducer = (state, action) => {
    switch(action.type) {
      case 'UPDATE_CHOICE_WITH_MY_INDEX':
        return {  
          houses,
          selectedHouse:  houses[action.indexSelected]
        }
      default:
        return {  
          houses,
          selectedHouse:  houses[Math.floor(Math.random()  *  4)]
        }
    }
  };

  const store = createStore(reducer);

  return (
    <div className="App">
      <Provider  store={store}>
        <Result  />
      </Provider>
    </div>
  );
}

export default App;
