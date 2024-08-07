import React, { useEffect, useState } from "react";
import { Button, Image, Text, View } from "react-native";
import { Grid } from "react-native-animated-spinkit";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";


//
export default function ContactScreen({navigation}) {
    const [duckData, setDuckdata] = useState(null);
    const [newDuck, setNewDuck] = useState(0);

    async function fetchDuck() {
        try {
            const response = await fetch("https://random-d.uk/api/v2/quack");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setDuckdata(data);
        } catch (error) {
            console.error('Fetch error:', error);
            setDuckdata(null); // Optionally handle error state
        }
    }

    useEffect(() => {
        fetchDuck();
    }, [newDuck]);

    return (
        <>
            <Button styles={styles.btn} title="Home" onPress={() => navigation.navigate('Home')}/>
            
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                
                <Text style={{ fontSize: 24, marginBottom: 20 }}>Random Duck!</Text>
                <Text style={{ fontSize: 16, marginBottom: 20 }}>Fetching random duck image from an API</Text>
                {duckData ? (
                    <View style={{ alignItems: 'center' }}>


                        <Image source={{ uri: duckData.url }} style={{ width: 300, height: 300, marginBottom: 20 }} />
                        <Text style={{ marginBottom: 20 }}>{JSON.stringify(duckData)}</Text>
                        <Button title="New Duck" onPress={() => setNewDuck(prev => prev + 1)} />
                    </View>
                ) : (
                    <View style={{ alignItems: 'center' }}>
                        <Grid></Grid>
                        <Image
                            source={require('../images/spinner.gif')} // Update with the path to your local GIF
                            style={{ width: 100, height: 100, marginBottom: 20 }} />
                        <Text>Loading...</Text>
                    </View>
                )}
            </SafeAreaView></>
    );
}


const styles = StyleSheet.create({
    btn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });