import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  color: #fff;
  font-size: 24px;
  position: absolute;
  top: 16px;
  left: 16px;
  margin: 0;
  word-spacing: 100vw;
  cursor: pointer;
`;

export default () => (
  <Link href="/">
    <Logo>Dreamer's Church</Logo>
  </Link>
);