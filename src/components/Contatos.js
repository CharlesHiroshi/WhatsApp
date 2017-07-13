import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Card } from './common';

const bg = require('../imgs/bg.png');

class Contatos extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card />
      </ImageBackground>
    );
  }
}

export default Contatos;
