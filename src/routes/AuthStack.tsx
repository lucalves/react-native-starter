import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import {RegisterScreen} from '../screens/RegisterScreen';
import {AuthStackScreenProps} from './Models/authStackModel';

const Stack = createNativeStackNavigator<AuthStackScreenProps>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignInScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
