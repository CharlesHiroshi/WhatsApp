import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={[styles.containerStyle, props.style]}>
    {props.children}
  </View>
);

const styles = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'center'
  }
};

export { CardSection };
