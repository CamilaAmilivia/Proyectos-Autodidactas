'use client';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withRole = (Component: React.FC, requiredRole: 'admin') => {
  return () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) {
        router.push('/login');
      } else if (user.role !== requiredRole) {
        router.push('/menus');
      }
    }, [user]);

    if (!user || user.role !== requiredRole) return <p>Cargando...</p>;
    return <Component />;
  };
};