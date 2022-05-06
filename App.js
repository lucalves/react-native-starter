import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './src/screens/Initial';
import MoreVideosScreen from './src/screens/MoreVideos';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Click here to advance" onPress={() => navigation.navigate('Initial')} />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Initial" options={{ headerTitle: '' }} component={InitialScreen} />
        <Stack.Screen name="MoreVideos" component={MoreVideosScreen} />
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
