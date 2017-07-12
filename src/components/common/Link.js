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
    backgroundColor: '#FFF',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FFF',
    marginLeft: 5,
    marginRight: 5,
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007AFF',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  }
};

export { Link };
