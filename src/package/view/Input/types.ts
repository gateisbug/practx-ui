import { HTMLInputAttribute } from '@util/types';

export type InputTypes =
  | 'text'
  | 'password'
  | 'url'
  | 'email'
  | 'date'
  | 'number';

export interface InputProps
  extends Omit<HTMLInputAttribute, 'type' | 'children'> {
  type?: InputTypes;
}
