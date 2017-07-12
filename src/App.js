import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCbPtDrk_eKsXZvmqqQAY3BcSNF4F9QmRc',
    authDomain: 'whatsapp-29f42.firebaseapp.com',
    databaseURL: 'https://whatsapp-29f42.firebaseio.com',
    projectId: 'whatsapp-29f42',
    storageBucket: 'whatsapp-29f42.appspot.com',
    messagingSenderId: '1044473381055'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
