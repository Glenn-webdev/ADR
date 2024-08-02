import { Image, StyleSheet, View } from "react-native"


const MyImg = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../images/logo_titans-01.png')} style={styles.image}/>
            <Image source={require('../images/download.jpeg')} style={styles.image}/>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start'
    },
    image: {
        width:100,
        height:100,
         
    }
})

export default MyImg;