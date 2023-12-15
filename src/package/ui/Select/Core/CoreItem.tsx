import React, { MouseEvent } from 'react';
import styles from '../style.module.css';
import { combineClass } from '@util';
import { ItemProps } from '../types';

export default function Item({
  children,
  className,
  value,
  setValue,
  onClick,
  ...props
}: ItemProps) {
  const _onClick = (e: MouseEvent<HTMLDivElement>) => {
    if (value !== undefined && setValue !== undefined) setValue(value);
    // noinspection TypeScriptValidateTypes
    onClick && onClick(e);
  };

  return (
    <div
      className={combineClass('prx-select-item', styles.item, className)}
      onClick={_onClick}
      {...props}
    >
      {children}
    </div>
  );
}
