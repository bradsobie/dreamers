import styled from 'styled-components';

export default styled.a`
  background-color: ${props => props.theme === 'dark' ? '#333': '#fff'};
  font-size: 16px;
  color: ${props => props.theme === 'dark' ? '#fff': '#333'};
  appearance: none;
  padding: 16px 24px;
  outline: none;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  display: inline-block;
  cursor: pointer;
  transition: background-color 0.15s;

  &:hover {
    background-color: ${props => props.theme === 'dark' ? '#585858': '#fdfdfd'};
  }
`;