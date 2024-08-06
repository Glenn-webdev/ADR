import { Button, Text, View } from "react-native";


//
export default function HomeScreen({navigation}) {
    return (

        <View>
            <Text>
                
                <Button title ="About" onPress={() => navigation.navigate('About')}/>
                <Button title ="Contact" onPress={() => navigation.navigate('Contact')}/>
               <Button title="Home" onPress={() => navigation.navigate('Home')}/>
                    
                
                
                
               
                
              
               
            </Text>
        </View>

    )
    
};
