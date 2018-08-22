import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default Header = () => {
    const {header , headerTxt} = styles
    return (
      <View style={header}>
        <Text style={headerTxt}>Open up App.js to start working on your app!</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTxt : {
      fontSize : 20
  }

});