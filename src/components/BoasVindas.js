import React, { Component } from 'react';
import { ImageBackground, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection, Header, Button } from './common';

const bg = require('../imgs/bg.png');
const logo = require('../imgs/logo.png');

class BoasVindas extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <Header 
            style={{ flex: 1 }}
            headerText='Seja Bem Vindo' 
          />
          <CardSection
          style={{ flexDirection: 'column', flex: 2, alignItems: 'center' }}
          >
            <Image source={logo} />
          </CardSection>
          <CardSection
          style={{ flexDirection: 'column', flex: 2, alignItems: 'center' }}
          >
            <Button onPress={() => Actions.formLogin()}>
              Fazer Login
            </Button>
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

export default BoasVindas;
