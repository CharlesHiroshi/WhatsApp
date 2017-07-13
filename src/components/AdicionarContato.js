import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

const bg = require('../imgs/bg.png');

class AdicionarContato extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <CardSection 
            style={{ flexDirection: 'column', flex: 3 }}
          >
            <Input 
              label='E-mail : '
              placeholder='email@email.com'
              onChangeText={() => false}
            />
          </CardSection>
          <CardSection style={{ flexDirection: 'column', flex: 2 }}>
            <Button 
              onPress={() => false}
            >
              Adicionar Contato
            </Button>
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

export default AdicionarContato;
