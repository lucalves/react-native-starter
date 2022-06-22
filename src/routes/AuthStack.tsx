import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import {RegisterScreen} from '../screens/RegisterScreen';

export type AuthNavigationScreensList = {
  SignIn: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigationScreensList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
