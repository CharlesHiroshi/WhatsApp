import React, { Component } from 'react';
import { ImageBackground, ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from './common';
import { contatosUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Contatos extends Component {
  componentWillMount() {
    this.props.contatosUsuarioFetch();
    this.criaFonteDeDados(this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    this.criaFonteDeDados(nextProps.contatos);
  }

  criaFonteDeDados(contatos) {
    const ds = new ListView.DataSource({ 
      rowHasChanged: (r1, r2) => r1 !== r2 
    });
    this.fonteDeDados = ds.cloneWithRows(contatos);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <ListView
            enableEmptySections
            dataSource={this.fonteDeDados}
            renderRow={data => (
              <View
                style={{ 
                flex: 1, 
                padding: 20, 
                borderBottomWidth: 1, 
                borderColor: '#CCC' }} 
              >
                <Text style={{ fontSize: 25 }} >{data.nome}</Text>
                <Text style={{ fontSize: 18 }} >{data.email}</Text>
              </View>
            )}
          />
        </Card>
      </ImageBackground>
    );
  }
}

const mapStateToProps = state => {
  const contatos = _.map(
    state.ListaContatosReducer, 
    (val, uid) => ({ ...val, uid }));
  return { contatos };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);

// Aula 268
// Listando contatos - parte 10 - Melhorando o Visual
