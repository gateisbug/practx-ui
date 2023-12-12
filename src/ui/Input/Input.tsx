import React from 'react';
import './input.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { InputProps, InputTypes } from './Input.types';

export default function Input({
  type = 'text',
  className,
  ...props
}: InputProps) {
  return (
    <prx-input
      type={type as InputTypes}
      class={combineClass('prx-input', className)}
      {...props}
    />
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-input']: Omit<InputProps, 'className'> & { class: string };
    }
  }
}

class PrxInput extends HTMLInputElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-input', PrxInput, { extends: 'input' });
