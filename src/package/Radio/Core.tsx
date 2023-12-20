import React from 'react';
import styles from './style.module.css';
import { combineClass } from '@util';
import { RadioProps } from './types';

export default function Radio({
  children,
  name,
  disabled = false,
  checked,
  className,
  style,
  ...props
}: RadioProps) {
  // noinspection TypeScriptValidateTypes
  return (
    <label
      className={combineClass('prx-radio-box', styles.box, className)}
      style={style}
    >
      <input
        type='radio'
        className={combineClass('prx-radio-root', styles.root)}
        name={name}
        disabled={disabled}
        checked={checked}
        {...props}
      />
      <Mark />
      {children}
    </label>
  );
}

function Mark() {
  return (
    <div className={combineClass('prx-radio-mark', styles.mark)}>
      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path
          d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z'
          fill='currentColor'
        />
      </svg>

      <svg focusable='false' aria-hidden='true' viewBox='0 0 24 24'>
        <path
          d='M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z'
          fill='currentColor'
        />
      </svg>
    </div>
  );
}