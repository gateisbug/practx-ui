import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface InputBoxProps extends HTMLDivAttribute {}
