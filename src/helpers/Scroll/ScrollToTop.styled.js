import styled from 'styled-components';

const ScrollBtn = styled.button`
  position: fixed;
  bottom: 24px;
  right: 16px;
  margin-left: auto;
  width: 40px;
  height: 40px;
  color: rgba(42, 42, 42, 0.5);
  background-color: transparent;
  border: 0;
  cursor: pointer;
  outline: none;

  opacity: 0.5;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    opacity: 1;
  }
  & > svg {
    fill: #3f93b9;
  }
`;

export { ScrollBtn };
