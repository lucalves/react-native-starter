import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import CustomInput from '../components/CustomInput';
import {useNavigation} from '@react-navigation/native';

export default () => {
  const {navigate} = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  console.log(errors);
  const onSignPressed = ({username}: any) => {
    console.log(username);
  };

  return (
    <View style={styles.view}>
      <CustomInput
        rules={{
          required: 'Username is required',
        }}
        placeholder="UserName"
        name="username"
        formControl={control}
        secureTextEntry={false}
      />

      <CustomInput
        rules={{
          required: 'Password is required',
          minLength: {
            value: 3,
            message: 'Password should be minimum 3 characters long',
          },
        }}
        placeholder="Password"
        name="password"
        formControl={control}
        secureTextEntry={true}
      />
      <Button title="Little Button" onPress={handleSubmit(onSignPressed)} />
      <Button title="Sign Up!" onPress={() => navigate('SignUpScreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
    backgroundColor: 'grey',
  },
});
