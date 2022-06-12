import React from 'react';
import {View, Text} from 'react-native';
import {MyButton} from '../components/MyButton';
import {useAuth} from '../contexts/Auth';
import {styles} from './styles';

export function SettingsScreen() {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <MyButton
        onPress={signOut}
        style={{backgroundColor: 'red'}}
        title="Logout"
      />
    </View>
  );
}
