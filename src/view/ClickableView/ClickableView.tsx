import React from 'react';
import classnames from 'classnames/bind';
import styles from './clickableview.module.css';

const cx = classnames.bind(styles);

export interface ClickableViewProps {
  onClick?: () => void;
  children?: string;
  classnames?: string;
}

export default function ClickableView({
  children,
  onClick,
  classnames,
}: ClickableViewProps) {
  return (
    <button className={cx('root', classnames)} onClick={onClick}>
      {children}
    </button>
  );
}
