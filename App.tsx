import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AboutScreen from "./src/components/screens/AboutScreen";

import Home from "./src/components/screens/Home";
import Contact from "./src/components/screens/Contact";
import Register from "./src/components/screens/Register";
import PricingScreen from "./src/components/screens/PricingScreen";



const Stack = createNativeStackNavigator();

export default function App() : React.JSX.Element {



  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home}></Stack.Screen>
        <Stack.Screen name = 'About' component={AboutScreen}></Stack.Screen>
        <Stack.Screen name = 'Contact' component={Contact}></Stack.Screen>
        <Stack.Screen name = 'Register' component={Register}></Stack.Screen>
        <Stack.Screen name = 'Pricing' component={PricingScreen}></Stack.Screen>
       
      </Stack.Navigator>

    </NavigationContainer>

  )
  
};
