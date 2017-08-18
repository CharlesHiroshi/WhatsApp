import React, { Component } from 'react';
import { 
  View, 
  TextInput, 
  Image, 
  ImageBackground, 
  TouchableHighlight 
} from 'react-native';

const bg = require('../imgs/bg.png');
const enviarMensagem = require('../imgs/enviar_mensagem.png');

class Conversa extends Component {
  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <View style={{ flex: 1, marginTop: 50, padding: 10 }}>
          <View style={{ flex: 1, paddingBottom: 20 }}></View>
          <View style={{ flexDirection: 'row', height: 60 }}>
            <TextInput style={{ flex: 4, fontSize: 18, backgroundColor: '#FFF' }} />
            <TouchableHighlight 
              onPress={() => false} 
              underlayColor='transparent'
            >
                <Image source={enviarMensagem} />
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Conversa;

// Aula 271
// Iniciando Conversas - Parte 3 - Criando a entrada de texto e o botão de envio
