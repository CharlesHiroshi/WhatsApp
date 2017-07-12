import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Header, Button, Link } from './common';
import { modificaEmail, modificaSenha } from '../actions/AutenticacaoActions';

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
            value={this.props.email}
            label='E-mail'
            placeholder='email@email.com'
            onChangeText={(texto) => this.props.modificaEmail(texto)}
          />
          <Input 
            value={this.props.senha}
            label='Senha'
            placeholder='Senha'
            onChangeText={(texto) => this.props.modificaSenha(texto)}
            secureTextEntry
          />
          <Link onPress={() => Actions.formCadastro()}>
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

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha
  }
);

export default connect(mapStateToProps, { modificaEmail, modificaSenha })(FormLogin);
