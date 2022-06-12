import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Text, useWindowDimensions, View} from 'react-native';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {useAuth} from '../contexts/Auth';

const Stack = createNativeStackNavigator();

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

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
