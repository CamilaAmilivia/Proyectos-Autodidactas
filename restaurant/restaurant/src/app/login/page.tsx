'use client';
import { useState } from 'react';
import { login, saveUser } from '../lib/auth';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = login(username, password);
    if (user) {
      saveUser(user);
      setUser(user);
      router.push('/menus');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl mb-4">Iniciar Sesión</h1>
        <input className="border p-2 w-full mb-2" placeholder="Usuario" value={username} onChange={e => setUsername(e.target.value)} />
        <input className="border p-2 w-full mb-4" placeholder="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">Entrar</button>
      </form>
    </div>
  );
}