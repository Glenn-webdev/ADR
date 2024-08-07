import React from 'react';
import { View, Text, Button, StyleSheet,Image } from 'react-native';
import RoundedButton from '../mycomponent/roundedButtons';
import SwiperContainer from '../mycomponent/swiperContainer';
import styles from '../style/styles';
import { Linking } from 'react-native';
import { TouchableOpacity } from 'react-native';

//
export default function ContactScreen({ navigation }) {
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Care Companion</Text>
      
    
      <Text style={styles.servicesTitle}>Contact Us</Text> 
      <View style={styles.swipableContainer}>
      
      
      <SwiperContainer>
        <View style={styles.serviceCard}>    
        

        
          <Text style={styles.serviceTitle}>We love to hear from you!</Text>
          

          <View style={styles.serviceDescription}>
            <View>
              <TouchableOpacity onPress={() => Linking.openURL('tel:+1234567890')} style={styles.contactLink}>
                <Image
                 style={styles.icon}
                 source={require('../images/phoneicon.png')} // Replace with your image path
                />
                <Text style={styles.contactDetails}>+1 (234) 567-890</Text>
             </TouchableOpacity>
          </View>
         </View>       
       
      
        </View>
        <View style={styles.serviceCard}>
          <View style={styles.serviceDescription}>
     
        <TouchableOpacity onPress={() => Linking.openURL('mailto:info@carecompanion')} style={styles.contactLink}>
        
         
            <Text style={styles.contactDetails}>info@carecompanion</Text>
            </TouchableOpacity>
            </View>
         </View>
        
       
         
       
   






        <View style={styles.serviceCard}>
          
          <Text style={styles.serviceDescription}>
            Even though every care situation is unique, Right at Home caregivers
            are not only trained to be prepared, but they’re trained to help you
            cope as well, so you can feel comfortable knowing your loved ones
            are in good hands.
          </Text>
        </View>
      </SwiperContainer>
      </View>
    





      <View>
      <RoundedButton title="Back" onPress={() => navigation.navigate('Home')} />
        
        </View>      
    </View>
   


  );
}
// Styling
const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#90EE90',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 16,
  },
  contactsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  contactCard: {
    width: '30%',
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 16,
  },
  contactTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  contactInfo: {
    fontSize: 14,
  },
});
