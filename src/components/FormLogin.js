import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { 
  Card, 
  CardSection, 
  Input, 
  Header, 
  Button, 
  Link, 
  Spinner 
} from './common';
import { 
  modificaEmail, 
  modificaSenha, 
  autenticarUsuario 
} from '../actions/AutenticacaoActions';

const bg = require('../imgs/bg.png');

class FormLogin extends Component {
  _autenticarUsuario() {
    const { email, senha } = this.props;
    this.props.autenticarUsuario({ email, senha });
  }

  renderBtnAcessar() {
    if (this.props.loading) {
      return <Spinner size='large' />;
    }
    return (
      <Button onPress={() => this._autenticarUsuario()}>
        Acessar
      </Button>
    );
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
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
            <Link onPress={() => Actions.formCadastro()}>
              Ainda não tem cadastro? Cadastre-se.
            </Link>
            <Text style={{ color: '#FF0000', fontSize: 18 }} >
              {this.props.erroLogin}
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: 'column', flex: 2 }}>
            {this.renderBtnAcessar()}
          </CardSection>
        </Card>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AutenticacaoReducer.email,
    senha: state.AutenticacaoReducer.senha,
    erroLogin: state.AutenticacaoReducer.erroLogin,
    loading: state.AutenticacaoReducer.loading
  }
);

export default connect(mapStateToProps, { 
  modificaEmail, 
  modificaSenha,
  autenticarUsuario 
})(FormLogin);
