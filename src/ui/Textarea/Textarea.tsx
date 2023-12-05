import styles from './textarea.module.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { combineClass } from '@util';
// noinspection ES6PreferShortImport
import { TextareaProps } from './Textarea.types';

export default function Textarea({
  value,
  className,
  maxHeight,
  onChange,
  autoResize = true,
  style,
  ...props
}: TextareaProps) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>(value ?? '');

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    onChange && onChange(e);
  };

  useEffect(() => {
    if (!autoResize) return;

    const textarea = ref.current;
    if (!textarea) return;

    const adjustHeight = () => {
      textarea.style.height = 'auto';
      const newHeight = maxHeight
        ? Math.min(textarea.scrollHeight, maxHeight)
        : textarea.scrollHeight;
      textarea.style.height = newHeight + 'px';
    };

    adjustHeight();
  }, [text, maxHeight]);

  const overflowY = (() => {
    if (!ref.current || !maxHeight) return 'hidden';

    return text.length > 0 && ref.current?.scrollHeight > maxHeight
      ? 'auto'
      : 'hidden';
  })();

  return (
    <textarea
      ref={ref}
      className={combineClass('prx-textarea', styles.core, className)}
      onChange={handleInput}
      style={{
        overflowY,
        ...style,
      }}
      value={value}
      {...props}
    ></textarea>
  );
}