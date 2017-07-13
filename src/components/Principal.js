import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Card, Header } from './common';

const bg = require('../imgs/bg.png');

class Principal extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <Header 
            style={{ flex: 1 }}
            headerText='Página Principal'
          />
        </Card>
      </ImageBackground>
    );
  }
}

export default Principal;
