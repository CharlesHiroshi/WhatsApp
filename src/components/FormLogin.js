import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Header, Button, Link } from './common';

class FormLogin extends Component {
  render() {
    console.log(this.props);
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
          />
          <Input 
            value={this.props.senha}
            label='Senha'
            placeholder='Senha'
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

export default connect(mapStateToProps, null)(FormLogin);
