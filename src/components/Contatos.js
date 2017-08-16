import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from './common';
import { contatosUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Contatos extends Component {
  componentWillMount() {
    this.props.contatosUsuarioFetch();
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
  const contatos = _.map(
    state.ListaContatosReducer, 
    (val, uid) => ({ ...val, uid }));
  console.log(contatos);
  return {};
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);
