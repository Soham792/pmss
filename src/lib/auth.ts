import { create } from 'zustand';
import { AuthState, User } from './types';

interface AuthStore extends AuthState {
  login: (email: string, password: string, role: string) => Promise<void>;
  logout: () => void;
}

export const useAuth = create<AuthStore>((set) => ({
  user: null,
  isLoading: false,
  error: null,
  login: async (email: string, password: string, role: string) => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const user: User = {
        id: '1',
        email,
        role: role as User['role'],
        name: email.split('@')[0],
      };
      set({ user, isLoading: false });
    } catch (error) {
      set({ error: 'Invalid credentials', isLoading: false });
    }
  },
  logout: () => {
    set({ user: null, error: null });
  },
}));