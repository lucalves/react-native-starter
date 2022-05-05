import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Initial = () => {
  return (
    <View style={styles.container}>
      <Text>Initial Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Initial;
