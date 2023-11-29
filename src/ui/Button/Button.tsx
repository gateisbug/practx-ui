import React from 'react';
import styles from './button.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
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
        'prx-button',
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
