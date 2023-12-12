import React from 'react';
import './button.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { ButtonProps } from './Button.types';

export default function Button({
  vx = 'fill',
  full = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <prx-button
      class={combineClass('prx-button', className)}
      data-vx={vx}
      data-full={full}
      {...props}
    >
      {children}
    </prx-button>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-button']: Omit<ButtonProps, 'className'> & { class: string };
    }
  }
}

class PrxButton extends HTMLButtonElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-button', PrxButton, { extends: 'button' });
