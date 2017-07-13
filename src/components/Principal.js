import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Header, Button, Link } from './common';

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
