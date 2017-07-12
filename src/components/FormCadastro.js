import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';

class FormCadastro extends Component {
  render() {
    console.log(this.props);
    return (
      <Card>
        <CardSection 
          style={{ flexDirection: 'column', flex: 3 }}
        >
          <Input 
            value={this.props.nome}
            label='Nome'
            placeholder='Nome'
          />
          <Input 
            value={this.props.email}
            label='E-mail'
            placeholder='email@email.com'
          />
          <Input 
            value={this.props.senha}
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

const mapStateToProps = state => (
  {
    nome: state.AutenticacaoReducer.nome,
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
);

export default connect(mapStateToProps, null)(FormCadastro);

