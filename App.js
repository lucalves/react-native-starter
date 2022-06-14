import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import AnotherScreen from './src/screens/AnotherScreen';

const Stack = createNativeStackNavigator();
const config = {
  screens: {
    Home: 'home',
    Profile: {
      path: 'profile/:id',
      parse: {
        id: id => `${id}`,
      }
    },
    AnotherScreen: 'another-screen'
  }
}

const linking = {
  prefixes: ['mikkaiser://app'],
  config
}

export default function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AnotherScreen" component={AnotherScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}