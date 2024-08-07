import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RoundedButton from '../mycomponent/roundedButtons';
import styles from '../style/styles';
//
export default function RegisterScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [birthDay, setBirthDay] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());

  const handleRegister = () => {
    // Here you can handle the registration process
    alert('User registered!');
  };

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setBirthDay(currentDate.toISOString().split('T')[0]); // Format date as yyyy-mm-dd
    setShowDatePicker(false); // Close the picker after selecting a date
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="First Name"
      />
      <TextInput
        style={styles.input}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.input}
        value={middleName}
        onChangeText={setMiddleName}
        placeholder="Middle Name"
      />
      <TouchableOpacity onPress={() => setShowDatePicker(true)} style={styles.input}>
        <View pointerEvents="none">
          <TextInput
            style={styles.dateInput}
            value={birthDay}
            placeholder="yyyy-mm-dd"
            editable={false}
            placeholderTextColor="gray"
          />
        </View>
      </TouchableOpacity>
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          display="default"
          onChange={onChangeDate}
        />
      )}
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Address"
      />
      <TextInput
        style={styles.input}
        value={contactNumber}
        onChangeText={setContactNumber}
        placeholder="Contact Number"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholder="Confirm Password"
        secureTextEntry
      />
     <View style={styles.bottomContainer}>
        <RoundedButton title="Submit" onPress={() => navigation.navigate('')} />
        
      </View>

    </View>
  );
}


const mystyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#90EE90',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 10,
    width: '80%',
    backgroundColor: '#fff',
  },
  dateInput: {
    height: 40, // Ensure the date input has the same height
    color: 'gray',
    width: '100%', // Ensure it takes the full width of the container
  },
  spacer: {
    height: 20,
  },
});
