import styled from 'styled-components';
export interface ClickableViewProps {
  onClick?: () => void;
  children?: string;
  classnames?: string;
}

const ClickableView = styled.button`
  display: inline-flex;
  flex-flow: row nowrap;
  box-sizing: border-box;
  justify-content: center;
  user-select: none;
  cursor: pointer;
  //transition:
  //  color 0.12s ease-in-out,
  //  background-color 0.12s ease-in-out,
  //  border-color 0.12s ease-in-out;

  padding: var(--click-padding, rem(8) rem(12));
  border-radius: var(--click-radius, rem(4));

  &:disabled {
    cursor: default;
  }
`;

export default ClickableView;
