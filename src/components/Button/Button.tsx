import styled, { css } from 'styled-components';
import { boxShadow, transition } from '@src/utils';

type ButtonVariantType = 'fill' | 'line' | 'text';

export interface ButtonProps {
  vx?: ButtonVariantType;
  fullWidth?: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  user-select: none;

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;

  cursor: pointer;
  transition: ${transition(
    'background-color',
    'color',
    'border-color',
    'box-shadow',
  )};

  &:disabled {
    cursor: pointer;
  }

  /* variant */
  ${({ vx }: Pick<ButtonProps, 'vx'>) => {
    switch (vx) {
      case 'text':
        return css`
          border: none;
          background-color: transparent;
          color: var(--button-color, ${(props) => props.theme.primary});

          &:disabled {
            color: var(
              --button-color-disabled,
              ${(props) => props.theme.disabled}
            );
          }

          &:not(:disabled):hover {
            color: var(
              --button-color-hover,
              ${(props) => props.theme.onPrimaryHover}
            );
          }
        `;
      case 'line':
        return css`
          border: 0.0625rem solid
            var(--button-border, ${(props) => props.theme.primary});
          background-color: var(--button-surface, transparent);
          color: var(--button-color, ${(props) => props.theme.primary});

          &:disabled {
            border-color: var(
              --button-border-disabled,
              ${(props) => props.theme.onDisabled}
            );
            background-color: var(
              --button-surface-disabled,
              ${(props) => props.theme.onPrimaryText}
            );
            color: var(
              --button-color-disabled,
              ${(props) => props.theme.disabled}
            );
          }

          &:not(:disabled):hover {
            background-color: var(
              --button-border-hover,
              ${(props) => props.theme.onPrimaryHover}
            );
            color: var(
              --button-color-hover,
              ${(props) => props.theme.onPrimaryHover}
            );
          }
        `;
      case 'fill':
      default:
        return css`
          border: none;
          background-color: var(
            --button-surface,
            ${(props) => props.theme.primary}
          );
          color: var(--button-color, ${(props) => props.theme.onPrimaryText});
          ${boxShadow()}

          &:disabled {
            background-color: var(
              --button-surface-disabled,
              ${(props) => props.theme.onDisabled}
            );
            color: var(--button-color, ${(props) => props.theme.disabled});
          }

          &:not(:disabled):hover {
            background-color: var(
              --button-surface-hover,
              ${(props) => props.theme.onPrimaryHover}
            );
            border-color: var(
              --button-surface-hover,
              ${(props) => props.theme.onPrimaryHover}
            );
            ${boxShadow(true)}
          }
        `;
    }
  }}
`;

Button.defaultProps = {
  theme: {
    primary: '#0073ec',
    onPrimaryText: '#fff',
    onPrimaryHover: '#004491',
    disabled: '#6f778b',
    onDisabled: '#3f4759',
  },
};

export default Button;
