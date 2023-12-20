import React, { MouseEvent, useRef } from 'react';
import styles from './style.module.css';
import { combineClass, useScrollBlock } from '@util';
import { ModalProps } from './types';
import { createPortal } from 'react-dom';

export default function Modal({
  open,
  onClose,
  children,
  className,
  ...props
}: ModalProps) {
  const shadowRef = useRef<HTMLDivElement>(null);

  const onClickShadow = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === shadowRef.current) {
      onClose && onClose();
    }
  };

  useScrollBlock(open);

  return open
    ? createPortal(
        <div
          ref={shadowRef}
          className={combineClass('prx-shadow', styles.shadow)}
          onClick={onClickShadow}
        >
          <div
            className={combineClass('prx-modal', styles.core, className)}
            {...props}
          >
            {children}
          </div>
        </div>,
        document.body,
      )
    : null;
}
