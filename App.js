import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import InitialScreen from './src/screens/Initial';
import { VideoScreen } from './src/screens/VideoScreen';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Click here to advance"
        onPress={() => navigation.navigate('Initial')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Initial" component={InitialScreen} />
        <Stack.Screen name="VideoScreen" component={VideoScreen} />
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



const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1f1f1f',
    card: '#440040',
    text: '#fff',
  },
  
};
