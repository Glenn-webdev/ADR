import React from 'react';

import { Text, View,Button,SafeAreaView,TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function Register({navigation}) {


   
        const [name, onChangeName] = React.useState('First Name');
        const [last, onChangeLast] = React.useState('Last Name');

        const [number, onChangeNumber] = React.useState('Number'); 
        const [email, onChangeEmail] = React.useState('yourname@Email');
    
      

    return (
     <>
           
                <Text>Register Here</Text>
                <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
      />

    <TextInput
        style={styles.input}
        onChangeText={onChangeLast}
        value={last}
      />

<TextInput
        style={styles.input}
        onChangeText={onChangeLast}
        value={last}
      />

    <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
      />



      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
    </SafeAreaView>
        <Button title="Submit" onPress={() => navigation.navigate('Home')}/>

        </>
    )
    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 26,
      },
      input: {
        height: 40,
        width: '100%',
        marginBottom: 10,
        paddingHorizontal: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
      },
    });
