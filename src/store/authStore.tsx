import create from 'zustand';

const useAuthStore = create((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
}));

export default useAuthStore;
