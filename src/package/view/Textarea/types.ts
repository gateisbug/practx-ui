import { HTMLTextAreaAttibute } from '@util/types';

export interface TextareaProps extends Omit<HTMLTextAreaAttibute, 'value'> {
  value?: string;
  maxHeight?: number;
  autoResize?: boolean;
}
