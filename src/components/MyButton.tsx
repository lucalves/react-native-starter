import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}

export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#005193',
    padding: 12,
    width: '50%',
  },
});
