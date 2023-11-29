import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

type HTMLInputAttribute = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type InputVarientType = 'text' | 'password' | 'email' | 'date' | 'number';

export interface InputProps
  extends Omit<HTMLInputAttribute, 'type' | 'children'> {
  type?: InputVarientType;
  full?: boolean;
}
