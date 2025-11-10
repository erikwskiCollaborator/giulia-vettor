import React from 'react';

type ButtonSize = 'sm' | 'm' | 'l' | 'xl';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  size?: ButtonSize;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  disabled?: boolean;
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  m: 'px-6 py-2.5 text-sm',
  l: 'px-8 py-3 text-sm',
  xl: 'px-10 py-4 text-base',
};

const variantClasses = {
  primary: 'bg-primary text-white border-primary hover:bg-primary/90',
  secondary: 'bg-secondary text-white border-secondary hover:bg-secondary/90',
  outline: 'border-white text-white hover:bg-white hover:text-primary',
};

export default function Button({
  children,
  onClick,
  size = 'l',
  variant = 'outline',
  className = '',
  type = 'button',
  onMouseEnter,
  onMouseLeave,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      disabled={disabled}
      className={`
        rounded-full 
        border-2 
        font-semibold 
        transition-all 
        duration-300
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}

