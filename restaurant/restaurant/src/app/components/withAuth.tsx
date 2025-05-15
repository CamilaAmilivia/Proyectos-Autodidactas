'use client';
import { useAuth } from './AuthProvider';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const withAuth = (Component: React.FC) => {
  return () => {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
      if (!user) router.push('/login');
    }, [user]);

    if (!user) return <p>Cargando...</p>;
    return <Component />;
  };
};