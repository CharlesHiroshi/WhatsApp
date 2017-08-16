import React, { Component } from 'react';
import { ImageBackground, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { 
  modificaAdicionaContatoEmail, 
  adicionaContato 
} from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class AdicionarContato extends Component {
  renderAdicionaContato() {
    if (!this.props.adiciona_contato_sucesso) {
      return (
        <Card>
          <CardSection style={{ flexDirection: 'column', flex: 3 }}>
            <Input 
              value={this.props.adiciona_contato_email}
              label='E-mail : '
              placeholder='email@email.com'
              onChangeText={
                (texto) => this.props.modificaAdicionaContatoEmail(texto)}
            />
            <Text style={{ color: '#FF0000', fontSize: 18 }} >
              {this.props.erro_adicionar_contato}
            </Text>
          </CardSection>
          <CardSection style={{ flexDirection: 'column', flex: 2 }}>
            <Button 
            onPress={() => this.props.adicionaContato(this.props.adiciona_contato_email)}
            >
              Adicionar Contato
            </Button>
          </CardSection>
        </Card>
      );
    } 
    return (
    <Card>
      <CardSection style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ color: '#FFF', fontSize: 18 }} >
          Cadastro realizado com Sucesso!
        </Text>
      </CardSection>
    </Card>
    );
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        { this.renderAdicionaContato() }
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    erro_adicionar_contato: state.AppReducer.erro_adicionar_contato,
    adiciona_contato_sucesso: state.AppReducer.adiciona_contato_sucesso
  }
);

export default connect(mapStateToProps, { 
  modificaAdicionaContatoEmail,
  adicionaContato
})(AdicionarContato);


// Aula 257 - 
// Adicionando Contatos do Usuário - Parte 8 - Tratando Fluxo de Sucesso
