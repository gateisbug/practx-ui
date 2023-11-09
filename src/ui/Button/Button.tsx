import { ClickableView } from '@view';
import styled, { css } from 'styled-components';

export interface ButtonProps {
  types?: 'contain' | 'outline' | 'text';
}

const containStyle = css`
  background-color: gold;
  color: #000;
`;

const outlineStyle = css`
  background-color: transparent;
  outline: 1px solid gold;
  color: #000;
`;

const textStyle = css`
  color: blue;
`;

const Button = styled(ClickableView)<ButtonProps>`
  ${({ types }) => {
    switch (types) {
      case 'text':
        return textStyle;
      case 'outline':
        return outlineStyle;
      case 'contain':
        return containStyle;
      default:
        return containStyle;
    }
  }}
`;

export default Button;
