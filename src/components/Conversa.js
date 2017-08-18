import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  View, 
  TextInput, 
  Image, 
  ImageBackground, 
  TouchableHighlight 
} from 'react-native';
import { modificaMensagem, enviarMensagem } from '../actions/AppActions';

const bg = require('../imgs/bg.png');
const btnEnviarMensagem = require('../imgs/enviar_mensagem.png');

class Conversa extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <View style={{ flex: 1, marginTop: 50, padding: 10 }}>
          <View style={{ flex: 1, paddingBottom: 20 }}></View>
          <View style={{ flexDirection: 'row', height: 60 }}>
            <TextInput 
              value={this.props.mensagem}
              onChangeText={texto => this.props.modificaMensagem(texto)}
              style={{ flex: 4, fontSize: 18, backgroundColor: '#FFF' }} 
            />
            <TouchableHighlight 
              onPress={() => this.props.enviarMensagem(this.props.mensagem)} 
              underlayColor='transparent'
            >
                <Image source={btnEnviarMensagem} />
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => ({
    mensagem: state.AppReducer.mensagem
});

export default connect(mapStateToProps, { 
  modificaMensagem, 
  enviarMensagem 
})(Conversa);

// Aula 273
// Iniciando Conversas - Parte 5 - Action Creator enviarMensagem
