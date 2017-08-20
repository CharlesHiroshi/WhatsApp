import React, { Component } from 'react';
import { 
  ImageBackground, 
  ListView, 
  View, 
  Text, 
  TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { Card } from './common';
import { conversasUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Conversas extends Component {
  componentWillMount() {
    this.props.conversasUsuarioFetch();
    this.criaFonteDeDados(this.props.conversas);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.conversas);
  }

  criaFonteDeDados(conversas) {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });
    this.dataSource = ds.cloneWithRows(conversas);
  }

  renderRow(conversa) {
    return (
      <TouchableHighlight
        underlayColor='transparent'
        onPress={() => Actions.conversa({ 
          title: conversa.nome,
          contatoNome: conversa.nome, 
          contatoEmail: conversa.email 
        })}
      >
        <View
          style={{ 
          flex: 1, 
          padding: 20, 
          borderBottomWidth: 1, 
          borderColor: '#CCC' }}
        >
          <Text style={{ fontSize: 25 }} >{conversa.nome}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <ListView 
            enableEmptySections
            dataSource={this.dataSource}
            renderRow={this.renderRow}
          />
        </Card>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const conversas = _.map(
    state.ListaConversasReducer, (val, uid) => ({ ...val, uid }));
  return ({
    conversas,
    // mensagem: state.AppReducer.mensagem
  });
};

export default connect(mapStateToProps, { conversasUsuarioFetch })(Conversas);

// Aula 290
// Listando conversas - Parte 7 - Exibindo Conversas, Retomando Conversas e 
// Navegando entre conversas
