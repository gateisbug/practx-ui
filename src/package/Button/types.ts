import { HTMLButtonAttrbute } from '@util/types';

type ButtonVarientType = 'fill' | 'line' | 'text';

export interface ButtonProps extends HTMLButtonAttrbute {
  varient?: ButtonVarientType;
  fullWidth?: boolean;
}
