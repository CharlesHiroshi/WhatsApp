import React from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  Image, 
  StyleSheet, 
  TouchableHighlight 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TabBar } from 'react-native-tab-view';

const contato = require('../imgs/adicionar_contato.png');

export default props => (
  <View style={estilos.containerStyle}>
    <StatusBar />
      <View style={estilos.contentStyle}>
        <View style={estilos.titleViewStyle}>
          <Text style={estilos.titleTextStyle}>
            WhatsApp
          </Text>
        </View>
        <View style={estilos.optionsViewStyle}>
          <View style={estilos.imageViewStyle}>
            <TouchableHighlight
              onPress={() => Actions.adicionarContato()}
              underlayColor={'transparent'}
            >
              <Image source={contato} />
            </TouchableHighlight>
          </View>
          <View style={estilos.sairViewStyle}>
            <Text style={estilos.sairTextStyle} >Sair</Text>
          </View>
        </View>
      </View>
    <TabBar {...props} style={estilos.tabBarMenuStyle} />
  </View>
);

const estilos = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#115E54', 
    elevation: 4, 
    marginBottom: 4
  },
  contentStyle: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingTop: 20
  },
  titleViewStyle: {
    height: 50, 
    justifyContent: 'center'
  },
  titleTextStyle: {
    color: '#FFF', 
    fontSize: 20, 
    marginLeft: 20
  },
  optionsViewStyle: {
    flexDirection: 'row', 
    marginRight: 20
  },
  imageViewStyle: {
    width: 50, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  sairViewStyle: {
    justifyContent: 'center'
  },
  sairTextStyle: {
    fontSize: 20, 
    color: '#FFF'
  },
  tabBarMenuStyle: {
    backgroundColor: '#115E54', 
    elevation: 0
  }
}); 
