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
    <div className={combineClass('prx-input-box', styles.box, className)}>
      <input
        className={combineClass('prx-input', styles.root)}
        type={type as string}
        data-full={full}
        {...props}
      />
    </div>
  );
}
