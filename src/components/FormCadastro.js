import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class FormCadastro extends Component {
  render() {
    return (
      <Card>
        <CardSection 
          style={{ flexDirection: 'column', flex: 3 }}
        >
          <Input 
            label='Nome'
            placeholder='Nome'
          />
          <Input 
            label='E-mail'
            placeholder='email@email.com'
          />
          <Input 
            label='Senha'
            placeholder='Senha'
            secureTextEntry
          />
        </CardSection>
        <CardSection style={{ flexDirection: 'column', flex: 2 }}>
          <Button onPress={() => false}>
            Cadastrar
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default FormCadastro;
