import AuthData from '../interfaces/auth-data.interface';

async function signIn(email: string, password: string): Promise<AuthData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (password === '123456') {
        resolve({
          token:
            'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6Im1pa2FlbHJzaW1vZXMxOUBnbWFpbC5jb20iLCJuYW1lIjoiTWlrYWVlbCBSaWJlaXJvIn0.D7mlU9W6XCGLBRS_TEm9lyBOq6gg--RaRZEOjWXiP4M',
        });
      } else {
        reject(new Error('Credenciais inválidas!'));
      }
    }, 500);
  });
}

export const authService = {signIn};
