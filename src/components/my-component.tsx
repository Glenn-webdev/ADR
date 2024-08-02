import { StyleSheet, Text, View } from "react-native";

function MyComponent() {

    let x = 1;
    let y = 9;
    return(
      <View>
        <Text style={style.compText}>Adding {x} to {y} will give {x+y}</Text>
      </View>


  
    );
  }

  let style = StyleSheet.create({
    compText: {
        fontSize:20,
        color: 'blue',
        textAlign: 'left'

    },


    container: {
        flex:1,
        justifyContent:'center',
      
      },
      
       
      
        darkMode: {
          backgroundColor:'#e5e5e5'
         
        },
        lightMode: {
      
          backgroundColor: '#000000'
      
        }
      
  });
  
  export default MyComponent;