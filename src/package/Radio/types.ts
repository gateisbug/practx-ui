import { HTMLInputAttribute } from '@util/types';

export interface RadioProps
  extends Omit<HTMLInputAttribute, 'type' | 'name' | 'disabled' | 'checked'> {
  name?: string;
  disabled?: boolean;
  checked?: boolean;
}
