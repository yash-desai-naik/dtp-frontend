// CustomButton.tsx
import React from 'react';
import { Button } from './ui/button';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  cls?: string;
}

const CustomButton = React.forwardRef<HTMLButtonElement, CustomButtonProps>(({ text, cls, onClick }, ref) => {
  return (
    <Button
      ref={ref}
      onClick={onClick}
      variant="outline"
      className={cls ?? "bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-1 rounded px-5 transition-colors duration-300"}
    >
      <span>{text}</span>
    </Button>
  );
});

export default CustomButton;
