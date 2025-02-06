import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import React from 'react'

import Home from './screens/home.js';
import SignIn from './screens/signin.js';
import SignUp from './screens/signup.js';

export default function App() {
  const Stack = createStackNavigator();
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}
