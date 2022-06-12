import AsyncStorage from '@react-native-async-storage/async-storage';
import {ImageBackgroundBase} from 'react-native';
import AuthData from '../interfaces/auth-data.interface';

export const loadAuthFromAsyncStorage = async (
  setAuth: Function,
  setLoading: Function,
): Promise<void> => {
  const auth: string | null = await AsyncStorage.getItem('@AuthData');

  if (auth) {
    setAuth(JSON.parse(auth) as AuthData);
  }

  setLoading(false);
};
