import React from 'react';
import { 
  View, 
  Text, 
  StatusBar, 
  Image, 
  StyleSheet, 
  TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { TabBar } from 'react-native-tab-view';
import { 
  habilitaInclusaoContato
} from '../actions/AppActions';

const contato = require('../imgs/adicionar_contato.png');

const TabBarMenu = props => (
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
            onPress={() => { 
                  Actions.adicionarContato(); 
                  props.habilitaInclusaoContato();
                }}
                underlayColor={'transparent'}
            >
              <Image source={contato} />
            </TouchableHighlight>
          </View>
          <View style={estilos.sairViewStyle}>
            <TouchableHighlight
            onPress={() => { 
                firebase.auth().signOut().then(() => Actions.formLogin());
              }}
              underlayColor={'transparent'}
            >
              <Text style={estilos.sairTextStyle} >Sair</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    <TabBar {...props} style={estilos.tabBarMenuStyle} />
  </View>
);

export default connect(null, { habilitaInclusaoContato })(TabBarMenu);

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

// Aula 292
// Atualizando variáveis de estado no processo de autenticação
