import React, { Component } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Card, Header } from './common';

const FirstRoute = () => <View style={[styles.container, { backgroundColor: '#ff4081' }]} />;
const SecondRoute = () => <View style={[styles.container, { backgroundColor: '#673ab7' }]} />;

export default class Principal extends Component {
  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
    ],
  };

  _handleChangeTab = index => this.setState({ index });

  _renderHeader = props => <TabBar {...props} />;

  _renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.container}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
