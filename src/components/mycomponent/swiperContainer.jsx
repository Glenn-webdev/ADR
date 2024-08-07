// components/SwiperContainer.jsx
import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet } from 'react-native';

const SwiperContainer = ({ children }) => {
  return (
    <Swiper
      loop={false}
      showsPagination={true}
      dotStyle={myStyles.dot}
      activeDotStyle={myStyles.activeDot}
      paginationStyle={myStyles.pagination}
    >
      {children}
    </Swiper>
  );
};

const myStyles = StyleSheet.create({
  dot: {
    backgroundColor: '#bbb',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeDot: {
    backgroundColor: '#007BFF',
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  pagination: {
    bottom: 10,
  },
});

export default SwiperContainer;
