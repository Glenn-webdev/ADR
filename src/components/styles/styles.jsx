import { StyleSheet } from "react-native";


const mainStyles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:'center',
      paddingTop: 40,
      fontSize:60,
      textAlign: 'center',
      alignItems:'center',
      color: 'blue'
    
    },
    
     
    
      darkMode: {
        backgroundColor:'#e5e5e5'
       
      },
      lightMode: {
    
        backgroundColor: '#000000'
    
      },
      myCustomImage: {
        width: 200,
        height: 200
      },
    
      myCustomInput: {
        fontSize: 24,
        backgroundColor: '#aaaaaa',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'solid',
        width: 260
      },
      btn: {
        padding:2,
        borderRadius:3
      },
      myCustomText: {
        fontSize: 24
        
      }

    
      
    });