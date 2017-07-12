import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene key='formLogin' component={FormLogin} title='Login' />
          <Scene key='formCadastro' component={FormCadastro} title='Cadastro' />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
