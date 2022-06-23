import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {AuthScreenProps} from './Models/authStackModel';

const Stack = createNativeStackNavigator<AuthScreenProps>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
