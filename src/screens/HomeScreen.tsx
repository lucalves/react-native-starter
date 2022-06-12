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
      <Text style={styles.title}>
        This screen only can be accessed by authorized users
      </Text>
      <MyButton title="Go to settings" onPress={navigateToSettings} />
      <Text>
        by <Text style={styles.coffText}>Mikkaiser</Text>
      </Text>
    </View>
  );
}
