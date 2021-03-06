import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ShoeList from './components/ShoeList';
import Home from './components/Main';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
     
      <Stack.Navigator initialRouteName="Home">
    
    <Stack.Screen  name="Home" component={Home} options={{ headerShown: false }} />
       <Stack.Screen name="ShoeList" component={ShoeList} options={{ headerShown: false }}/>
      
    </Stack.Navigator>
    </NavigationContainer>
  );
}

