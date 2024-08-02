import { View } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";  
export default function Home({navigation}) {



    

    return (

       <View styles={styles.container}>
           <Button title ="About" onPress={() => navigation.navigate('About')} styles={styles.roundedbtn}/>
            <Button title ="Contact" onPress={() => navigation.navigate('Contact')} styles={styles.btn}/> 
            <Button title="Register" onPress={() => navigation.navigate('Register')}/>              
            
       </View>
    )
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        paddingRight: 10,
    },
    roundedbtn: {
       flex: 1,
        alignItems: 'flex-start',
        color: 'red',
        roundedbtn: 10,
    }
})

