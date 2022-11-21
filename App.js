
import * as React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import TabBawah from "./pages/BottomTab";
import Details from "./pages/Details";
import News from "./pages/News";
import DetailNews from "./pages/DetailNews";
import ProfileScreen from './pages/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen name="CERC" component={TabBawah}/>
        <Stack.Screen name="HomeNews" component={News}/>
        <Stack.Screen name="Details" component={Details}/>
        <Stack.Screen name="News Detail" component={DetailNews}/>
        <Stack.Screen name="About Me" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};