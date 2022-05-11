import React from 'react';
import { useColorScheme } from 'react-native';
import { View, Button, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { dark, light } from './src/global/style/theme';
import InitialScreen from './src/screens/Initial';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Click to advance with new theme"
        onPress={() => navigation.navigate('Initial')}
      />
    </View>
  );
}

function App() {
  const Stack = createNativeStackNavigator();
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? dark : light}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
