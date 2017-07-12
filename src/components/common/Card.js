import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = (props) => (
    <View style={styles.conteinerStyle}>
      {props.children}
    </View>
);

const styles = StyleSheet.create({
  conteinerStyle: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});

export { Card };
