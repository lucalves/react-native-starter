import AuthData from './auth-data.interface';

export default interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<AuthData>;
  signOut: () => Promise<void>;
  loading: boolean;
}
