import React, { useState } from 'react';
import styles from '../style.module.css';
import { combineClass } from '@util';
import { FormProps, SelectValueType } from '../types';

export default function Form({ children, className, ...props }: FormProps) {
  const openState = useState(false);
  const valueState = useState<SelectValueType>(null);

  const render = children ? children(openState[1], valueState) : null;

  return (
    <div
      className={combineClass('prx-select-form', styles.form, className)}
      {...props}
      data-open={openState[0]}
    >
      {render}
    </div>
  );
}
