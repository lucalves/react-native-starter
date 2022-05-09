import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9F2B68',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    padding: 5,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default Button;
