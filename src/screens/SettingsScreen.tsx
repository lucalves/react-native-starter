import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {MyButton} from '../components/MyButton';
import {useAuth} from '../contexts/Auth';
import {styles} from './styles';

export function SettingsScreen() {
  const {signOut} = useAuth();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesso a página de configurações</Text>
      <MyButton
        onPress={signOut}
        style={{backgroundColor: '#df0f0f', width: '100%'}}
        title="Sair"
      />
    </View>
  );
}
