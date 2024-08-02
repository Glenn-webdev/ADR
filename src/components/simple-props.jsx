import { Text, View } from "react-native";

export default function CompWithProps({fname,age,email}) {

    return(
        <View>

            <Text>{fname}</Text>
            <Text>{age}</Text>
            <Text>{email}</Text>
            

        </View>
    )
    
};
