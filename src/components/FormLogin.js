import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Input, Header, Button, Link } from './common';

class FormLogin extends Component {
  render() {
    return (
      <Card>
        <Header 
          style={{ flex: 1 }}
          headerText='WhatsApp' 
        />
        <CardSection 
          style={{ flexDirection: 'column', flex: 2 }}
        >
          <Input 
            label='E-mail'
            placeholder='email@email.com'
          />
          <Input 
            label='Senha'
            placeholder='Senha'
            secureTextEntry
          />
          <Link onPress={() => false}>
            Ainda não tem cadastro? Cadastre-se.
          </Link>
        </CardSection>
        <CardSection style={{ flexDirection: 'column', flex: 2 }}>
          <Button onPress={() => false}>
            Acessar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default FormLogin;
