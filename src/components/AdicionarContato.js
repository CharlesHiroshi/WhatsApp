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
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
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
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => (
  {
    adiciona_contato_email: state.AppReducer.adiciona_contato_email,
    erro_adicionar_contato: state.AppReducer.erro_adicionar_contato,
  }
);

export default connect(mapStateToProps, { 
  modificaAdicionaContatoEmail,
  adicionaContato
})(AdicionarContato);
