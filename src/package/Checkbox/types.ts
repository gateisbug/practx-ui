import { HTMLInputAttribute } from '@util/types';

export interface CheckboxProps
  extends Omit<HTMLInputAttribute, 'type' | 'name' | 'disabled' | 'checked'> {
  name?: string;
  multiple?: boolean;
  disabled?: boolean;
  checked?: boolean;
}
