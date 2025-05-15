'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';
import { getCurrentUser, saveUser } from '../lib/auth';

const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void;
}>({ user: null, setUser: () => {} });

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getCurrentUser();
    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};