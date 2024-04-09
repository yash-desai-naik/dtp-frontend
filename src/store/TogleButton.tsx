import create from 'zustand';

// Create a store hook to manage the state
const useTogleButton = create((set) => ({
  status: 'active',
  toggleStatus: () =>
    set((state: { status: string; }) => ({
      status: state.status === 'active' ? 'deactivated' : 'active',
    })),
}));

export default useTogleButton;
