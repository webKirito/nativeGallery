import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Header from './src/Components/Header'
import Gallery from './src/Components/Gallery'


export default class App extends Component {
  
  state = {
    imageArr : []
  }

  componentDidMount = async () => {
    const CLIENT_ID = 'cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0'
    try {
      const resp = await fetch(`https://api.unsplash.com/photos/?client_id=${CLIENT_ID}`)
      const data = await resp.json()
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }
  
  render() {
    return (
      <View style={styles.main}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
