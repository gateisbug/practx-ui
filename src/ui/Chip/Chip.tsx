import React from 'react';
import './chip.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { ChipProps } from './Chip.types';

export default function Chip({
  vx = 'fill',
  className,
  children,
  ...props
}: ChipProps) {
  return (
    <prx-chip
      class={combineClass('prx-chip', className)}
      data-vx={vx}
      {...props}
    >
      {children}
    </prx-chip>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-chip']: Omit<ChipProps, 'className'> & { class: string };
    }
  }
}

class PrxChip extends HTMLSpanElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-chip', PrxChip, { extends: 'span' });
