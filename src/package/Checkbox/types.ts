import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLInputAttribute = DetailedHTMLProps<
  HTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface CheckboxProps
  extends Omit<HTMLInputAttribute, 'type' | 'name' | 'disabled' | 'checked'> {
  name?: string;
  multiple?: boolean;
  disabled?: boolean;
  checked?: boolean;
}
