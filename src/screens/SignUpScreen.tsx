import React from 'react';
import {useForm} from 'react-hook-form';
import {Button, StyleSheet, View} from 'react-native';
import CustomInput from '../components/CustomInput';
import {EMAIL_REGEX} from '../utils/regex';

export default function SignUp() {
  const {control, handleSubmit, watch} =
    useForm(/*{
    defaultValues: {email: 'mikaelrsimoes19@gmail.com', password: '123'},
  }*/);

  const handleSignUpUser = ({email, password}: any) => {
    console.log(email, password);
  };

  const pwd = watch('password');

  return (
    <View style={styles.container}>
      <CustomInput
        style={styles.inputs}
        placeholder="email"
        formControl={control}
        name="email"
        rules={{
          required: 'Email is required',
          pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
        }}
      />

      <CustomInput
        style={styles.inputs}
        placeholder="password"
        formControl={control}
        name="password"
        secureTextEntry={true}
        rules={{required: 'Password is required'}}
      />

      <CustomInput
        style={styles.inputs}
        placeholder="Confirm Password"
        formControl={control}
        name="repeat-password"
        secureTextEntry={true}
        rules={{
          validate: (value: string) =>
            value === pwd || 'Password does not match',
        }}
      />

      <Button title="click me!" onPress={handleSubmit(handleSignUpUser)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: '10%',
  },
  inputs: {
    width: '100%',
    margin: 10,
  },
});
