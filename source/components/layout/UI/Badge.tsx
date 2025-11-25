
import React from 'react';
import clsx from 'clsx';

type BadgeVariant = 'default' | 'subtle' | 'outline';
type BadgeSize = 'sm' | 'md';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'inline-flex items-center justify-center font-mono font-medium rounded-md transition-colors',
    {
      // Size
      'px-2 py-1 text-xs': size === 'sm',
      'px-3 py-1.5 text-sm': size === 'md',
      
      // Variant
      'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300': variant === 'default',
      'bg-slate-100 text-slate-700 dark:bg-slate-700/50 dark:text-slate-300': variant === 'subtle',
      'border border-slate-300 text-slate-700 dark:border-slate-600 dark:text-slate-300': variant === 'outline',
    },
    className
  );

  return (
    <span className={baseClasses} {...props}>
      {children}
    </span>
  );
};