import React from 'react';
import styles from './chip.module.css';
import { combineClass } from '@util';
// noinspection ES6PreferShortImport
import { ChipProps } from './Chip.types';

export default function Chip({
  vx = 'fill',
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={combineClass('prx-chip', styles.core, className)}
      data-vx={vx}
      {...props}
    >
      {children}
    </span>
  );
}
