import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className='bg-slate-200 flex justify-between items-center p-10'>
        <span>© 2024 <a href="" className='text-blue-500 px-1'>Adhav Pavan</a></span>
        <div className="space-x-6">
        <a href="#" className="text-blue-500">Contact</a>
        <a href="#" className="text-blue-500">About Me</a>
        <a href="#" className="text-blue-500">Adhav Pavan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
