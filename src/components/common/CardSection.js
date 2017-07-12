import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => (
  <View style={style.containerStyle}>
    {props.children}
  </View>
);

const style = {
  containerStyle: {
    padding: 5,
    backgroundColor: '#FFF',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
  }
};

export { CardSection };
