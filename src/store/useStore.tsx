import { create } from 'zustand'

interface AppState {
    isLoggedIn: boolean;
    login: (email: string, password: string) => void;
    logout: () => void;
}

const useStore = create<AppState>((set) => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Load from localStorage
    login: (email, password) => {
        // Example authentication logic (replace with your actual authentication logic)
        if (email === 'example@email.com' && password === 'password') {
            set({ isLoggedIn: true });
            localStorage.setItem('isLoggedIn', 'true'); // Save to localStorage
        } else {
            alert('Invalid email or password');
        }
    },
    logout: () => {
        set({ isLoggedIn: false });
        localStorage.removeItem('isLoggedIn'); // Remove from localStorage
    }
}));

export { useStore };