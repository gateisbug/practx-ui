import React from 'react';
import styles from './input.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { InputProps } from './Input.types';

export default function Input({
  type = 'text',
  className,
  full,
  ...props
}: InputProps) {
  return (
    <div
      className={combineClass(
        'prx-input-root',
        styles.core,
        styles.custom,
        full ? styles.fw : null,
        className,
      )}
    >
      <input type={type as string} {...props} />
    </div>
  );
}
