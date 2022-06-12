/* eslint-disable react/display-name */
import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {AuthProvider} from './src/contexts/providers/auth.provider';
import Router from './src/routes/Router';

export default () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};
