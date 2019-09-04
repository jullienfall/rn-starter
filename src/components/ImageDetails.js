import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ images }) => {
  return <View>
    {images.map(image => (
      <View key={image.title}>
        <Image style={styles.image} source={{uri: `${image.url}`}} />
        <Text styles={styles.text}>{image.title}</Text>
      </View>
    ))}
  </View>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
  },
  image: {
    width: 150,
    height: 100,
  }
});

export default ImageDetail;
