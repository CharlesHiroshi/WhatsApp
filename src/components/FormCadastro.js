import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { 
  modificaEmail, 
  modificaSenha, 
  modificaNome,
  cadastraUsuario
} from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

class FormCadastro extends Component {
  _cadastraUsuario() {
    const { nome, email, senha } = this.props;
    this.props.cadastraUsuario({ nome, email, senha });
  }

  renderBtnCadastrar() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={() => this._cadastraUsuario()}>
        Cadastrar
      </Button>
    );
  }

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
            <Text style={{ color: '#FF0000', fontSize: 18 }} >
              {this.props.erroCadastro}
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: 'column', flex: 2 }}>
            {this.renderBtnCadastrar()}
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
    senha: state.AutenticacaoReducer.senha,
    erroCadastro: state.AutenticacaoReducer.erroCadastro,
    loading: state.AutenticacaoReducer.loading
  }
);

export default connect(mapStateToProps, { 
  modificaEmail, 
  modificaSenha, 
  modificaNome,
  cadastraUsuario 
})(FormCadastro);
