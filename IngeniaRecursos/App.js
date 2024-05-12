import React from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './src/screens/WelcomeScreen';
import Recursos from './src/screens/recursos';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ title: 'Bienvenida' }}
        />
        <Stack.Screen 
          name="recursos" 
          component={Recursos} 
          options={{ title: 'Recursos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
