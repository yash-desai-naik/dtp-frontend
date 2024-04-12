// authStore.js (Zustand store)
import create from 'zustand';

const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: (email, password) => {
    // Mock login logic, replace with your actual login logic
    const isAuthenticated = email === 'user@example.com' && password === 'password';
    set({ isAuthenticated });
  },
}));

export default useAuthStore;
