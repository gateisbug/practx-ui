import View from './Button.view';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  type?: 'contain' | 'outline' | 'text';
  fullWidth?: boolean;
}

const containStyle = css`
  border: none;
  background-color: var(--button-surface, #0073ec);
  color: var(--button-color, #fff);
  //box-shadow:
  //  0 3px 1px -2px rgba(0, 0, 0, 0.2),
  //  0 2px 2px 0 rgba(0, 0, 0, 0.14),
  //  0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:disabled {
    background-color: var(--button-surface-disabled, #3f4759);
    color: var(--button-color, #6f778b);
  }

  &:not(:disabled):hover {
    background-color: var(--button-surface-hover, #004491);
    border-color: var(--button-surface-hover, #004491);
  }
`;

const outlineStyle = css`
  border: 0.0625rem solid var(--button-border, #0073ec);
  background-color: var(--button-surface, #fff);
  color: var(--button-color, #0073ec);
  //box-shadow:
  //  0 3px 1px -2px rgba(0, 0, 0, 0.2),
  //  0 2px 2px 0 rgba(0, 0, 0, 0.14),
  //  0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:disabled {
    border-color: var(--button-border-disabled, #3f4759);
    background-color: var(--button-surface-disabled, #fff);
    color: var(--button-color-disabled, #6f778b);
  }

  &:not(:disabled):hover {
    background-color: var(--button-border-hover, #004491);
    color: var(--button-color-hover, #004491);
  }
`;

const textStyle = css`
  border: none;
  background-color: transparent;
  color: var(--button-color, #0073ec);
  //box-shadow:
  //  0 3px 1px -2px rgba(0, 0, 0, 0.2),
  //  0 2px 2px 0 rgba(0, 0, 0, 0.14),
  //  0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:disabled {
    //background-color: var(--button-surface-disabled, transparent);
    color: var(--button-color-disabled, #6f778b);
  }

  &:not(:disabled):hover {
    //background-color: var(--button-border-hover, #004491);
    color: var(--button-color-hover, #004491);
  }
`;

const Button = styled(View)<ButtonProps>`
  ${({ type }) => {
    switch (type) {
      case 'text':
        return textStyle;
      case 'outline':
        return outlineStyle;
      case 'contain':
      default:
        return containStyle;
    }
  }}
`;
