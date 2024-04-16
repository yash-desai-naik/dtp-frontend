// useStore.tsx
import { create } from 'zustand';

interface User {
    email: string;
    password: string;
}

interface AppState {
    isLoggedIn: boolean;
    users: User[];
    login: (email: string, password: string) => void;
    logout: () => void;
}

const useStore = create<AppState>((set) => ({
    isLoggedIn: localStorage.getItem('isLoggedIn') === 'true', // Load from localStorage
    users: [
        { email: 'example1@email.com', password: 'password1' },
        { email: 'example2@email.com', password: 'password2' },
        // Add more users as needed
    ],
    login: (email, password) => {
        // Example authentication logic (replace with your actual authentication logic)
        set((state) => {
            const user = state.users.find((user) => user.email === email && user.password === password);
            if (user) {
                localStorage.setItem('isLoggedIn', 'true'); // Save to localStorage
                return { ...state, isLoggedIn: true };
            } else {
                alert('Invalid email or password');
                return state;
            }
        });
    },
    logout: () => {
        localStorage.removeItem('isLoggedIn'); // Remove from localStorage
        set({ isLoggedIn: false });
    },
}));

export { useStore };
