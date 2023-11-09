import React from 'react';
import classnames from 'classnames/bind';
import styles from './button.module.css';
import { ClickableView, ClickableViewProps } from '@view';

const cx = classnames.bind(styles);

export interface ButtonProps extends ClickableViewProps {
  types?: 'contain' | 'outline' | 'text';
}

export default function Button({
  types = 'text',
  classnames,
  children,
  ...props
}: ButtonProps) {
  return (
    <ClickableView classnames={cx('button', types, classnames)} {...props}>
      {children}
    </ClickableView>
  );
}
