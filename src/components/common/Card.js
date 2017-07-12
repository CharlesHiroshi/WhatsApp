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
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
  }
};

export { Card };
