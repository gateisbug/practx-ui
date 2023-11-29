import { DetailedHTMLProps, HTMLAttributes, InputHTMLAttributes } from 'react';

type HTMLInputAttribute = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputTypes = 'text' | 'password' | 'url' | 'email' | 'date' | 'number';

export interface InputProps
  extends Omit<HTMLInputAttribute, 'type' | 'children'> {
  type?: InputTypes;
}

type HTMLDivAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface InputBoxProps extends HTMLDivAttribute {}
