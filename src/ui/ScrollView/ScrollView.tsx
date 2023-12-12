import React from 'react';
import './scroll.module.css';
import { combineClass } from '@src/utils';
// noinspection ES6PreferShortImport
import { ScrollViewProps } from './ScrollView.types';

export default function ScrollView({
  className,
  children,
  ...props
}: ScrollViewProps) {
  return (
    <prx-scroll class={combineClass('prx-scroll', className)} {...props}>
      {children}
    </prx-scroll>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-scroll']: Omit<ScrollViewProps, 'className'> & { class: string };
    }
  }
}

class PrxScroll extends HTMLDivElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-scroll', PrxScroll, { extends: 'div' });
