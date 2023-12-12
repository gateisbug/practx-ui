import React, {
  ChangeEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import './textarea.module.css';
import { combineClass } from '@src/utils';
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
  // noinspection TypeScriptValidateTypes
  const ref = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>(value ?? '');

  const _onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (onChange) {
      // noinspection TypeScriptValidateTypes
      onChange(e);
    }
  };

  const autoResizing = useCallback(() => {
    const textarea = ref.current;
    if (!textarea) return;

    textarea.style.height = 'auto';
    const newHeight = maxHeight
      ? Math.min(textarea.scrollHeight, maxHeight)
      : textarea.scrollHeight;

    textarea.style.height = newHeight + 'px';
  }, [autoResize, ref, maxHeight]);

  useEffect(() => {
    if (!autoResize) return;

    autoResizing();
  }, [text]);

  const overflowY = (() => {
    if (!ref.current || !maxHeight) return 'hidden';

    return text.length > 0 && ref.current?.scrollHeight > maxHeight
      ? 'auto'
      : 'hidden';
  })();

  // noinspection JSAnnotator,TypeScriptValidateTypes
  return (
    <prx-textarea
      ref={ref}
      class={combineClass('prx-textarea', className)}
      onChange={_onChange}
      style={{
        overflowY,
        ...style,
      }}
      value={value}
      {...props}
    ></prx-textarea>
  );
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      ['prx-textarea']: Omit<TextareaProps, 'className'> & { class: string };
    }
  }
}

class PrxTextarea extends HTMLTextAreaElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}

customElements.define('prx-textarea', PrxTextarea, { extends: 'textarea' });
