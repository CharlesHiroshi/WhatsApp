import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={[style.containerStyle, props.style]}>
    {props.children}
  </View>
);

const style = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    position: 'relative',
    justifyContent: 'flex-start'
  }
};

export { CardSection };
