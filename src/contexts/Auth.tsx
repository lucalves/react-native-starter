import {createContext, useContext} from 'react';
import AuthContextData from '../interfaces/auth-context-data.interface';

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
