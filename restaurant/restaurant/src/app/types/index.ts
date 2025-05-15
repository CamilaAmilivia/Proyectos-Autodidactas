export type UserRole = 'user' | 'admin';

export interface User {
  username: string;
  role: UserRole;
}