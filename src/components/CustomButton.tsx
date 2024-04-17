import React from 'react';

interface CustomButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  cls?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, cls, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${cls ?? "bg-blue-700 hover:bg-blue-400 hover:text-white text-white font-bold py-2 px-4 rounded transition-colors duration-300"}`}
      style={{ whiteSpace: 'nowrap' }} // Added style to prevent text wrapping
    >
      <span>{text}</span>
    </div>
  );
};

export default CustomButton;
