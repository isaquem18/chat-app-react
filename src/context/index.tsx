import { ReactNode } from 'react';
import { AuthProvider } from './auth';

interface IChildren {
  children: ReactNode;
}

export default function GlobalContext ({ children }: IChildren) {

  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}