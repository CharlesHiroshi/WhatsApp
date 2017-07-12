import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { creatStore } from 'redux';
import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <Provider store={creatStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
