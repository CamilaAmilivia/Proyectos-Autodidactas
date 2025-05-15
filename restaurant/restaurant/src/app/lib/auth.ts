export const login = (username: string, password: string): User | null => {
    // si se ingresa con admin  le da el rol admin
    if (username === 'admin' && password === 'admin') {
         return { username, role: 'admin' };
    }
    else{
        return { username, role: 'user' };
    }
}


//Lee el usuario del localStorage y lo convierte a objeto.Si no hay, devuelve null.

export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};


//Guarda el usuario en localStorage (para recordar la sesión).
export const saveUser = (user: User) => {
  localStorage.setItem('user', JSON.stringify(user));
};