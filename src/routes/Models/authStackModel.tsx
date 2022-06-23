import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type AuthScreenProps = {
  SignIn: undefined;
  Register: undefined;
};

export type AuthNavigationProps = NativeStackNavigationProp<AuthScreenProps>;
