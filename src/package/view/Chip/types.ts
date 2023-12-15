import { HTMLSpanAttribute } from '@util/types';

type ChipVarientType = 'fill' | 'line' | 'text';

export interface ChipProps extends HTMLSpanAttribute {
  varient?: ChipVarientType;
}
