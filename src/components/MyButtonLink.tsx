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
export function MyButtonLink({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#0089c9',
    fontSize: 16,
    textAlign: 'center',
  },
  button: {},
});
