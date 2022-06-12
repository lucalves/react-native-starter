import AuthData from '../interfaces/auth-data.interface';

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token: 'fakse-token',
          email,
          name: 'Mikkaiser',
        });
      } else {
        reject(new Error('Invalid credentials'));
      }
    }, 500);
  });
}

export const authService = {signIn};
