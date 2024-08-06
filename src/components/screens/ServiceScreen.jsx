import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
//
const ServiceScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Care Companion</Text>
      </View>

      <View style={styles.nav}>
        <Text style={styles.navLink} onPress={() => navigation.navigate('Home')}>Home</Text>
        <Text style={styles.navLink} onPress={() => navigation.navigate('Services')}>Services</Text>
        <Text style={styles.navLink} onPress={() => navigation.navigate('About')}>About Us</Text>
        <Text style={styles.navLink} onPress={() => navigation.navigate('Register')}>Register</Text>
        <Text style={styles.navLink} onPress={() => navigation.navigate('Login')}>Login</Text>
      </View>

      <View style={styles.mainSection}>
        <View style={styles.introSection}>
          <Text style={styles.title}>Care Companion Services</Text>
          <Text style={styles.description}>
            Exceptional service is something we never compromise on. With decades of experience in providing integral care in their communities, our professional teams will ensure that your safety and well-being come first.
          </Text>
          <Button title="View our pricing" color="#228B22" onPress={() => { /* Navigate to Pricing */ }} />
        </View>

        <View style={styles.servicesSection}>
          <Text style={styles.subTitle}>Services offered</Text>
          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Home Care</Text>
            <Text style={styles.serviceDescription}>
              We provide care and assistance for you to continue to experience life at the highest level of enjoyment and quality and remain in your own home.
            </Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Health Assist</Text>
            <Text style={styles.serviceDescription}>
              People often take for granted the things they do every day, like climbing stairs, taking care of personal hygiene and even just getting out of bed in the morning. But these things can become major challenges as you age.
            </Text>
          </View>

          <View style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Others</Text>
            <Text style={styles.serviceDescription}>
              Even though every care situation is unique, Right at Home caregivers are not only trained to be prepared, but they’re trained to help you cope as well, so you can feel comfortable knowing your loved ones are in good hands. -Specialty Care
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Care Companion</Text>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Services')}>Services</Text>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Pricing')}>Book a Nurse</Text>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Pricing')}>Caregivers</Text>
        </View>
        <View style={styles.footerLinks}>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Contact')}>Contact</Text>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Email')}>Email</Text>
          <Text style={styles.footerLink} onPress={() => navigation.navigate('Phone')}>Phone</Text>
        </View>
        <Text style={styles.newsletterText}>Join our newsletter</Text>
        <View style={styles.newsletterInput}>
          <TextInput placeholder="Enter your email" style={styles.input} />
        </View>
        <Text style={styles.copyRight}>&copy; 2024 Care Companion</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DFF2D8',
  },
  header: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    color: '#228B22',
    fontWeight: 'bold',
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
  },
  navLink: {
    fontSize: 16,
    color: '#228B22',
  },
  mainSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  introSection: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#228B22',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginVertical: 16,
  },
  servicesSection: {
    marginTop: 32,
  },
  subTitle: {
    fontSize: 24,
    color: '#228B22',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  serviceCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
  },
  serviceTitle: {
    fontSize: 20,
    color: '#228B22',
    fontWeight: 'bold',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    marginTop: 8,
  },
  footer: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 24,
    color: '#228B22',
    fontWeight: 'bold',
  },
  footerLinks: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginVertical: 8,
  },
  footerLink: {
    fontSize: 16,
    color: '#228B22',
  },
  newsletterText: {
    fontSize: 16,
    color: '#228B22',
    marginTop: 16,
  },
  newsletterInput: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 8,
  },
  input: {
    fontSize: 16,
    borderColor: '#228B22',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    width: '80%',
  },
  copyRight: {
    fontSize: 14,
    color: '#555555',
    marginTop: 16,
  },
});

export default ServiceScreen;
