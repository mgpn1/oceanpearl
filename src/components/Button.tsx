
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className, 
  ...props 
}: ButtonProps) => {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white btn-hover-effect";
  
  const variantClasses = {
    primary: "bg-corinthia-gold hover:bg-corinthia-darkgold text-white border-none",
    outline: "bg-transparent border border-corinthia-gold text-corinthia-gold hover:bg-corinthia-gold hover:text-white",
    ghost: "bg-transparent hover:bg-corinthia-cream text-corinthia-darkgold border-none"
  };
  
  const sizeClasses = {
    sm: "h-8 px-3 text-xs",
    md: "h-10 px-5 py-2 text-sm",
    lg: "h-12 px-8 py-3"
  };
  
  return (
    <button 
      className={cn(
        baseClasses, 
        variantClasses[variant],
        sizeClasses[size],
        className
      )} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
