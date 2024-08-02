import { Text, View } from "react-native";
import { Button } from "react-native";



export default function AboutScreen({navigation}) {
    return (
        <View>
            <Button title ="Home" onPress={() => navigation.navigate('Home')}/>
            
        </View>
    )
    
};
