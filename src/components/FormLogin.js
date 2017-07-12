import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Input, Header, Button } from './common';

class FormLogin extends Component {
  render() {
    return (
      <Card>
        <Header headerText='WhatsApp' />
        <CardSection>
          <Input 
            label='E-mail'
            placeholder='email@email.com'
          />
        </CardSection>
        <CardSection>
          <Input 
            label='Senha'
            placeholder='Senha'
            secureTextEntry
          />
        </CardSection>
        <CardSection>
          <Text>Ainda não tem cadastro? Cadastre-se.</Text>
        </CardSection>
        <CardSection>
          <Button onPress={() => false}>
            Acessar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default FormLogin;
