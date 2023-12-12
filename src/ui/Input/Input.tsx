import React from 'react';
import styles from './input.module.css';
import { combineClass } from '@util';
// noinspection ES6PreferShortImport
import { InputProps, InputTypes } from './Input.types';

export default function Input({
  type = 'text',
  readOnly = false,
  className,
  ...props
}: InputProps) {
  return (
    <input
      type={type as InputTypes}
      className={combineClass('prx-input', styles.core, className)}
      readOnly={readOnly}
      {...props}
    />
  );
}
