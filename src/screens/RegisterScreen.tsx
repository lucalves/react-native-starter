import React, {useState} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {MyTextInput} from '../components/MyTextInput';
import {styles} from './styles';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [socialReason, setSocialReason] = useState('');

  const handleRequestRegister = () => {
    Alert.alert('Seu cadastro foi solicitado!');
  };

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image
        resizeMode="contain"
        source={require('../assets/senai-logo.png')}
        style={{width: 300, height: 200}}
      />
      <MyTextInput
        placeholder="Razão Social"
        value={socialReason}
        onChangeText={setSocialReason}
      />
      <MyTextInput
        placeholder="CNPJ"
        keyboardType="numeric"
        value={email}
        onChangeText={setEmail}
      />
      <MyTextInput placeholder="E-mail" value={cnpj} onChangeText={setCnpj} />
      <MyButton
        title="Requisitar"
        style={{width: '100%'}}
        onPress={handleRequestRegister}
      />
    </View>
  );
}
