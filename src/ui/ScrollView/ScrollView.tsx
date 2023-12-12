import React from 'react';
import styles from './scroll.module.css';
import { combineClass } from '@util';
// noinspection ES6PreferShortImport
import { ScrollViewProps } from './ScrollView.types';

export default function ScrollView({
  className,
  children,
  ...props
}: ScrollViewProps) {
  return (
    <div
      className={combineClass('prx-scroll', styles.core, className)}
      {...props}
    >
      {children}
    </div>
  );
}
