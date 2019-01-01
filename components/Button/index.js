import styled from 'styled-components';

export default styled.a`
  background-color: ${props => props.theme === 'dark' ? '#333': '#fff'};
  font-size: 16px;
  border-radius: 4px;
  color: ${props => props.theme === 'dark' ? '#fff': '#333'};
  appearance: none;
  padding: 16px 24px;
  outline: none;
  margin: 0;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  display: inline-block;
`;