import React from 'react';
import styles from './button.module.css';
import { combineClass } from '@util';
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
      className={combineClass('prx-button', styles.core, className)}
      data-vx={vx}
      data-full={full}
      {...props}
    >
      {children}
    </button>
  );
}
