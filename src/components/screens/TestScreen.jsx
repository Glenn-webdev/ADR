"use client";




import Counter from '../counter-comp';


import React, { useState } from 'react';
import { Text, View,StyleSheet, Image, Alert, Button, TextInput, Modal, Pressable } from 'react-native';
import MyImg from '../images/img';
import MyComponent from '../my-component';



//
export default function TestScreen() {
    
  let darkModeEnable = true;
  let dynamicStyles = darkModeEnable ? styles.darkMode : styles.lightMode;

  const simpleFunc = () => {
    Alert.alert('Hello world')
  }


  

  const [isModalOpen,setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

 

  return (
    <View style={{...styles.container, ...dynamicStyles}}>
      <Text style={styles.container}>
        
        Hello world!
      </Text>
      <MyComponent></MyComponent>
      <MyImg></MyImg> 

      <Button title='Press me' onPress={simpleFunc}/>
      <Text>Enter Phone number</Text>
      <TextInput style={styles.myCustomInput} placeholder='Enter phone' secureTextEntry={true}/>

      {/*<Button title="Open Modal" onPress={openModal}/>*/}
      <Pressable onPress={openModal} style={({pressed})=> [styles.btn,{backgroundColor:pressed ? 'yellow' :'green'}]}>
        <Text style={{color:'white',fontSize:30}}>Open Modal</Text>
      </Pressable>
       <Modal visible = {isModalOpen} animationType='slide' onRequestClose={closeModal}>
          <View>
            <Text>This is a modal!</Text>
            <Button title='Close Modal' onPress={closeModal}/>
          </View>
      </Modal>

    <Counter></Counter>

     
      
    </View>

    
   
  );
}

