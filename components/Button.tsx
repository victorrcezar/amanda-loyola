import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withIcon?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  withIcon = false,
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 transform hover:-translate-y-1";
  
  const variants = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-brand-600/30 focus:ring-brand-500",
    secondary: "bg-sand-800 hover:bg-sand-900 text-white shadow-lg hover:shadow-sand-800/30 focus:ring-sand-800",
    outline: "bg-transparent border-2 border-brand-600 text-brand-600 hover:bg-brand-50"
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
      {withIcon && <ArrowRight className="ml-2 w-5 h-5" />}
    </button>
  );
};