import { HTMLSpanAttribute } from '@util/types';

export interface BadgeProps extends Omit<HTMLSpanAttribute, 'content'> {
  content?: number | string;
  varient?: 'standard' | 'dot';
  show?: boolean;
  max?: number;
  vertical?: 'top' | 'bottom';
  horizontal?: 'right' | 'left';
}
