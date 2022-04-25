import { createContext, useContext, ReactNode, useState } from 'react';

interface IChildren {
  children: ReactNode;
}

interface IUserInfo {
  userInfo: any;
  setUserInfo: () => void;
}

const AuthContext = createContext<any>(AuthProvider);

export function AuthProvider ({ children }: IChildren) {
  const [ userInfo, setUserInfo ] = useState<IUserInfo>({} as IUserInfo);


  return (
    <AuthContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
};


export function useAuth () {
  const context = useContext(AuthContext);

  return context;
}