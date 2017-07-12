// Import a libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    return (
      <View style={[viewStyles, props.style]}>
        <Text style={textStyles}>{props.headerText}</Text>
      </View>
    );
};

// Styles for the component
const styles = {
  viewStyles: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent' 
  },
  textStyles: {
    color: '#FFF',
    fontSize: 25,
  }
};

// Make the component available to the other parts of the app
export { Header };
