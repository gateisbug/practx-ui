import styled from 'styled-components';
export interface ClickableViewProps {
  onClick?: () => void;
  children?: string;
  classnames?: string;
}

const ClickableView = styled.button`
  background-color: transparent;
  color: #000;
`;

export default ClickableView;
