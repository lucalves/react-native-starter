import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthStackScreenProps = {
  SignIn: undefined;
  Register: undefined;
};

export type AuthPropsNavigationStack =
  NativeStackNavigationProp<AuthStackScreenProps>;
