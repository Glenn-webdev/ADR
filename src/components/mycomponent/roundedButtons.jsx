// components/roundedButtons.jsx
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../style/styles'; // Adjust the path to your styles file

const RoundedButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default RoundedButton;
