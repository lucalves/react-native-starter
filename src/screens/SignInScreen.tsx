import {CompositeNavigationProp, useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {MyButtonLink} from '../components/MyButtonLink';
import MyModal from '../components/MyModal';
import {MyTextInput} from '../components/MyTextInput';
import {useAuth} from '../contexts/Auth';
import {AuthNavigationScreensList} from '../routes/AuthStack';
import {styles} from './styles';

export default function SignInScreen({navigation}: any) {
  const {signIn} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleOpenModal = () => {
    setModalVisible(true);
  };

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <MyModal
        visible={modalVisible}
        closeFunction={handleCloseModal}
        modalText="Insira seu e-mail"
      />
      <Image
        resizeMode="contain"
        source={require('../assets/senai-logo.png')}
        style={{width: 280, height: 200, marginVertical: 5}}
      />
      <MyTextInput placeholder="E-mail" value={email} onChangeText={setEmail} />
      <MyTextInput
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <MyButton
        title="Login"
        style={{width: '100%'}}
        onPress={() => signIn(email, password)}
      />
      <View style={styles.linksContainer}>
        <MyButtonLink title="Esqueci minha senha" onPress={handleOpenModal} />
        <MyButtonLink
          title="Solicitar cadastro"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </View>
  );
}
