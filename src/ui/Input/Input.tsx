import React from 'react';
import styles from './input.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { InputProps } from './Input.types';

export default function Input({
  type = 'text',
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type as React.HTMLInputTypeAttribute}
      className={combineClass('prx-input', styles.core, className)}
      {...props}
    />
  );
}
