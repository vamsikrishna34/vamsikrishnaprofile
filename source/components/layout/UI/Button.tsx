
import React from 'react';
import clsx from 'clsx';

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: 'button' | 'a';
  href?: string;
}

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ 
  children, 
  variant = 'primary',
  size = 'md',
  className,
  as: Tag = 'button',
  href,
  ...props 
}, ref) => {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    {
      // Size
      'px-3 py-1.5 text-sm': size === 'sm',
      'px-4 py-2 text-sm': size === 'md',
      'px-6 py-3 text-base': size === 'lg',

      // Variant — Primary
      'bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm hover:shadow focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600':
        variant === 'primary',

      // Variant — Outline
      'border border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus:ring-slate-500 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700':
        variant === 'outline',

      // Variant — Ghost
      'text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700':
        variant === 'ghost',
    },
    className
  );

  // Handle link vs button
  if (Tag === 'a') {
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        className={baseClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';