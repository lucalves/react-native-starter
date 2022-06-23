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
import {AuthNavigationProps} from '../routes/Models/authStackModel';
import {styles} from './styles';

export default function SignInScreen() {
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

  const {navigate} = useNavigation<AuthNavigationProps>();

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <MyModal
        visible={modalVisible}
        closeFunction={handleCloseModal}
        modalText="Please insert here your email"
      />
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
      <View style={styles.linksContainer}>
        <MyButtonLink title="Esqueci minha senha" onPress={handleOpenModal} />
        <MyButtonLink
          title="Solicitar cadastro"
          onPress={() => navigate('Register')}
        />
      </View>
    </View>
  );
}
