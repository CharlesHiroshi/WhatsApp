import React, { Component } from 'react';
import { ImageBackground, ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Card } from './common';
import { contatosUsuarioFetch } from '../actions/AppActions';

const bg = require('../imgs/bg.png');

class Contatos extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { fonteDeDados: ds.cloneWithRows([
      'Registro 1',
      'Registro 2',
      'Registro 3',
      'Registro 4',
    ]) };
  }

  componentWillMount() {
    this.props.contatosUsuarioFetch();
    console.log('Recuperado via Props: ', this.props.contatos);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Recuperado via Props após update: ', nextProps.contatos);
  }

  render() {
    return (
      <ImageBackground style={{ flex: 1 }} source={bg}>
        <Card>
          <ListView
            dataSource={this.state.fonteDeDados}
            renderRow={data => <View><Text>{data}</Text></View>}
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
  console.log(contatos);
  return { contatos };
};

export default connect(mapStateToProps, { contatosUsuarioFetch })(Contatos);

// Aula 266
// Listando contatos - parte 8 - ComponentWillReceiveProps

