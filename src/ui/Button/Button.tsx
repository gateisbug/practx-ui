import React from 'react';
import styles from './button.module.css';
import { combineClass } from '@src/utils';
import { ButtonProps } from './Button.types';

export default function Button({
  vx = 'fill',
  full = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={combineClass(
        'practx-button',
        styles.core,
        styles.custom,
        styles[vx],
        full ? styles.fw : null,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
