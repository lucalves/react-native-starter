import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, View} from 'react-native';
import {MyButton} from '../components/MyButton';
import {styles} from './styles';

export function HomeScreen() {
  const navigation = useNavigation();
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <Text
        style={
          (styles.title,
          {
            fontSize: 22,
            textAlign: 'center',
            marginTop: '15%',
          })
        }>
        Essa tela só pode ser acessada por usuários logados.
      </Text>
      <MyButton
        style={{width: '100%'}}
        title="Acessar configurações"
        onPress={navigateToSettings}
      />
      <Text>
        by <Text style={styles.coffText}>Mikkaiser</Text>
      </Text>
    </View>
  );
}
