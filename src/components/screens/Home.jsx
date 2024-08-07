// HomeScreen.jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../style/styles';
import RoundedButton from '../mycomponent/roundedButtons'; // Adjust the path to your roundedButtons component
import SwiperContainer from '../mycomponent/swiperContainer';
import { Image } from 'react-native';


export default function HomeScreen({ navigation }) {
  const [visibleService, setVisibleService] = useState(null);

  const toggleServiceVisibility = (service) => {
    setVisibleService(visibleService === service ? null : service);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Care Companion Services</Text>
      <Text style={styles.subtitle}>
        Exceptional service is something we never compromise on. With decades of
        experience in providing integral care in their communities, our
        professional teams will ensure that your safety and well-being come
        first.
      </Text>
      <RoundedButton title="View our Pricing" onPress={() => navigation.navigate('Pricing')} />
      <Text style={styles.servicesTitle}>Services offered</Text>
      


      <View style={styles.swipableContainer}>
      <SwiperContainer>
        <View style={styles.serviceCard}>  
          
        <Image
            source={require('../images/homecare.jpg')} // Replace with your image path
            style={styles.serviceCardImage} />


          <Text style={styles.serviceTitle}>Home Care</Text>
       
       
         
       
            <Text style={styles.serviceDescription}>
          
            We provide care and assistance for you to continue to experience
            life at the highest level of enjoyment and quality and remain in
            your own home.
          </Text>
      
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Health Assist</Text>
          <Text style={styles.serviceDescription}>
            People often take for granted the things they do every day, like
            climbing stairs, taking care of personal hygiene and even just
            getting out of bed in the morning. But these things can become major
            challenges as you age.
          </Text>
        </View>
        <View style={styles.serviceCard}>
          <Text style={styles.serviceTitle}>Others</Text>
          <Text style={styles.serviceDescription}>
            Even though every care situation is unique, Right at Home caregivers
            are not only trained to be prepared, but they’re trained to help you
            cope as well, so you can feel comfortable knowing your loved ones
            are in good hands.
          </Text>
        </View>
      </SwiperContainer>
      </View>


      <View style={styles.bottomContainer}>
        <RoundedButton title="Register" onPress={() => navigation.navigate('Register')} />
        <RoundedButton title="Contact Us" onPress={() => navigation.navigate('Contact')} />
      </View>
    </View>
  );
}
