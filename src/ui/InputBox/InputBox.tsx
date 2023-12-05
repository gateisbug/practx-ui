import React from 'react';
import styles from './inputbox.module.css';
// noinspection ES6PreferShortImport
import { InputBoxProps } from './InputBox.types';
import { combineClass } from '@util';

export default function InputBox({
  children,
  className,
  ...props
}: InputBoxProps) {
  return (
    <div
      className={combineClass('prx-inputbox', styles.box, className)}
      {...props}
    >
      {children}
    </div>
  );
}
