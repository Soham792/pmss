export type User = {
    id: string;
    email: string;
    role: 'student' | 'sag' | 'finance';
    name: string;
    avatar?: string;
  };
  
  export type AuthState = {
    user: User | null;
    isLoading: boolean;
    error: string | null;
  };