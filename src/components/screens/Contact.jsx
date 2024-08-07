import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import RoundedButton from '../mycomponent/roundedButtons';
//
export default function ContactScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Care Companion Contacts</Text>
      <Text style={styles.subtitle}>
        Send us a message, and we’ll be happy to get you the information you need or quickly connect you with your Care Companion Planner.
      </Text>
      <RoundedButton title="View our Pricing" onPress={() => navigation.navigate('Pricing')} />
      <View style={styles.contactsContainer}>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Offices</Text>
          <Text style={styles.contactInfo}>- Calgary, Alberta</Text>
          <Text style={styles.contactInfo}>- Vancouver, British Columbia</Text>
          <Text style={styles.contactInfo}>- Toronto, Ontario</Text>
        </View>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Media</Text>
          <Text style={styles.contactInfo}>facebook: CareCompanion@facebook.com</Text>
          <Text style={styles.contactInfo}>instagram: CareCompanion@instagram.com</Text>
          <Text style={styles.contactInfo}>twitter: CareCompanion@twitter.com</Text>
        </View>
        <View style={styles.contactCard}>
          <Text style={styles.contactTitle}>Phone</Text>
          <Text style={styles.contactInfo}>Landline: +1 587 123456789</Text>
          <Text style={styles.contactInfo}>Landline: +1 587 987654321</Text>
          <Text style={styles.contactInfo}>Email Address: carecompanion@gmail.com</Text>
        </View>
      </View>
      <View>
      <RoundedButton title="Back" onPress={() => navigation.navigate('Home')} />
        
        </View>      
    </View>
   


  );
}
// Styling
const styles = StyleSheet.create({
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
