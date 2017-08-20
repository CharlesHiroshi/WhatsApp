import React, { Component } from 'react';
import { 
  ImageBackground, 
  ListView, 
  View, 
  Text, 
  TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from './common';
import { conversasUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Conversas extends Component {
  componentWillMount() {
    this.props.conversasUsuarioFetch();
    this.criaFonteDeDados(this.props.conversas);
    console.log('componentWillMount: ', this.props.conversas);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.conversas);
    console.log('componentWillReceiveProps: ', nextProps.conversas);
  }

  criaFonteDeDados(conversas) {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });
    this.dataSource = ds.cloneWithRows(conversas);
  }

  renderRow(conversa) {
    return (
      <View><Text>{conversa.nome}</Text></View>
      // <TouchableHighlight
      //   underlayColor='transparent'
      //   onPress={() => Actions.conversa({ 
      //     title: contato.nome,
      //     contatoNome: contato.nome, 
      //     contatoEmail: contato.email 
      //   })}
      // >
      //   <View
      //     style={{ 
      //     flex: 1, 
      //     padding: 20, 
      //     borderBottomWidth: 1, 
      //     borderColor: '#CCC' }}
      //   >
      //     <Text style={{ fontSize: 25 }} >{contato.nome}</Text>
      //     <Text style={{ fontSize: 18 }} >{contato.email}</Text>
      //   </View>
      // </TouchableHighlight>
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

// Aula 288
// Listando conversas - Parte 5 - Exibindo Conversas
