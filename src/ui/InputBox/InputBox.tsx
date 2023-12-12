import React from 'react';
import styles from './inputbox.module.css';
import { combineClass } from '@util';
// noinspection ES6PreferShortImport
import { InputBoxProps } from './InputBox.types';

export default function InputBox({
  children,
  className,
  ...props
}: InputBoxProps) {
  return (
    <div
      className={combineClass('prx-inputbox', styles.core, className)}
      {...props}
    >
      {children}
    </div>
  );
}
