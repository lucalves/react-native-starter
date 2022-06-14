import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import RecoverPasswordScreen from '../screens/RecoverPasswordScreen';

export type ScreenProps = {
  LoginScreen: undefined,
  RecoverPasswordScreen: undefined,
}

const Stack = createNativeStackNavigator<ScreenProps>();

function App() {
  return (
      <Stack.Navigator>
      <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="RecoverPasswordScreen" component={RecoverPasswordScreen} options={{ title: 'Recover Password' }}/>
      </Stack.Navigator>
  );
}

export default App;