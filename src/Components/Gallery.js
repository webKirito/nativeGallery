import React, {Component} from 'react'
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'

const {img , container} = styles

const galleryItem = (url) => {
    return (
        <Image source={url} style = {img}></Image>
    )
}

export default Gallery = ({props}) => {
    return (
      <ScrollView style={container}>
        {
            this.props.imageArr.map(item => {<galleryItem url = {item.url} key = {item.id}/>})
        }
      </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
  },
  img : {
    width: 20,
    height: 20
  },
});