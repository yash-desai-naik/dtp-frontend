import create from 'zustand';

const useStore = create((set) => ({
  isAuthenticated: false,
  login: () => set({ isAuthenticated: true }),
}));

export default useStore;
