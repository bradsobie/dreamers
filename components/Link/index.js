import styled from 'styled-components';

export default styled.a`
  transition: opacity 0.15s;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }
`;