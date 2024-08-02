import { View,Button } from "react-native";


export default function Contact({navigation}) {
    return (
        <View>
            <Button title ="Home" onPress={() => navigation.navigate('Home')}/>
            
        </View>
    )
    
};
