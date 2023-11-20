import { css } from 'styled-components';

export function transition(...args: string[]) {
  const output = args.map((v) => `${v} 250ms cubic-bezier(0.4, 0, 0.2, 1)`);
  return output.join(', ');
}

export function boxShadow(hover = false) {
  return hover
    ? css`
        box-shadow:
          0 3px 1px -2px rgba(0, 0, 0, 0.3),
          0 2px 2px 0 rgba(0, 0, 0, 0.21),
          0 1px 5px 0 rgba(0, 0, 0, 0.18);
      `
    : css`
        box-shadow:
          0 3px 1px -2px rgba(0, 0, 0, 0.2),
          0 2px 2px 0 rgba(0, 0, 0, 0.14),
          0 1px 5px 0 rgba(0, 0, 0, 0.12);
      `;
}
