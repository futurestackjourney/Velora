import { createContext, useState, useContext } from 'react';
// import type { AuthContextType, ChildrenProp } from '../types/types';
import type { AuthContextType, ChildrenProp } from '../types/types';



const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<ChildrenProp> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Mock functions, in a real app these would interact with Firebase
  const login = (email: string, pass: string) => {
    console.log(`Logging in with ${email}`);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const signup = (email: string, pass: string) => {
    console.log(`Signing up with ${email}`);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
