import { View, Button, StyleSheet, ImageBackground,Text, Image } from "react-native";

export default function Home({ navigation }) {
    return (
        <ImageBackground 
            source={require("../images/homecare.jpg")} 
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.sloganContainer}>
                    <Image source={require("../images/logo.png")} style={{ width: 100, height: 100 }} />
                    <Text style={styles.textSlogan}>Care Companion</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Button title="Register" onPress={() => navigation.navigate('Register')} />
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1, // Ensures the image covers the entire screen
        resizeMode: '', // Adjust this to 'contain' if you want to fit the image without stretchin
        
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end', // Pushes the button to the bottom
        padding: 20,
    },
    buttonContainer: {
         // Adjust as needed for spacing from the bottom
    },
    textSlogan: {
        fontSize: 45,
        fontWeight: 'bold',
        alignItems: 'center',
        color: 'green',
        
        

       
    },
    sloganContainer: {
   
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top:200,
    },
});
