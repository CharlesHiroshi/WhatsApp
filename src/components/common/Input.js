import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ 
  label, 
  value, 
  onChangeText, 
  placeholder,
  secureTextEntry, 
}) => {
  const { inputStyle, labelStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor='#FFF'
        secureTextEntry={secureTextEntry}
        autoCorrect={false}
        autoCapitalize='none'
        value={value}
        onChangeText={onChangeText}
        style={inputStyle}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 1,
    fontSize: 20,
    lineHeight: 23,
    flex: 3,
  },
  labelStyle: {
    fontSize: 20,
    paddingLeft: 5,
    flex: 1,
  },
  containerStyle: {
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#115E54'
  }
};

export { Input };
