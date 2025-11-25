
import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'bordered' | 'elevated';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className,
  ...props
}) => {
  const baseClasses = clsx(
    'rounded-xl bg-white dark:bg-slate-800 transition-all duration-300',
    {
      // default: soft shadow, subtle border
      'border border-slate-200 dark:border-slate-700 shadow-sm':
        variant === 'default',
      // bordered: minimal, flat
      'border border-slate-200 dark:border-slate-700 bg-transparent':
        variant === 'bordered',
      // elevated: stronger lift (for hero/stats)
      'border border-slate-200/50 dark:border-slate-700/50 shadow-md hover:shadow-lg':
        variant === 'elevated',
    },
    className
  );

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};