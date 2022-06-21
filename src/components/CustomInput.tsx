import React from 'react';
import {StyleSheet, Text, TextInput, TextInputProps} from 'react-native';
import {Control, Controller, RegisterOptions} from 'react-hook-form';
interface Props extends TextInputProps {
  formControl: Control<any>;
  name: string;
  rules: RegisterOptions;
}

export default function CustomInput({
  formControl,
  name,
  rules = {},
  ...rest
}: Props) {
  return (
    <Controller
      control={formControl}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
        <>
          <TextInput
            {...rest}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            style={[
              styles.inputs,
              {borderColor: error ? 'red' : 'transparent', borderWidth: 1},
            ]}
          />
          {error && (
            <Text
              style={{alignSelf: 'stretch', color: 'red', marginVertical: 10}}>
              Error: {error?.message || 'Error'}
            </Text>
          )}
        </>
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputs: {
    backgroundColor: 'white',
    width: '100%',
    color: 'darkgrey',
    padding: 10,
  },
});
