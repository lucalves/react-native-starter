import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import AuthData from '../../interfaces/auth-data.interface';
import {authService} from '../../services/auth.service';
import {loadAuthFromAsyncStorage} from '../../utils/async-storage.utils';
import {decodeJwtToken} from '../../utils/jwt.utils';
import {AuthContext} from '../Auth';

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({children}: AuthProviderProps) => {
  const [authData, setAuth] = useState<AuthData>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    loadAuthFromAsyncStorage(setAuth, setLoading);
  }, []);

  async function signIn(email: string, password: string): Promise<AuthData> {
    try {
      const auth = await authService.signIn(email, password);
      setAuth(auth);
      const userDecodedData = decodeJwtToken(auth.token);

      AsyncStorage.setItem('@UserData', JSON.stringify(userDecodedData));
      AsyncStorage.setItem('@AccessToken', JSON.stringify(auth.token));

      return auth;
    } catch (error: any) {
      Alert.alert(error.message, 'Credenciais inválidas!');
      throw error;
    }
  }

  async function signOut(): Promise<void> {
    setAuth(undefined);
    AsyncStorage.removeItem('@UserData');
    AsyncStorage.removeItem('@AccessToken');
    return;
  }

  return (
    <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  );
};
