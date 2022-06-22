import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {MyButtonLink} from '../components/MyButtonLink';
import {MyTextInput} from '../components/MyTextInput';
import {useAuth} from '../contexts/Auth';
import {styles} from './styles';

export function SignInScreen() {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image
        resizeMode="contain"
        source={require('../assets/logo.png')}
        style={{width: 100, height: 100, marginVertical: 20}}
      />
      <MyTextInput placeholder="e-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton title="Login" onPress={() => signIn(email, password)} />
      <MyButtonLink title="Esqueci minha senha" />
    </View>
  );
}
