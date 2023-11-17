import styled from 'styled-components';

const ButtonView = styled.button`
  display: inline-flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-content: center;
  user-select: none;

  padding: 0.75rem 1rem;
  border-radius: 0.25rem;
  box-sizing: border-box;

  cursor: pointer;
  transition:
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:disabled {
    cursor: pointer;
  }
`;

export default ButtonView;
