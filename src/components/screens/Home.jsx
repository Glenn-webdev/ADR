import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
//
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
      <Button title="View our pricing" onPress={() => {}} />
      <Text style={styles.servicesTitle}>Services offered</Text>
      <View style={styles.servicesContainer}>
        <TouchableOpacity style={styles.serviceCard} onPress={() => toggleServiceVisibility('homeCare')}>
          <Text style={styles.serviceTitle}>Home Care</Text>
          {visibleService === 'homeCare' && (
            <Text style={styles.serviceDescription}>
              We provide care and assistance for you to continue to experience
              life at the highest level of enjoyment and quality and remain in
              your own home.
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard} onPress={() => toggleServiceVisibility('healthAssist')}>
          <Text style={styles.serviceTitle}>Health Assist</Text>
          {visibleService === 'healthAssist' && (
            <Text style={styles.serviceDescription}>
              People often take for granted the things they do every day, like
              climbing stairs, taking care of personal hygiene and even just
              getting out of bed in the morning. But these things can become major
              challenges as you age.
            </Text>
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.serviceCard} onPress={() => toggleServiceVisibility('others')}>
          <Text style={styles.serviceTitle}>Others</Text>
          {visibleService === 'others' && (
            <Text style={styles.serviceDescription}>
              Even though every care situation is unique, Right at Home caregivers
              are not only trained to be prepared, but they’re trained to help you
              cope as well, so you can feel comfortable knowing your loved ones
              are in good hands.
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <View style={styles.spacer} />
      <Button title="Contact Us" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
}

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
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  servicesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  serviceCard: {
    width: 110,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
    marginBottom: 12,
  },
  serviceTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: 14,
  },
  spacer: {
    height: 20,
  },
});
