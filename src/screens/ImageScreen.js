import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetail from '../components/ImageDetails';

const images = [
  { title: 'Image #1', url: 'https://scx1.b-cdn.net/csz/news/800/2018/europeslostf.jpg'},
  { title: 'Image #2', url: 'https://img2.10bestmedia.com/Images/Photos/231197/p-emerald-bay-winter_54_990x660_201406020159.jpg'},
  { title: 'Image #3', url: 'https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg'},
]

const ImageScreen = () => {
  return <View>
    <Text style={styles.text} >Image Screen:</Text>
    <ImageDetail images={images} />
  </View>
}

const styles = StyleSheet.create({
  text: {
    color: 'red',
    fontSize: 35,
  }
});

export default ImageScreen;
