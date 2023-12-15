import { HTMLDivAttribute } from '@util/types';

export interface ModalProps extends HTMLDivAttribute {
  open: boolean;
  onClose?: () => void;
}
