import React from 'react';
import { Text, TouchableHighlight } from 'react-native';

const Link = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableHighlight 
      style={buttonStyle}
      onPress={onPress}
    >
      <Text style={textStyle}>{children}</Text>
    </TouchableHighlight>
  );
};

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: 'transparent',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#FFF',
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export { Link };
