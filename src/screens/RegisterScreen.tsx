import React, {useState} from 'react';
import {Alert, Image, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {MyTextInput} from '../components/MyTextInput';
import {styles} from './styles';

export function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [socialReason, setSocialReason] = useState('');

  const handleRequestRegister = () => {
    Alert.alert('A Register was requested');
  };

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image
        resizeMode="contain"
        source={require('../assets/logo.png')}
        style={{width: 100, height: 100, marginVertical: 20}}
      />
      <MyTextInput
        placeholder="Social Reason"
        value={socialReason}
        onChangeText={setSocialReason}
      />
      <MyTextInput
        placeholder="CNPJ"
        keyboardType="numeric"
        value={email}
        onChangeText={setEmail}
      />
      <MyTextInput placeholder="Email" value={cnpj} onChangeText={setCnpj} />
      <MyButton title="Require" onPress={handleRequestRegister} />
    </View>
  );
}
