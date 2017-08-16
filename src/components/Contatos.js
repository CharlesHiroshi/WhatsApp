import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
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

export default connect(null, { contatosUsuarioFetch })(Contatos);
