import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from './common';
import { conversasUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Conversas extends Component {
  componentWillMount() {
    this.props.conversasUsuarioFetch();
    console.log('componentWillMount: ', this.props.conversas);
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps: ', nextProps.conversas);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card />
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const conversas = _.map(
    state.ListaConversasReducer, (val, uid) => ({ ...val, uid }));
  return ({
    conversas,
    // mensagem: state.AppReducer.mensagem
  });
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);

// Aula 287
// Listando conversas - Parte 4 - Recuperando Conversas
