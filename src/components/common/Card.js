import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
    <View style={styles.conteinerStyle}>
      {props.children}
    </View>
);

const styles = {
  conteinerStyle: {
    flex: 1,
    elevation: 1,
    padding: 10,
    backgroundColor: '#FFF'
  }
};

export { Card };
