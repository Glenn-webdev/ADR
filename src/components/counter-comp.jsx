import { useState } from "react"
import { Button, StyleSheet, Text, View } from "react-native"

export default function Counter() {
    const [counter,setCounter]=useState(0);

    const incrementCounter = () => {
        setCounter(counter+1);
    }

    const resetCounter = () => {
        setCounter(0);
    }

   const test =() => {
         setCounter(2);
    
   }        
    
    return (
       <View>
        <Text style={compStyle.fontSize}>Counter:{counter}</Text>
        <Button title="Increment!" onPress={incrementCounter}></Button>
        <Button title="reset" onPress={resetCounter}></Button>
        <Button title="inc 2" onPress={test}></Button>
       </View>
    )
    
};

let compStyle = StyleSheet.create({

    bigTxt: {
        fontSize: 24,
    backgroundColor: '#aaaaaa'
   

    }

   
})


