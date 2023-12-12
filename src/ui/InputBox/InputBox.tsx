import React from 'react';
import './inputbox.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { InputBoxProps } from './InputBox.types';

export default function InputBox({
  children,
  className,
  ...props
}: InputBoxProps) {
  return (
    <prx-inputbox class={combineClass('prx-inputbox', className)} {...props}>
      {children}
    </prx-inputbox>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-inputbox']: Omit<InputBoxProps, 'className'> & { class: string };
    }
  }
}

class PrxInputBox extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-inputbox', PrxInputBox, { extends: 'div' });
