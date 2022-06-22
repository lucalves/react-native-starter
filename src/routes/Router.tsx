import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, useWindowDimensions, View} from 'react-native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuth} from '../contexts/Auth';

export default function Router() {
  const {authData, loading} = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Carregando aplicativo...</Text>
      </View>
    );
  }

  const config = {
    screens: {
      SignIn: 'signin',
      Register: 'register',
    },
  };

  const linking = {
    prefixes: ['http://www.metrologia.com/app'],
    config,
  };

  return (
    <NavigationContainer linking={linking}>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
