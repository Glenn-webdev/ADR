import { ImageBackground, StyleSheet, View } from 'react-native';
import React from 'react';

export default function WelcomePage() {
  return (
    <ImageBackground 
      style={styles.img} 
      source={require('../images/homecare.jpg')}
    >
      <View style={styles.overlay} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    img: {
        flex: 1,
        resizeMode: 'cover', // Ensures the image covers the entire screen without stretching
        opacity: 0.9, // Adjust opacity to make the image lighter
    },
    overlay: {
        flex: 1,
    },
});
