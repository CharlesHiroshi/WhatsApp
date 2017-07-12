import React, { Component } from 'react';
import { ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { 
  modificaEmail, 
  modificaSenha, 
  modificaNome 
} from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

class FormCadastro extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <CardSection 
            style={{ flexDirection: 'column', flex: 3 }}
          >
            <Input 
              value={this.props.nome}
              label='Nome : '
              placeholder='Nome'
              onChangeText={(texto) => this.props.modificaNome(texto)}
            />
            <Input 
              value={this.props.email}
              label='E-mail : '
              placeholder='email@email.com'
              onChangeText={(texto) => this.props.modificaEmail(texto)}
            />
            <Input 
              value={this.props.senha}
              label='Senha : '
              placeholder='Senha'
              onChangeText={(texto) => this.props.modificaSenha(texto)}
              secureTextEntry
            />
          </CardSection>
          <CardSection style={{ flexDirection: 'column', flex: 2 }}>
            <Button onPress={() => false}>
              Cadastrar
            </Button>
          </CardSection>
        </Card>
      </ImageBackground>
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

export default connect(mapStateToProps, { 
  modificaEmail, 
  modificaSenha, 
  modificaNome })(FormCadastro)
;
